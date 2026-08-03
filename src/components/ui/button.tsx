import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost"
    size?: "sm" | "md" | "lg"
}

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "rounded-[var(--radius-md)] font-medium transition-colors",
                variant === "primary" && "bg-[var(--color-primary)] text-white hover:opacity-90",
                variant === "secondary" && "border border-[var(--color-border)] text-black hover:bg-zinc-50",
                variant === "ghost" && "text-black hover:bg-zinc-100",
                size === "sm" && "px-3 py-1.5 text-sm",
                size === "md" && "px-4 py-2 text-sm",
                size === "lg" && "px-5 py-2.5 text-base",
                className
            )}
            disabled={props.disabled}
            {...props}
        />
    )
}