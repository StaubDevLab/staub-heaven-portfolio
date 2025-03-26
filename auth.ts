import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import { prisma } from "@/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google],
    callbacks: {
        authorized: async ({ auth }) => {
            return !!auth;
        },
        async signIn({ profile }) {

            const allowedEmails: string[] = process.env.NEXT_PUBLIC_ALLOWED_EMAILS?.split(",") || [];


            if (profile?.email && allowedEmails.includes(profile.email)) {
                return true;
            }

            return "/unauthorized";
        },
    },
    pages: {
        signIn: "/login",
        signOut: "/",
        error: "/",
    },
});
