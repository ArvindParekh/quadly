"use server";

import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export async function createCoffeeChat(data: Prisma.CoffeeChatGetPayload<{}>) {
    try {
    const coffeeChat = await prisma.coffeeChat.create({
        data: {
            inviterId: data.inviterId,
            inviteeId: data.inviteeId,
            status: data.status,
            scheduledAt: data.scheduledAt,
        },
        });

        return coffeeChat;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to create coffee chat");
    }
}