"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const COMPONENTS = [
    { name: "Overview", href: "/components", status: "ready" as const },
    { name: "Butt   on", href: "/components/button", status: "ready" as const },
    { name: "Input, Text Area", href: "#", status: "soon" as const },
    { name: "Dropdown", href: "#", status: "soon" as const },
    { name: "Checkbox", href: "#", status: "soon" as const },
    { name: "Radio Button", href: "#", status: "soon" as const },
    { name: "Tooltip", href: "#", status: "soon" as const },
    { name: "Alert & Toast", href: "#", status: "soon" as const },
    { name: "Chips", href: "#", status: "soon" as const },
    { name: "Badge", href: "#", status: "soon" as const },
    { name: "Switch", href: "#", status: "soon" as const },
    { name: "Breadcrumbs", href: "#", status: "soon" as const },
    { name: "Date Picker", href: "#", status: "soon" as const },
    { name: "Progress", href: "#", status: "soon" as const },
    { name: "Spinner", href: "#", status: "soon" as const },
    { name: "Uploader", href: "#", status: "soon" as const },
]

export function ComponentsSidebar() {
    const pathname = usePathname()

    return (
        <nav className="flex flex-col gap-1.5">
            {COMPONENTS.map((item) => {
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
