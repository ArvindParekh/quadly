// define resusable user data that can be used in server components and server actions
import { z } from "zod";
import { prisma } from "../prisma";

const UserSchema = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    username: z.string(),
    password: z.string(),
    createdAt: z.date().default(new Date()),
    updatedAt: z.date().optional(),
    posts: z.array(z.any()),
    reactions: z.array(z.any()),
    matches: z.array(z.any()),
    matchedWith: z.array(z.any()),
    userInterests: z.array(z.any()),
});

const createUserSchema = UserSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    posts: true,
    reactions: true,
    matches: true,
    matchedWith: true,
    userInterests: true,
    username: true,
})

const updateUserSchema = UserSchema.partial().omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    posts: true,
    reactions: true,
    matches: true,
    matchedWith: true,
    userInterests: true,
})  

// infer type
type User = z.infer<typeof UserSchema>;
type CreateUser = z.infer<typeof createUserSchema>;
type UpdateUser = z.infer<typeof updateUserSchema>;

export const getUser = async (id: string): Promise<User> => {
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        }
    })

    if (!user) {
        throw new Error("User not found");
    }

    return UserSchema.parse(user);
}

export const createUser = async (data: CreateUser): Promise<string> => {
    const user = await prisma.user.create({
        data: {
            email: data.email,
            password: data.password,
        }
    });

    if (!user) {
        throw new Error("Failed to create user");
    }

    return user.id;
}

export const updateUser = async (id: string, data: UpdateUser): Promise<string> => {
    const user = await prisma.user.update({
        where: {
            id: id,
        },
        data: data,
    });

    if (!user) {
        throw new Error("Failed to update user");
    }

    return user.id;
}