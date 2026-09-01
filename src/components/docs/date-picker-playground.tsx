"use client"

import { useState } from "react"
import { DatePicker } from "@/components/ui/date-picker"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { CopyButton } from "@/components/docs/copy-button"

const MODES = ["single", "range"] as const
type Mode = (typeof MODES)[number]

export function DatePickerPlayground() {
    const [mode, setMode] = useState<Mode>("single")

    const code =
        mode === "single"
            ? `<DatePicker\n  defaultValue={new Date()}\n  onChange={(date) => console.log(date)}\n/>`
            : `<DateRangePicker\n  onChange={(range) => console.log(range.start, range.end)}\n/>`

    return (
        <div className="flex flex-col gap-6">
            <div className="flex min-h-24 items-center justify-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                {mode === "single" ? <DatePicker /> : <DateRangePicker />}
            </div>

            <div className="flex flex-wrap items-end gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                <div>
                    <p className="mb-2 text-xs font-medium text-[var(--neutral500)]">Mode</p>
                    <div className="inline-flex flex-wrap rounded-[var(--radius-md)] border border-[var(--neutral100)] p-1">
                        {MODES.map((m) => (
                            <button
                                key={m}
                                type="button"
                                onClick={() => setMode(m)}
                                className={`cursor-pointer rounded-[6px] px-3 py-1.5 text-sm capitalize transition-colors ${
                                    mode === m
                                        ? "bg-[var(--neutral900)] text-[var(--background)]"
                                        : "text-[var(--neutral600)] hover:text-[var(--neutral900)]"
                                }`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-[var(--neutral100)] bg-[#0d1117]">
                <CopyButton
                    code={code}
                    className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
                />
                <pre className="overflow-x-auto overflow-y-hidden p-4 text-sm text-[#c9d1d9]">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    )
}
