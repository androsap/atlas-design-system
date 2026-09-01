import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { BadgePlayground } from "@/components/docs/badge-playground"
import { BadgeVariantMatrix } from "@/components/docs/badge-variant-matrix"
import { BadgeCartDemo, BadgeStatusDemo, BadgeAnatomyDemo } from "@/components/docs/badge-demo"

const USAGE_DO = [
    "Use Fill for a count or status that needs to win the eye immediately — a cart count, an unread total.",
    "Use Outline or Light when several badges sit close together and a row of solid-fill pills would compete for attention.",
    "Use dot for presence or an unread hint next to something that already has its own label — a name, a nav item.",
    "Keep the label to a number or a word or two; anything longer belongs in the element it's attached to.",
]

const USAGE_DONT = [
    "Don't use Badge as a button — it's purely informational and never manages its own click or selection state.",
    "Don't use Danger for anything that isn't actually urgent; reserve it so it still means something when it appears.",
    "Don't hide a count entirely inside color — pair it with a number or label wherever the value itself matters.",
    "Don't stack more than one badge on the same corner of an element; combine them into one instead.",
]

const ACCESSIBILITY_NOTES = [
    "Badge renders as a plain <span> — it carries no interactive role, so it never steals a tab stop or a click.",
    "A dot badge gets role=\"status\" and an aria-label from its children, so \"Online\" is still announced even though only a colored dot is visible.",
    "Color is never the only signal: every variant pairs its color with a label or a count, not a bare tint.",
    "When a badge sits on top of another control (like the cart icon here), the count reads out as part of that control's own accessible name — attach your own aria-label to the control, not the badge.",
]

const IMPORT_CODE = `import { Badge } from "@/components/ui/badge"

export function CartIcon({ count }: { count: number }) {
    return (
        <div className="relative inline-flex">
            <ShoppingCart size={20} />
            {count > 0 && (
                <Badge color="danger" size="sm" className="absolute -top-2 -right-2">
                    {count}
                </Badge>
            )}
        </div>
    )
}

// A minimal presence indicator next to a label:
<Badge dot color="success">Online</Badge>`

export default function BadgePage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Badge
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    A small, purely informational label for a count or a status — like the number
                    of items in a cart, or whether something is featured, in seven colors and
                    three styles.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <p className="max-w-2xl text-[var(--neutral600)]">
                        Badge displays information, it doesn&apos;t collect it — a count that
                        updates as state changes elsewhere, or a status dot next to a label.
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <h3 className="text-base font-semibold text-[var(--neutral900)]">Count badge</h3>
                            <p className="mt-1 text-sm text-[var(--neutral500)]">
                                A real cart count — the badge tracks state, and disappears at zero.
                            </p>
                            <div className="mt-4 flex min-h-[132px] items-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-6">
                                <div className="w-full">
                                    <BadgeCartDemo />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[var(--neutral900)]">Status dot</h3>
                            <p className="mt-1 text-sm text-[var(--neutral500)]">
                                A minimal presence indicator sitting next to its own label.
                            </p>
                            <div className="mt-4 flex min-h-[132px] items-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-6">
                                <div className="w-full">
                                    <BadgeStatusDemo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10 flex items-center justify-center">
                        <BadgeAnatomyDemo />
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Icon</span> —
                                optional, reinforces what the badge is about.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Label</span> —
                                a short word or a number; never a sentence.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Shape</span> —
                                always a plain, non-interactive pill — no hover or focus state of
                                its own.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        Every color (Neutral, Brand-primary, Brand-secondary, Info, Success,
                        Warning, Danger) in three styles (Fill, Outline, Light), across three
                        sizes.
                    </p>
                    <BadgeVariantMatrix />
                </div>

                {/* Usage guidelines */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="rounded-xl border border-[var(--neutral100)] p-5">
                        <p className="mb-3 text-sm font-semibold text-[var(--neutral900)]">Do</p>
                        <ul className="space-y-3">
                            {USAGE_DO.map((item) => (
                                <li key={item} className="flex gap-2 text-sm text-[var(--neutral600)]">
                                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--success500)]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-xl border border-[var(--neutral100)] p-5">
                        <p className="mb-3 text-sm font-semibold text-[var(--neutral900)]">Don&apos;t</p>
                        <ul className="space-y-3">
                            {USAGE_DONT.map((item) => (
                                <li key={item} className="flex gap-2 text-sm text-[var(--neutral600)]">
                                    <XCircle size={16} className="mt-0.5 shrink-0 text-[var(--danger500)]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Accessibility */}
                <div>
                    <ul className="max-w-2xl space-y-3">
                        {ACCESSIBILITY_NOTES.map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-[var(--neutral600)]">
                                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--primary500)]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Playground */}
                <BadgePlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Badge is a plain, stateless span — position it yourself with a wrapper
                        like the cart icon here, or drop it inline next to a label.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
