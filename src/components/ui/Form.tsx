import { createContext, forwardRef, useContext, useId, useMemo } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form";
import { Label } from "./Label";

const Form = FormProvider;

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
    ...props
}: ControllerProps<TFieldValues, TName>) => {
    const fieldContextValue = useMemo(() => ({ name: props.name }), [props.name]);
    return (
        <FormFieldContext.Provider value={fieldContextValue}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    );
};

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

const useFormField = () => {
    const fieldContext = useContext(FormFieldContext);
    const itemContext = useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();

    const fieldState = getFieldState(fieldContext.name, formState);

    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }

    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};

type FormItemContextValue = {
    id: string;
};

const FormItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    const id = useId();
    const value = useMemo(() => ({ id }), [id]);

    return (
        <FormItemContext.Provider value={value}>
            <div ref={ref} className={cn(className)} {...props} />
        </FormItemContext.Provider>
    );
});

FormItem.displayName = "FormItem";

const FormLabel = forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(
    ({ className, ...props }, ref) => {
        const { formItemId } = useFormField();

        return <Label ref={ref} className={cn(className)} htmlFor={formItemId} {...props} />;
    }
);
FormLabel.displayName = "FormLabel";

const FormControl = forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
        <Slot
            ref={ref}
            id={formItemId}
            aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
            aria-invalid={!!error}
            {...props}
        />
    );
});
FormControl.displayName = "FormControl";

const FormDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return <p ref={ref} id={formDescriptionId} className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)} {...props} />;
});
FormDescription.displayName = "FormDescription";

const FormMessage = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, children, ...props }, ref) => {
        const { error, formMessageId } = useFormField();
        const body = error ? String(error?.message) : children;

        if (!body) {
            return null;
        }

        return (
            <p ref={ref} id={formMessageId} className={cn("text-sm font-medium text-red-500 dark:text-red-900", className)} {...props}>
                {body}
            </p>
        );
    }
);
FormMessage.displayName = "FormMessage";

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };
