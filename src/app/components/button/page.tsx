import { CheckCircle2, XCircle, RefreshCw } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { ButtonPlayground } from "@/components/docs/button-playground"
import { ButtonVariantMatrix } from "@/components/docs/button-variant-matrix"
import { Button } from "@/components/ui/button"

const USAGE_DO = [
    "Use Brand Primary once per view for the single most important action.",
    "Keep labels short and action-oriented, e.g. \"Save changes\" instead of \"Submit\".",
    "Pair Secondary or Tertiary buttons alongside a Primary for lower-emphasis actions.",
    "Reserve Danger, Warning and Success for actions that actually carry that status — not as a general accent color.",
]

const USAGE_DONT = [
    "Don't use more than one Brand Primary button in the same section.",
    "Don't use a button for navigation between pages — use a link instead.",
    "Don't disable a button without explaining why nearby.",
    "Don't mix a status color (Danger/Warning/Success) into a routine action just to add visual weight.",
]

const ACCESSIBILITY_NOTES = [
    "Renders a native <button> element, so it's keyboard-focusable and operable with Enter/Space by default.",
    "Focus is shown with a visible ring (focus-visible), not on mouse click — it never appears for a pointer interaction, only keyboard/assistive navigation.",
    "The disabled prop sets the native disabled attribute, which removes the button from the tab order and announces it as unavailable to screen readers.",
    "leadingIcon / trailingIcon render with aria-hidden — they're decorative, so the accessible name comes from the button's visible label alone.",
    "Every color family's Primary (filled) text meets WCAG AA contrast (4.5:1) for white text against its 500-shade background.",
]

const IMPORT_CODE = `import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export function Example() {
    return (
        <Button color="brand" variant="primary" size="md" leadingIcon={RefreshCw}>
            Save changes
        </Button>
    )
}`

export default function ButtonPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Button
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Triggers a single action on click — submits a form, confirms an action, or
                    opens a flow. Five color families (Brand, Neutral, Danger, Warning, Success),
                    three styles (Primary, Secondary, Tertiary) and three sizes (sm, md, lg).
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-6">
                    <p className="max-w-2xl text-[var(--neutral600)]">
                        Button triggers a user&apos;s primary action in a single click — submitting a
                        form, confirming an action, or opening a flow. Combine a color, a style and
                        a size to fit the emphasis the action needs.
                    </p>
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8 flex items-center justify-center gap-4">
                        <Button color="brand" variant="primary">Primary</Button>
                        <Button color="brand" variant="secondary">Secondary</Button>
                        <Button color="brand" variant="tertiary">Tertiary</Button>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10 flex items-center justify-center">
                        <Button color="brand" variant="primary" size="lg" leadingIcon={RefreshCw}>
                            Save changes
                        </Button>
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Container</span> —
                                the clickable surface. Color and style (Primary/Secondary/Tertiary)
                                communicate emphasis; radius comes from the{" "}
                                <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">
                                    --radius-md
                                </code>{" "}
                                token.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Label</span> — a
                                short, action-oriented text describing what happens on click.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Icon (optional)</span> —
                                a leading and/or trailing icon, sized to match the button and marked
                                decorative for screen readers.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        Every color family (Brand, Neutral, Danger, Warning, Success) across its
                        available styles, at every size and interaction state.
                    </p>
                    <ButtonVariantMatrix />
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
                <ButtonPlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Import the component and pass a color, variant and size — all three are
                        optional and default to brand / primary / md.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
