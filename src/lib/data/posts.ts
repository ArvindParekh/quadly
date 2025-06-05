// define resusable post data that can be used in server components and server actions
import { z } from "zod";
import { prisma } from "../prisma";
import { createPostSchema, updatePostSchema } from "../zod/posts";
import { Post, Prisma } from "@/generated/prisma";

    
// infer type

type CreatePost = z.infer<typeof createPostSchema>;
type UpdatePost = z.infer<typeof updatePostSchema>;

export const getPost = async (id: string): Promise<Prisma.PostGetPayload<{
    include: {
        reaction: true,
    }
}>> => {
    const post = await prisma.post.findUnique({
        where: {
            id: id, 
        },
        include: {
            reaction: true,
        }
    });

    if (!post) {
        throw new Error("Post not found");
    }

    return post;
}

export const getAllPosts = async (): Promise<Prisma.PostGetPayload<{
    include: {
        reaction: true,
        postTags: true,
        author: {
            include: {
                user: {
                    select: {
                        userDetails: true
                    }
                }
            }
        }
    }
}>[]> => {
    const posts = await prisma.post.findMany({
        include: {
            reaction: true,
            postTags: true,
            author: {
                include: {
                    user: {
                        select: {
                            userDetails: true
                        }
                    }
                }
            }
        },
        orderBy: {
            createdAt: "desc",
        }
    });
    
    if (!posts) {
        throw new Error("Failed to fetch posts");
    }

    return posts;
}

export const getPostsByUserId = async (userId: string): Promise<Prisma.PostGetPayload<{
    include: {
        reaction: true,
        postTags: true,
    }
}>[]> => {
    const posts = await prisma.post.findMany({
        where: {
            authorId: userId,
        },
        include: {
            reaction: true,
            postTags: true,
        }
    })

    if (!posts) {
        throw new Error("Failed to fetch posts");
    }

    return posts;
}   

export const createPost = async (data: CreatePost): Promise<string> => {
    const post = await prisma.post.create({
        data: data,
    })

    if (!post) {
        throw new Error("Failed to create post");
    }

    return post.id;
}

export const updatePost = async (id: string, data: UpdatePost): Promise<string> => {
    const post = await prisma.post.update({
        where: {
            id: id,
        },
        data: data,
    });

    if (!post) {
        throw new Error("Failed to update post");
    }

    return post.id;
}



