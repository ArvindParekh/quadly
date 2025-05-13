// server actions for interests

import { prisma } from "@/lib/prisma";
import { createInterestSchema } from "@/lib/zod/interests";

export async function createInterests(prevState: any, formData: FormData) {
   const allInterests = formData.getAll("interests");
   const userId = formData.get("userId") as string;

   console.log(allInterests, userId);

   const parsedInterests = createInterestSchema.safeParse(allInterests);

   if (!parsedInterests.success) {
      return { error: "Invalid data", success: false };
   }

   const interests = parsedInterests.data;

   try {
      interests.map(async (interest) => {
         const newInterest = await prisma.interests.upsert({
            where: {
            name: interest.name,
        },
        update: {},
        create: {
            name: interest.name,
        }
      });

      const userInterest = await prisma.userInterests.create({
        data: {
            userDetailsId: userId,
            interestId: newInterest.id,
        }
      });
   });

      return { success: true };
   } catch (error) {
      return { error: "Error creating interests", success: false };
   }

   
}
