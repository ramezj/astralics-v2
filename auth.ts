import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import prisma from './lib/database';
const useSecureCookies = process.env.NEXTAUTH_URL?.startsWith('https://')
const cookiePrefix = useSecureCookies ? '__Secure-' : ''
const hostName = new URL(process.env.NEXTAUTH_URL as string).hostname;
const rootDomain = "localhost:3000";
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: { 
    // change test so user creates new page.
    newUser: '/test'
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret:process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
//   cookies: {
//     sessionToken: {
//         name: `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`,
//         options: {
//             httpOnly: true,
//             sameSite: 'lax',
//             path: '/',
//             secure: useSecureCookies,
//             domain: hostName == 'localhost' ? hostName : '.' + rootDomain // add a . in front so that subdomains are included
//         }
//     },
// },
  trustHost: true,
  callbacks: {
    async jwt({ token }) {
      return token
    },
    async session({ token, session }) {
      if(session.user && token.sub) {
        session.user.id = token.sub
      } return session
    }
  }
})