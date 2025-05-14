// server actions for interests
"use server";

import { prisma } from "@/lib/prisma";
import { createInterestSchema } from "@/lib/zod/interests";

export async function createInterests(prevState: any, formData: FormData) {
   const data = Object.fromEntries(formData);
   console.log(data);
   // const userId = data.userId;

   // Ensure interests is a string before parsing
   // const jsonInterests = typeof data.interests === 'string' ? JSON.parse(data.interests) : [];

   // console.log(jsonInterests);

   const parsedInterests = createInterestSchema.safeParse(data);

   if (!parsedInterests.success) {
      console.log(parsedInterests.error);
      return { error: "Invalid data", success: false, message: "Invalid data" };
   }

   const { interestsString, userId } = parsedInterests.data;
   const interests: string[] = JSON.parse(interestsString);
   console.log(interests);

   try {
         //    const newInterest = await prisma.interest.upsert({
         //       where: {
         //       interestName: interest,
         //   },
         //   update: {},
         //   create: {
         //       interestName: interest,
         //   }
         // });

         const userInterest = await prisma.userDetails.update({
            where: {
               userId: userId,
            },
            data: {
               interests: {
                  set: [],
                  connectOrCreate: interests.map((interest) => ({
                     where: { interestName: interest },
                     create: { interestName: interest },
                  })),
               },
            },
         });

      return { success: true, message: "Interests updated successfully" };
   } catch (error) {
      return { error: "Error updating interests", success: false, message: "Error updating interests" };
   }
}
