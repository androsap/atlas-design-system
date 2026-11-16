"use client"

import { Calendar } from "@asyst/atlas"

// Fixed, illustrative dates — not the real "today" — so this reference
// grid renders the same way every time it's viewed.
const MONTH_1 = new Date(2026, 0, 1) // Jan 2026
const MONTH_2 = new Date(2026, 1, 1) // Feb 2026
const DEMO_TODAY = new Date(2026, 0, 3)
const SELECTED = new Date(2026, 0, 18)
const RANGE_START = new Date(2026, 0, 8)
const RANGE_END = new Date(2026, 0, 18)
const WIDE_RANGE_START = new Date(2026, 0, 22)
const WIDE_RANGE_END = new Date(2026, 1, 14)

const noop = () => {}

export function DatePickerVariantMatrix() {
    return (
        <div className="space-y-10">
            <div>
                <p className="mb-4 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                    Single month
                </p>
                <div className="flex flex-wrap gap-6">
                    {[
                        { label: "Today only", props: {} },
                        { label: "Today + selected", props: { selected: SELECTED } },
                        { label: "Today + range", props: { rangeStart: RANGE_START, rangeEnd: RANGE_END } },
                    ].map(({ label, props }) => (
                        <div key={label} className="rounded-xl border border-[var(--neutral100)] p-4">
                            <p className="mb-2 text-xs text-[var(--neutral400)]">{label}</p>
                            <Calendar
                                month={MONTH_1}
                                today={DEMO_TODAY}
                                onSelectDate={noop}
                                showPrev={false}
                                showNext={false}
                                {...props}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p className="mb-4 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                    Two months (range picker)
                </p>
                <div className="flex flex-wrap gap-6">
                    <div className="flex items-start gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                        <Calendar month={MONTH_1} today={DEMO_TODAY} onSelectDate={noop} showNext={false} />
                        <Calendar month={MONTH_2} today={DEMO_TODAY} onSelectDate={noop} showPrev={false} />
                    </div>
                    <div className="flex items-start gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                        <Calendar
                            month={MONTH_1}
                            today={DEMO_TODAY}
                            rangeStart={WIDE_RANGE_START}
                            rangeEnd={WIDE_RANGE_END}
                            onSelectDate={noop}
                            showNext={false}
                        />
                        <Calendar
                            month={MONTH_2}
                            today={DEMO_TODAY}
                            rangeStart={WIDE_RANGE_START}
                            rangeEnd={WIDE_RANGE_END}
                            onSelectDate={noop}
                            showPrev={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
