import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { ProgressPlayground } from "@/components/docs/progress-playground"
import { ProgressVariantMatrix } from "@/components/docs/progress-variant-matrix"
import { ProgressDownloadDemo } from "@/components/docs/progress-demo"
import { Progress } from "@asyst/atlas"

const USAGE_DO = [
    "Use Progress only when you can actually measure completion — a byte count, a step number, a known duration.",
    "Update the value as often as real progress happens; a bar that jumps from 10% to 100% reads as broken, not fast.",
    "Pair it with a label that names the task, and helperText for status detail (\"Uploading…\", \"3 of 8 files\").",
    "Reserve Danger for a progress bar reporting something going wrong (a failing upload), not for ordinary progress.",
]

const USAGE_DONT = [
    "Don't use Progress when you don't know how long something will take — that's what Spinner is for.",
    "Don't let the value move backward except to reflect a real retry or reset; it reads as a glitch otherwise.",
    "Don't rely on color alone to say a task failed — pair Danger with helper text that says what happened.",
    "Don't animate the fill faster than the real work completes — a bar that lies about progress erodes trust fast.",
]

const ACCESSIBILITY_NOTES = [
    "Renders with role=\"progressbar\" and aria-valuenow/min/max, so assistive tech reports the real percentage, not just a visual bar.",
    "When a visible label is given, the bar is linked to it with aria-labelledby; without one, it falls back to an aria-label like \"42%\".",
    "The fill's width transitions smoothly (CSS, not JS), so a screen reader isn't spammed with rapid value-change announcements.",
    "Color is never the only signal — Progress always renders next to a visible percentage or a label describing the task.",
]

const IMPORT_CODE = `import { useState, useEffect } from "react"
import { Progress } from "@asyst/atlas"

export function Example() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const id = setInterval(() => setValue((v) => Math.min(100, v + 10)), 300)
        return () => clearInterval(id)
    }, [])

    return (
        <Progress
            value={value}
            label="Uploading photo.jpg"
            helperText={value < 100 ? "Uploading…" : "Done"}
        />
    )
}`

export default function ProgressPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Progress
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Shows how much of a measurable task — a download, an install, an upload —
                    has actually completed, in Neutral, Info and Danger.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <p className="max-w-2xl text-[var(--neutral600)]">
                        Click below to run a real download — the bar genuinely advances over
                        time, not a fixed percentage.
                    </p>
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8">
                        <ProgressDownloadDemo />
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10 flex items-center justify-center">
                        <div className="w-full max-w-sm">
                            <Progress
                                value={62}
                                label="Uploading photo.jpg"
                                helperText="1.2 MB of 2.0 MB uploaded"
                            />
                        </div>
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Label</span> —
                                names the task that&apos;s in progress.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Percentage</span>{" "}
                                — the real, measured value, rounded to a whole number.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Track &amp; fill</span>{" "}
                                — a light background bar, and a solid fill sized to the value.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                4
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Helper text</span>{" "}
                                — optional status detail below the bar.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        Every color (Neutral, Info, Danger) across the full 0–100% range.
                    </p>
                    <ProgressVariantMatrix />
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
                <ProgressPlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Progress is fully controlled — drive value from wherever the real
                        progress comes from (a fetch&apos;s progress event, a timer, a step count).
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
