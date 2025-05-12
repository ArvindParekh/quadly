import { z } from "zod";


const UserSchema = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    username: z.string(),
    password: z.string(),
    createdAt: z.date().default(new Date()),
    updatedAt: z.date().optional(),
    posts: z.array(z.any()),
    reactions: z.array(z.any()),
    matches: z.array(z.any()),
    matchedWith: z.array(z.any()),
    userInterests: z.array(z.any()),
});

const createUserSchema = UserSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    posts: true,
    reactions: true,
    matches: true,
    matchedWith: true,
    userInterests: true,
    username: true,
})

const updateUserSchema = UserSchema.partial().omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    posts: true,
    reactions: true,
    matches: true,
    matchedWith: true,
    userInterests: true,
})

export { UserSchema, createUserSchema, updateUserSchema };