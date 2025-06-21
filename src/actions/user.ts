// server actions for user
"use server"

import { imageStorage } from "@/lib/image-storage";
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { z } from "zod";

const UserDetailsSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    name: z.string().optional(), 
    bio: z.string().optional(),
    department: z.string().optional(),
    year: z.string().optional(),
    profilePicture: z.instanceof(File).optional(), 
    reading: z.string().optional(),
    availability: z.string().optional(),
    interests: z.string().optional(),
  });

export async function updateUserDetails(prevState: any, formData: FormData) {
    const data = Object.fromEntries(formData);
    const parsedUserDetails = UserDetailsSchema.safeParse(data);

    if (!parsedUserDetails.success) {
        return { error: "Invalid data", success: false }
    }

    const { userId, name, bio, department, year, profilePicture, reading, availability, interests } = parsedUserDetails.data;
    const interestsArray = interests ? JSON.parse(interests) : [];

    const interestsConnectOrCreate = interestsArray.map((item: any) => {
        let name = typeof item === "string" ? item : (item.interest.name || item.name || "");
        return {
            where: { interestName: name },
            create: { interestName: name },
        };
    });
    
    try {
        let profilePictureUrl = undefined;
        if (profilePicture) {
            const { url } = await imageStorage.uploadImage(userId, profilePicture);
            profilePictureUrl = url;
        }
        const updatedUserDetails = await prisma.userDetails.upsert({
            where: {
                userId: userId
            },
            update: {
                name,
                bio,
                department,
                year,
                profilePicture: profilePictureUrl,
                reading,
                availability,
                interests: {
                    set: [], // Remove all previous interests
                    connectOrCreate: interestsConnectOrCreate,
                },
            },
            create: {
                userId,
                name: name || "",
                bio: bio || "",
                department: department || "",
                year: year || "",
                profilePicture: profilePictureUrl,
                reading: reading || "",
                availability: availability || "",
                interests: {
                    connectOrCreate: interestsConnectOrCreate,
                },
            }
        })

        revalidatePath("/profile");
        return { success: true, message: "Profile updated successfully"}
    } catch (error) {
        console.error("Error updating user details:", error);
        return { success: false, message: "Failed to update profile"}
    }
    
}