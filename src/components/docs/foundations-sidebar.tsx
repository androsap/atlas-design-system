"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const FOUNDATIONS = [
    { name: "Overview", href: "/foundations", status: "ready" as const },
    { name: "Color", href: "/foundations/color", status: "ready" as const },
    { name: "Typography", href: "/foundations/typography", status: "ready" as const },
    { name: "Sizing, Spacing & Radius", href: "/foundations/sizing", status: "ready" as const },
    { name: "Icons, Logos & Flags", href: "/foundations/icons", status: "ready" as const },
    { name: "Elevation", href: "/foundations/elevation", status: "ready" as const },
    { name: "Avatar", href: "/foundations/avatar", status: "ready" as const },
]

export function FoundationsSidebar() {
    const pathname = usePathname()

    return (
        <nav className="flex flex-col gap-1.5">
            {FOUNDATIONS.map((item) => {
                if (item.status === "soon") {
                    return (
                        <span
                            key={item.name}
                            className="rounded-md px-3 py-1.5 text-sm text-[var(--neutral300)]"
                        >
                            {item.name}
                        </span>
                    )
                }

                const active = pathname === item.href

                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "rounded-md px-3 py-1.5 text-sm transition-colors",
                            active
                                ? "bg-[var(--surface-accent-subtle)] font-medium text-[var(--text-accent-subtle-label)]"
                                : "text-[var(--neutral600)] hover:bg-[var(--neutral50)] hover:text-[var(--neutral900)]"
                        )}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </nav>
    )
}
