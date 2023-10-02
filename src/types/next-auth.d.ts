import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { GoogleProfile } from "next-auth/providers/google";

declare module "next-auth" {
  /** Extend default session with manually added properties */
  interface Session extends DefaultSession {
    // accessToken?: string;
    user: {
      id: string;
      image: string;
    } & DefaultSession["user"];
  }
  interface Profile extends GoogleProfile {}
}

// declare module "next-auth/jwt" {
//   /** Extend default token with manually added properties */
//   interface JWT {
//     gravatar?: string;
//   }
// }
