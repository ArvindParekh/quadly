import { z } from "zod";

const MatchSchema = z.object({
    id: z.string().uuid(),
    userId: z.string().uuid(),
    matchUserId: z.string().uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

const createMatchSchema = MatchSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
})

const updateMatchSchema = MatchSchema.partial().omit({
    id: true,
    createdAt: true,
    updatedAt: true,
})

export { MatchSchema, createMatchSchema, updateMatchSchema };