import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CodeBlock } from "@/components/docs/code-block"
import { OnThisPageNav } from "@/components/docs/on-this-page-nav"

const STEPS = [
    { id: "prerequisites", label: "Prerequisites" },
    { id: "install-dependencies", label: "Install core dependencies" },
    { id: "setup-tokens", label: "Setup design tokens" },
    { id: "copy-component", label: "Copy your first component" },
    { id: "use-in-code", label: "Use it in code" },
    { id: "next-steps", label: "Next steps" },
]

const INSTALL_DEPS = `npm install clsx tailwind-merge`

const GLOBALS_CSS = `@import '../styles/tokens.css';
@import "tailwindcss";`

const UTILS_TS = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}`

const BUTTON_TSX = `import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"
import { type LucideIcon } from "lucide-react"

export type ButtonColor = "brand" | "neutral" | "danger" | "warning" | "success"
export type ButtonVariant = "primary" | "secondary" | "tertiary"
export type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColor
    variant?: ButtonVariant
    size?: ButtonSize
    leadingIcon?: LucideIcon
    trailingIcon?: LucideIcon
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: "gap-1.5 px-3 py-1.5 text-sm",
    md: "gap-1.5 px-4 py-2 text-sm",
    lg: "gap-2 px-5 py-2.5 text-base",
}

const ICON_SIZE: Record<ButtonSize, number> = { sm: 14, md: 16, lg: 18 }

// Filled (primary), Outline (secondary) and Text (tertiary) styles for
// each color family.
const COLOR_VARIANT_CLASSES: Record<ButtonColor, Record<ButtonVariant, string>> = {
    brand: {
        primary: "bg-[var(--primary500)] text-white hover:bg-[var(--primary600)] active:bg-[var(--primary700)] focus-visible:ring-[var(--primary300)]",
        secondary: "border border-[var(--primary500)] text-[var(--primary600)] hover:bg-[var(--primary50)] active:bg-[var(--primary100)] focus-visible:ring-[var(--primary300)]",
        tertiary: "text-[var(--primary600)] hover:bg-[var(--primary50)] active:bg-[var(--primary100)] focus-visible:ring-[var(--primary300)]",
    },
    neutral: {
        primary: "bg-[var(--neutral900)] text-white hover:bg-[var(--neutral800)] active:bg-[var(--neutral950)] focus-visible:ring-[var(--neutral400)]",
        secondary: "border border-[var(--neutral300)] text-[var(--neutral900)] hover:bg-[var(--neutral50)] active:bg-[var(--neutral100)] focus-visible:ring-[var(--neutral400)]",
        tertiary: "text-[var(--neutral900)] hover:bg-[var(--neutral50)] active:bg-[var(--neutral100)] focus-visible:ring-[var(--neutral400)]",
    },
    danger: {
        primary: "bg-[var(--danger500)] text-white hover:bg-[var(--danger600)] active:bg-[var(--danger700)] focus-visible:ring-[var(--danger300)]",
        secondary: "border border-[var(--danger500)] text-[var(--danger600)] hover:bg-[var(--danger50)] active:bg-[var(--danger100)] focus-visible:ring-[var(--danger300)]",
        tertiary: "text-[var(--danger600)] hover:bg-[var(--danger50)] active:bg-[var(--danger100)] focus-visible:ring-[var(--danger300)]",
    },
    warning: {
        primary: "bg-[var(--warning500)] text-white hover:bg-[var(--warning600)] active:bg-[var(--warning700)] focus-visible:ring-[var(--warning300)]",
        secondary: "border border-[var(--warning500)] text-[var(--warning600)] hover:bg-[var(--warning50)] active:bg-[var(--warning100)] focus-visible:ring-[var(--warning300)]",
        tertiary: "text-[var(--warning600)] hover:bg-[var(--warning50)] active:bg-[var(--warning100)] focus-visible:ring-[var(--warning300)]",
    },
    success: {
        primary: "bg-[var(--success500)] text-white hover:bg-[var(--success600)] active:bg-[var(--success700)] focus-visible:ring-[var(--success300)]",
        secondary: "border border-[var(--success500)] text-[var(--success600)] hover:bg-[var(--success50)] active:bg-[var(--success100)] focus-visible:ring-[var(--success300)]",
        tertiary: "text-[var(--success600)] hover:bg-[var(--success50)] active:bg-[var(--success100)] focus-visible:ring-[var(--success300)]",
    },
}

