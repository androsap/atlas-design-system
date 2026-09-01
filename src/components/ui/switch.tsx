"use client"

import { forwardRef, useId, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export type SwitchColor = "neutral" | "primary" | "status"
export type SwitchSize = "sm" | "md"

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
    color?: SwitchColor
    size?: SwitchSize
    label?: string
    helperText?: string
    /** Docs-only: force the focus-visible ring without real keyboard focus. */
    focused?: boolean
}

const TRACK_SIZE: Record<SwitchSize, string> = { sm: "h-5 w-9", md: "h-6 w-11" }
const THUMB_SIZE: Record<SwitchSize, string> = { sm: "h-4 w-4", md: "h-5 w-5" }
const THUMB_TRAVEL: Record<SwitchSize, string> = { sm: "peer-checked:translate-x-4", md: "peer-checked:translate-x-5" }

// Off is always a neutral, inactive gray regardless of color — a switch
// being off doesn't need a semantic tint until it's turned on. "status" is
// the deliberate exception: its off state is itself worth flagging (e.g. a
// safety feature currently disabled), so it uses danger red instead of
// gray, and success green once on, instead of the color's own brand shade.
const TRACK_OFF_CLASSES: Record<SwitchColor, string> = {
    neutral: "bg-[var(--neutral200)]",
    primary: "bg-[var(--neutral200)]",
    status: "bg-[var(--danger500)]",
}

const TRACK_ON_CLASSES: Record<SwitchColor, string> = {
    neutral: "peer-checked:bg-[var(--neutral900)]",
    primary: "peer-checked:bg-[var(--primary500)]",
    status: "peer-checked:bg-[var(--success500)]",
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
    { color = "neutral", size = "md", label, helperText, focused = false, className, id, disabled, ...props },
    ref
) {
    const generatedId = useId()
    const inputId = id ?? generatedId

    return (
        <div className={cn("flex items-start gap-2.5", className)}>
            <span className={cn("relative inline-flex shrink-0", TRACK_SIZE[size], disabled && "opacity-40")}>
                <input
                    ref={ref}
                    type="checkbox"
                    role="switch"
                    id={inputId}
                    disabled={disabled}
                    className="peer absolute inset-0 z-10 h-full w-full cursor-pointer appearance-none disabled:cursor-not-allowed"
                    {...props}
                />
                {/* Track and thumb are both direct siblings of the input —
                    not nested inside each other — since peer-* only matches
                    a direct sibling of .peer. */}
                <span
                    className={cn(
                        "pointer-events-none absolute inset-0 rounded-full transition-colors",
                        TRACK_OFF_CLASSES[color],
                        TRACK_ON_CLASSES[color],
                        "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--primary300)] peer-focus-visible:ring-offset-2",
                        focused && "ring-2 ring-[var(--primary300)] ring-offset-2"
                    )}
                />
                <span
                    className={cn(
                        "pointer-events-none absolute top-1/2 left-0.5 -translate-y-1/2 rounded-full bg-[var(--neutral0)] shadow-sm transition-transform",
                        THUMB_SIZE[size],
                        THUMB_TRAVEL[size]
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
                            className={cn("text-xs", disabled ? "text-[var(--neutral300)]" : "text-[var(--neutral400)]")}
                        >
                            {helperText}
                        </span>
                    )}
                </label>
            )}
        </div>
    )
})
