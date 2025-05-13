import { z } from "zod";

// model Interests {
//     id            String       @id @default(uuid())
//     name          String       @unique
//     createdAt     DateTime     @default(now())
//     updatedAt     DateTime     @updatedAt
//     userInterests UserInterests[]
//     postInterests PostInterests[]
//   }

export const interestSchema = z.array(z.object({
    name: z.string().min(1),
    id: z.string().uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userInterests: z.array(z.object({
        id: z.string().uuid(),
        userId: z.string().uuid(),
        interestId: z.string().uuid(),
        createdAt: z.date(),
        updatedAt: z.date(),
    })),
    postInterests: z.array(z.object({
        id: z.string().uuid(),
        postId: z.string().uuid(),
        interestId: z.string().uuid(),
        createdAt: z.date(),
        updatedAt: z.date(),
    })),
}))

// solve this

export const createInterestSchema = z.array(z.object({
    name: z.string().min(1),
}))
