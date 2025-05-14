import { z } from "zod";

// model Post {
//     id String @id @default(uuid())
    
//     authorId String
//     author UserDetails @relation(fields: [authorId], references: [id])
  
//     content String
//     commentCount Int @default(0)
  
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
  
//     reaction Reaction?
//     postTags PostTag[]
//     comments Comment[]
//   }

const createPostSchema = z.object({
    authorId: z.string(),
    content: z.string(),
})

const updatePostSchema = createPostSchema.partial().omit({
    authorId: true,
})

export { createPostSchema, updatePostSchema };