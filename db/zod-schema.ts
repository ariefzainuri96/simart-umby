import { z } from "zod";

export const zProductSchema = z.object({
    id: z.string().optional(),
    name: z.string().trim().min(1, { message: "Name is required" }),
    price: z.string().trim().min(1, { message: "Price is required" }),
    quantity: z.number().min(1, { message: "Quantity is required" }),
    userId: z
        .string()
        .min(1, { message: "You're not yet specified the userId" }),
});
