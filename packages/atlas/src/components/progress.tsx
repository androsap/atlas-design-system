"use client"

import { useId } from "react"
import { cn } from "../lib/utils.js"

export type ProgressColor = "neutral" | "info" | "danger"
export type ProgressLayout = "stacked" | "inline"

export interface ProgressProps {
    /** 0–100. Values outside that range are clamped. */
    value: number
    color?: ProgressColor
    /** "stacked" (default): label/percentage sit above a full-width bar.
     * "inline": label, bar and percentage share one row. */
    layout?: ProgressLayout
    label?: string
    helperText?: string
    showValue?: boolean
    className?: string
}

const COLOR_CLASSES: Record<ProgressColor, string> = {
    neutral: "bg-[var(--neutral900)]",
    info: "bg-[var(--info500)]",
    danger: "bg-[var(--danger500)]",
}

export function Progress({
    value,
    color = "neutral",
    layout = "stacked",
    label,
    helperText,
    showValue = true,
    className,
}: ProgressProps) {
    const clamped = Math.min(100, Math.max(0, value))
    const rounded = Math.round(clamped)
    const labelId = useId()

    const bar = (
        <div
            role="progressbar"
            aria-valuenow={rounded}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-labelledby={label ? labelId : undefined}
            aria-label={label ? undefined : `${rounded}%`}
            className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--neutral100)]"
        >
            <div
                className={cn("h-full rounded-full transition-[width] duration-300 ease-out", COLOR_CLASSES[color])}
                style={{ width: `${clamped}%` }}
            />
        </div>
    )

    if (layout === "inline") {
        return (
            <div className={cn("w-full", className)}>
                <div className="flex items-center gap-3">
                    {label && (
                        <span id={labelId} className="shrink-0 text-sm font-medium text-[var(--neutral900)]">
                            {label}
                        </span>
                    )}
                    {bar}
                    {showValue && <span className="shrink-0 text-sm text-[var(--neutral500)]">{rounded}%</span>}
                </div>
                {helperText && <p className="mt-1.5 text-xs text-[var(--neutral400)]">{helperText}</p>}
            </div>
        )
    }

    return (
        <div className={cn("w-full", className)}>
            {(label || showValue) && (
                <div className="mb-1.5 flex items-center justify-between text-sm">
                    {label && (
                        <span id={labelId} className="font-medium text-[var(--neutral900)]">
                            {label}
                        </span>
                    )}
                    {showValue && <span className="text-[var(--neutral500)]">{rounded}%</span>}
                </div>
            )}
            {bar}
            {helperText && <p className="mt-1.5 text-xs text-[var(--neutral400)]">{helperText}</p>}
        </div>
    )
}
