import { z } from "zod";

export const signupSchema = z.object({
    'first-name': z.string().min(1, { message: "First name is required" }),
    'last-name': z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    'confirm-password': z.string().min(8, { message: "Password must be at least 8 characters long" }),
})