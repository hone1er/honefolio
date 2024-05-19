import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";
import { SiweMessage } from "siwe";
import { parseErc6492Signature } from "viem/experimental";
import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    Credentials({
      name: "Ethereum",
      credentials: {
        message: {
          label: "Message",
          type: "text",
          placeholder: "0x0",
        },
        signature: {
          label: "Signature",
          type: "text",
          placeholder: "0x0",
        },
      },
      async authorize(credentials) {
        console.log("🚀 ~ authorize ~ credentials:", credentials);
        try {
          const siwe = new SiweMessage(
            JSON.parse(credentials?.message ?? "{}") as string,
          );
          console.log("🚀 ~ authorize ~ siwe:", siwe);
          const domain = process.env.DOMAIN;
          console.log("🚀 ~ authorize ~ domain:", domain);
          if (siwe.domain !== domain) {
            return null;
          }
          console.log("🚀 ~ authorize ~ siwe.nonce:", siwe.nonce);

          if (!credentials?.signature) {
            return null;
          }

          console.log(
            "🚀 ~ authorize ~ parseErc6492Signature",
            parseErc6492Signature(credentials?.signature as `0x${string}`),
          );
          await siwe.verify({
            signature: parseErc6492Signature(
              credentials?.signature as `0x${string}`,
            ).signature,
          });

          return {
            id: siwe.address,
          };
        } catch (e) {
          console.log("🚀 ~ authorize ~ e:", e);
          return null;
        }
      },
    }),

    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
