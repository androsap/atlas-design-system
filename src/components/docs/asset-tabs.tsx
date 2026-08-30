"use client"

import * as Tabs from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const triggerClass = cn(
    "-mb-px cursor-pointer border-b-2 border-transparent px-1 pb-3 text-sm font-medium text-[var(--neutral500)] transition-colors",
    "hover:text-[var(--neutral900)]",
    "data-[state=inactive]:hover:border-[var(--neutral200)]",
    "data-[state=active]:border-[var(--primary500)] data-[state=active]:text-[var(--primary600)]"
)

export function AssetTabs({
    icons,
    logos,
    flags,
}: {
    icons: React.ReactNode
    logos: React.ReactNode
    flags: React.ReactNode
}) {
    return (
        <Tabs.Root defaultValue="icons" className="mt-10">
            <Tabs.List className="flex gap-6 border-b border-[var(--neutral100)]">
                <Tabs.Trigger value="icons" className={triggerClass}>
                    Icons
                </Tabs.Trigger>
                <Tabs.Trigger value="logos" className={triggerClass}>
                    Logos
                </Tabs.Trigger>
                <Tabs.Trigger value="flags" className={triggerClass}>
                    Flags
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="icons" className="pt-10">
                {icons}
            </Tabs.Content>
            <Tabs.Content value="logos" className="pt-10">
                {logos}
            </Tabs.Content>
            <Tabs.Content value="flags" className="pt-10">
                {flags}
            </Tabs.Content>
        </Tabs.Root>
    )
}
