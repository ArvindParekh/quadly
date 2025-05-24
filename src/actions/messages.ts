// get all messages for a chat
"use server";

import { prisma } from "@/lib/prisma";

export async function getMessages(chatId: string) {

    try {
        const messages = await prisma.message.findMany({
            where: {
                chatId,
            },
            orderBy: {
                createdAt: "asc",
            },
            include: {
                sender: true,
            },
        });

        return messages;
    } catch (error) {
        console.error(error);
        return [];
    }
}