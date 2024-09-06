import { providers } from "./providers";
import { TGetAuthConfig } from "./index";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthConfig } from "next-auth";

export const initAuthConfig = ({ productName, config, db }: TGetAuthConfig) =>
  ({
    ...config,
    // huh any! I know.
    // This is a temporary fix for prisma client.
    // @see https://github.com/prisma/prisma/issues/16117
    adapter: PrismaAdapter(db as any),
    session: {
      strategy: "jwt",
    },
    // pages: {
    //   signIn: '/login',
    // },
    providers: [...providers, ...(config?.providers ?? [])],
    callbacks: {
      async session({ token, session }: any) {
        //console.log({ session, token });
        if (token && session) {
          // @ts-ignore
          session.user.id = token.id;
          // @ts-ignore
          session.user.name = token.name;
          // @ts-ignore
          session.user.email = token.email;
          // @ts-ignore
          session.user.image = token.picture;
        }

        return session;
      },
      async jwt({ token, user }: any) {
        //console.log({ user, token });
        const dbUser = await db.user.findFirst({
          where: {
            email: token.email,
          },
        });

        if (!dbUser) {
          if (user) {
            token.id = user?.id;
          }
          return token;
        }

        return {
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          picture: dbUser.image,
        };
      },
    },
    debug: process.env.NODE_ENV === "development",
  }) as NextAuthConfig;