"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createCoffeeChatSchema } from "@/lib/zod/coffeeChat";
import { CoffeeChatVenueNoiseLevel, CoffeeChatVenueTags } from "@/generated/prisma/client";

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