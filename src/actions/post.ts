"use server";

import { prisma } from "@/lib/prisma";
import { createPostSchema } from "@/lib/zod/posts";
import { revalidatePath } from "next/cache";

export const createPost = async (prevState: any, formData: FormData) => {
   console.log("formData", formData);
   const data = Object.fromEntries(formData);
   // console.log("data", data);
   const parsedPost = createPostSchema.safeParse(data);
   console.log("parsedPost", parsedPost);
   if (!parsedPost.success) {
      return { error: "Invalid data", success: false };
   }

   const { userId, ...postData } = parsedPost.data;

   try {
      const post = await prisma.posts.create({
         data: {
            userId,
            ...postData,
         },
      });

      const { interests } = parsedPost.data;

      if (interests) {
         console.log("interests", interests);
         const interestsArray = interests.split(",");
         interestsArray.map(async (interestName: string) => {
            const interest = await prisma.interests.upsert({
               where: {
                  name: interestName,
               },
               update: {},
               create: {
                  name: interestName,
               },
            });

            await prisma.postInterests.create({
               data: {
                  postId: post.id,
                  interestId: interest.id,
               },
            });
         });
      }

      revalidatePath("/dashboard");

      return { success: true, data: post };
   } catch (error) {
      return { error: error, success: false };
   }
};
