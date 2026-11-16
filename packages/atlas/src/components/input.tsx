import { cn } from "../lib/utils.js"
import { forwardRef, InputHTMLAttributes, useId } from "react"
import { type LucideIcon } from "lucide-react"

export type InputSize = "sm" | "md" | "lg"

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: InputSize
    label?: string
    helperText?: string
    error?: boolean
    /** Force the focused visual state, independent of real DOM focus — for
     * compound fields where an adjacent control should visually "own" this
     * input's focus ring. */
    focused?: boolean
    leadingIcon?: LucideIcon
    trailingIcon?: LucideIcon
}

const SIZE_CLASSES: Record<InputSize, string> = {
    sm: "h-8 gap-1.5 px-2.5 text-sm",
    md: "h-9 gap-2 px-3 text-sm",
    lg: "h-11 gap-2 px-3.5 text-base",
}

const ICON_SIZE: Record<InputSize, number> = { sm: 14, md: 16, lg: 18 }

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        size = "md",
        label,
        helperText,
        error = false,
        focused = false,
        leadingIcon: LeadingIcon,
        trailingIcon: TrailingIcon,
        className,
        id,
        disabled,
        readOnly,
        ...props
    },
    ref
) {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const iconSize = ICON_SIZE[size]

    return (
        <div className="flex flex-col gap-1.5">
            {label && (
                <label htmlFor={inputId} className="text-sm font-medium text-[var(--neutral900)]">
                    {label}
                    {error && <span className="ml-0.5 text-[var(--danger500)]">*</span>}
                </label>
            )}
            <div
                className={cn(
                    "flex items-center rounded-[var(--radius-md)] border bg-[var(--neutral0)] transition-colors",
                    "has-[input:focus-visible]:border-[var(--primary600)] has-[input:focus-visible]:ring-1 has-[input:focus-visible]:ring-[var(--primary600)]",
                    focused && "border-[var(--primary600)] ring-1 ring-[var(--primary600)]",
                    error ? "border-[var(--danger500)]" : "border-[var(--neutral200)]",
                    disabled && "border-[var(--neutral100)] bg-[var(--neutral50)]",
                    readOnly && !disabled && "border-[var(--neutral100)] bg-[var(--neutral25)]",
                    SIZE_CLASSES[size]
                )}
            >
                {LeadingIcon && (
                    <LeadingIcon
                        size={iconSize}
                        className={cn("shrink-0", disabled ? "text-[var(--neutral300)]" : "text-[var(--neutral400)]")}
                        aria-hidden
                    />
                )}
                <input
                    ref={ref}
                    id={inputId}
                    disabled={disabled}
                    readOnly={readOnly}
                    className={cn(
                        "min-w-0 flex-1 bg-transparent text-[var(--neutral900)] outline-none placeholder:text-[var(--neutral400)]",
                        disabled && "cursor-not-allowed text-[var(--neutral300)]",
                        className
                    )}
                    {...props}
                />
                {TrailingIcon && (
                    <TrailingIcon
                        size={iconSize}
                        className={cn("shrink-0", disabled ? "text-[var(--neutral300)]" : "text-[var(--neutral400)]")}
                        aria-hidden
                    />
                )}
            </div>
            {helperText && (
                <p
                    className={cn(
                        "text-xs",
                        error ? "text-[var(--danger500)]" : "text-[var(--neutral400)]"
                    )}
                >
                    {helperText}
                </p>
            )}
        </div>
    )
})
