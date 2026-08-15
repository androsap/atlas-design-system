import Link from "next/link"
import Image from "next/image"
import { Palette, Type, Shapes, LayoutGrid, Accessibility, Braces } from "lucide-react"
import { cn } from "@/lib/utils"

const FOUNDATIONS = [
    {
        icon: Palette,
        title: "Color",
        description:
            "Neutral, brand and status palettes tuned for contrast and consistency across every surface.",
        href: "/foundations/color",
    },
    {
        icon: Type,
        title: "Typography",
        description:
            "A Manrope + Inter type scale from display headings down to captions and labels.",
        href: "/foundations/typography",
    },
    {
        icon: Shapes,
        title: "Iconography",
        description: "A shared icon set that keeps interface language consistent everywhere.",
        href: null,
    },
    {
        icon: LayoutGrid,
        title: "Grid & spacing",
        description: "Layout primitives and a spacing scale for building balanced, aligned pages.",
        href: null,
    },
    {
        icon: Accessibility,
        title: "Accessibility",
        description: "Guidelines baked into every foundation so accessible is the default.",
        href: null,
    },
    {
        icon: Braces,
        title: "Tokens",
        description: "Design tokens synced from Figma straight into code, no drift.",
        href: null,
    },
]

export default function FoundationsPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <div className="pointer-events-none absolute top-1/2 right-10 h-56 w-56 -translate-y-1/2 md:right-16 md:h-80 md:w-80">
                    <Image
                        src="/illustration_foundation.png"
                        alt=""
                        fill
                        sizes="320px"
                        className="object-contain opacity-80"
                    />
                    <div className="absolute inset-0 bg-[var(--surface-accent-subtle)]/40" />
                </div>
                <div className="relative max-w-xl">
                    <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Overview</p>
                    <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                        Foundations
                    </h1>
                    <p className="mt-4 text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                        Foundation elements provide the essential building blocks for creating cohesive
                        and visually appealing design across platforms, ensuring consistency, usability
                        and efficiency.
                    </p>
                </div>
            </div>

            {/* Foundations grid */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {FOUNDATIONS.map(({ icon: Icon, title, description, href }) => {
                    const cardClassName = cn(
                        "flex h-full min-h-[400px] flex-col rounded-xl border border-[var(--neutral100)] bg-[var(--surface-raised)] p-8 transition-colors",
                        href && "hover:border-[var(--primary300)]"
                    )
                    const content = (
                        <>
                            <div className="flex h-48 items-center justify-center rounded-lg border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)]">
                                <Icon size={48} className="text-[var(--icon-accent-subtle)]" strokeWidth={1.5} />
                            </div>
                            <p className="mt-6 text-sm font-semibold text-[var(--neutral900)]">{title}</p>
                            <p className="mt-2 text-sm text-[var(--neutral500)]">{description}</p>
                            {href && (
                                <span className="mt-auto inline-block w-fit pt-8 text-sm font-medium text-[var(--text-link)]">
                                    see more
                                </span>
                            )}
                        </>
                    )

                    return href ? (
                        <Link key={title} href={href} className={cardClassName}>
                            {content}
                        </Link>
                    ) : (
                        <div key={title} className={cardClassName}>
                            {content}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
