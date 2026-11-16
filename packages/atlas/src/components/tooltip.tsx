"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { type LucideIcon } from "lucide-react"
import { cn } from "../lib/utils.js"

export const TooltipProvider = TooltipPrimitive.Provider
export const Tooltip = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

export type TooltipVariant = "dark" | "light"

/**
 * Both variants are built from the same semantic --neutral tokens the rest
 * of Atlas uses (see Button's "neutral" color / Checkbox's "neutral" color
 * for the same pattern), so they invert safely in dark mode instead of
 * being a hardcoded color. "dark" is the inverse-surface style, "light" is
 * the bordered on-surface style — which one is literally dark depends on
 * the active page theme, by design.
 */
export const TOOLTIP_VARIANT_CLASSES: Record<TooltipVariant, string> = {
    dark: "border border-transparent bg-[var(--neutral900)] text-[var(--background)]",
    light: "border border-[var(--neutral100)] bg-[var(--neutral0)] text-[var(--neutral900)]",
}

export const TOOLTIP_ARROW_CLASSES: Record<TooltipVariant, string> = {
    dark: "fill-[var(--neutral900)]",
    light: "fill-[var(--neutral0)]",
}

export interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
    variant?: TooltipVariant
    icon?: LucideIcon
    title?: string
}

export const TooltipContent = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    TooltipContentProps
>(function TooltipContent(
    { className, variant = "dark", icon: Icon, title, children, sideOffset = 8, ...props },
    ref
) {
    return (
        <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
                ref={ref}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 max-w-[260px] rounded-[var(--radius-md)] px-3.5 py-2.5 shadow-lg",
                    TOOLTIP_VARIANT_CLASSES[variant],
                    className
                )}
                {...props}
            >
                {title || Icon ? (
                    <div className="flex items-start gap-2">
                        {Icon && <Icon size={16} className="mt-0.5 shrink-0" aria-hidden />}
                        <div className="space-y-0.5">
                            {title && <p className="text-sm font-semibold">{title}</p>}
                            {children && (
                                <p
                                    className={cn(
                                        "text-xs",
                                        variant === "dark" ? "opacity-75" : "text-[var(--neutral500)]"
                                    )}
                                >
                                    {children}
                                </p>
                            )}
                        </div>
                    </div>
                ) : (
                    <span className="text-sm font-medium">{children}</span>
                )}
                <TooltipPrimitive.Arrow width={14} height={7} className={TOOLTIP_ARROW_CLASSES[variant]} />
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
    )
})
