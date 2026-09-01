"use client"

import { useState } from "react"
import { ShoppingCart, Hash } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BadgeCartDemo() {
    const [count, setCount] = useState(3)

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative inline-flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--neutral200)] bg-[var(--neutral0)]">
                    <ShoppingCart size={20} className="text-[var(--neutral700)]" aria-hidden />
                </div>
                {count > 0 && (
                    <Badge
                        color="danger"
                        size="sm"
                        className="absolute -top-2 -right-2 min-w-[20px] px-1"
                    >
                        {count}
                    </Badge>
                )}
            </div>
            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={() => setCount((c) => Math.max(0, c - 1))}
                    disabled={count === 0}
                    className="cursor-pointer rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-3 py-1.5 text-sm text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Remove item
                </button>
                <button
                    type="button"
                    onClick={() => setCount((c) => c + 1)}
                    className="cursor-pointer rounded-[var(--radius-md)] bg-[var(--primary500)] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[var(--primary600)]"
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}

const PEOPLE = [
    { name: "Alicia", status: "online" as const },
    { name: "Bram", status: "away" as const },
    { name: "Citra", status: "offline" as const },
]

const STATUS_COLOR = { online: "success", away: "warning", offline: "neutral" } as const
const STATUS_LABEL = { online: "Online", away: "Away", offline: "Offline" } as const

export function BadgeStatusDemo() {
    return (
        <div className="flex flex-col gap-3">
            {PEOPLE.map((person) => (
                <div key={person.name} className="flex items-center gap-2.5">
                    <Badge dot color={STATUS_COLOR[person.status]} size="md">
                        {STATUS_LABEL[person.status]}
                    </Badge>
                    <span className="text-sm font-medium text-[var(--neutral900)]">{person.name}</span>
                    <span className="text-xs text-[var(--neutral400)]">— {STATUS_LABEL[person.status]}</span>
                </div>
            ))}
        </div>
    )
}

export function BadgeAnatomyDemo() {
    return (
        <Badge color="primary" leadingIcon={Hash}>
            Badge
        </Badge>
    )
}
