import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { HeroCursors } from "@/components/hero-cursors"
import { AnimatedGlobeBackground } from "@/components/animated-globe-background"
import { ScrollProgressDots } from "@/components/scroll-progress-dots"

const PRINCIPLES = [
    {
        illustration: "/clarity_illustration.png",
        title: "Clarity",
        description: "Clear, unambiguous language and hierarchy for smooth communication across teams.",
    },
    {
        illustration: "/consistency_illustration.png",
        title: "Consistency",
        description: "Shared components and patterns so every product speaks with one voice.",
    },
    {
        illustration: "/scalability_illustration.png",
        title: "Scalability",
        description: "Foundations built to support the growth of the whole ecosystem, not just one product.",
    },
    {
        illustration: "/accessibility_illustration.png",
        title: "Accessibility",
        description: "Inclusive experiences by default, designed to work for everyone.",
    },
]

export default function Home() {
    return (
        <div className="flex flex-1 flex-col">
            <ScrollProgressDots />

            {/* Hero */}
            <section id="hero" className="flex min-h-screen shrink-0 scroll-mt-16 snap-start items-center">
                <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:pr-10 md:pl-[52px] md:py-28">
                    <div className="relative flex flex-col items-start gap-6">
                        <HeroCursors />
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
                                href="/getting-started"
                                className="rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                            >
                                Get started
                            </Link>
                            <Link
                                href="/foundations"
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
            <section id="about" className="flex min-h-screen shrink-0 scroll-mt-16 snap-start items-center border-t border-[var(--neutral100)] bg-[var(--neutral25)]">
                <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:pr-10 md:pl-[52px]">
                    <Image
                        src="/illustration_1.png"
                        alt="Atlas design system illustration"
                        width={2008}
                        height={2007}
                        priority
                        className="h-auto w-full max-w-md"
                    />
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-[var(--neutral400)]">
                            About Atlas
                        </p>
                        <p
                            className="mt-4 max-w-md text-[var(--neutral600)]"
                            style={{ font: "var(--bodyLg)" }}
                        >
                            Atlas is the ASYST Technology Language and Design System — a unified
                            system for creating consistent, accessible and scalable digital
                            experiences across PT. Aero Systems Indonesia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Components showcase */}
            <section id="components" className="flex min-h-[600px] max-h-screen shrink-0 scroll-mt-16 snap-start flex items-start pt-16 overflow-hidden border-t border-[var(--neutral100)]">
                <div className="mx-auto grid w-full max-w-7xl items-start px-6 pt-28 md:grid-cols-2 md:pr-10 md:pl-[52px] md:pt-36">
                    <div className="relative bottom-30 z-10">
                        <h1
                            className="text-[var(--neutral900)]"
                            style={{ font: "var(--displayMd)" }}
                        >
                            Accelerating
                            <br />
                            <span className="whitespace-nowrap">workflow development</span>
                        </h1>
                        <p
                            className="mt-4 max-w-md text-[var(--neutral600)]"
                            style={{ font: "var(--bodyLg)" }}
                        >
                            Production-ready building blocks, documented with usage guidelines and
                            accessibility notes.
                        </p>
                        <Link
                            href="/components/button"
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--neutral200)] px-5 py-2.5 text-sm font-semibold text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)]"
                        >
                            Discover more
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="relative bottom-[-80px] right-[600px] [perspective:1800px] [perspective-origin:50%_20%]">
                        <Image
                            src="/ss-01-white.jpg"
                            alt="Atlas components preview"
                            width={1560}
                            height={860}
                            className="relative z-[200] max-w-none [transform-origin:top] [transform:rotateX(48deg)_rotateZ(-16deg)] rounded-2xl border border-[var(--neutral100)] shadow-xl [html[data-theme=dark]_&]:hidden"
                        />
                        <Image
                            src="/ss-01-black.jpg"
                            alt="Atlas components preview"
                            width={1560}
                            height={860}
                            className="relative z-[200] hidden max-w-none [transform-origin:top] [transform:rotateX(48deg)_rotateZ(-16deg)] rounded-2xl border border-[var(--neutral100)] shadow-xl [html[data-theme=dark]_&]:block"
                        />
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section id="principles" className="flex min-h-screen shrink-0 scroll-mt-16 snap-start items-center border-t border-[var(--neutral100)]">
                <div className="mx-auto max-w-7xl px-6 md:pr-10 md:pl-[52px]">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-[var(--neutral900)]" style={{ font: "var(--displayLg)" }}>
                            Design Principles
                        </h2>
                    </div>
                    <div className="py-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {PRINCIPLES.map(({ illustration, title, description }) => (
                            <div
                                key={title}
                                className="flex flex-col items-center rounded-2xl border border-[var(--neutral100)] p-6 text-center"
                            >
                                <Image src={illustration} alt="" width={80} height={80} />
                                <p className="mt-3 text-sm font-semibold text-[var(--neutral900)]">
                                    {title}
                                </p>
                                <p className="mt-1.5 text-sm text-[var(--neutral500)]">{description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mx-auto max-w-xl text-center">
                        <p className="mt-3 text-[var(--neutral500)]" style={{ font: "var(--bodyMd)" }}>
                            Inspired by a real-life atlas, Atlas unites principles, components,
                            patterns and guidelines into a single source of truth for design.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA band */}
            <section
                id="cta"
                className="relative flex min-h-screen shrink-0 scroll-mt-16 snap-start items-center overflow-hidden border-t border-[var(--neutral100)]"
                style={{
                    background:
                        "radial-gradient(ellipse 900px 700px at 8% 92%, #223160 0%, transparent 60%), var(--primary900)",
                }}
            >
                <AnimatedGlobeBackground />
                <div className="relative z-10 mx-auto w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:pr-10 md:pl-[52px]">
                    <div>
                        <h2 className="text-white" style={{ font: "var(--displayLg)" }}>
                            One language. <br />One foundation. <br />Every experience.
                        </h2>
                        <p className="mt-8 max-w-md text-[var(--primary100)]" style={{ font: "var(--bodyMd)" }}>
                            Browse the component library and keep every product across the
                            ecosystem speaking the same design language.
                        </p>
                    </div>
                    <div className="mt-8">
                        <Link
                            href="/components/button"
                            className="shrink-0 rounded-[var(--radius-md)] bg-white px-5 py-3 text-sm font-medium text-[var(--primary900)] transition-opacity hover:opacity-90"
                        >
                            Browse components
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
