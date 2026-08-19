"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function OnThisPageNav({ items }: { items: { id: string; label: string }[] }) {
    const [activeId, setActiveId] = useState(items[0]?.id ?? null)

    useEffect(() => {
        const elements = items
            .map(({ id }) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        if (elements.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
        )

        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [items])

    return (
        <nav className="mt-3 flex flex-col gap-0.5 border-l border-[var(--neutral150)] text-sm">
            {items.map(({ id, label }) => {
                const isActive = activeId === id
                return (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={cn(
                            "-ml-px border-l-2 py-1.5 pl-4 transition-colors",
                            isActive
                                ? "border-[var(--primary500)] font-medium text-[var(--primary600)]"
                                : "border-transparent text-[var(--neutral500)] hover:border-[var(--neutral300)] hover:text-[var(--neutral900)]"
                        )}
                    >
                        {label}
                    </a>
                )
            })}
        </nav>
    )
}
