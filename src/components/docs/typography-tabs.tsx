"use client"

import * as Tabs from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const triggerClass = cn(
    "-mb-px border-b-2 border-transparent px-1 pb-3 text-sm font-medium text-[var(--neutral500)] transition-colors",
    "data-[state=active]:border-[var(--primary500)] data-[state=active]:text-[var(--primary600)]",
    "hover:text-[var(--neutral900)]"
)

export function TypographyTabs({
    typefaces,
    scale,
}: {
    typefaces: React.ReactNode
    scale: React.ReactNode
}) {
    return (
        <Tabs.Root defaultValue="typefaces" className="mt-10">
            <Tabs.List className="flex gap-6 border-b border-[var(--neutral100)]">
                <Tabs.Trigger value="typefaces" className={triggerClass}>
                    Typefaces
                </Tabs.Trigger>
                <Tabs.Trigger value="scale" className={triggerClass}>
                    Type scale
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="typefaces" className="pt-10">
                {typefaces}
            </Tabs.Content>
            <Tabs.Content value="scale" className="pt-10">
                {scale}
            </Tabs.Content>
        </Tabs.Root>
    )
}
