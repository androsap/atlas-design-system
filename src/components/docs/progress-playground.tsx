"use client"

import { useState } from "react"
import { Progress, type ProgressColor, type ProgressLayout } from "@asyst/atlas"
import { CopyButton } from "@/components/docs/copy-button"

const COLORS = ["neutral", "info", "danger"] as const
const LAYOUTS = ["stacked", "inline"] as const

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
                        className={`cursor-pointer rounded-[6px] px-3 py-1.5 text-sm capitalize transition-colors ${
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

export function ProgressPlayground() {
    const [value, setValue] = useState(60)
    const [color, setColor] = useState<ProgressColor>("neutral")
    const [layout, setLayout] = useState<ProgressLayout>("stacked")

    const props = [
        color !== "neutral" && `color="${color}"`,
        layout !== "stacked" && `layout="${layout}"`,
    ]
        .filter(Boolean)
        .join("\n  ")
    const code = `<Progress\n  value={${value}}${props ? "\n  " + props : ""}\n  label="Uploading photo.jpg"\n/>`

    return (
        <div className="flex flex-col gap-6">
            <div className="flex min-h-24 items-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                <Progress value={value} color={color} layout={layout} label="Uploading photo.jpg" />
            </div>

            <div className="flex flex-wrap items-end gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                <div>
                    <p className="mb-2 text-xs font-medium text-[var(--neutral500)]">Value: {value}%</p>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="w-40 cursor-pointer accent-[var(--primary500)]"
                    />
                </div>
                <Segmented label="Color" options={COLORS} value={color} onChange={setColor} />
                <Segmented label="Layout" options={LAYOUTS} value={layout} onChange={setLayout} />
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
