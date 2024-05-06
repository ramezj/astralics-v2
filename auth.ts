import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import prisma from './lib/database';
const useSecureCookies = !!process.env.NEXT_URL

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
  cookies: {
    sessionToken: {
      name: `${useSecureCookies ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        domain: '.astralics.com',
        secure: useSecureCookies,
      },
    },
  },
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