"use client"

import { useState } from "react"
import { Spinner, type SpinnerColor, type SpinnerSize } from "@/components/ui/spinner"
import { CopyButton } from "@/components/docs/copy-button"

const COLORS = ["neutral", "info", "danger"] as const
const SIZES = ["xs", "sm", "md", "lg", "xl"] as const

function Segmented<T extends string>({
    label,
    options,
    value,
    onChange,
}: {
    label: string
    options: readonly T[]
    value: T
    onChange: (value: T) => void
}) {
    return (
        <div>
            <p className="mb-2 text-xs font-medium text-[var(--neutral500)]">{label}</p>
            <div className="inline-flex flex-wrap rounded-[var(--radius-md)] border border-[var(--neutral100)] p-1">
                {options.map((option) => (
                    <button
                        key={option}
                        type="button"
                        onClick={() => onChange(option)}
                        className={`cursor-pointer rounded-[6px] px-3 py-1.5 text-sm uppercase transition-colors ${
                            value === option
                                ? "bg-[var(--neutral900)] text-[var(--background)]"
                                : "text-[var(--neutral600)] hover:text-[var(--neutral900)]"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}

export function SpinnerPlayground() {
    const [color, setColor] = useState<SpinnerColor>("neutral")
    const [size, setSize] = useState<SpinnerSize>("md")

    const props = [color !== "neutral" && `color="${color}"`, size !== "md" && `size="${size}"`]
        .filter(Boolean)
        .join(" ")
    const code = `<Spinner label="Loading results"${props ? " " + props : ""} />`

    return (
        <div className="flex flex-col gap-6">
            <div className="flex min-h-24 items-center justify-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                <Spinner color={color} size={size} label="Loading results" />
            </div>

            <div className="flex flex-wrap items-end gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                <Segmented label="Color" options={COLORS} value={color} onChange={setColor} />
                <Segmented label="Size" options={SIZES} value={size} onChange={setSize} />
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
