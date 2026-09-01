import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { ChipPlayground } from "@/components/docs/chip-playground"
import { ChipVariantMatrix } from "@/components/docs/chip-variant-matrix"
import { ChipFilterDemo, ChipRemovableDemo, ChipAnatomyDemo } from "@/components/docs/chip-demo"

const USAGE_DO = [
    "Use Fill for a chip whose selected state should stand out at a glance — a small set of filters someone scans quickly.",
    "Use Outline when several chips sit near other filled UI and a solid selected state would compete for attention.",
    "Keep labels to a word or two; a chip is a label; it isn't a place for a sentence.",
    "Use onRemove for a value the user added themselves (a tag, a file, a search term) — not for a filter they're just toggling.",
]

const USAGE_DONT = [
    "Don't use Chip for a single yes/no choice — that's what Switch or Checkbox is for.",
    "Don't mix selectable and removable chips in the same group; pick one interaction per group.",
    "Don't rely on Chip color alone to carry meaning that isn't restated in its label.",
    "Don't cram more chips into a row than can wrap cleanly — group or paginate a long list instead.",
]

const ACCESSIBILITY_NOTES = [
    "A selectable chip renders as a real <button aria-pressed>, so assistive tech announces its selected state the same way a toggle button's would.",
    "A removable chip's delete control is its own real, labeled button (aria-label=\"Remove {label}\") — a <button> can't nest inside another <button>, so the chip itself is a plain, non-interactive label in this mode.",
    "The focus ring is always the same color regardless of the chip's own color — one consistent \"you're here\" signal across every chip on the page.",
    "disabled sets the native disabled attribute, removing that chip from the tab order and announcing it as unavailable.",
    "Every color's text meets WCAG AA contrast against its own background, unselected and selected alike.",
]

const FILTER_CODE = `import { useState } from "react"
import { Chip } from "@/components/ui/chip"

const CATEGORIES = ["Design", "Engineering", "Marketing", "Sales"]

export function CategoryFilter() {
    const [selected, setSelected] = useState<string[]>(["Engineering"])

    return CATEGORIES.map((label) => (
        <Chip
            key={label}
            color="primary"
            selected={selected.includes(label)}
            onSelectedChange={(isSelected) =>
                setSelected((prev) =>
                    isSelected ? [...prev, label] : prev.filter((v) => v !== label)
                )
            }
        >
            {label}
        </Chip>
    ))
}`

const REMOVABLE_CODE = `import { useState } from "react"
import { Chip } from "@/components/ui/chip"

export function TagList() {
    const [tags, setTags] = useState(["React", "TypeScript", "Tailwind"])

    return tags.map((tag) => (
        <Chip key={tag} color="neutral" onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}>
            {tag}
        </Chip>
    ))
}`

export default function ChipsPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Chips
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Compact, interact-able elements used to categorize, select, or filter content
                    — as a toggleable filter, or a removable tag, in five colors and two styles.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <p className="max-w-2xl text-[var(--neutral600)]">
                        Chip covers two real interactions: a selectable filter you tap on and off,
                        and a removable tag with its own delete button.
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <h3 className="text-base font-semibold text-[var(--neutral900)]">Selectable filter</h3>
                            <p className="mt-1 text-sm text-[var(--neutral500)]">
                                A real toggle — click a category to add or remove it.
                            </p>
                            <div className="mt-4 flex min-h-[132px] items-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-6">
                                <div className="w-full">
                                    <ChipFilterDemo />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[var(--neutral900)]">Removable tag</h3>
                            <p className="mt-1 text-sm text-[var(--neutral500)]">
                                Click the × to actually remove a tag from the list below.
                            </p>
                            <div className="mt-4 flex min-h-[132px] items-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-6">
                                <div className="w-full">
                                    <ChipRemovableDemo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10 flex items-center justify-center">
                        <ChipAnatomyDemo />
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Icon</span> —
                                optional, hints at the chip&apos;s category.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Label</span> —
                                one or two words, never a full sentence.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Fill</span> —
                                Fill commits selection to a solid color; Outline keeps it a bold
                                border instead.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        Every color (Neutral, Primary, Success, Warning, Danger) in both styles
                        (Fill, Outline), across three sizes and Default, Selected and Focused.
                    </p>
                    <ChipVariantMatrix />
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
                <ChipPlayground />

                {/* Code */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                            Selectable chip — controlled selection, toggled by a real click or
                            Space/Enter.
                        </p>
                        <CodeBlock code={FILTER_CODE} lang="tsx" />
                    </div>
                    <div className="space-y-4">
                        <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                            Removable chip — pass onRemove and the chip renders its own delete
                            button instead of being a toggle itself.
                        </p>
                        <CodeBlock code={REMOVABLE_CODE} lang="tsx" />
                    </div>
                </div>
            </DocsTabs>
        </div>
    )
}
