// import { UserModel } from "@/schemas/userSchema"
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { connectToDatabase } from "@/utils/db"
import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
// import User from '@/types/user'
interface UserAuthentication {
  id: string
  username: string
  password: string
}
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise
  adapter: MongoDBAdapter(clientPromise)
  return NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: {
            label: 'Username',
            type: 'text',
            placeholder: 'jsmith',
          },
          password: {
            label: 'Password',
            type: 'password',
          },
        },
        async authorize(credentials): Promise<UserAuthentication | null> {
          // Add logic here to look up the user from the credentials supplied
          //const{password} = req.body
          //password
          console.log('authorize function is running')
          // Check if the user exists in the database
          const database = client.db('borrow')
          const collection = database.collection('users')

          const existingUser: any = await collection.findOne({
            email: credentials?.email,
            password: credentials?.password,
          })
          if (!existingUser) {
            console.log('NO USER')
            //kan ändra return istället?
            return null
          }
          // If all checks pass, return the authenticated user object
          return existingUser
        },
      }),
    ],
    pages: {
      signIn: '/auth/signin',

      signOut: '/auth/signout',
      error: '/auth/error', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
      newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
    },
  })
}