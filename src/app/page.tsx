import Link from "next/link"
import {
    Palette,
    Type,
    Shapes,
    LayoutGrid,
    Accessibility,
    Braces,
    ArrowRight,
    Layers,
    ShieldCheck,
    Code2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const VALUE_PROPS = [
    {
        icon: Layers,
        title: "Consistent",
        description: "One source of truth for color, type and spacing across every product.",
    },
    {
        icon: ShieldCheck,
        title: "Accessible by default",
        description: "Contrast, focus states and semantics are handled in the component, not bolted on.",
    },
    {
        icon: Code2,
        title: "Token-driven",
        description: "Styles map directly to design tokens, so Figma and code never drift apart.",
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
            <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-28">
                <div className="flex flex-col items-start gap-6">
                    <span className="rounded-full border border-[var(--neutral150)] px-3 py-1 text-xs font-medium text-[var(--neutral600)]">
                        v0.1 — early access
                    </span>
                    <h1
                        className="text-[var(--neutral900)]"
                        style={{ font: "var(--displayMd)" }}
                    >
                        Better products, built by design.
                    </h1>
                    <p className="max-w-md text-lg text-[var(--neutral500)]" style={{ font: "var(--bodyLg)" }}>
                        Atlas is a design system with foundations, components and guidelines
                        for building consistent, accessible product experiences.
                    </p>
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

                <div
                    className="rounded-2xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-6"
                    style={{ boxShadow: "var(--level2)" }}
                >
                    <p className="text-xs font-medium text-[var(--neutral500)]">tokens/color.ts</p>
                    <div className="mt-4 grid grid-cols-6 gap-2">
                        {["primary500", "secondary500", "info500", "success500", "warning500", "danger500"].map(
                            (token) => (
                                <div key={token} className="flex flex-col items-center gap-1.5">
                                    <span
                                        className="h-9 w-9 rounded-lg"
                                        style={{ background: `var(--${token})` }}
                                    />
                                </div>
                            )
                        )}
                    </div>
                    <div className="mt-6 rounded-lg bg-[var(--neutral900)] p-4">
                        <pre className="overflow-x-auto text-xs text-[var(--neutral100)]">
{`export const primary500 = "#3b58a7";
export const secondary500 = "#009688";`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Why Atlas */}
            <section className="border-t border-[var(--neutral100)]">
                <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                        {VALUE_PROPS.map(({ icon: Icon, title, description }) => (
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
            <section id="foundations" className="border-t border-[var(--neutral100)] bg-[var(--neutral25)]">
                <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
                    <div className="max-w-xl">
                        <h2 className="text-[var(--neutral900)]" style={{ font: "var(--headingMd)" }}>
                            Foundations
                        </h2>
                        <p className="mt-3 text-[var(--neutral500)]" style={{ font: "var(--bodyMd)" }}>
                            The building blocks every Atlas component is made from.
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
            <section className="border-t border-[var(--neutral100)]">
                <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
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
            <section className="border-t border-[var(--neutral100)] bg-[var(--primary900)]">
                <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10">
                    <div>
                        <h2 className="text-white" style={{ font: "var(--headingMd)" }}>
                            Start building with Atlas
                        </h2>
                        <p className="mt-3 max-w-md text-[var(--primary100)]" style={{ font: "var(--bodyMd)" }}>
                            Browse the component library and bring consistent design to your
                            next project.
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
