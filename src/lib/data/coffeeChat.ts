import { prisma } from "../prisma"

export async function getPendingCoffeeChats(userId: string) {
    try {
        const pendingInvitations = await prisma.coffeeChat.findMany({
            where: {
                inviteeId: userId,
                status: "PENDING",
                scheduledAt: {
                    gt: new Date()
                }
            },
            include: {
                inviter: true,
                venue: true,
                purpose: true,
                invitee: true,
            }
        })

        return pendingInvitations;
    } catch (error) {
        console.error("Error fetching pending coffee chats:", error);
        return [];
    }
}

export async function getUpcomingCoffeeChats(userId: string) {
    try {
        const upcomingChats = await prisma.coffeeChat.findMany({
            where: {
                OR: [
                    {
                        inviteeId: userId,
                    },
                    {
                        inviterId: userId,
                    }
                ],
                status: "ACCEPTED",
                scheduledAt: {
                    gte: new Date()
                }
            },
            include: {
                inviter: true,
                venue: true,
                purpose: true,
                invitee: true,
            }
        })

        return upcomingChats;
    } catch (error) {
        console.error("Error fetching upcoming coffee chats:", error);
        return [];
    }
}

export async function getPastCoffeeChats(userId: string) {  
    try {
        const pastChats = await prisma.coffeeChat.findMany({
            where: {
                OR: [
                    {
                        inviteeId: userId,
                        scheduledAt: {
                            lt: new Date()
                        }
                    },
                    {
                        inviterId: userId,
                        scheduledAt: {
                            lt: new Date()
                        }
                    },
                    {
                        OR: [
                            {
                                inviterId: userId,
                                status: "REJECTED",
                            },
                            {
                                inviteeId: userId,
                                status: "REJECTED",
                            }
                        ]
                    }
                ],
            },
            include: {
                inviter: true,
                venue: true,
                purpose: true,
                invitee: true,
            }
        })

        // are pending chats expired?
        // pastChats.map((pastChat)=> {
        //     if (pastChat.status === "PENDING") {
        //         pastChat.status = "EXPIRED"
        //     }
        // })

        return pastChats;
    } catch (error) {
        console.error("Error fetching past coffee chats:", error);
        return [];
    }
}

export async function getInvitedByMeCoffeeChats(userId: string) {
    try {
        const invitedByMe = await prisma.coffeeChat.findMany({
            where: {
                inviterId: userId,
                status: "PENDING",
                scheduledAt: {
                    gt: new Date()
                }
            },
            include: {
                invitee: true,
                venue: true,
                purpose: true,
                inviter: true,
            }
        })

        return invitedByMe;
    } catch (error) {
        console.error("Error fetching coffee chats invited by me:", error);
        return [];
    }
}