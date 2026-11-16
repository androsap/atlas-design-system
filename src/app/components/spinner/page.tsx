import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { SpinnerPlayground } from "@/components/docs/spinner-playground"
import { SpinnerVariantMatrix } from "@/components/docs/spinner-variant-matrix"
import { SpinnerButtonDemo, SpinnerSectionDemo } from "@/components/docs/spinner-demo"
import { Spinner } from "@asyst/atlas"

const USAGE_DO = [
    "Use Spinner when you can't measure completion — an unknown-length request, a page that's still loading.",
    "Match its size to what it's replacing: small inside a button, larger for a whole section or page.",
    "Pair it with a visually-hidden or nearby label so a screen reader announces what's actually loading.",
    "Swap it back out for real content (or an error) the moment the wait ends — it should never spin forever.",
]

const USAGE_DONT = [
    "Don't use Spinner when you do know how much is left — that's what Progress is for.",
    "Don't show more than one spinner for the same wait; one clear indicator beats several competing ones.",
    "Don't rely on Danger's color alone to say something failed — a spinner's color is about context, not an error message.",
    "Don't block an entire page behind a spinner for a wait that only affects one small part of it.",
]

const ACCESSIBILITY_NOTES = [
    "Renders with role=\"status\", an implicit live region — assistive tech announces the label when it appears.",
    "label names what's actually loading (\"Loading results\"), not just \"Loading\" — pass one whenever the context isn't obvious.",
    "The SVG arc itself is aria-hidden; the accessible name comes from the wrapper's label, so it's announced once, not twice.",
    "Rotation is a pure CSS animation, so it keeps running smoothly even during heavy JavaScript work elsewhere on the page.",
]

const IMPORT_CODE = `import { Spinner } from "@asyst/atlas"

export function SaveButton() {
    const [loading, setLoading] = useState(false)

    return (
        <button disabled={loading} onClick={() => setLoading(true)}>
            {loading && <Spinner size="sm" className="text-white" label="" />}
            {loading ? "Saving…" : "Save changes"}
        </button>
    )
}`

export default function SpinnerPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Spinner
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    An indeterminate loading indicator for a wait with no known length — five
                    sizes, three colors, animated with real CSS rotation.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <p className="max-w-2xl text-[var(--neutral600)]">
                        Both examples below run a real, timed wait — click either and watch the
                        spinner actually spin while it happens.
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <h3 className="text-base font-semibold text-[var(--neutral900)]">Inside a button</h3>
                            <p className="mt-1 text-sm text-[var(--neutral500)]">
                                A small spinner replaces the label while the action runs.
                            </p>
                            <div className="mt-4 flex min-h-[132px] items-center justify-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-6">
                                <SpinnerButtonDemo />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[var(--neutral900)]">Section loading</h3>
                            <p className="mt-1 text-sm text-[var(--neutral500)]">
                                A larger spinner stands in for content that isn&apos;t ready yet.
                            </p>
                            <div className="mt-4 flex min-h-[132px] items-center justify-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-6">
                                <SpinnerSectionDemo />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10 flex items-center justify-center">
                        <Spinner size="xl" label="Loading" />
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Arc</span> —
                                a partial ring, not a full circle; the gap is what makes rotation
                                readable.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Rotation</span>{" "}
                                — a continuous CSS animation; it never starts, stops, or eases —
                                just spins.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Color</span> —
                                Neutral by default; Info or Danger to match the context it&apos;s
                                loading into.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        Every color (Neutral, Info, Danger) across all five sizes — every one of
                        these is really spinning right now.
                    </p>
                    <SpinnerVariantMatrix />
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
                <SpinnerPlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Spinner has no state of its own — show it while your own loading flag is
                        true, and swap it back out the moment the wait resolves.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
