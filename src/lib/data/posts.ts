// define resusable post data that can be used in server components and server actions
import { z } from "zod";
import { prisma } from "../prisma";

const PostSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    content: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string().uuid(),
    reactions: z.array(z.any()),
})

const createPostSchema = PostSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    reactions: true,
})

const updatePostSchema = PostSchema.partial().omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    reactions: true,
    userId: true,
})

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



