// uses novu api to send notifications

import { Novu } from "@novu/api"
import { PrismaClient } from "@/generated/prisma/client"

export const novu = new Novu({secretKey: process.env.NOVU_SECRET_KEY});

export type NotificationType = "like" | "comment" | "match" | "message" | "coffeeChat" | "system"

interface NotificationPayload {
    subscriberId: string;
    type: NotificationType;
    title: string;
    description: string;
    userId?: string;
    userName?: string;
    userAvatar?: string;
    actionUrl?: string; 
}

export async function sendNotification(payload: NotificationPayload) {
    try {
        await novu.trigger({
            workflowId: "quadly-notification",
            to: {
                subscriberId: payload.subscriberId,
            },
            payload: {
                title: payload.title,
                description: payload.description,
                userId: payload.userId || undefined,
                userName: payload.userName || undefined,
                userAvatar: payload.userAvatar || undefined,
                actionUrl: payload.actionUrl || undefined,
                type: payload.type,
            }
        })

        console.log("Notification sent successfully");
    } catch (error) {
        console.error("Error sending notification:", error);
    }
}