import Link from "next/link"
import Image from "next/image"
import {
    Palette,
    Type,
    Shapes,
    LayoutGrid,
    Accessibility,
    Braces,
    ArrowRight,
    Eye,
    Layers,
    TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const PRINCIPLES = [
    {
        icon: Eye,
        title: "Clarity",
        description: "Clear, unambiguous language and hierarchy for smooth communication across teams.",
    },
    {
        icon: Layers,
        title: "Consistency",
        description: "Shared components and patterns so every product speaks with one voice.",
    },
    {
        icon: TrendingUp,
        title: "Scalability",
        description: "Foundations built to support the growth of the whole ecosystem, not just one product.",
    },
    {
        icon: Accessibility,
        title: "Accessibility",
        description: "Inclusive experiences by default, designed to work for everyone.",
    },
]

const FOUNDATIONS = [
    {
        icon: Palette,
        title: "Color",
        description: "Neutral, brand and status palettes tuned for contrast and consistency.",
    },
    {
        icon: Type,
        title: "Typography",
        description: "A Manrope + Inter type scale from display headings down to captions.",
    },
    {
        icon: Shapes,
        title: "Iconography",
        description: "A shared icon set that keeps interface language consistent everywhere.",
    },
    {
        icon: LayoutGrid,
        title: "Grid & spacing",
        description: "Layout primitives and spacing scale for building balanced pages.",
    },
    {
        icon: Accessibility,
        title: "Accessibility",
        description: "Guidelines baked into every component so accessible is the default.",
    },
    {
        icon: Braces,
        title: "Tokens",
        description: "Design tokens synced from Figma straight into code, no drift.",
    },
]

export default function Home() {
    return (
        <div className="flex flex-1 flex-col">
            {/* Hero */}
            <section className="flex min-h-screen shrink-0 scroll-mt-16 snap-start items-center">
                <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-28">
                    <div className="flex flex-col items-start gap-6">
                        <span className="rounded-full border border-[var(--neutral150)] px-3 py-1 text-xs font-medium uppercase tracking-wide text-[var(--neutral600)]">
                            Asyst Design System
                        </span>
                        <h1
                            className="max-w-lg text-balance text-[var(--neutral900)]"
                            style={{ font: "var(--displayMd)" }}
                        >
                            One language. One foundation. Every experience.
                        </h1>
                        <div className="flex flex-wrap items-center gap-3">
                            <Link
                                href="/components/button"
                                className="rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                            >
                                Get started
                            </Link>
                            <Link
                                href="#foundations"
                                className="rounded-[var(--radius-md)] border border-[var(--neutral150)] px-5 py-3 text-sm font-medium text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)]"
                            >
                                Explore foundations
                            </Link>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/asyst_ribbon.svg"
                            alt="Asyst design system ribbon"
                            width={809}
                            height={822}
                            className="h-auto w-full"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="flex min-h-screen shrink-0 scroll-mt-16 snap-start items-center border-t border-[var(--neutral100)]">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
                        <p className="text-xs font-medium uppercase tracking-wide text-[var(--neutral400)]">
                            About Atlas
                        </p>
                        <p
                            className="max-w-2xl text-[var(--neutral600)]"
                            style={{ font: "var(--bodyLg)" }}
                        >
                            Atlas is the ASYST Technology Language and Design System — a unified
                            system for creating consistent, accessible and scalable digital
                            experiences across PT. Aero Systems Indonesia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="flex min-h-screen shrink-0 scroll-mt-16 snap-start items-center border-t border-[var(--neutral100)]">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="max-w-xl">
                        <h2 className="text-[var(--neutral900)]" style={{ font: "var(--headingMd)" }}>
                            Design principles
                        </h2>
                        <p className="mt-3 text-[var(--neutral500)]" style={{ font: "var(--bodyMd)" }}>
                            Inspired by a real-life atlas, Atlas unites principles, components,
                            patterns and guidelines into a single source of truth for design.
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {PRINCIPLES.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="flex flex-col items-start gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--secondary50)] text-[var(--secondary600)]">
                                    <Icon size={20} />
                                </span>
                                <p className="text-sm font-semibold text-[var(--neutral900)]">
                                    {title}
                                </p>
                                <p className="text-sm text-[var(--neutral500)]">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Foundations */}
            <section
                id="foundations"
                className="flex min-h-screen shrink-0 scroll-mt-16 snap-start items-center border-t border-[var(--neutral100)] bg-[var(--neutral25)]"
            >
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="max-w-xl">
                        <h2 className="text-[var(--neutral900)]" style={{ font: "var(--headingMd)" }}>
                            Foundations
                        </h2>
                        <p className="mt-3 text-[var(--neutral500)]" style={{ font: "var(--bodyMd)" }}>
                            The building blocks every Atlas component is made from — use this as
                            the only source of truth for design.
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {FOUNDATIONS.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral0)] p-6 transition-shadow hover:shadow-[var(--level2)]"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary50)] text-[var(--primary500)]">
                                    <Icon size={20} />
                                </span>
                                <p className="mt-4 text-sm font-semibold text-[var(--neutral900)]">
                                    {title}
                                </p>
                                <p className="mt-1.5 text-sm text-[var(--neutral500)]">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Components showcase */}
            <section className="flex min-h-screen shrink-0 scroll-mt-16 snap-start items-center border-t border-[var(--neutral100)]">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                        <div className="max-w-xl">
                            <h2 className="text-[var(--neutral900)]" style={{ font: "var(--headingMd)" }}>
                                Components
                            </h2>
                            <p className="mt-3 text-[var(--neutral500)]" style={{ font: "var(--bodyMd)" }}>
                                Production-ready building blocks, documented with usage guidelines
                                and accessibility notes.
                            </p>
                        </div>
                        <Link
                            href="/components/button"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary500)] hover:underline"
                        >
                            Browse all components
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="mt-10 rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                        <p className="mb-6 text-xs font-medium text-[var(--neutral500)]">Button</p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="ghost">Ghost</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA band */}
            <section className="flex min-h-screen shrink-0 scroll-mt-16 snap-start items-center border-t border-[var(--neutral100)] bg-[var(--primary900)]">
                <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
                    <div>
                        <h2 className="text-white" style={{ font: "var(--headingMd)" }}>
                            One language. One foundation. Every experience.
                        </h2>
                        <p className="mt-3 max-w-md text-[var(--primary100)]" style={{ font: "var(--bodyMd)" }}>
                            Browse the component library and keep every product across the
                            ecosystem speaking the same design language.
                        </p>
                    </div>
                    <Link
                        href="/components/button"
                        className="shrink-0 rounded-[var(--radius-md)] bg-white px-5 py-3 text-sm font-medium text-[var(--primary900)] transition-opacity hover:opacity-90"
                    >
                        Browse components
                    </Link>
                </div>
            </section>
        </div>
    )
}
