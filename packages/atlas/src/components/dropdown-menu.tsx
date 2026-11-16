"use client"

import * as RadixDropdown from "@radix-ui/react-dropdown-menu"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { type LucideIcon } from "lucide-react"
import { cn } from "../lib/utils.js"

export const DropdownMenu = RadixDropdown.Root
export const DropdownMenuTrigger = RadixDropdown.Trigger

export const DropdownMenuContent = forwardRef<
    ElementRef<typeof RadixDropdown.Content>,
    ComponentPropsWithoutRef<typeof RadixDropdown.Content>
>(function DropdownMenuContent({ className, sideOffset = 6, ...props }, ref) {
    return (
        <RadixDropdown.Portal>
            <RadixDropdown.Content
                ref={ref}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 min-w-[240px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--neutral100)] bg-[var(--neutral0)] p-1.5 shadow-xl",
                    className
                )}
                {...props}
            />
        </RadixDropdown.Portal>
    )
})

export const DropdownMenuLabel = forwardRef<
    ElementRef<typeof RadixDropdown.Label>,
    ComponentPropsWithoutRef<typeof RadixDropdown.Label>
>(function DropdownMenuLabel({ className, ...props }, ref) {
    return (
        <RadixDropdown.Label
            ref={ref}
            className={cn(
                "px-2.5 pt-1.5 pb-2 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase",
                className
            )}
            {...props}
        />
    )
})

export const DropdownMenuSeparator = forwardRef<
    ElementRef<typeof RadixDropdown.Separator>,
    ComponentPropsWithoutRef<typeof RadixDropdown.Separator>
>(function DropdownMenuSeparator({ className, ...props }, ref) {
    return <RadixDropdown.Separator ref={ref} className={cn("my-1.5 h-px bg-[var(--neutral100)]", className)} {...props} />
})

export type DropdownMenuItemVariant = "default" | "danger"

export interface DropdownMenuItemProps extends ComponentPropsWithoutRef<typeof RadixDropdown.Item> {
    variant?: DropdownMenuItemVariant
    /** Visually marks this as the currently active/selected item. */
    active?: boolean
    /** Docs-only: force the hover/highlighted look without real pointer
     * interaction, for a static side-by-side state comparison. */
    forceHighlighted?: boolean
    leadingIcon?: LucideIcon
    trailingIcon?: LucideIcon
}

export const DropdownMenuItem = forwardRef<ElementRef<typeof RadixDropdown.Item>, DropdownMenuItemProps>(
    function DropdownMenuItem(
        {
            className,
            variant = "default",
            active = false,
            forceHighlighted = false,
            leadingIcon: LeadingIcon,
            trailingIcon: TrailingIcon,
            children,
            ...props
        },
        ref
    ) {
        return (
            <RadixDropdown.Item
                ref={ref}
                className={cn(
                    "flex h-9 cursor-pointer items-center gap-2 rounded-[6px] px-2.5 text-sm outline-none transition-colors select-none",
                    "data-[highlighted]:bg-[var(--surface-accent-subtle)]",
                    forceHighlighted && "bg-[var(--surface-accent-subtle)]",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
                    variant === "danger"
                        ? "text-[var(--danger600)]"
                        : active
                          ? "font-medium text-[var(--primary600)]"
                          : "text-[var(--neutral900)]",
                    className
                )}
                {...props}
            >
                {LeadingIcon && <LeadingIcon size={16} className="shrink-0" aria-hidden />}
                <span className="flex-1 truncate">{children}</span>
                {TrailingIcon && <TrailingIcon size={16} className="shrink-0" aria-hidden />}
            </RadixDropdown.Item>
        )
    }
)
