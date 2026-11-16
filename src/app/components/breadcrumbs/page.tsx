import { CheckCircle2, XCircle, Home } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { BreadcrumbsPlayground } from "@/components/docs/breadcrumbs-playground"
import { BreadcrumbsVariantMatrix } from "@/components/docs/breadcrumbs-variant-matrix"
import { Breadcrumbs } from "@asyst/atlas"

const USAGE_DO = [
    "Use Breadcrumbs for content that lives inside a real hierarchy — a category tree, nested settings, a multi-step location.",
    "Make every item except the current page a real link back to that level.",
    "Keep labels short — the actual page title, not a description of it.",
    "Let the last item stay unlinked and visually distinct — it's where the user already is.",
]

const USAGE_DONT = [
    "Don't use Breadcrumbs as a substitute for a Back button when there's no real hierarchy underneath it.",
    "Don't make the current page a clickable link to itself.",
    "Don't cram in every ancestor on a deep tree; collapse the middle if the trail gets long.",
    "Don't rely on Breadcrumbs as the only way to navigate up — keep primary navigation available too.",
]

const ACCESSIBILITY_NOTES = [
    "The trail sits in a <nav aria-label=\"Breadcrumb\">, so assistive tech can jump straight to it and announce what it is.",
    "The current page gets aria-current=\"page\" on a plain <span> — never a link to itself.",
    "Every other item is a real <Link>, reachable and operable from the keyboard alone, with a visible focus ring.",
    "Dividers are decorative chevrons (aria-hidden) — they don't get read out between every item.",
    "An icon-only crumb (like a Home icon with no visible label) keeps its label for assistive tech via a visually-hidden span, not just an icon with no name at all.",
]

const IMPORT_CODE = `import { Home } from "lucide-react"
import { Breadcrumbs } from "@asyst/atlas"

export function Example() {
    return (
        <Breadcrumbs
            items={[
                { label: "Home", href: "/", icon: Home },
                { label: "Components", href: "/components" },
                { label: "Button" },
            ]}
        />
    )
}`

export default function BreadcrumbsPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Breadcrumbs
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Shows the current page&apos;s location within a hierarchy, and lets a user
                    jump back to any level above it — every link here really navigates.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <div>
                        <p className="max-w-2xl text-[var(--neutral600)]">
                            Every item but the last is a real link — click Home or Components
                            below and you&apos;ll actually navigate there.
                        </p>
                        <div className="mt-4 rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8">
                            <Breadcrumbs
                                items={[
                                    { label: "Home", href: "/", icon: Home },
                                    { label: "Components", href: "/components" },
                                    { label: "Button" },
                                ]}
                            />
                        </div>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10 flex items-center justify-center">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/", icon: Home },
                                { label: "Components", href: "/components" },
                                { label: "Button" },
                            ]}
                        />
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Icon</span> —
                                optional, usually only on the first (root) item.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Item link</span>{" "}
                                — a real link back to that level.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Divider</span> —
                                a decorative chevron separating each level.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                4
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Current page</span>{" "}
                                — the last item; bold, unlinked, aria-current=&quot;page&quot;.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        A single crumb across Default, Hover and Active — then real trails at a
                        few common depths.
                    </p>
                    <BreadcrumbsVariantMatrix />
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
                <BreadcrumbsPlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Pass items in order from the root down — the last one renders as the
                        unlinked current page automatically.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
