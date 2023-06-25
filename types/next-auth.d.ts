import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id?: Types.ObjectId | string
      userId?: string
      firstAndLastName?: string
      postCode?: string
      email?: string
      profileImage?: string
      username?: string
    } & DefaultSession['user']
  }
}
