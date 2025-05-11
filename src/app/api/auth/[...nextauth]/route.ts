import { prisma } from "@/lib/prisma";
import NextAuth, { RequestInternal, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        Credentials({
            type: "credentials",
            name: "Email",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                }
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined) {

                if (!credentials) return null;

                const { email, password } = credentials;

                const user = await prisma.user.findUnique({
                    where: {
                        email: email,
                        password: password
                    }
                })

                return user;
            }
        }),
        Credentials({
            type: "credentials",
            name: "username",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "username",
                },
                password: {
                    label: "Password",
                    type: "password",
                }
            },
            async authorize(credentials: Record<"username" | "password", string> | undefined) {
                if (!credentials) return null;

                const { username, password } = credentials;
                
                const user = await prisma.user.findUnique({
                    where: {
                        username: username,
                        password: password
                    }
                })

                return user;
            }
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token } : { session: Session, token: JWT }) {
            if (session.user) {
                // @ts-ignore
                session.user.id = token.sub;
            }
            return session; 
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        }
    }
})

export const GET = handler;
export const POST = handler;
