import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const nextOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
const handler = NextAuth(nextOptions);

export { handler as GET, handler as POST };
