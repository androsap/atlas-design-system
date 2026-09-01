"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type ComponentStatus = "ready" | "soon"

// Explicitly widened to ComponentStatus: every entry is "ready" now that
// the last component has shipped, and without this annotation TS narrows
// the whole array to that one literal, making the `=== "soon"` check below
// a type error. Keeps that branch valid for whenever a new "soon" entry is
// added — same fix as foundations-sidebar.tsx.
const COMPONENTS: { name: string; href: string; status: ComponentStatus }[] = [
    { name: "Overview", href: "/components", status: "ready" },
    { name: "Button", href: "/components/button", status: "ready" },
    { name: "Input, Text Area", href: "/components/input", status: "ready" },
    { name: "Dropdown", href: "/components/dropdown", status: "ready" },
    { name: "Checkbox", href: "/components/checkbox", status: "ready" },
    { name: "Radio Button", href: "/components/radio-button", status: "ready" },
    { name: "Tooltip", href: "/components/tooltip", status: "ready" },
    { name: "Alert & Toast", href: "/components/alert-toast", status: "ready" },
    { name: "Chips", href: "/components/chips", status: "ready" },
    { name: "Badge", href: "/components/badge", status: "ready" },
    { name: "Switch", href: "/components/switch", status: "ready" },
    { name: "Breadcrumbs", href: "/components/breadcrumbs", status: "ready" },
    { name: "Date Picker", href: "/components/date-picker", status: "ready" },
    { name: "Progress", href: "/components/progress", status: "ready" },
    { name: "Spinner", href: "/components/spinner", status: "ready" },
    { name: "Uploader", href: "/components/uploader", status: "ready" },
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
