"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../lib/utils.js"
import { getMonthGrid, isSameDay, isWeekend, formatMonthLabel, WEEKDAY_HEADERS } from "../lib/calendar-utils.js"

export interface CalendarProps {
    /** Any date within the month to display — only year/month are read. */
    month: Date
    today?: Date
    selected?: Date | null
    rangeStart?: Date | null
    rangeEnd?: Date | null
    onSelectDate?: (date: Date) => void
    showPrev?: boolean
    showNext?: boolean
    onPrev?: () => void
    onNext?: () => void
    className?: string
}

export function Calendar({
    month,
    today = new Date(),
    selected = null,
    rangeStart = null,
    rangeEnd = null,
    onSelectDate,
    showPrev = true,
    showNext = true,
    onPrev,
    onNext,
    className,
}: CalendarProps) {
    const days = getMonthGrid(month)

    return (
        <div className={cn("w-[266px]", className)}>
            <div className="flex items-center justify-between px-0.5 pb-3">
                <button
                    type="button"
                    onClick={onPrev}
                    aria-label="Previous month"
                    tabIndex={showPrev ? 0 : -1}
                    className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-[6px] text-[var(--info600)] transition-colors hover:bg-[var(--neutral50)]",
                        !showPrev && "invisible"
                    )}
                >
                    <ChevronLeft size={16} aria-hidden />
                </button>
                <span className="text-sm font-semibold text-[var(--neutral900)]">{formatMonthLabel(month)}</span>
                <button
                    type="button"
                    onClick={onNext}
                    aria-label="Next month"
                    tabIndex={showNext ? 0 : -1}
                    className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-[6px] text-[var(--info600)] transition-colors hover:bg-[var(--neutral50)]",
                        !showNext && "invisible"
                    )}
                >
                    <ChevronRight size={16} aria-hidden />
                </button>
            </div>

            <div className="grid grid-cols-7">
                {WEEKDAY_HEADERS.map((label) => (
                    <span
                        key={label}
                        className="flex h-8 items-center justify-center text-xs font-medium text-[var(--neutral400)]"
                    >
                        {label}
                    </span>
                ))}

                {days.map((date) => {
                    const inMonth = date.getMonth() === month.getMonth()
                    const weekend = isWeekend(date)
                    const dayIsToday = isSameDay(date, today)
                    const isSelected = !!selected && isSameDay(date, selected)
                    const isStart = !!rangeStart && isSameDay(date, rangeStart)
                    const isEnd = !!rangeEnd && isSameDay(date, rangeEnd)
                    const inRange = !!rangeStart && !!rangeEnd && date > rangeStart && date < rangeEnd
                    const isEndpoint = isSelected || isStart || isEnd

                    return (
                        <div
                            key={date.toISOString()}
                            className={cn(
                                "flex h-9 items-center justify-center",
                                inRange && "bg-[var(--info50)]",
                                isStart && !isEnd && "rounded-l-full bg-[var(--info50)]",
                                isEnd && !isStart && "rounded-r-full bg-[var(--info50)]",
                                isStart && isEnd && "rounded-full"
                            )}
                        >
                            <button
                                type="button"
                                onClick={() => onSelectDate?.(date)}
                                disabled={!inMonth}
                                aria-label={date.toDateString()}
                                aria-pressed={isEndpoint}
                                aria-current={dayIsToday ? "date" : undefined}
                                tabIndex={inMonth ? 0 : -1}
                                className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors",
                                    inMonth ? "cursor-pointer" : "cursor-default text-[var(--neutral300)]",
                                    inMonth && weekend && !isEndpoint && "text-[var(--danger500)]",
                                    // In-range, non-endpoint weekdays sit on the fixed (non-theme-inverting)
                                    // --info50 range background, so they need a fixed dark text color too —
                                    // --neutral900 inverts to near-white in dark mode and would go
                                    // white-on-white against that always-light background.
                                    inMonth && !weekend && !isEndpoint && inRange && "text-[var(--info900)]",
                                    inMonth && !weekend && !isEndpoint && !inRange && "text-[var(--neutral900)]",
                                    inMonth && !isEndpoint && "hover:bg-[var(--neutral100)]",
                                    isEndpoint && "bg-[var(--info600)] font-medium text-white",
                                    dayIsToday && !isEndpoint && "ring-1 ring-inset ring-[var(--info600)]"
                                )}
                            >
                                {date.getDate()}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
