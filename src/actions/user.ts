// server actions for user
"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { z } from "zod";

const UserDetailsSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    name: z.string().optional(), 
    bio: z.string().optional(),
    department: z.string().optional(),
    year: z.string().optional(),
    image: z.string().url().optional().or(z.literal("")), 
    reading: z.string().optional(),
    availability: z.string().optional(),
  });

export async function updateUserDetails(prevState: any, formData: FormData) {
    const data = Object.fromEntries(formData);
    console.log(data);
    const parsedUserDetails = UserDetailsSchema.safeParse(data);

    if (!parsedUserDetails.success) {
        return { error: "Invalid data", success: false }
    }

    const { userId, name, bio, department, year, image, reading, availability } = parsedUserDetails.data;
    
    try {
        const updatedUserDetails = await prisma.userDetails.upsert({
            where: {
                userId: userId
            },
            update: {
                name,
                bio,
                department,
                year,
                image,
                reading,
                availability
            },
            create: {
                userId,
                name: name || "",
                bio: bio || "",
                department: department || "",
                year: year || "",
                image: image || "",
                reading: reading || "",
                availability: availability || ""
            }
        })

        revalidatePath("/profile");
        return { success: true, message: "Profile updated successfully"}
    } catch (error) {
        console.error("Error updating user details:", error);
        return { success: false, message: "Failed to update profile"}
    }
    
}