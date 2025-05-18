// create a signup server action that creates a user in the database
"use server";

import { prisma } from "@/lib/prisma";
import { signupSchema } from "@/lib/zod/signup";
import { hash } from "bcrypt";

export const signup = async (prevState: any, formData: FormData) => {
    const data = Object.fromEntries(formData);
    // parse the data
    const parsedData = signupSchema.safeParse(data);
    console.log("data", data);

    if (!parsedData.success) {
        return { error: "Invalid data", success: false, message: parsedData.error.issues[0].message };
    }

    const { 'first-name': firstName, 'last-name': lastName, email, password } = parsedData.data;

    // create the user in the database
    try {
        const hashedPassword = await hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            }
        });

        // create the user details in the database
        await prisma.userDetails.create({
            data: {
                name: `${firstName} ${lastName}`, //TODO: do we want to store names or be anonymous?
                userId: user.id,
            }
        })

        
    } catch (error) {
        console.error("Error creating user", error);

        let errorMessage = "Error creating user";

        if (error instanceof Error) {
            if (error.message.includes("Unique constraint") && error.message.includes("email")) {
                errorMessage = "Email already in use";
            }
        }
        return { error: errorMessage, success: false, message: errorMessage };
    }



    return { success: true, message: "User created successfully" };
}