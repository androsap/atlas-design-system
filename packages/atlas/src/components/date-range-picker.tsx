"use client"

import { useState } from "react"
import * as Popover from "@radix-ui/react-popover"
import { CalendarDays } from "lucide-react"
import { cn } from "../lib/utils.js"
import { Calendar } from "./calendar.js"
import { addMonths, formatDateLabel } from "../lib/calendar-utils.js"

export interface DateRange {
    start: Date | null
    end: Date | null
}

export interface DateRangePickerProps {
    value?: DateRange
    defaultValue?: DateRange
    onChange?: (range: DateRange) => void
    disabled?: boolean
    className?: string
}

const EMPTY_RANGE: DateRange = { start: null, end: null }

export function DateRangePicker({
    value,
    defaultValue = EMPTY_RANGE,
    onChange,
    disabled = false,
    className,
}: DateRangePickerProps) {
    const [uncontrolled, setUncontrolled] = useState<DateRange>(defaultValue)
    const range = value ?? uncontrolled
    const [open, setOpen] = useState(false)
    const [month, setMonth] = useState(() => range.start ?? new Date())

    const setRange = (next: DateRange) => {
        if (!value) setUncontrolled(next)
        onChange?.(next)
    }

    // Two clicks make a range: no range yet (or a complete one already
    // picked) starts a new one; one loose endpoint completes it, ordering
    // start/end so start is never after end regardless of click order.
    const handleSelect = (date: Date) => {
        if (!range.start || (range.start && range.end)) {
            setRange({ start: date, end: null })
            return
        }
        const next = date < range.start ? { start: date, end: range.start } : { start: range.start, end: date }
        setRange(next)
        setOpen(false)
    }

    const label =
        range.start && range.end
            ? `${formatDateLabel(range.start)} – ${formatDateLabel(range.end)}`
            : range.start
              ? `${formatDateLabel(range.start)} – …`
              : "Select a date range"

    return (
        <Popover.Root
            open={open}
            onOpenChange={(next) => {
                setOpen(next)
                if (next) setMonth(range.start ?? new Date())
            }}
        >
            <Popover.Trigger asChild>
                <button
                    type="button"
                    disabled={disabled}
                    className={cn(
                        "flex w-full max-w-[320px] cursor-pointer items-center justify-between gap-2 rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-3 py-2 text-sm text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary300)]",
                        "disabled:pointer-events-none disabled:opacity-40",
                        className
                    )}
                >
                    <span className={cn("truncate", !range.start && "text-[var(--neutral400)]")}>{label}</span>
                    <CalendarDays size={16} className="shrink-0 text-[var(--neutral400)]" aria-hidden />
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    align="start"
                    sideOffset={8}
                    className="z-50 rounded-[var(--radius-md)] border border-[var(--neutral100)] bg-[var(--neutral0)] p-4 shadow-xl"
                >
                    <div className="flex items-start gap-6">
                        <Calendar
                            month={month}
                            rangeStart={range.start}
                            rangeEnd={range.end}
                            onSelectDate={handleSelect}
                            showPrev
                            showNext={false}
                            onPrev={() => setMonth((m) => addMonths(m, -1))}
                        />
                        <Calendar
                            month={addMonths(month, 1)}
                            rangeStart={range.start}
                            rangeEnd={range.end}
                            onSelectDate={handleSelect}
                            showPrev={false}
                            showNext
                            onNext={() => setMonth((m) => addMonths(m, 1))}
                        />
                    </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}
