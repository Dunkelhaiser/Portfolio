"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utils/cn";
import { AriaButtonProps, mergeProps, useButton, useFocusRing, useHover } from "react-aria";
import { ButtonHTMLAttributes, forwardRef, useRef } from "react";
import { mergeRefs } from "react-merge-refs";

const Loader = ({ className }: { className?: string }) => {
    return <div className={cn("absolute h-4 w-4 animate-spin rounded-full border-2 border-zinc-50", className, "border-b-transparent")} />;
};

const variants = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",
        "gap-2",
        "rounded-lg",
        "tracking-wide",
        "font-bold",
        "shadow-sm",
        "outline-none",
        "ring-offset-2",
        "border-[1.5px]",
        "border-transparent",
        "select-none",
        "transition",
        "data-[focus-visible=true]:ring-2",
        "data-[pressed=true]:scale-[0.99]",
        "disabled:!cursor-not-allowed",
        "disabled:!shadow-sm",
    ],
    {
        variants: {
            variant: {
                primary: [
                    "bg-zinc-900",
                    "text-zinc-100",
                    "ring-zinc-900/90",
                    "data-[hovered=true]:bg-zinc-900/90",
                    "disabled:!bg-zinc-900/50",
                ],
                secondary: [
                    "shadow",
                    "bg-zinc-50",
                    "text-zinc-900",
                    "ring-zinc-900/90",
                    "data-[hovered=true]:bg-white",
                    "disabled:!bg-zinc-50/50",
                    "disabled:!text-zinc-900/50",
                ],
                danger: [
                    "bg-red-500 dark:bg-red-600",
                    "text-zinc-50",
                    "ring-red-500 dark:ring-red-600",
                    "data-[hovered=true]:bg-red-400 dark:data-[hovered=true]:bg-red-500",
                    "data-[pressed=true]:bg-red-600 dark:data-[pressed=true]:bg-red-700",
                    "disabled:!bg-red-500/50 dark:disabled:!bg-red-600/20",
                ],
                success: [
                    "bg-green-500 dark:bg-green-600",
                    "text-zinc-50",
                    "ring-green-500 dark:ring-green-600",
                    "data-[hovered=true]:bg-green-400 dark:data-[hovered=true]:bg-green-500",
                    "data-[pressed=true]:bg-green-600 dark:data-[pressed=true]:bg-green-700",
                    "disabled:!bg-green-500/50 dark:disabled:!bg-green-600/20",
                ],
                outline: [
                    "shadow-none",
                    "bg-transparent",
                    "text-zinc-900",
                    "ring-zinc-900/90",
                    "border-zinc-900",
                    "data-[hovered=true]:border-zinc-900/90",
                    "data-[hovered=true]:text-zinc-900/90",
                    "disabled:!shadow-none",
                    "disabled:!text-zinc-900/50",
                    "disabled:!border-zinc-900/50",
                ],
                ghost: [
                    "shadow-none",
                    "bg-transparent",
                    "text-zinc-900 dark:text-zinc-100",
                    "ring-zinc-900/90 dark:ring-zinc-200",
                    "data-[hovered=true]:bg-zinc-100 dark:data-[hovered=true]:bg-zinc-900",
                    "data-[pressed=true]:bg-zinc-200 dark:data-[pressed=true]:bg-zinc-900",
                    "disabled:!shadow-none",
                    "disabled:!text-zinc-900/50 dark:disabled:!text-zinc-900/50",
                    "disabled:!bg-transparent",
                ],
            },
            size: {
                small: ["text-sm", "px-3", "py-2"],
                normal: ["px-4", "py-2"],
                large: ["text-lg", "px-6", "py-[0.625rem]"],
                iconSmall: ["text-xl", "p-2"],
                iconNormal: ["text-2xl", "p-2"],
                iconLarge: ["text-[1.75rem]", "p-[0.625rem]"],
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "normal",
        },
    }
);

type Props = AriaButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof variants> & {
        loading?: boolean;
        asChild?: boolean;
    };

const Button = forwardRef<HTMLButtonElement, Props>((props, forwardedRef) => {
    const { children, className, loading, disabled, variant, asChild = false, type = "button", size, ...rest } = props;
    const ref = useRef<HTMLButtonElement>(null);
    const { buttonProps, isPressed } = useButton({ ...props, isDisabled: disabled || loading }, ref);
    const { hoverProps, isHovered } = useHover(props);
    const { focusProps, isFocusVisible } = useFocusRing(props);
    const Comp = asChild ? Slot : "button";
    return (
        <Comp
            ref={mergeRefs([ref, forwardedRef])}
            className={cn(variants({ variant, size, className }))}
            type={type}
            {...mergeProps(buttonProps, hoverProps, focusProps)}
            data-loading={loading}
            data-pressed={isPressed}
            data-hovered={isHovered}
            data-focus-visible={isFocusVisible}
            {...rest}
        >
            {!asChild ? (
                <>
                    {loading && (
                        <Loader
                            className={
                                variant === "secondary" || variant === "outline" || variant === "ghost"
                                    ? loading
                                        ? "border-zinc-900/50"
                                        : "border-zinc-900"
                                    : ""
                            }
                        />
                    )}
                    <span
                        className={cn("flex items-center justify-center gap-2 transition", {
                            "opacity-0": loading,
                            "opacity-100": !loading,
                        })}
                    >
                        {children}
                    </span>
                </>
            ) : (
                children
            )}
        </Comp>
    );
});
Button.displayName = "Button";

export default Button;
