import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  //   interface Session extends DefaultSession {
  //     user: {
  //       /** The user's first name. */
  //       firstName: string
  //     }
  //   }
}
