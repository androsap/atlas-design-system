"use client"
import * as Tabs from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const TABS = [
    { value: "overview", label: "Overview" },
    { value: "anatomy", label: "Anatomy" },
    { value: "variants", label: "Variants & states" },
    { value: "usage", label: "Usage guidelines" },
    { value: "accessibility", label: "Accessibility" },
    { value: "playground", label: "Playground" },
    { value: "code", label: "Code" },
]

export function DocsTabs({ children }: { children: React.ReactNode[] }) {
    return (
        <Tabs.Root defaultValue="overview" className="mt-10">
            <Tabs.List className="flex gap-1 overflow-x-auto border-b border-[var(--neutral100)]">
                {TABS.map((tab) => (
                    <Tabs.Trigger
                        key={tab.value}
                        value={tab.value}
                        className={cn(
                            "cursor-pointer border-b-2 border-transparent px-3.5 py-2 text-sm whitespace-nowrap text-[var(--neutral500)] transition-colors",
                            "hover:text-[var(--neutral900)]",
                            "data-[state=inactive]:hover:border-[var(--neutral200)]",
                            "data-[state=active]:text-[var(--neutral900)] data-[state=active]:border-[var(--neutral900)]"
                        )}
                    >
                        {tab.label}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>
            {TABS.map((tab, i) => (
                <Tabs.Content key={tab.value} value={tab.value} className="pt-10">
                    {children[i]}
                </Tabs.Content>
            ))}
        </Tabs.Root>
    )
}