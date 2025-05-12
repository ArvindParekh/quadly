import { z } from "zod";

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

export { PostSchema, createPostSchema, updatePostSchema };