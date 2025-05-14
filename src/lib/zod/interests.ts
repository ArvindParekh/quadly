import { z } from "zod";

// model Interests {
//     id            String       @id @default(uuid())
//     name          String       @unique
//     createdAt     DateTime     @default(now())
//     updatedAt     DateTime     @updatedAt
//     userInterests UserInterests[]
//     postInterests PostInterests[]
//   }


// {
//     interests: {
//         id: string;
//         interestName: string;
//     }[];
// } & {
//     name: string;
//     id: string;
//     userId: string;
//     department: string | null;
//     year: string | null;
//     profilePicture: string | null;
//     bio: string | null;
//     availability: string | null;
//     reading: string | null;
// }) | null

// solve this

export const createInterestSchema = z.object({
    interestsString: z.string().min(1),
    userId: z.string().min(1),
});
