"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createCoffeeChatSchema } from "@/lib/zod/coffeeChat";
import { CoffeeChatVenueNoiseLevel, CoffeeChatVenueTags } from "@/generated/prisma/client";
import { sendNotification } from "@/lib/notification";

const parseVenueTags = (tags: string[]) => {
    const tagRecord: Record<string, string> = {
      "outdoor": "OUTDOOR",
      "scenic": "SCENIC",
      "fresh-air": "FRESH_AIR",
      "wifi": "WIFI",
      "outlets": "OUTLETS",
      "whiteboards": "WHITEBOARDS",
      "private": "PRIVATE",
      "food": "FOOD",
      "comfortable-seating": "COMFORTABLE_SEATING",
      "books": "BOOKS",
    }

    return tags.map(tag => tagRecord[tag] || tag).filter(Boolean) as CoffeeChatVenueTags[];
}

export async function createCoffeeChat(data: z.infer<typeof createCoffeeChatSchema>) {
    const parsedData = createCoffeeChatSchema.safeParse(data);

    if (!parsedData.success) {
        return {
            error: parsedData.error.message,
            message: "Invalid data",
            success: false,
        }
    }

    const { inviterId, inviteeId, purpose, duration, personalMessage, scheduledAt, venue } = parsedData.data;

    const parsedVenueTags = parseVenueTags(venue.tags);
    
    try {
        // const coffeeChatPurpose = await prisma.coffeeChatPurpose.upsert({
        //     where: {
        //         purposeName: purpose.label
        //     },
        //     create: {
        //         description: purpose.description,
        //         purposeName: purpose.label,
        //         timeLimit: purpose.suggestedDuration,
        //     },
        //     update: {}
        //     }
        // )

        // const coffeeChatVenue = await prisma.coffeeChatVenue.upsert({
        //     where: {
        //         venueName: venue.name
        //     },
        //     create: {
        //         description: venue.description,
        //         venueName: venue.name,
        //         noiseLevel: venue.noiseLevel as CoffeeChatVenueNoiseLevel,
        //         location: venue.location,
        //         rating: venue.rating,
        //         tags: venue.tags as CoffeeChatVenueTags[],
        //     },
        //     update: {}
        //     }
        // )

        // const coffeeChat = await prisma.coffeeChat.create({
        //     data: {
        //         inviterId,
        //         inviteeId,
        //         purposeId: coffeeChatPurpose.id,
        //         venueId: coffeeChatVenue.id,
        //         duration,
        //         personalMessage,
        //         scheduledAt,
        //     }
        // })

        // this minimizes db calls
        const coffeeChat = await prisma.coffeeChat.create({
            data: {
              inviter: { connect: { id: inviterId } },
              invitee: { connect: { id: inviteeId } },
              purpose: {
                connectOrCreate: {
                  where: {
                    purposeName: purpose.label,
                  },
                  create: {
                    purposeName: purpose.label,
                    description: purpose.description,
                    timeLimit: purpose.suggestedDuration,
                  }
                }
              },
              venue: {
                connectOrCreate: {
                  where: { venueName: venue.name },
                  create: {
                    description: venue.description,
                    venueName: venue.name,
                    noiseLevel: venue.noiseLevel.toUpperCase() as CoffeeChatVenueNoiseLevel,
                    location: venue.location,
                    rating: venue.rating,
                    tags: parsedVenueTags,                    
                  }
                }
              },
              scheduledAt,
              duration,
              personalMessage,
            }
          });
          
          // send notification of invitation for a coffee chat to invitee
          const inviter = await prisma.userDetails.findUnique({
            where: {
                id: inviterId
            }
          })

          await sendNotification({
            subscriberId: inviteeId,
            type: "coffeeChat",
            title: "Coffee Chat Invitation",
            description: `${inviter?.name} has invited you to a coffee chat`,
            userId: inviterId,
            userName: inviter?.name,
            userAvatar: inviter?.profilePicture || undefined,
            actionUrl: `/coffee-chats`,
          })

        return {
            success: true,
            coffeeChat,
        }
    } catch (error) {
        console.error(error);
        return {
            error: "Failed to create coffee chat",
            message: "Failed to create coffee chat",
            success: false,
        }
    }
}

export async function acceptCoffeeChat(coffeeChatId: string) {
  try {
    const coffeeChat = await prisma.coffeeChat.update({
      where: {
        id: coffeeChatId
      },
      data: {
        status: "ACCEPTED"
      }
    })

    // send notification to inviter that coffee chat has been accepted
    const invitee = await prisma.userDetails.findUnique({
      where: {
        id: coffeeChat.inviteeId
      }
    })

    const inviter = await prisma.userDetails.findUnique({
      where: {
        id: coffeeChat.inviterId
      }
    })

    await sendNotification({
      subscriberId: inviter?.id as string,
      type: "coffeeChat",
      title: "Coffee Chat Accepted",
      description: `${invitee?.name} has accepted your coffee chat invitation`,
      userId: invitee?.id as string,
      userName: invitee?.name || "",
      userAvatar: invitee?.profilePicture || undefined,
      actionUrl: `/coffee-chats`,
    })

    return {
      success: true,
      message: "Coffee chat accepted",
      coffeeChat,
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to accept coffee chat",
      message: "Failed to accept coffee chat. Please try again.",
      success: false,
    }
  }
}

export async function declineCoffeeChat(coffeeChatId: string) {
  try {
    const coffeeChat = await prisma.coffeeChat.update({
      where: {
        id: coffeeChatId
      },
      data: {
        status: "REJECTED"
      }
    })

    // send notification to inviter that coffee chat has been declined
    const invitee = await prisma.userDetails.findUnique({
      where: {
        id: coffeeChat.inviteeId
      }
    })

    const inviter = await prisma.userDetails.findUnique({
      where: {
        id: coffeeChat.inviterId
      }
    })
    
    await sendNotification({
      subscriberId: inviter?.id as string,
      type: "coffeeChat",
      title: "Coffee Chat Declined",
      description: `${invitee?.name} has declined your coffee chat invitation`,
      userId: invitee?.id as string,
      userName: invitee?.name || "",
      userAvatar: invitee?.profilePicture || undefined,
      actionUrl: `/coffee-chats`,
    })

    return {
      success: true,
      message: "Coffee chat declined",
      coffeeChat,
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to decline coffee chat",
      message: "Failed to decline coffee chat. Please try again.",
      success: false,
    }
  }
}
