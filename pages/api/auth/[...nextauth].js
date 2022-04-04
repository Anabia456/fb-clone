import NextAuth from "next-auth"
import FacebookProvider from "../../../node_modules/next-auth/providers/facebook"
// ../../../node_modules/next-auth/providers/facebook

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
})