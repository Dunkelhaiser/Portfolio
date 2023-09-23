import { z as zod } from "zod";

export const formSchema = zod.object({
    email: zod.string().nonempty({ message: "Please enter a your email address" }).email({ message: "Please enter a valid email address" }),
    message: zod
        .string()
        .nonempty({ message: "Please enter your message" })
        .min(10, { message: "Please enter at least 10 characters" })
        .max(5000, { message: "Please enter no more than 5000 characters" }),
});

export type FormValues = zod.infer<typeof formSchema>;
