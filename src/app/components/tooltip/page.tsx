import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { TooltipPlayground } from "@/components/docs/tooltip-playground"
import { TooltipVariantMatrix } from "@/components/docs/tooltip-variant-matrix"
import { TooltipPlacementDemo } from "@/components/docs/tooltip-placement-demo"
import { TooltipOverviewDemo, TooltipAnatomyDemo } from "@/components/docs/tooltip-demo"

const USAGE_DO = [
    "Use Tooltip to add a short hint for an icon-only button or a truncated label — not to hide information a user needs to complete a task.",
    "Keep the content to one line, or a title plus one line of description — a tooltip is a hint, not a place for documentation.",
    "Pick a side (top, right, bottom, left) that keeps the bubble fully on screen and its arrow pointed at the trigger.",
    "Let it open on both hover and keyboard focus — that's the default behavior, don't design it away.",
]

const USAGE_DONT = [
    "Don't put interactive content — links, buttons, form fields — inside a tooltip; it isn't reachable once the trigger loses focus.",
    "Don't attach a tooltip to a disabled element; a disabled control receives no hover or focus events, so the hint never appears.",
    "Don't use Tooltip as the only way to reveal essential information — pair it with visible text wherever you can.",
    "Don't show more than one tooltip open at a time; keep exactly one hovered or focused target active.",
]

const ACCESSIBILITY_NOTES = [
    "Opens on both mouse hover and keyboard focus, so keyboard-only users see the same content sighted mouse users do.",
    "The trigger automatically gets aria-describedby pointing at the tooltip's id — no manual ARIA wiring needed.",
    "Escape closes an open tooltip without moving focus away from its trigger.",
    "Content is intentionally non-interactive (the WAI-ARIA tooltip pattern) — it disappears as soon as hover or focus leaves the trigger.",
    "A short delayDuration on TooltipProvider avoids tooltips flashing open while a pointer just passes over the trigger.",
]

const IMPORT_CODE = `import { Info } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function Example() {
    return (
        <TooltipProvider delayDuration={150}>
            <Tooltip>
                <TooltipTrigger aria-label="About this field">
                    <Info size={16} />
                </TooltipTrigger>
                <TooltipContent icon={Info} title="Sync complete">
                    All changes were saved 2 minutes ago.
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}`

export default function TooltipPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Tooltip
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    A short, contextual overlay shown on hover or focus — with dark and light
                    styles, four placements, and a real arrow pointing back at what it explains.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <div>
                        <p className="max-w-2xl text-[var(--neutral600)]">
                            Tooltip adds a small piece of supplementary context next to a control —
                            triggered by hovering or focusing it, and positioned with a direction
                            vector so its arrow always points back at the trigger.
                        </p>
                        <div className="mt-4 rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-16">
                            <TooltipOverviewDemo />
                        </div>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="flex items-center justify-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-16">
                        <TooltipAnatomyDemo />
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Trigger</span> —
                                any focusable element; hovering or focusing it opens the tooltip.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Icon</span> —
                                optional, reinforces what the tooltip is about at a glance.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Title & description</span>{" "}
                                — a bold title, optionally followed by one line of supporting copy.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                4
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Arrow</span> — a
                                small vector that always points back at the trigger, regardless of
                                which side the bubble opened on.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div className="space-y-12">
                    <div>
                        <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                            Dark and light styles, each with rich content (icon, title, description)
                            or a plain single-line label.
                        </p>
                        <TooltipVariantMatrix />
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-[var(--neutral900)]">
                            Directions and arrows
                        </h3>
                        <p className="mt-1 mb-6 max-w-2xl text-sm text-[var(--neutral500)]">
                            All four placements point correctly back at their trigger — held open
                            here for reference; the same real, floating-ui-positioned content is
                            what actually opens on hover.
                        </p>
                        <TooltipPlacementDemo />
                    </div>
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
                <TooltipPlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Wrap your app (or just the section that needs it) in TooltipProvider once —
                        every Tooltip inside shares its delayDuration.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
