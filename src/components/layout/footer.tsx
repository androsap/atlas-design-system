import Link from "next/link"
import Image from "next/image"

const FOOTER_COLUMNS = [
    {
        title: "Design system",
        links: [
            { label: "Get started", href: "/getting-started" },
            { label: "Foundations", href: "/foundations" },
            { label: "Components", href: "/components" },
        ],
    },
    {
        title: "Resources",
        links: [{ label: "Changelog", href: "/changelog" }],
    },
    {
        title: "Company",
        links: [{ label: "About", href: "#" }],
    },
]

export function Footer() {
    return (
        <footer className="snap-end border-t border-[var(--neutral100)] bg-[var(--neutral0)]">
            <div className="mx-auto max-w-7xl px-6 py-12 md:pr-10 md:pl-[52px]">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                    <div className="col-span-2 sm:col-span-1">
                        <div className="flex items-center gap-2">
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
                            <span className="text-base font-semibold text-[var(--neutral900)]">
                                Atlas Design
                            </span>
                        </div>
                        <p className="mt-3 max-w-[220px] text-sm text-[var(--neutral500)]">
                            The single source of truth for design at PT. Aero Systems Indonesia.
                        </p>
                    </div>
                    {FOOTER_COLUMNS.map((col) => (
                        <div key={col.title}>
                            <p className="text-sm font-semibold text-[var(--neutral900)]">
                                {col.title}
                            </p>
                            <ul className="mt-3 flex flex-col gap-2">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[var(--neutral500)] transition-colors hover:text-[var(--neutral900)]"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-10 border-t border-[var(--neutral100)] pt-6">
                    <p className="text-xs text-[var(--neutral400)]">
                        © {new Date().getFullYear()} Atlas Design System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
