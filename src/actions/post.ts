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
        return { error: "Invalid data", success: false }
    }
    
    const {userId, ...postData} = parsedPost.data;

    try {
        const post = await prisma.posts.create({
            data: {
                userId,
                ...postData
            }
        })

        revalidatePath("/dashboard");

        return { success: true, data: post }
    } catch (error) {
        return { error: "Failed to create post", success: false}
    }
}