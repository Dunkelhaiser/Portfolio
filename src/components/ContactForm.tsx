"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@ui/Input";
import Button from "@ui/Button";
import { Textarea } from "@ui/Textarea";
import { FormValues, formSchema } from "@models/Form";
import { sendEmail } from "@utils/sendEmail";
import { toast } from "@ui/useToast";

const ContactForm = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: "onBlur",
        defaultValues: {
            email: "",
            message: "",
        },
    });

    const onSubmit = async (values: FormValues) => {
        try {
            const res = await sendEmail(values);
            toast({ description: res.message });
            form.reset();
        } catch (err) {
            toast({ description: "Something went wrong" });
        }
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

                <Button type="submit" className="max-sm:w-full" loading={form.formState.isSubmitting}>
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default ContactForm;
