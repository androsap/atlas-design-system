import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

const NAV_LINKS = [
    { label: "Foundations", href: "/foundations" },
    { label: "Components", href: "/components/button" },
    { label: "News", href: "/#foundations" },
]

export function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-[var(--neutral100)] bg-[var(--neutral0)]/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
                <Link href="/" className="flex items-center gap-2">
                    <span className="relative flex h-8 w-8 items-center justify-center">
                        <Image
                            src="/atlas_logo_black.svg"
                            alt="Atlas"
                            fill
                            className="object-contain [html[data-theme=dark]_&]:hidden"
                        />
                        <Image
                            src="/atlas_logo_white.svg"
                            alt="Atlas"
                            fill
                            className="hidden object-contain [html[data-theme=dark]_&]:block"
                        />
                    </span>
                    <span
                        className="text-lg text-[var(--neutral900)]"
                        style={{ font: "var(--titleMd)" }}
                    >
                        Atlas Design
                    </span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-[var(--neutral600)] transition-colors hover:text-[var(--neutral900)]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
