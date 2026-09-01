import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { AlertToastPlayground } from "@/components/docs/alert-toast-playground"
import { AlertToastVariantMatrix } from "@/components/docs/alert-toast-variant-matrix"
import { AlertOverviewDemo, ToastOverviewDemo, AlertAnatomyDemo } from "@/components/docs/alert-toast-demo"

const USAGE_DO = [
    "Use Alert for a message tied to a specific spot on the page — it stays until the user dismisses it or the condition it describes changes.",
    "Use Toast for a short, automated message that results from something the user just did — it appears, then clears itself.",
    "Keep the title short enough to scan in one line; put the rest in the description.",
    "Reserve Danger for something that actually failed or blocks progress — reserve Warning for something that will, if ignored.",
]

const USAGE_DONT = [
    "Don't use Toast for anything the user must act on or might need to find again later — it disappears on its own.",
    "Don't stack more than a couple of Toasts at once; queue or group them instead of flooding the corner of the screen.",
    "Don't use Alert for routine, expected confirmations — that's what Toast is for.",
    "Don't rely on color alone to carry the severity — pair it with a clear title, the way every color here gets its own icon shape.",
]

const ACCESSIBILITY_NOTES = [
    "Alert renders with role=\"alert\", so assistive tech announces it as soon as it appears — no extra ARIA wiring needed.",
    "Toast is built on Radix's Toast primitive: its live region announces new toasts politely, without interrupting whatever the user is doing.",
    "Hovering or focusing an open toast pauses its auto-dismiss timer; it resumes counting down once the pointer or focus leaves.",
    "Pressing F8 moves focus straight to the toast viewport — useful for keyboard users who'd otherwise have to tab past everything else to reach it.",
    "Both close buttons are real, labeled buttons (aria-label=\"Dismiss\"), reachable and operable from the keyboard alone.",
]

const ALERT_IMPORT_CODE = `import { useState } from "react"
import { Alert } from "@/components/ui/alert"

export function Example() {
    const [dismissed, setDismissed] = useState(false)
    if (dismissed) return null

    return (
        <Alert
            color="warning"
            title="SSL certificate nearing expiration"
            actionLabel="Renew SSL"
            onAction={() => renewCertificate()}
            onDismiss={() => setDismissed(true)}
        >
            Your primary subdomain certificate is scheduled to expire in 3 days.
        </Alert>
    )
}`

const TOAST_IMPORT_CODE = `import { Toaster, useToast } from "@/components/ui/toast"

// Mount once, near the root of whatever needs to trigger toasts.
export function App({ children }: { children: React.ReactNode }) {
    return <Toaster>{children}</Toaster>
}

// Anywhere inside <Toaster>:
function RefreshButton() {
    const toast = useToast()

    return (
        <button
            onClick={() =>
                toast({
                    color: "info",
                    title: "New features available",
                    description: "A new version of the application is available.",
                    actionLabel: "Refresh",
                    onAction: () => location.reload(),
                })
            }
        >
            Check for updates
        </button>
    )
}`

export default function AlertToastPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Alert &amp; Toast
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Contextual messages for system information, failures, and instructions — as an
                    Alert that stays put inline, or a Toast that floats in, reports, and clears
                    itself.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <p className="max-w-2xl text-[var(--neutral600)]">
                        Alert and Toast share the same anatomy and the same five colors — the
                        difference is where they live. Alert sits inline in the page and stays until
                        dismissed; Toast floats over everything in the corner of the screen and
                        clears itself after a few seconds.
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <h3 className="text-base font-semibold text-[var(--neutral900)]">Alert</h3>
                            <p className="mt-1 text-sm text-[var(--neutral500)]">
                                A precise, contextual message that attracts attention without
                                interrupting the task.
                            </p>
                            <div className="mt-4 flex min-h-[132px] items-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-6">
                                <div className="w-full">
                                    <AlertOverviewDemo />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[var(--neutral900)]">Toast</h3>
                            <p className="mt-1 text-sm text-[var(--neutral500)]">
                                A short, automated message reporting the result of something the
                                user just did.
                            </p>
                            <div className="mt-4 flex min-h-[132px] items-center justify-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-6">
                                <ToastOverviewDemo />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                        <AlertAnatomyDemo />
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Icon</span> —
                                shape carries the color&apos;s meaning, not just its tint.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Title</span> —
                                one short line stating what happened.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Close</span> —
                                always present, always keyboard-reachable, dismisses the message.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                4
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Description</span>{" "}
                                — optional supporting detail below the title.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                5
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Action</span> —
                                optional; sits below the description in the stacked layout shown
                                here, or beside Close in the inline layout.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        Every color (Neutral, Info, Success, Warning, Danger) in both layouts —
                        stacked, the shape Alert defaults to, and inline, the compact shape Toast
                        borrows for its floating viewport. Either component can use either layout.
                    </p>
                    <AlertToastVariantMatrix />
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
                <AlertToastPlayground />

                {/* Code */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                            Alert is self-contained — it manages its own dismissed state internally
                            and just needs a title.
                        </p>
                        <CodeBlock code={ALERT_IMPORT_CODE} lang="tsx" />
                    </div>
                    <div className="space-y-4">
                        <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                            Toast needs one &lt;Toaster&gt; mounted above wherever you call
                            useToast() — it owns the queue and floats the viewport for you.
                        </p>
                        <CodeBlock code={TOAST_IMPORT_CODE} lang="tsx" />
                    </div>
                </div>
            </DocsTabs>
        </div>
    )
}
