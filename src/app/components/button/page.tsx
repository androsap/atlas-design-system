import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { ButtonPlayground } from "@/components/docs/button-playground"
import { Button } from "@/components/ui/button"

const USAGE_DO = [
    "Use the primary variant once per view for the single most important action.",
    "Keep labels short and action-oriented, e.g. \"Save changes\" instead of \"Submit\".",
    "Pair secondary or ghost buttons alongside primary for lower-emphasis actions.",
]

const USAGE_DONT = [
    "Don't use more than one primary button in the same section.",
    "Don't use a button for navigation between pages — use a link instead.",
    "Don't disable a button without explaining why nearby.",
]

const ACCESSIBILITY_NOTES = [
    "Renders a native <button> element, so it's keyboard-focusable and operable with Enter/Space by default.",
    "Focus is visible via the browser's default outline; don't remove it without providing a replacement.",
    "The disabled prop sets the native disabled attribute, which removes the button from the tab order and announces it as unavailable to screen readers.",
    "Icon-only buttons (not yet supported by this component) must ship an aria-label — text buttons rely on their visible label instead.",
    "Text/background pairs for all three variants meet WCAG AA contrast (4.5:1) against neutral0 and neutral25 surfaces.",
]

const IMPORT_CODE = `import { Button } from "@/components/ui/button"

export function Example() {
  return <Button variant="primary">Save changes</Button>
}`

export default function ButtonPage() {
    return (
        <div className="max-w-3xl text-[var(--neutral900)]">
            <p className="text-sm text-[var(--neutral500)] mb-2">Components / Button</p>
            <h1 className="text-2xl font-medium mb-8">Button</h1>
            <DocsTabs>
                {/* Overview */}
                <div className="space-y-6">
                    <p className="text-[var(--neutral600)]">
                        Button digunakan untuk memicu aksi utama pengguna dalam satu klik — mengirim
                        form, mengonfirmasi sebuah aksi, atau membuka sebuah alur. Tersedia dalam tiga
                        variant (primary, secondary, ghost) dan tiga ukuran (sm, md, lg).
                    </p>
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8 flex items-center justify-center gap-4">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10 flex items-center justify-center">
                        <Button variant="primary" size="lg">
                            Save changes
                        </Button>
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary50)] text-xs font-semibold text-[var(--primary600)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Container</span> —
                                the clickable surface. Its color, border and radius communicate the
                                variant and emphasis level.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary50)] text-xs font-semibold text-[var(--primary600)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Label</span> — a
                                short, action-oriented text describing what happens on click.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div className="space-y-10">
                    <div>
                        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[var(--neutral400)]">
                            Variant
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="border border-[var(--color-border)] rounded-lg p-4 flex flex-col items-center gap-2">
                                <Button variant="primary">Primary</Button>
                            </div>
                            <div className="border border-[var(--color-border)] rounded-lg p-4 flex flex-col items-center gap-2">
                                <Button variant="secondary">Secondary</Button>
                            </div>
                            <div className="border border-[var(--color-border)] rounded-lg p-4 flex flex-col items-center gap-2">
                                <Button variant="ghost">Ghost</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[var(--neutral400)]">
                            Size
                        </p>
                        <div className="border border-[var(--color-border)] rounded-lg p-6 flex items-center justify-center gap-4">
                            <Button variant="primary" size="sm">
                                Small
                            </Button>
                            <Button variant="primary" size="md">
                                Medium
                            </Button>
                            <Button variant="primary" size="lg">
                                Large
                            </Button>
                        </div>
                    </div>
                    <div>
                        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[var(--neutral400)]">
                            State
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="border border-[var(--color-border)] rounded-lg p-4 flex flex-col items-center gap-2">
                                <Button variant="primary">Default</Button>
                            </div>
                            <div className="border border-[var(--color-border)] rounded-lg p-4 flex flex-col items-center gap-2">
                                <Button variant="primary" disabled>
                                    Disabled
                                </Button>
                            </div>
                            <div className="border border-[var(--color-border)] rounded-lg p-4 flex flex-col items-center gap-2">
                                <Button variant="secondary" disabled>
                                    Disabled
                                </Button>
                            </div>
                        </div>
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
                    <ul className="space-y-3">
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
                    <p className="text-sm text-[var(--neutral500)]">
                        Import the component and pass a variant and size — both are optional and
                        default to primary / md.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
