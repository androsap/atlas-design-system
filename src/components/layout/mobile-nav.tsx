"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export interface MobileNavLink {
    label: string
    href: string
}

export function MobileNav({ links }: { links: MobileNavLink[] }) {
    const [open, setOpen] = useState(false)

    // Escape closes it, same as any other overlay in the app (Popover,
    // Dialog-style panels).
    useEffect(() => {
        if (!open) return
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false)
        }
        document.addEventListener("keydown", onKeyDown)
        return () => document.removeEventListener("keydown", onKeyDown)
    }, [open])

    // A full-screen menu shouldn't leave the page behind it scrollable.
    useEffect(() => {
        if (!open) return
        const previous = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = previous
        }
    }, [open])

    return (
        <div className="md:hidden">
            {/* z-50, above the full-screen overlay's z-40: the overlay covers the
                whole screen including the header, so the toggle needs to stay on
                top of it to remain visible and clickable as the close control. */}
            <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="relative z-50 flex h-9 w-9 cursor-pointer items-center justify-center rounded-[var(--radius-md)] text-[var(--neutral700)] transition-colors hover:bg-[var(--neutral50)]"
            >
                {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </button>

            {/* Portalled to <body> — the header has backdrop-blur (backdrop-filter),
                which per spec makes the header itself the containing block for any
                position:fixed descendant instead of the viewport, breaking a
                full-screen inset-0 overlay the same way it broke the old dropdown's
                sizing. Same fix as Radix's Portal use elsewhere in this app. */}
            {open &&
                createPortal(
                    <nav
                        aria-label="Mobile"
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--neutral0)]"
                    >
                        <ul className="flex flex-col items-center gap-3">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-[var(--radius-md)] px-8 py-4 text-3xl font-semibold text-[var(--neutral900)] transition-colors hover:text-[var(--primary500)]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>,
                    document.body
                )}
        </div>
    )
}
