"use server"

import { prisma } from "@/lib/prisma";

export async function addToWaitlist(email: string, interests: string[]) {
    const waitlist = await prisma.waitlist.findMany();

    const userExists = waitlist.some((user) => user.email === email);

    if (userExists) {
        return {
            success: false,
            message: "You're already on the waitlist!",
            position: waitlist.findIndex((user) => user.email === email) + 1,
        }
    }
    
    try {
        await prisma.waitlist.create({
            data: {
                email,
                interests,
            }
        })

        return {
            success: true,
            message: "You're now on the waitlist! We'll notify you when we launch. Welcome to Quadly :)",
            position: waitlist.length + 1,
        }
    } catch (error) {
        console.error("Error adding to waitlist:", error);
        return {
            success: false,
            message: "An error occurred while adding you to the waitlist. Please try again later.",
            
        }
    }
}