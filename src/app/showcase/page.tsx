import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioButton } from "@/components/ui/radio-button"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { DatePicker } from "@/components/ui/date-picker"
import { Uploader } from "@/components/ui/uploader"
import { AlertOverviewDemo, ToastOverviewDemo } from "@/components/docs/alert-toast-demo"
import { BadgeCartDemo } from "@/components/docs/badge-demo"
import { ChipFilterDemo } from "@/components/docs/chip-demo"
import { DropdownDemo } from "@/components/docs/dropdown-demo"
import { ProgressDownloadDemo } from "@/components/docs/progress-demo"
import { SpinnerSectionDemo } from "@/components/docs/spinner-demo"
import { SwitchOverviewDemo } from "@/components/docs/switch-demo"
import { TooltipOverviewDemo } from "@/components/docs/tooltip-demo"

interface ShowcaseItem {
    title: string
    description: string
    href: string
    content: ReactNode
}

const ITEMS: ShowcaseItem[] = [
    {
        title: "Button",
        description: "Triggers a single action — primary, secondary and tertiary, in five colors.",
        href: "/components/button",
        content: (
            <div className="flex flex-wrap items-center justify-center gap-3">
                <Button color="brand">Get started</Button>
                <Button color="neutral" variant="secondary">
                    Learn more
                </Button>
                <Button color="danger" variant="tertiary">
                    Delete
                </Button>
            </div>
        ),
    },
    {
        title: "Input, Text Area",
        description: "Single and multi-line text entry with label and helper text.",
        href: "/components/input",
        content: (
            <div className="flex w-full max-w-xs flex-col gap-4">
                <Input label="Email" placeholder="you@company.com" />
                <Textarea label="Message" placeholder="Write something…" rows={2} />
            </div>
        ),
    },
    {
        title: "Dropdown",
        description: "Select one option from a list without taking up permanent screen space.",
        href: "/components/dropdown",
        content: <DropdownDemo />,
    },
    {
        title: "Checkbox",
        description: "Toggle one or more options in a list, independent of the others.",
        href: "/components/checkbox",
        content: (
            <div className="flex flex-col gap-3">
                <Checkbox label="Potato" defaultChecked />
                <Checkbox label="Flour" defaultChecked />
                <Checkbox label="Onion" />
            </div>
        ),
    },
    {
        title: "Radio Button",
        description: "Pick exactly one option from a mutually exclusive set.",
        href: "/components/radio-button",
        content: (
            <div className="flex flex-col gap-3">
                <RadioButton name="showcase-plan" value="free" label="Free" />
                <RadioButton name="showcase-plan" value="pro" label="Pro" defaultChecked />
                <RadioButton name="showcase-plan" value="enterprise" label="Enterprise" />
            </div>
        ),
    },
    {
        title: "Tooltip",
        description: "Short, contextual overlay shown on hover or focus.",
        href: "/components/tooltip",
        content: <TooltipOverviewDemo />,
    },
    {
        title: "Alert",
        description: "An inline banner for system feedback that stays until it's dismissed.",
        href: "/components/alert-toast",
        content: <AlertOverviewDemo />,
    },
    {
        title: "Toast",
        description: "A transient, floating notification that dismisses itself.",
        href: "/components/alert-toast",
        content: <ToastOverviewDemo />,
    },
    {
        title: "Chips",
        description: "Compact, interact-able elements used to categorize, select or filter.",
        href: "/components/chips",
        content: <ChipFilterDemo />,
    },
    {
        title: "Badge",
        description: "A small, purely informational label for a count or a status.",
        href: "/components/badge",
        content: <BadgeCartDemo />,
    },
    {
        title: "Switch",
        description: "An on/off toggle for a single setting, applied immediately.",
        href: "/components/switch",
        content: <SwitchOverviewDemo />,
    },
    {
        title: "Breadcrumbs",
        description: "Shows the current page's location within a hierarchy.",
        href: "/components/breadcrumbs",
        content: (
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/", icon: Home },
                    { label: "Components", href: "/components" },
                    { label: "Button" },
                ]}
            />
        ),
    },
    {
        title: "Date Picker",
        description: "Choose a date, or a date range, by browsing a real calendar.",
        href: "/components/date-picker",
        content: <DatePicker defaultValue={new Date(2026, 0, 18)} />,
    },
    {
        title: "Progress",
        description: "Shows how much of a measurable task has actually completed.",
        href: "/components/progress",
        content: <ProgressDownloadDemo />,
    },
    {
        title: "Spinner",
        description: "An indeterminate loading indicator for a wait with no known length.",
        href: "/components/spinner",
        content: <SpinnerSectionDemo />,
    },
    {
        title: "Uploader",
        description: "Select and transfer files by dragging them in or clicking to browse.",
        href: "/components/uploader",
        content: (
            <div className="w-full max-w-xs">
                <Uploader />
            </div>
        ),
    },
]

export default function ShowcasePage() {
    return (
        <div className="mx-auto w-full max-w-7xl px-6 py-10 text-[var(--neutral900)] md:pr-10 md:pl-[52px]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Showcase
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Every component in one place — each one below is the same real, working
                    piece you&apos;d get from its own docs page, not a static picture of it.
                </p>
            </div>

            {/* Grid */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {ITEMS.map((item) => (
                    <div key={item.title} className="rounded-xl border border-[var(--neutral100)] p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-base font-semibold text-[var(--neutral900)]">{item.title}</h2>
                                <p className="mt-1 max-w-sm text-sm text-[var(--neutral500)]">{item.description}</p>
                            </div>
                            <Link
                                href={item.href}
                                className="flex shrink-0 items-center gap-1 text-sm font-medium text-[var(--text-link)] hover:underline"
                            >
                                Docs
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                        <div className="mt-6 flex min-h-[120px] items-center justify-center rounded-lg border border-[var(--neutral100)] bg-[var(--neutral25)] p-6">
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
