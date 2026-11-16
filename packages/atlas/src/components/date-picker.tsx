"use client"

import { useState } from "react"
import * as Popover from "@radix-ui/react-popover"
import { CalendarDays } from "lucide-react"
import { cn } from "../lib/utils.js"
import { Calendar } from "./calendar.js"
import { addMonths, formatDateLabel } from "../lib/calendar-utils.js"

export interface DatePickerProps {
    value?: Date | null
    defaultValue?: Date | null
    onChange?: (date: Date) => void
    placeholder?: string
    disabled?: boolean
    className?: string
}

export function DatePicker({
    value,
    defaultValue = null,
    onChange,
    placeholder = "Select a date",
    disabled = false,
    className,
}: DatePickerProps) {
    const [uncontrolled, setUncontrolled] = useState<Date | null>(defaultValue)
    const selected = value !== undefined ? value : uncontrolled
    const [open, setOpen] = useState(false)
    const [month, setMonth] = useState(() => selected ?? new Date())

    const handleSelect = (date: Date) => {
        if (value === undefined) setUncontrolled(date)
        onChange?.(date)
        setOpen(false)
    }

    return (
        <Popover.Root
            open={open}
            onOpenChange={(next) => {
                setOpen(next)
                if (next) setMonth(selected ?? new Date())
            }}
        >
            <Popover.Trigger asChild>
                <button
                    type="button"
                    disabled={disabled}
                    className={cn(
                        "flex w-full max-w-[220px] cursor-pointer items-center justify-between gap-2 rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-3 py-2 text-sm text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary300)]",
                        "disabled:pointer-events-none disabled:opacity-40",
                        className
                    )}
                >
                    <span className={cn(!selected && "text-[var(--neutral400)]")}>
                        {selected ? formatDateLabel(selected) : placeholder}
                    </span>
                    <CalendarDays size={16} className="shrink-0 text-[var(--neutral400)]" aria-hidden />
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    align="start"
                    sideOffset={8}
                    className="z-50 rounded-[var(--radius-md)] border border-[var(--neutral100)] bg-[var(--neutral0)] p-4 shadow-xl"
                >
                    <Calendar
                        month={month}
                        selected={selected}
                        onSelectDate={handleSelect}
                        onPrev={() => setMonth((m) => addMonths(m, -1))}
                        onNext={() => setMonth((m) => addMonths(m, 1))}
                    />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}
