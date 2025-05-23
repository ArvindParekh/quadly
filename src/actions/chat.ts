"use server"

import { prisma } from "@/lib/prisma";

export const getOrCreateChat = async (userId1: string, userId2: string) => {
    const existingChat = await prisma.chat.findFirst({
        where: {
            OR: [
                {
                    user1Id: userId1,
                    user2Id: userId2,
                },
                {
                    user1Id: userId2,
                    user2Id: userId1,
                }
            ]
        }
    });

    if (existingChat) {
        return {
            id: existingChat.id,
        };
    }

    const newChat = await prisma.chat.create({
        data: {
            user1Id: userId1,
            user2Id: userId2,
        }
    });

    return {
        id: newChat.id,
    };
}

// get all chats for a user
export const getChats = async (userId: string) => {
    
    const chats = await prisma.chat.findMany({
        where: {
            OR: [
                { user1Id: userId },
                { user2Id: userId },
            ],
        },
        include: {
            user1: true,
            user2: true,
        }
    });

    return chats;
}