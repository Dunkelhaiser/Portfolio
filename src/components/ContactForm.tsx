"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/Form";
import { z as zod } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@ui/Input";
import Button from "@ui/Button";
import { Textarea } from "@ui/Textarea";

const formSchema = zod.object({
    email: zod.string().email({ message: "Please enter a valid email address" }),
    message: zod
        .string()
        .min(10, { message: "Please enter at least 10 characters" })
        .max(1000, { message: "Please enter no more than 1000 characters" }),
});

type FormValues = zod.infer<typeof formSchema>;

const ContactForm = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            message: "",
        },
    });
    const onSubmit = (data: FormValues) => {
        console.log(data);
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-prose space-y-4 max-sm:space-y-2">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@mail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea rows={5} className="resize-none" placeholder="Your message..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="max-sm:w-full">
                    Submit
                </Button>
            </form>
        </Form>
    );
};
export default ContactForm;
