// "use server";

// import { prisma } from "@/lib/prisma";
// import { z } from "zod";

// const waitlistSchema = z.object({
//     userEmail: z.string().email(),
//     userInterests: z.array(z.string()),
// })

// export async function addToWaitlist(email: string, interests: string[]) {

//     const { success, data } = waitlistSchema.safeParse({ userEmail: email, userInterests: interests });

//     if (!success) {
//         return {
//             success: false,
//             message: "Invalid email or interests",
//         }
//     }

//     const { userEmail, userInterests } = data;

//     const waitlist = await prisma.waitlist.findMany();

//     let userExists = false;
//     if (waitlist){
//         userExists = waitlist.some((user) => user.email === userEmail);
//     } else {
//         userExists = false;
//     }

//     if (userExists) {
//         return {
//             success: false,
//             message: "We get it, you're excited! But you're already on the waitlist 🎉",
//             position: waitlist.findIndex((user) => user.email === userEmail) + 1,
//         }
//     }
    
//     try {
//         await prisma.waitlist.create({
//             data: {
//                 email: userEmail,
//                 interests: userInterests,
//             }
//         })

//         return {
//             success: true,
//             message: "You're now on the waitlist! We'll notify you when we launch. Welcome to Quadly :)",
//             position: waitlist.length + 1,
//         }
//     } catch (error) {
//         console.error("Error adding to waitlist:", error);
//         return {
//             success: false,
//             message: "An error occurred while adding you to the waitlist. Please try again later.",
            
//         }
//     }
// }

"use server";
import { prisma } from "@/lib/prisma";

export async function addToWaitlist(email: string, interests: string[]) {
  try {
    // Test with a model you know works
    const postCount = await prisma.post.count();
    console.log("Post count works:", postCount);
    
    // Now try waitlist
    const waitlistCount = await prisma.waitlist.count();
    console.log("Waitlist count:", waitlistCount);
    
    return { success: true, test: "completed" }
  } catch (error) {
    console.error("Detailed error:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

// // preferably add a get endpoint in a server component to get waitlist stats, like number of people signed up, once you have a decent number of people.