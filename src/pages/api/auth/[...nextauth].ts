import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    async session({ session, token }) {
      // Persist the OAuth id_token to the session token
      session.id_token = token.id_token;
      return session;
    },
    async jwt({ token, account }) {
      // Persist the OAuth id_token to the jwt token right after signin
      if (account && account.id_token) {
        token.id_token = account.id_token;
      }
      return token;
    },
    // session({ session, user }) {
    //   if (session.user) {
    //     session.user.id = user.id;
    //   }
    //   return session;
    // },
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_ID ? env.GOOGLE_ID : "",
      clientSecret: env.GOOGLE_SECRET ? env.GOOGLE_SECRET : "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  session: { strategy: "jwt" },
  theme: {
    colorScheme: "light",
  },
};

export default NextAuth(authOptions);
