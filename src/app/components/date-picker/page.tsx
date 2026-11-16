import { CheckCircle2, XCircle } from "lucide-react"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { DatePickerPlayground } from "@/components/docs/date-picker-playground"
import { DatePickerVariantMatrix } from "@/components/docs/date-picker-variant-matrix"
import { Calendar } from "@asyst/atlas"
import { DatePicker } from "@asyst/atlas"
import { DateRangePicker } from "@asyst/atlas"

const USAGE_DO = [
    "Use DatePicker for a single date — a due date, a birthday, an appointment.",
    "Use DateRangePicker when the value is inherently a span — a booking, a reporting window, a trip.",
    "Show today with the ring, not a fill — a fill is reserved for what the user actually picked.",
    "Keep weekends visually distinct (red) so a user scanning for a weekday doesn't have to count columns.",
]

const USAGE_DONT = [
    "Don't use two separate DatePickers to fake a range — the endpoints can end up in the wrong order and nothing enforces it.",
    "Don't let the calendar open already scrolled to some other month than the selected date's — it should always open where the user's eye expects it.",
    "Don't make the input the only way to change the date if you also let people type in it without validating what they typed.",
    "Don't use a date range for something that's really just two independent dates with no relationship (use two DatePickers instead).",
]

const ACCESSIBILITY_NOTES = [
    "The trigger is a real button; the calendar opens in a real Radix Popover, so Escape closes it and focus returns to the trigger.",
    "Every day is a real, focusable <button> — Tab moves through the visible month in document order, Space/Enter picks the focused day.",
    "Each day's accessible name is its full date (aria-label), not just the bare number — a screen reader hears \"Sun Jan 18 2026\", not \"18\".",
    "Today gets aria-current=\"date\"; a picked day (or a range's endpoints) gets aria-pressed=\"true\".",
    "Days outside the shown month are real disabled buttons, not just dimmed text — they're skipped when tabbing through and can't be activated by accident.",
]

const SINGLE_CODE = `import { DatePicker } from "@asyst/atlas"

export function Example() {
    return (
        <DatePicker
            defaultValue={new Date()}
            onChange={(date) => console.log(date)}
        />
    )
}`

const RANGE_CODE = `import { DateRangePicker } from "@asyst/atlas"

export function Example() {
    return (
        <DateRangePicker
            onChange={(range) => console.log(range.start, range.end)}
        />
    )
}`

const ANATOMY_MONTH = new Date(2026, 0, 1)
const ANATOMY_TODAY = new Date(2026, 0, 3)
const ANATOMY_SELECTED = new Date(2026, 0, 18)

export default function DatePickerPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Components</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Date Picker
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Lets a user choose a date, or a date range, by browsing a real calendar — a
                    single month, or two synced months for a range.
                </p>
            </div>

            <DocsTabs>
                {/* Overview */}
                <div className="space-y-10">
                    <p className="max-w-2xl text-[var(--neutral600)]">
                        Click either field below — both open a real calendar, and picking a date
                        actually fills the field.
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <h3 className="text-base font-semibold text-[var(--neutral900)]">Single date</h3>
                            <p className="mt-1 text-sm text-[var(--neutral500)]">One month, one picked day.</p>
                            <div className="mt-4 flex min-h-[100px] items-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-6">
                                <DatePicker defaultValue={new Date(2026, 0, 18)} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[var(--neutral900)]">Date range</h3>
                            <p className="mt-1 text-sm text-[var(--neutral500)]">
                                Two synced months — pick a start, then an end.
                            </p>
                            <div className="mt-4 flex min-h-[100px] items-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-6">
                                <DateRangePicker />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Anatomy */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-8 flex items-center justify-center">
                        <Calendar month={ANATOMY_MONTH} today={ANATOMY_TODAY} selected={ANATOMY_SELECTED} />
                    </div>
                    <ol className="space-y-3">
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                1
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Header</span> —
                                the month/year label with prev/next navigation.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                2
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Weekday row</span>{" "}
                                — Sunday through Saturday, always in the same order.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                3
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Today</span> —
                                a ring, not a fill; a fill means picked, a ring just means now.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-accent-subtle)] text-xs font-semibold text-[var(--text-accent-subtle-label)]">
                                4
                            </span>
                            <p className="text-sm text-[var(--neutral600)]">
                                <span className="font-medium text-[var(--neutral900)]">Selected day</span>{" "}
                                — a solid fill; in range mode the two endpoints get this same fill,
                                connected by a lighter bar.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Variants & states */}
                <div>
                    <p className="mb-6 max-w-2xl text-sm text-[var(--neutral600)]">
                        A single month showing today, a selection, and a range — then the same
                        states across two synced months, the shape DateRangePicker uses.
                    </p>
                    <DatePickerVariantMatrix />
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
                <DatePickerPlayground />

                {/* Code */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                            DatePicker works uncontrolled (defaultValue) or controlled (value +
                            onChange).
                        </p>
                        <CodeBlock code={SINGLE_CODE} lang="tsx" />
                    </div>
                    <div className="space-y-4">
                        <p className="max-w-2xl text-sm text-[var(--neutral500)]">
                            DateRangePicker takes two clicks — the first sets the start, the
                            second completes it (in either order; it sorts itself out).
                        </p>
                        <CodeBlock code={RANGE_CODE} lang="tsx" />
                    </div>
                </div>
            </DocsTabs>
        </div>
    )
}
