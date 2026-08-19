"use client"

import { useState } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"
import { OnThisPageNav } from "@/components/docs/on-this-page-nav"

const triggerClass = cn(
    "-mb-px cursor-pointer border-b-2 border-transparent px-1 pb-3 text-sm font-medium text-[var(--neutral500)] transition-colors",
    "hover:text-[var(--neutral900)]",
    "data-[state=inactive]:hover:border-[var(--neutral200)]",
    "data-[state=active]:border-[var(--primary500)] data-[state=active]:text-[var(--primary600)]"
)

type Section = { id: string; label: string }

export function TypographyTabs({
    typefaces,
    scale,
    typefacesSections,
    scaleSections,
}: {
    typefaces: React.ReactNode
    scale: React.ReactNode
    typefacesSections: Section[]
    scaleSections: Section[]
}) {
    const [tab, setTab] = useState("typefaces")

    return (
        <Tabs.Root value={tab} onValueChange={setTab} className="mt-10">
            <Tabs.List className="flex gap-6 border-b border-[var(--neutral100)]">
                <Tabs.Trigger value="typefaces" className={triggerClass}>
                    Typefaces
                </Tabs.Trigger>
                <Tabs.Trigger value="scale" className={triggerClass}>
                    Type scale
                </Tabs.Trigger>
            </Tabs.List>

            <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-[1fr_200px]">
                <div className="min-w-0">
                    <Tabs.Content value="typefaces">{typefaces}</Tabs.Content>
                    <Tabs.Content value="scale">{scale}</Tabs.Content>
                </div>

                {/* On this page */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--neutral400)]">
                            On this page
                        </p>
                        <OnThisPageNav
                            key={tab}
                            items={tab === "typefaces" ? typefacesSections : scaleSections}
                        />
                    </div>
                </aside>
            </div>
        </Tabs.Root>
    )
}
