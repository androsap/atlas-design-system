"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type FoundationStatus = "ready" | "soon"

// Explicitly widened to FoundationStatus: every entry today happens to be
// "ready", and without this annotation TS narrows the whole array to the
// literal "ready", making the `=== "soon"` check below a type error. This
// keeps that branch valid for whenever a "soon" entry is added, the same
// way components-sidebar.tsx's (currently mixed) list works.
const FOUNDATIONS: { name: string; href: string; status: FoundationStatus }[] = [
    { name: "Overview", href: "/foundations", status: "ready" },
    { name: "Color", href: "/foundations/color", status: "ready" },
    { name: "Typography", href: "/foundations/typography", status: "ready" },
    { name: "Sizing, Spacing & Radius", href: "/foundations/sizing", status: "ready" },
    { name: "Icons, Logos & Flags", href: "/foundations/icons", status: "ready" },
    { name: "Elevation", href: "/foundations/elevation", status: "ready" },
    { name: "Avatar", href: "/foundations/avatar", status: "ready" },
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
