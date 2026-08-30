import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { CheckboxPlayground } from "@/components/docs/checkbox-playground"
import { CheckboxVariantMatrix } from "@/components/docs/checkbox-variant-matrix"
import { Checkbox } from "@/components/ui/checkbox"

const USAGE_DO = [
    "Use Checkbox for independent on/off choices, or for selecting multiple items from a list.",
    "Use the indeterminate state on a \"select all\" checkbox when only some of its children are checked.",
    "Reserve the Danger color for a checkbox that gates something serious, like accepting required terms.",
    "Keep the label short enough to scan in one line; put the detail in helperText.",
]

const USAGE_DONT = [
    "Don't use Checkbox for a single mutually-exclusive choice — that's what Radio Button is for.",
    "Don't rely on color alone to show an error; pair Danger with a helperText that explains why.",
    "Don't make helperText a repeat of the label — it should add information, not restate it.",
    "Don't use indeterminate as a third selectable state — it's a visual summary, not a value a user can pick.",
]

const ACCESSIBILITY_NOTES = [
    "The label is a real <label htmlFor> tied to the field's id, so clicking the label text toggles the checkbox too — not just the small box.",
    "indeterminate sets the real DOM .indeterminate property, so screen readers announce \"partially checked\", matching what's on screen.",
    "Focus is shown with a visible ring (focus-visible) — present for keyboard/assistive navigation, absent for a mouse click.",
    "disabled sets the native disabled attribute, removing it from the tab order and announcing it as unavailable — it isn't just a dimmed style.",
    "Every color's checked-state fill meets WCAG AA contrast (4.5:1) for the white checkmark against its 500-shade background.",
]

const IMPORT_CODE = `import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export function Example() {
    const [checked, setChecked] = useState(false)

    return (
        <Checkbox
            label="Accept terms and services"
            helperText="You have to check this box to proceed"
            color="danger"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    )
}`

export default function CheckboxPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Checkbox
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Toggle one or more options in a list, independent of the others — with
                    Primary, Danger and Neutral colors, two sizes, and a real indeterminate
                    state.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <div>
                        <p className="max-w-2xl text-[var(--neutral600)]">
                            Checkbox lets a user select any number of independent options — one on
                            its own with a helper message, or grouped together as a list.
                        </p>
                        <div className="mt-4 rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8">
                            <div className="mx-auto max-w-xs">
                                <Checkbox
                                    label="Accept newsletter"
                                    helperText="You might want to check this box to proceed"
                                    defaultChecked
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-[var(--neutral900)]">
                            Grouped options
                        </h3>
                        <p className="mt-1 text-sm text-[var(--neutral500)]">
                            Independent choices in a single list — each one keeps its own checked
                            state.
                        </p>
                        <div className="mt-4 flex max-w-xs flex-col gap-3 rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8">
                            <Checkbox label="Potato" defaultChecked />
                            <Checkbox label="Flour" defaultChecked />
                            <Checkbox label="Onion" defaultChecked />
                            <Checkbox label="Caterpillar D11T Carrydozer" />
                        </div>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10 flex items-center justify-center">
                        <Checkbox
                            label="Accept terms and services"
                            helperText="You have to check this box to proceed"
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
                                <span className="font-medium text-[var(--neutral900)]">Box</span> —
                                the toggle itself. Color communicates emphasis; a check or dash icon
                                shows checked vs. indeterminate.
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
                                , so clicking the text toggles the box too.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Helper text</span> —
                                optional supporting copy below the label; both are optional on their
                                own.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        Every color (Primary, Danger, Neutral, Disabled) at both sizes, across
                        Unselected, Checked, Indeterminate and Focused.
                    </p>
                    <CheckboxVariantMatrix />
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
                <CheckboxPlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Checkbox works uncontrolled (defaultChecked) or controlled (checked +
                        onChange) — indeterminate is only meaningful alongside real state.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
