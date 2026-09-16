import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
    ArrowRight,
    MousePointerClick,
    TextCursorInput,
    ChevronDown,
    SquareCheck,
    CircleDot,
    MessageCircle,
    AlertCircle,
    Tags,
    Tag,
    ToggleLeft,
    Route,
    CalendarDays,
    Gauge,
    Loader2,
    UploadCloud,
} from "lucide-react"

const COMPONENTS = [
    {
        icon: MousePointerClick,
        title: "Button",
        description: "Triggers a single action on click — primary, secondary and ghost variants.",
        href: "/components/button",
        status: "ready" as const,
    },
    {
        icon: TextCursorInput,
        title: "Input, Text Area",
        description: "Single and multi-line text entry with label, helper text and validation states.",
        href: "/components/input",
        status: "ready" as const,
    },
    {
        icon: ChevronDown,
        title: "Dropdown",
        description: "Select one option from a list without taking up permanent screen space.",
        href: "/components/dropdown",
        status: "ready" as const,
    },
    {
        icon: SquareCheck,
        title: "Checkbox",
        description: "Toggle one or more options in a list, independent of the others.",
        href: "/components/checkbox",
        status: "ready" as const,
    },
    {
        icon: CircleDot,
        title: "Radio Button",
        description: "Pick exactly one option from a mutually exclusive set.",
        href: "/components/radio-button",
        status: "ready" as const,
    },
    {
        icon: MessageCircle,
        title: "Tooltip",
        description: "Short, contextual hint shown on hover or focus.",
        href: "/components/tooltip",
        status: "ready" as const,
    },
    {
        icon: AlertCircle,
        title: "Alert & Toast",
        description: "Inline banners and transient notifications for system feedback.",
        href: "/components/alert-toast",
        status: "ready" as const,
    },
    {
        icon: Tags,
        title: "Chips",
        description: "Compact, removable tokens for filters, tags or multi-select input.",
        href: "/components/chips",
        status: "ready" as const,
    },
    {
        icon: Tag,
        title: "Badge",
        description: "Small label for status, counts or metadata.",
        href: "/components/badge",
        status: "ready" as const,
    },
    {
        icon: ToggleLeft,
        title: "Switch",
        description: "On/off toggle for a single setting, applied immediately.",
        href: "/components/switch",
        status: "ready" as const,
    },
    {
        icon: Route,
        title: "Breadcrumbs",
        description: "Shows the user's location within a hierarchy and a path back up.",
        href: "/components/breadcrumbs",
        status: "ready" as const,
    },
    {
        icon: CalendarDays,
        title: "Date Picker",
        description: "Calendar input for selecting a single date or range.",
        href: "/components/date-picker",
        status: "ready" as const,
    },
    {
        icon: Gauge,
        title: "Progress",
        description: "Visual indicator of completion for a determinate process.",
        href: "/components/progress",
        status: "ready" as const,
    },
    {
        icon: Loader2,
        title: "Spinner",
        description: "Indeterminate loading indicator for short waits.",
        href: "/components/spinner",
        status: "ready" as const,
    },
    {
        icon: UploadCloud,
        title: "Uploader",
        description: "Drag-and-drop or click-to-browse file upload with progress feedback.",
        href: "/components/uploader",
        status: "ready" as const,
    },
]

export default function ComponentsPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <div className="pointer-events-none absolute top-1/2 right-10 h-56 w-56 -translate-y-1/2 md:right-20 md:h-80 md:w-80">
                    <Image
                        src="/illustration_component.png"
                        alt=""
                        fill
                        sizes="320px"
                        className="object-contain opacity-80"
                    />
                    <div className="absolute inset-0 bg-[var(--surface-accent-subtle)]/40" />
                </div>
                <div className="relative max-w-xl">
                    <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Overview</p>
                    <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                        Components
                    </h1>
                    <p className="mt-4 text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                        Production-ready building blocks, documented with usage guidelines and
                        accessibility notes — the same components used across every Atlas product.
                    </p>
                    <Link
                        href="/showcase"
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-link)] hover:underline"
                    >
                        View every component on one page
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            {/* Components grid */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {COMPONENTS.map(({ icon: Icon, title, description, href, status }) => {
                    const ready = status === "ready"
                    const cardClassName = cn(
                        "flex h-full min-h-[400px] flex-col rounded-xl border border-[var(--neutral100)] bg-[var(--surface-raised)] p-8 transition-colors",
                        ready && "hover:border-[var(--primary300)]"
                    )
                    const content = (
                        <>
                            <div className="flex h-48 items-center justify-center rounded-lg border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)]">
                                <Icon size={48} className="text-[var(--icon-accent-subtle)]" strokeWidth={1.5} />
                            </div>
                            <p className="mt-6 text-sm font-semibold text-[var(--neutral900)]">{title}</p>
                            <p className="mt-2 text-sm text-[var(--neutral500)]">{description}</p>
                            {ready && (
                                <span className="mt-auto inline-block w-fit pt-8 text-sm font-medium text-[var(--text-link)]">
                                    see more
                                </span>
                            )}
                        </>
                    )

                    return ready ? (
                        <Link key={title} href={href} className={cardClassName}>
                            {content}
                        </Link>
                    ) : (
                        <div key={title} className={cardClassName}>
                            {content}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
