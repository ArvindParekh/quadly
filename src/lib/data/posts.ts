// define resusable post data that can be used in server components and server actions
import { z } from "zod";
import { prisma } from "../prisma";
import { PostSchema, createPostSchema, updatePostSchema } from "../zod/posts";

    
// infer type
type Post = z.infer<typeof PostSchema>;
type CreatePost = z.infer<typeof createPostSchema>;
type UpdatePost = z.infer<typeof updatePostSchema>;

export const getPost = async (id: string): Promise<Post> => {
    const post = await prisma.posts.findUnique({
        where: {
            id: id, 
        },
        include: {
            reactions: true,
        }
    });

    if (!post) {
        throw new Error("Post not found");
    }

    return PostSchema.parse(post);
}

export const getAllPosts = async (): Promise<Post[]> => {
    const posts = await prisma.posts.findMany({
        include: {
            reactions: true,
        }
    });
    
    if (!posts) {
        throw new Error("Failed to fetch posts");
    }

    return posts.map(post => PostSchema.parse(post));
}

export const createPost = async (data: CreatePost): Promise<string> => {
    const post = await prisma.posts.create({
        data: data,
    })

    if (!post) {
        throw new Error("Failed to create post");
    }

    return post.id;
}

export const updatePost = async (id: string, data: UpdatePost): Promise<string> => {
    const post = await prisma.posts.update({
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



