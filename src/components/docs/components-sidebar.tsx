"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const COMPONENTS = [
    { name: "Button", href: "/components/button", status: "ready" as const },
    { name: "Input", href: "#", status: "soon" as const },
    { name: "Badge", href: "#", status: "soon" as const },
    { name: "Card", href: "#", status: "soon" as const },
    { name: "Modal", href: "#", status: "soon" as const },
]

export function ComponentsSidebar() {
    const pathname = usePathname()

    return (
        <nav className="flex flex-col gap-0.5">
            {COMPONENTS.map((item) => {
                if (item.status === "soon") {
                    return (
                        <span
                            key={item.name}
                            className="flex items-center justify-between rounded-md px-3 py-1.5 text-sm text-[var(--neutral300)]"
                        >
                            {item.name}
                            <span className="text-[10px] font-medium uppercase tracking-wide">
                                Soon
                            </span>
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
                                ? "bg-[var(--primary50)] font-medium text-[var(--primary600)]"
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
