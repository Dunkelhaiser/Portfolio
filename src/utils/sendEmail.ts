"use server";

import { FormValues, formSchema } from "@models/Form";
import { Resend } from "resend";
import { z as zod } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: FormValues) => {
    try {
        await formSchema.parseAsync(data);

        await resend.emails.send({
            from: "portfolio@kyrylotymchyshyn.com",
            to: "tymchyshynkyrylo@gmail.com",
            subject: `Portfolio Contact`,
            text: data.message,
            reply_to: data.email,
        });
        return {
            status: 200,
            message: "Email sent successfully",
        };
    } catch (err) {
        if (err instanceof zod.ZodError) {
            return {
                status: 400,
                message: err.issues[0].message,
            };
        }
        return {
            status: 500,
            message: "Something went wrong. Please try again later.",
        };
    }
};
