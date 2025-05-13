import { z } from "zod";

const PostSchema = z.object({
    id: z.string().uuid(),
    content: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string().uuid(),
    reactions: z.array(z.any()),
    postInterests: z.array(z.any()),
    user: z.any(),
})

const createPostSchema = PostSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    reactions: true,
    postInterests: true,
    user: true,
})

const updatePostSchema = PostSchema.partial().omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    reactions: true,
    userId: true,
    postInterests: true,
    user: true,
})

export { PostSchema, createPostSchema, updatePostSchema };