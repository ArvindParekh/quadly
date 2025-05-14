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
      return { error: "Invalid data", success: false, message: parsedPost.error.issues[0].message };
   }

   const { userId, content, interests: postTags } = parsedPost.data;
   const postTagsArray = postTags ? postTags.split(",") : [];
   console.log("postTagsArray", postTagsArray);
   try {
      const post = await prisma.post.create({
         data: {
            authorId: userId,
            content,
            postTags: {
               connectOrCreate: postTagsArray.map((tag: string) => ({
                  where: { 
                     tagName: tag,
                  },
                  create: {
                     tagName: tag,
                  },
               })),
            },
         },
      });


      revalidatePath("/dashboard");

      return { success: true, message: "Post created successfully", data: post };
   } catch (error) {
      console.log("error", error);
      return { error: error, success: false, message: "Error creating post" };
   }
};

export const likePost = async (postId: string, userId: string) => {
   try{
      const reaction = await prisma.reaction.upsert({
         where: {
            postId: postId,
         },
         update: {
            likes: {
               increment: 1
            }
         },
         create: {
            postId: postId,
            likes: 1
         }
      })
   } catch (error) {
      console.log("error", error);
      return { error: error, success: false, message: "Error liking post" };
   }
}
