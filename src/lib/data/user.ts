// define resusable user data that can be used in server components and server actions
import { z } from "zod";
import { prisma } from "../prisma";
import { createUserSchema } from "../zod/user";
import { updateUserSchema } from "../zod/user";

// infer type
// type User = z.infer<typeof UserSchema>;
type CreateUser = z.infer<typeof createUserSchema>;
type UpdateUser = z.infer<typeof updateUserSchema>;

export const getUser = async (id: string) => {
   const user = await prisma.user.findUnique({
      where: {
         id: id,
      },
      include: {
         userDetails: {
            include: {
               interests: true,
            },
         },
      },
   });

   if (!user) {
      throw new Error("User not found");
   }

   return user;
};

export const getUserWithPosts = async (id: string) => {
   const user = await prisma.user.findUnique({
      where: {
         id: id,
      },
      include: {
         userDetails: {
            include: {
               interests: true,
               posts: {
                  include: {
                     postTags: true,
                     reaction: true,
                  }
               },
               comments: true,
               asEventOrganizer: true,
            },
         },
      },
   });

   if (!user) {
      throw new Error("User not found");
   }

   return user;
};

export const createUser = async (data: CreateUser): Promise<string> => {
   const user = await prisma.user.create({
      data: {
         email: data.email,
         password: data.password,
      },
   });

   if (user) {
      const userDetails = await prisma.userDetails.create({
         data: {
            name: user.username,
            userId: user.id,
         },
      });
   }

   if (!user) {
      throw new Error("Failed to create user");
   }

   return user.id;
};

export const updateUser = async (
   id: string,
   data: UpdateUser
): Promise<string> => {
   const user = await prisma.user.update({
      where: {
         id: id,
      },
      data: data,
   });

   if (!user) {
      throw new Error("Failed to update user");
   }

   return user.id;
};
