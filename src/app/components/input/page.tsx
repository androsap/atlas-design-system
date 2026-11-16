import { CheckCircle2, XCircle, Settings } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { InputPlayground } from "@/components/docs/input-playground"
import { InputFormStatesMatrix, TextareaStatesMatrix } from "@/components/docs/input-variant-matrix"
import { Input } from "@asyst/atlas"

const USAGE_DO = [
    "Always pair a field with a visible label — placeholder text alone isn't an accessible label.",
    "Use helper text for format hints (\"e.g. name@company.com\"), and switch it to an error message only once validation fails.",
    "Mark required fields consistently — this component shows a red asterisk next to the label.",
    "Prefer Textarea over Input once an answer is realistically longer than one line.",
]

const USAGE_DONT = [
    "Don't rely on placeholder text as a substitute for a label — it disappears the moment someone starts typing.",
    "Don't show an error before the user has had a chance to fill the field in.",
    "Don't use readOnly to prevent editing permanently — that's what disabled is for.",
    "Don't resize Textarea by dragging; keep row count intentional for the content it holds.",
]

const ACCESSIBILITY_NOTES = [
    "The label is a real <label htmlFor> tied to the field's id, so clicking it focuses the input — not just visually associated text.",
    "Focus is shown with a visible ring (focus-visible) — present for keyboard/assistive navigation, absent for a mouse click.",
    "error adds a red asterisk to the label and colors the helper text red — pair it with a helperText string that actually explains what's wrong, not just the color change.",
    "disabled sets the native disabled attribute (removed from the tab order); readOnly keeps the field focusable and selectable but not editable — they announce differently to screen readers, so pick the one that matches reality.",
    "leadingIcon / trailingIcon render with aria-hidden — decorative only, the accessible name still comes from the label.",
]

const IMPORT_CODE = `import { Input } from "@asyst/atlas"
import { Textarea } from "@asyst/atlas"
import { Settings } from "lucide-react"

export function Example() {
    return (
        <>
            <Input
                label="Email address"
                placeholder="you@company.com"
                helperText="We'll never share your email."
                leadingIcon={Settings}
            />
            <Textarea
                label="Message"
                placeholder="Write something..."
                helperText="Max 500 characters."
            />
        </>
    )
}`

export default function InputPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Input, Text Area
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Single and multi-line text entry with a label, helper text and validation
                    states. Three sizes (sm, md, lg) for Input; Text Area handles the
                    longer-answer case.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-6">
                    <p className="max-w-2xl text-[var(--neutral600)]">
                        Input and Text Area collect free-form text from a user — a single line for
                        short answers, multiple lines once the answer needs room. Both share the
                        same label, helper text and validation states.
                    </p>
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8">
                        <div className="mx-auto max-w-xs">
                            <Input
                                label="Email address"
                                placeholder="you@company.com"
                                helperText="We'll never share your email."
                                leadingIcon={Settings}
                            />
                        </div>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                        <div className="mx-auto max-w-xs">
                            <Input
                                label="Email address"
                                placeholder="you@company.com"
                                helperText="We'll never share your email."
                                leadingIcon={Settings}
                                trailingIcon={Settings}
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
                                a real{" "}
                                <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">
                                    {"<label>"}
                                </code>
                                , with a red asterisk appended when the field is required/errored.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Field</span> —
                                the bordered container. Its color communicates state: default,
                                focused, error, disabled or read-only.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Icon (optional)</span> —
                                a leading and/or trailing icon, decorative for screen readers.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                4
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Helper text</span> —
                                format hints by default, switches to an error message (and red) when
                                validation fails.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div className="space-y-16">
                    <div>
                        <h3 className="text-base font-semibold text-[var(--neutral900)]">
                            Interactive Form States
                        </h3>
                        <p className="mt-1 mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                            Standard state models for text entries, at every size.
                        </p>
                        <InputFormStatesMatrix />
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-[var(--neutral900)]">
                            Multi-Line Text Area
                        </h3>
                        <p className="mt-1 mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                            The same states, wrapped around a resizable-height field for longer
                            answers.
                        </p>
                        <TextareaStatesMatrix />
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
                <InputPlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Both components accept label, helperText, error, disabled and readOnly —
                        Input additionally takes size, leadingIcon and trailingIcon.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