export function Button({
    color = "brand",
    variant = "primary",
    size = "md",
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    className,
    children,
    ...props
}: ButtonProps) {
    const iconSize = ICON_SIZE[size]
    return (
        <button
            className={cn(
                "inline-flex cursor-pointer items-center justify-center rounded-[var(--radius-md)] font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                "disabled:pointer-events-none disabled:opacity-40",
                COLOR_VARIANT_CLASSES[color][variant],
                SIZE_CLASSES[size],
                className
            )}
            {...props}
        >
            {LeadingIcon && <LeadingIcon size={iconSize} aria-hidden />}
            {children}
            {TrailingIcon && <TrailingIcon size={iconSize} aria-hidden />}
        </button>
    )
}`

const USAGE_TSX = `import { Button } from "@/components/ui/button"

export default function Page() {
    return <Button variant="primary">Get started</Button>
}`

function StepCta({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-[var(--neutral200)] px-5 py-2.5 text-sm font-semibold text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)]"
        >
            {children}
            <ArrowRight size={16} />
        </Link>
    )
}

function Step({
    number,
    id,
    title,
    children,
}: {
    number: number
    id: string
    title: string
    children: React.ReactNode
}) {
    return (
        <div id={id} className="scroll-mt-24 border-t border-[var(--neutral100)] py-10 first:border-t-0 first:pt-0">
            <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold text-[var(--secondary600)]">
                    {String(number).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-semibold text-[var(--neutral900)]">{title}</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm text-[var(--neutral600)]">{children}</div>
        </div>
    )
}

export default function GettingStartedPage() {
    return (
        <div className="mx-auto w-full max-w-7xl px-6 py-10 text-[var(--neutral900)] md:pr-10 md:pl-[52px]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Getting started</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Add Atlas to your project
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Atlas isn&apos;t an npm package — components are copied straight into your
                    codebase, the same way shadcn/ui works. You own the code, so you can change
                    anything without waiting on a release.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_200px]">
                <div className="min-w-0 pl-8 md:pl-12">
                    <Step number={1} id="prerequisites" title="Prerequisites">
                        <p>Make sure you already have a project with:</p>
                        <ul className="list-inside list-disc space-y-1">
                            <li>Next.js (App Router) with TypeScript</li>
                            <li>Tailwind CSS v4 configured</li>
                        </ul>
                        <p>
                            This site itself runs on that exact stack — Next.js{" "}
                            <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">16</code>,
                            React{" "}
                            <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">19</code>,
                            Tailwind{" "}
                            <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">v4</code>.
                        </p>
                    </Step>

                    <Step number={2} id="install-dependencies" title="Install core dependencies">
                        <p>
                            Atlas components lean on two small utilities to merge Tailwind classes
                            safely — not the design system itself, since there is no design
                            system package to install.
                        </p>
                        <CodeBlock code={INSTALL_DEPS} lang="bash" />
                    </Step>

                    <Step number={3} id="setup-tokens" title="Setup design tokens">
                        <p>
                            Copy{" "}
                            <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">
                                src/styles/tokens.css
                            </code>{" "}
                            from this repo into your project, then import it before Tailwind in
                            your global stylesheet:
                        </p>
                        <CodeBlock code={GLOBALS_CSS} lang="css" />
                        <p>
                            Every component reads colors and radii from these tokens as CSS
                            variables (e.g. <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">var(--primary500)</code>),
                            so this step has to come before you copy any component.
                        </p>
                        <StepCta href="/foundations">Explore foundations</StepCta>
                    </Step>

                    <Step number={4} id="copy-component" title="Copy your first component">
                        <p>
                            Start with Button. Create{" "}
                            <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">
                                src/lib/utils.ts
                            </code>
                            :
                        </p>
                        <CodeBlock code={UTILS_TS} lang="tsx" />
                        <p>
                            Then create{" "}
                            <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">
                                src/components/ui/button.tsx
                            </code>{" "}
                            — this is the exact source from{" "}
                            <Link href="/components/button" className="text-[var(--text-link)] hover:underline">
                                the Button page
                            </Link>
                            :
                        </p>
                        <CodeBlock code={BUTTON_TSX} lang="tsx" />
                        <StepCta href="/components">Browse components</StepCta>
                    </Step>

                    <Step number={5} id="use-in-code" title="Use it in code">
                        <p>Import and render it like any other component:</p>
                        <CodeBlock code={USAGE_TSX} lang="tsx" />
                    </Step>

                    <Step number={6} id="next-steps" title="Next steps">
                        <p>From here:</p>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/foundations" className="text-[var(--text-link)] hover:underline">
                                    Foundations
                                </Link>{" "}
                                — color, typography and the rest of the token system every
                                component is built from.
                            </li>
                            <li>
                                <Link href="/components" className="text-[var(--text-link)] hover:underline">
                                    Components
                                </Link>{" "}
                                — browse what&apos;s ready to copy next.
                            </li>
                        </ul>
                    </Step>
                </div>

                {/* On this page */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--neutral400)]">
                            On this page
                        </p>
                        <OnThisPageNav items={STEPS} />
                    </div>
                </aside>
            </div>
        </div>
    )
}
