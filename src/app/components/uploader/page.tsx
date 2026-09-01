import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { UploaderPlayground } from "@/components/docs/uploader-playground"
import { UploaderVariantMatrix } from "@/components/docs/uploader-variant-matrix"
import { Uploader } from "@/components/ui/uploader"

const USAGE_DO = [
    "State the size limit up front in the dropzone itself, not just after someone hits it.",
    "Accept both a real drag-and-drop and a plain click — some users will always prefer the file browser.",
    "Show real per-file progress and a clear done/error state once a file is added — don't leave people guessing.",
    "Let a file be removed after it's added, whether it's still uploading, done, or failed.",
]

const USAGE_DONT = [
    "Don't silently reject an oversized file — say what the limit is and which file broke it.",
    "Don't make the whole page a drop target if only one section should accept files; it invites accidental drops.",
    "Don't reuse Uploader for a single required attachment with no size or type constraints worth stating — a plain file input is enough there.",
    "Don't restart every file's progress from zero if only one of several fails; let the others keep going.",
]

const ACCESSIBILITY_NOTES = [
    "The dropzone is a real <label> wrapping a native <input type=\"file\">, so it's reachable and operable from the keyboard alone — Tab, then Enter or Space opens the file browser.",
    "The file input stays in the DOM (visually hidden, not display:none), so it's still announced and focusable for assistive tech.",
    "The file list is an aria-live region, so a screen reader hears a file get added, finish, or fail without needing to poll the page.",
    "Each file's remove control has its own accessible name (\"Remove {filename}\"), not just a bare icon button.",
    "Drag-and-drop is an addition, never the only path — every capability it offers is also reachable by clicking and using the keyboard.",
]

const IMPORT_CODE = `import { Uploader } from "@/components/ui/uploader"

export function Example() {
    return <Uploader maxSizeBytes={5 * 1024 * 1024} multiple />
}`

export default function UploaderPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Uploader
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Lets a user select and transfer files by dragging them in or clicking to
                    browse — with a real size limit, real per-file progress, and real errors.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <p className="max-w-2xl text-[var(--neutral600)]">
                        Drag a file onto the box below, or click it to browse — files over 1 MB
                        are rejected with a real error; everything else actually
                        &quot;uploads&quot; with live progress.
                    </p>
                    <div className="max-w-md">
                        <Uploader />
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8 flex items-center justify-center">
                        <div className="w-full max-w-sm">
                            <Uploader />
                        </div>
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Icon</span> —
                                an upload glyph that recolors when a file is dragged over it.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Instruction</span>{" "}
                                — states both ways in: drag, or click.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Constraint</span>{" "}
                                — the real size limit, stated before anyone hits it.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                4
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">File list</span>{" "}
                                — appears once a file is added, with progress, a done state, or an
                                error.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        Default, Active (a real file dragged over it, forced here for reference)
                        and Disabled.
                    </p>
                    <UploaderVariantMatrix />
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
                <UploaderPlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Uploader manages its own file list, drag state and simulated progress
                        internally — drop it in and it works.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
