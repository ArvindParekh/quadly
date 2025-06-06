import { NextAuthOptions, Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import { prisma } from "@/lib/prisma";
import { JWT } from "next-auth/jwt";
import { createUserSchema } from "./zod/user";
import { compare , hash} from "bcrypt";


const getUser = async (email: string) => {
   const user = await prisma.user.findUnique({
      where: {
         email: email,
      }
   })

   return user;
}

export const authOptions = {
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
            },
         },
         async authorize(
            credentials: Record<"email" | "password", string> | undefined
         ) {
            if (!credentials) return null;

            const parsedCredentials = createUserSchema.safeParse(credentials);

            if (!parsedCredentials.success) {
               throw new Error("Invalid credentials");
            }
            else {
               const { email, password } = parsedCredentials.data;
               const user = await getUser(email);

               if (!user) {
                  console.log("user not in db");
                  const hashedPassword = await hash(password, 10);
                  const newUser = await prisma.user.create({
                     data: {
                        email: email,
                        password: hashedPassword,
                     }
                  })

                  return newUser;
               }

               const passwordsMatch = await compare(password, user.password);

               if (passwordsMatch) {
                  return user;
               }
               console.log("Invalid credentials");
               return null;
            }
         },
      }),
      // not supporting signin with username and password
      // Credentials({
      //    type: "credentials",
      //    name: "username",
      //    credentials: {
      //       username: {
      //          label: "Username",
      //          type: "text",
      //          placeholder: "username",
      //       },
      //       password: {
      //          label: "Password",
      //          type: "password",
      //       },
      //    },
      //    async authorize(
      //       credentials: Record<"username" | "password", string> | undefined
      //    ) {
      //       if (!credentials) return null;

      //       const parsedCredentials = z.object({
      //          username: z.string(),
      //          password: z.string(),
      //       }).safeParse(credentials);

      //       if (!parsedCredentials.success) {
      //          throw new Error("Invalid credentials");
      //       }

      //       const { username, password } = parsedCredentials.data;
      //       const user = await prisma.user.findUnique({
      //          where: {
      //             username: username,
      //          }
      //       })

      //       if (!user) {
      //          console.log("user not in db");
      //          return null;
      //       }
            
            
            
      //    },
      // }),
      Google({
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      Facebook({
         clientId: process.env.FACEBOOK_CLIENT_ID as string,
         clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      }),
   ],
   session: {
      strategy: "jwt",
   },
   secret: process.env.NEXTAUTH_SECRET,
   callbacks: {
      async session({ session, token }: { session: Session; token: JWT }) {
         if (session.user) {
            // @ts-ignore
            session.user.id = token.id;
            session.user.name = token.name;
         }
         return session;
      },
      async jwt({ token, user }) {
         if (user) {
            token.id = user.id;
            token.name = user.name;
         } else if (token.email) {
            const dbUser = await prisma.user.findUnique({
               where: { email: token.email as string },
            });
            if (dbUser) {
               token.id = dbUser.id;
               token.name = dbUser.username;
            }
         }
         return token;
      },
      async signIn({ user, account, profile }) {
         if (
            account?.provider === "facebook" ||
            account?.provider === "google"
         ) {
            // check if the user is already in the database
            const existingUser = await prisma.user.findUnique({
               where: {
                  email: profile?.email as string,
               },
            });

            if (!existingUser) {
               await prisma.user.create({
                  data: {
                     email: profile?.email as string,
                     password: "",
                  },
               });
            }
         }
         return true;
      },
      async redirect({ url, baseUrl }) {
         console.log("Redirect URL:", url);
         console.log("Base URL:", baseUrl);
         
         // For sign-out, respect the callbackUrl parameter
         if (url.includes('signout')) {
            const callbackUrl = new URL(url).searchParams.get('callbackUrl');
            return callbackUrl || baseUrl;
         }
         
         // After successful login, always redirect to dashboard
         // This handles the login callback URLs like:
         // http://localhost:3000/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F
         if (url.includes('/login') || url.includes('/api/auth/callback')) {
            return `${baseUrl}/dashboard`;
         }
         
         // Standard NextAuth redirect logic for other cases
         if (url.startsWith('/')) return `${baseUrl}${url}`;
         if (new URL(url).origin === baseUrl) return url;
         
         return baseUrl;
      },
   },
   pages: {
      signIn: "/login",
   },
} satisfies NextAuthOptions;
