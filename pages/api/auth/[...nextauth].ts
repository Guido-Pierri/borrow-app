import { UserModel } from '@/schemas/userSchema'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { connectToDatabase } from '@/utils/db'
import { NextApiRequest, NextApiResponse } from 'next'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { connectToDatabase } from '@/utils/db'
import { compare } from 'bcryptjs'
import { Types } from 'mongoose'

const facebookClientId = process.env.FACEBOOK_CLIENT_ID || 'id'
const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET || 'secret'
if (!facebookClientId || !facebookClientSecret) {
  throw new Error('Facebook client ID or secret is missing.')
}

const googleClientId = process.env.GOOGLE_ID || 'id'
const googleClientSecret = process.env.GOOGLE_SECRET || 'secret'
if (!googleClientId || !googleClientSecret) {
  throw new Error('Google client ID or secret is missing.')
}

// export const options = {
//   providers: [

//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         username: {
//           label: 'Username',
//           type: 'text',
//           placeholder: 'jsmith',
//         },
//         password: {
//           label: 'Password',
//           type: 'password',
//         },
//       },
//       async authorize(credentials): Promise<UserAuthentication | null> {
//         // Add logic here to look up the user from the credentials supplied
//         console.log('authorize function is running')

//         // Check if the user exists in the database
//         const existingUser = await UserModel.findOne({
//           username: credentials?.username,
//           // password: credentials?.password,
//         })
//         if (existingUser && credentials?.password) {
//           const checkPassword = await compare(
//             credentials?.password,
//             existingUser.password
//           )

//           //Incorrect password - send response
//           if (!checkPassword) {
//             console.log('Password doesnt match')
//           }
//         }
//         //Else send success response

//         console.log('existingUser', existingUser)

//         if (!existingUser) {
//           console.log('NO USER')

//           return null
//         }

//         // If all checks pass, return the authenticated user object
//         return existingUser
//       },
//     }),
//   ],

//   debug: false,

//   callbacks: {
//     async jwt(
//       { token, user }: any // : { //   token: { accessToken: string; tokenName: string; profileImage: string } //   user: { username: string; id: string; profileImage: string } // }
//     ) {
//       // Persist the OAuth access_token to the token right after signin
//       if (user) {
//         token.accessToken = user.id
//         token.tokenName = user.username
//         token.profileImage = user.profileImage
//       }
//       return token
//     },
//     async session(
//       { session, token, user }: any // : { //   session: { user: { id: string; username: string; profileImage: string } } //   token: { accessToken: string; tokenName: string; profileImage: string } //   user: { username: string; id: string } // }
//     ) {
//       // Send properties to the client, like an access_token from a provider.
//       session.user.id = token.accessToken
//       session.user.username = token.tokenName
//       session.user.profileImage = token.profileImage
//       return session
//     },
//   },

//   pages: {
//     signIn: '/auth/signin',
//     signOut: '/auth/signout',
//     error: '/auth/error', // Error code passed in query string as ?error=
//     verifyRequest: '/auth/verify-request', // (used for check email message)
//     newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// }
// export default async function auth(req: NextApiRequest, res: NextApiResponse) {
//   await connectToDatabase()

//   return NextAuth(req, res, options)
// }

type User = typeof UserModel['prototype']
// {
//   _id?: Types.ObjectId | string
//   userId: string
//   firstAndLastName: string
//   postCode: string
//   email: string
//   profileImage?: string
//   username: string
//   password: string
// }

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: {
            label: 'Username',
            type: 'text',
            placeholder: 'jsmith',
          },
          password: {
            label: 'Password',
            type: 'password',
          },
        },
        async authorize(credentials): Promise<User | null> {
          await connectToDatabase()
          // Add logic here to look up the user from the credentials supplied
          console.log('authorize function is running')
          // Check if the user exists in the database
          const user = await UserModel.findOne({
            username: credentials?.username,
            // password: credentials?.password,
          })
          if (user && credentials?.password) {
            console.log(credentials?.password)

            const checkPassword = await compare(
              credentials?.password,
              user.password
            )
            //Incorrect password - send response
            if (!checkPassword) {
              console.log('Password doesnt match')
              return null
            }
            console.log('checkPassword:', checkPassword)
          }
          //Else send success response
          console.log('user', user)

          if (!user) {
            console.log('NO USER')
            return null
          }
          // If all checks pass, return the authenticated user object
          return user
        },
      }),
      GoogleProvider({
        clientId: googleClientId,
        clientSecret: googleClientSecret,
      }),
      // FacebookProvider({
      //   clientId: facebookClientId,
      //   clientSecret: facebookClientSecret,
      //   // redirectUri: 'https://localhost:3000/api/auth/callback/facebook',
      // }),
    ],

    debug: true,

    callbacks: {
      async jwt(
        { token, user }: any // : { //   token: { accessToken: string; tokenName: string; profileImage: string } //   user: { username: string; id: string; profileImage: string } // }
      ) {
        // Persist the OAuth access_token to the token right after signin
        if (user) {
          token.accessToken = user.id
          token.tokenName = user.username
          token.profileImage = user.profileImage
          token.email = user.email
        }
        return token
      },
      async session(
        { session, token, user }: any // : { //   session: { user: { id: string; username: string; profileImage: string } } //   token: { accessToken: string; tokenName: string; profileImage: string } //   user: { username: string; id: string } // }
      ) {
        // Send properties to the client, like an access_token from a provider.
        session.user.id = token.accessToken
        session.user.username = token.tokenName
        session.user.profileImage = token.profileImage
        session.user.email = token.email
        return session
      },
    },
    // session: { strategy: 'jwt' },
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/error', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
      newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    // secret: process.env.NEXTAUTH_SECRET,
  })
}
