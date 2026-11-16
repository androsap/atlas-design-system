import { CheckCircle2, XCircle, ChevronDown } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { DropdownPlayground } from "@/components/docs/dropdown-playground"
import { DropdownStatesPanel } from "@/components/docs/dropdown-states-panel"
import { DropdownDemo } from "@/components/docs/dropdown-demo"
import { Button } from "@asyst/atlas"

const USAGE_DO = [
    "Use a Dropdown when there are too many options for a Radio group, or the options are secondary to the main task.",
    "Group related items with a Header label and a Separator, the same way this spec sheet does.",
    "Reserve the Danger style for a genuinely destructive action, like \"Delete\" — not to draw attention.",
    "Close the menu on selection, and return focus to the trigger.",
]

const USAGE_DONT = [
    "Don't bury the single most likely action at the bottom of a long list — put it first.",
    "Don't use a Dropdown for fewer than ~4 mutually exclusive options; a Radio group is easier to scan.",
    "Don't mark more than one item active/selected at a time in a single-select menu.",
    "Don't rely on hover alone to open the menu — clicking the trigger must always work.",
]

const ACCESSIBILITY_NOTES = [
    "Built on Radix's DropdownMenu primitive — full keyboard support out of the box: Enter/Space opens it, arrow keys move between items, Esc closes and returns focus to the trigger.",
    "The trigger exposes aria-expanded and aria-haspopup automatically, so assistive tech announces it as a menu button.",
    "Each item is exposed as a real menuitem role — a screen reader announces its label and position (\"n of m\"), not just visible text.",
    "The highlighted item follows keyboard focus, not just the mouse — data-highlighted responds to both.",
    "leadingIcon / trailingIcon render with aria-hidden — decorative only, the item's accessible name is still its text.",
]

const IMPORT_CODE = `import { ChevronDown, Settings } from "lucide-react"
import { Button } from "@asyst/atlas"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@asyst/atlas"

export function Example() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button color="neutral" variant="secondary" trailingIcon={ChevronDown}>
                    Options
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Header Text</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem leadingIcon={Settings}>Menu item</DropdownMenuItem>
                <DropdownMenuItem active leadingIcon={Settings}>Menu item</DropdownMenuItem>
                <DropdownMenuItem variant="danger" leadingIcon={Settings}>Menu item</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}`

export default function DropdownPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Dropdown
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    A menu of options that appears when clicking a trigger, without taking up
                    permanent screen space — with a header label, a separator, and Default,
                    Selected and Danger item states.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-6">
                    <p className="max-w-2xl text-[var(--neutral600)]">
                        Dropdown lets a user pick one action or option from a list that stays
                        hidden until they open it — click the trigger below to see it in action.
                    </p>
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8 flex items-center justify-center">
                        <DropdownDemo />
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10 flex flex-col items-center gap-3">
                        <Button color="neutral" variant="secondary" trailingIcon={ChevronDown}>
                            Options
                        </Button>
                        <DropdownStatesPanel />
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Trigger</span> —
                                any element (usually a Button) that opens the menu on click.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Header</span> —
                                an optional uppercase label grouping the items below it, followed by
                                a separator.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Item</span> —
                                one option. Default, Selected (active) or Danger, each with an
                                optional leading/trailing icon.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        The four item states side by side — Default, Hover, Selected (the current
                        item, in Brand color) and Danger (destructive actions).
                    </p>
                    <div className="flex justify-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                        <DropdownStatesPanel />
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
                <DropdownPlayground />

                {/* Code */}
                <div className="space-y-4">
                    <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                        Wraps Radix&apos;s DropdownMenu primitive — any element passed to{" "}
                        <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">
                            asChild
                        </code>{" "}
                        becomes the trigger.
                    </p>
                    <CodeBlock code={IMPORT_CODE} lang="tsx" />
                </div>
            </DocsTabs>
        </div>
    )
}
