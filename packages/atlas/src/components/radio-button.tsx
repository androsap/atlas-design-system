"use client"

import { cn } from "../lib/utils.js"
import { forwardRef, InputHTMLAttributes, useId } from "react"

export type RadioColor = "primary" | "danger" | "neutral"
export type RadioSize = "sm" | "md"

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
    color?: RadioColor
    size?: RadioSize
    label?: string
    helperText?: string
    /** Force the focused visual state, independent of real DOM focus. */
    focused?: boolean
}

const BOX_SIZE: Record<RadioSize, string> = { sm: "h-4 w-4", md: "h-5 w-5" }
const DOT_SIZE: Record<RadioSize, string> = { sm: "h-1.5 w-1.5", md: "h-2 w-2" }

// The ring and dot share one color and sit on a transparent/neutral0
// background — unlike Checkbox, nothing here is a solid fill needing a
// contrasting icon on top, so (unlike Checkbox's neutral variant) there's
// no white-on-white risk to work around in dark mode: --neutral900 and
// --neutral0 stay opposite ends of the scale in both themes.
const COLOR_CLASSES: Record<RadioColor, string> = {
    primary: cn(
        "border-[var(--neutral300)]",
        "peer-checked:border-[var(--primary500)]",
        "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--primary300)]"
    ),
    danger: cn(
        "border-[var(--danger300)]",
        "peer-checked:border-[var(--danger500)]",
        "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--danger300)]"
    ),
    neutral: cn(
        "border-[var(--neutral300)]",
        "peer-checked:border-[var(--neutral900)]",
        "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--neutral400)]"
    ),
}

const DOT_COLOR_CLASSES: Record<RadioColor, string> = {
    primary: "bg-[var(--primary500)]",
    danger: "bg-[var(--danger500)]",
    neutral: "bg-[var(--neutral900)]",
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(function RadioButton(
    { color = "primary", size = "md", label, helperText, focused = false, className, id, disabled, ...props },
    ref
) {
    const generatedId = useId()
    const inputId = id ?? generatedId

    return (
        <div className={cn("flex gap-2.5", className)}>
            <span
                className={cn("relative mt-0.5 inline-flex shrink-0", BOX_SIZE[size], disabled && "opacity-40")}
            >
                <input
                    ref={ref}
                    type="radio"
                    id={inputId}
                    disabled={disabled}
                    className="peer absolute inset-0 h-full w-full cursor-pointer appearance-none disabled:cursor-not-allowed"
                    {...props}
                />
                <span
                    className={cn(
                        "pointer-events-none absolute inset-0 rounded-full border-2 bg-[var(--neutral0)] transition-colors",
                        COLOR_CLASSES[color],
                        focused && "ring-2 ring-[var(--primary300)]"
                    )}
                />
                {/* Sibling of the input, not nested in the ring span above —
                    peer-* only matches direct siblings. */}
                <span
                    className={cn(
                        "pointer-events-none absolute inset-0 m-auto hidden rounded-full peer-checked:block",
                        DOT_SIZE[size],
                        DOT_COLOR_CLASSES[color]
                    )}
                />
            </span>
            {(label || helperText) && (
                <label
                    htmlFor={inputId}
                    className={cn("flex flex-col", disabled ? "cursor-not-allowed" : "cursor-pointer")}
                >
                    {label && (
                        <span
                            className={cn(
                                "text-sm font-medium",
                                disabled ? "text-[var(--neutral300)]" : "text-[var(--neutral900)]"
                            )}
                        >
                            {label}
                        </span>
                    )}
                    {helperText && (
                        <span
                            className={cn(
                                "text-xs",
                                disabled
                                    ? "text-[var(--neutral300)]"
                                    : color === "danger"
                                      ? "text-[var(--danger500)]"
                                      : "text-[var(--neutral400)]"
                            )}
                        >
                            {helperText}
                        </span>
                    )}
                </label>
            )}
        </div>
    )
})
