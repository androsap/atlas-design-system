import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { RadioPlayground } from "@/components/docs/radio-playground"
import { RadioVariantMatrix } from "@/components/docs/radio-variant-matrix"
import { RadioButton } from "@/components/ui/radio-button"

const USAGE_DO = [
    "Use Radio Button when exactly one option must be picked from a visible, short list.",
    "Give every radio in a group the same name attribute — that's what makes them mutually exclusive.",
    "Pre-select a sensible default; don't leave a required radio group empty.",
    "Show every option at once when there are roughly 2–5 of them — that's the whole point over a Dropdown.",
]

const USAGE_DONT = [
    "Don't use Radio Button for an independent on/off choice — that's what Checkbox is for.",
    "Don't use it for a long list of options; switch to a Dropdown once scanning gets tedious.",
    "Don't let two different groups on the same screen accidentally share a name attribute.",
    "Don't rely on color alone to explain a Danger option — pair it with helperText.",
]

const ACCESSIBILITY_NOTES = [
    "Renders a native <input type=\"radio\">, so arrow keys move selection within a group and Tab moves between groups — all for free from the browser.",
    "The label is a real <label htmlFor>, so clicking the text selects the option too, not just the small circle.",
    "Radios sharing a name are grouped automatically for assistive tech — no extra ARIA wiring needed on your part.",
    "Focus is shown with a visible ring (focus-visible) — present for keyboard/assistive navigation, absent for a mouse click.",
    "disabled sets the native disabled attribute, removing that option from the tab order and announcing it as unavailable.",
]

const IMPORT_CODE = `import { useState } from "react"
import { RadioButton } from "@/components/ui/radio-button"

const SIZES = ["sm", "md", "lg"]

export function Example() {
    const [size, setSize] = useState("md")

    return (
        <>
            {SIZES.map((value) => (
                <RadioButton
                    key={value}
                    name="size"
                    value={value}
                    label={value}
                    checked={size === value}
                    onChange={() => setSize(value)}
                />
            ))}
        </>
    )
}`

export default function RadioButtonPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Radio Button
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Pick exactly one option from a mutually exclusive set — with Primary, Danger
                    and Neutral colors, two sizes, and real keyboard-navigable groups.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <div>
                        <p className="max-w-2xl text-[var(--neutral600)]">
                            Radio Button shows every option at once and lets a user pick exactly
                            one — group several together by giving them the same{" "}
                            <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">
                                name
                            </code>
                            .
                        </p>
                        <div className="mt-4 rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8">
                            <div className="mx-auto flex max-w-xs flex-col gap-3">
                                <RadioButton name="overview-plan" value="free" label="Free" defaultChecked />
                                <RadioButton name="overview-plan" value="pro" label="Pro" />
                                <RadioButton name="overview-plan" value="enterprise" label="Enterprise" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10 flex items-center justify-center">
                        <RadioButton
                            name="anatomy"
                            label="Accept terms and services"
                            helperText="You have to select this option to proceed"
                            color="danger"
                            defaultChecked
                        />
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Circle</span> —
                                the toggle itself. A filled dot in the color of the group shows the
                                selected option.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Label</span> —
                                a real{" "}
                                <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">
                                    {"<label>"}
                                </code>
                                , so clicking the text selects the option too.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Helper text</span> —
                                optional supporting copy below the label.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        Every color (Primary, Danger, Neutral, Disable) at both sizes, across
                        Unselected, Checked and their Focused equivalents.
                    </p>
                    <RadioVariantMatrix />
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
                <RadioPlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Radio Button is controlled like any native radio input — share a name
                        across the group and drive checked from your own state.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
