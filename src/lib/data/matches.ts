// define reusable match data that can be used in server components and server actions

import { z } from "zod";
import { prisma } from "../prisma";

const MatchSchema = z.object({
    id: z.string().uuid(),
    userId: z.string().uuid(),
    matchUserId: z.string().uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

const createMatchSchema = MatchSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
})

const updateMatchSchema = MatchSchema.partial().omit({
    id: true,
    createdAt: true,
    updatedAt: true,
})

type Match = z.infer<typeof MatchSchema>;
type CreateMatch = z.infer<typeof createMatchSchema>;
type UpdateMatch = z.infer<typeof updateMatchSchema>;

export const getMatch = async (id: string): Promise<Match> => {
    const match = await prisma.matches.findUnique({
        where: {
            id: id,
        },
        include: {
            User: true,
            matchUser: true,    
        }
    });

    if (!match) {
        throw new Error("Match not found");
    }

    return MatchSchema.parse(match);
}

export const getAllMatches = async (): Promise<Match[]> => {
    const matches = await prisma.matches.findMany({
        include: {
            User: true,
            matchUser: true,
        }
    });

    if (!matches) {
        throw new Error("Failed to fetch matches");
    }

    return matches.map(match => MatchSchema.parse(match));
}

export const createMatch = async (data: CreateMatch): Promise<string> => {
    const match = await prisma.matches.create({
        data: data, 
    })    

    if (!match) {
        throw new Error("Failed to create match");
    }

    return match.id;
}

export const updateMatch = async (id: string, data: UpdateMatch): Promise<string> => {
    const match = await prisma.matches.update({
        where: {
            id: id,
        },
        data: data,
    });

    if (!match) {
        throw new Error("Failed to update match");
    }

    return match.id;
}