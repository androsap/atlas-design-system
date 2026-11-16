import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { SwitchPlayground } from "@/components/docs/switch-playground"
import { SwitchVariantMatrix } from "@/components/docs/switch-variant-matrix"
import { SwitchOverviewDemo, SwitchAnatomyDemo } from "@/components/docs/switch-demo"

const USAGE_DO = [
    "Use Switch for a setting that takes effect immediately — no separate Save step.",
    "Pair it with a label that names the setting, and helperText that says what turning it on actually does.",
    "Use the status color only when the off state itself deserves attention — a safety check, a confirmation prompt being skipped.",
    "Keep the label to a single line; if the setting needs a paragraph of explanation, it belongs in a settings page, not the label.",
]

const USAGE_DONT = [
    "Don't use Switch for a choice that needs an explicit Save or Apply action — that's what Checkbox in a form is for.",
    "Don't use Switch for a single mutually-exclusive choice among several options — that's what Radio Button is for.",
    "Don't rely on the track color alone to explain what's on vs off; the label and helperText should make it unambiguous on their own.",
    "Don't disable a switch without saying why in the helper text — a disabled control with no explanation just looks broken.",
]

const ACCESSIBILITY_NOTES = [
    "Renders as a real <input type=\"checkbox\" role=\"switch\">, so assistive tech announces it as a switch, not a checkbox, while keeping native checked/toggle behavior.",
    "The label is a real <label htmlFor>, so clicking the text toggles the switch too, not just the small track.",
    "Space and Enter both toggle it once focused — for free from the browser, no key handler needed.",
    "Focus is shown with a visible ring (focus-visible) — present for keyboard/assistive navigation, absent for a mouse click.",
    "disabled sets the native disabled attribute, removing it from the tab order and announcing it as unavailable.",
]

const IMPORT_CODE = `import { useState } from "react"
import { Switch } from "@asyst/atlas"

export function Example() {
    const [checked, setChecked] = useState(false)

    return (
        <Switch
            color="primary"
            label="Push notifications"
            helperText="Get notified about replies and mentions"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    )
}`

export default function SwitchPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Switch
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    An on/off toggle for a single setting that takes effect immediately — with
                    Neutral, Primary and Status colors, and two sizes.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <div>
                        <p className="max-w-2xl text-[var(--neutral600)]">
                            Switch flips one setting on or off, right away — no separate Save
                            button. Every color here is a real, controlled toggle.
                        </p>
                        <div className="mt-4 rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8">
                            <div className="mx-auto flex justify-center">
                                <SwitchOverviewDemo />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10 flex items-center justify-center">
                        <SwitchAnatomyDemo />
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Track</span> —
                                the pill; its color communicates on vs off.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Thumb</span> —
                                the circle that slides between off (left) and on (right).
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Label</span> —
                                a real{" "}
                                <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">
                                    {"<label>"}
                                </code>
                                , so clicking the text toggles it too.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                4
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Helper text</span>{" "}
                                — optional, says what the setting actually does.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        Neutral, Primary and Status at both sizes, each Off and On, across
                        Default, Hover, Focused and Disabled. Off always stays a neutral gray,
                        except Status — its off state is itself worth flagging, so it stays red
                        until switched on.
                    </p>
                    <SwitchVariantMatrix />
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
                <SwitchPlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Switch works uncontrolled (defaultChecked) or controlled (checked +
                        onChange) — same as a native checkbox.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
