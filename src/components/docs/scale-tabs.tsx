"use client"

import * as Tabs from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const triggerClass = cn(
    "-mb-px cursor-pointer border-b-2 border-transparent px-1 pb-3 text-sm font-medium text-[var(--neutral500)] transition-colors",
    "hover:text-[var(--neutral900)]",
    "data-[state=inactive]:hover:border-[var(--neutral200)]",
    "data-[state=active]:border-[var(--primary500)] data-[state=active]:text-[var(--primary600)]"
)

export function ScaleTabs({
    sizing,
    spacing,
    radius,
}: {
    sizing: React.ReactNode
    spacing: React.ReactNode
    radius: React.ReactNode
}) {
    return (
        <Tabs.Root defaultValue="sizing" className="mt-10">
            <Tabs.List className="flex gap-6 border-b border-[var(--neutral100)]">
                <Tabs.Trigger value="sizing" className={triggerClass}>
                    Sizing
                </Tabs.Trigger>
                <Tabs.Trigger value="spacing" className={triggerClass}>
                    Spacing
                </Tabs.Trigger>
                <Tabs.Trigger value="radius" className={triggerClass}>
                    Radius
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="sizing" className="pt-10">
                {sizing}
            </Tabs.Content>
            <Tabs.Content value="spacing" className="pt-10">
                {spacing}
            </Tabs.Content>
            <Tabs.Content value="radius" className="pt-10">
                {radius}
            </Tabs.Content>
        </Tabs.Root>
    )
}
