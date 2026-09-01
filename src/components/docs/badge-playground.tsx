"use client"

import { useState } from "react"
import { Badge, type BadgeColor, type BadgeVariant, type BadgeSize } from "@/components/ui/badge"
import { CopyButton } from "@/components/docs/copy-button"

const COLORS = ["neutral", "primary", "secondary", "info", "success", "warning", "danger"] as const
const VARIANTS = ["fill", "outline", "light"] as const
const SIZES = ["sm", "md", "lg"] as const

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

export function BadgePlayground() {
    const [color, setColor] = useState<BadgeColor>("primary")
    const [variant, setVariant] = useState<BadgeVariant>("fill")
    const [size, setSize] = useState<BadgeSize>("md")
    const [dot, setDot] = useState(false)

    const props = [
        color !== "neutral" && `color="${color}"`,
        variant !== "fill" && `variant="${variant}"`,
        size !== "md" && `size="${size}"`,
        dot && "dot",
    ]
        .filter(Boolean)
        .join("\n  ")
    const code = dot
        ? `<Badge\n  ${props}\n>\n  Online\n</Badge>`
        : `<Badge${props ? "\n  " + props : ""}>\n  Badge\n</Badge>`

    return (
        <div className="flex flex-col gap-6">
            <div className="flex min-h-24 items-center justify-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                <Badge color={color} variant={variant} size={size} dot={dot}>
                    {dot ? "Online" : "Badge"}
                </Badge>
            </div>

            <div className="flex flex-wrap items-end gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                <Segmented label="Color" options={COLORS} value={color} onChange={setColor} />
                <Segmented label="Variant" options={VARIANTS} value={variant} onChange={setVariant} />
                <Segmented label="Size" options={SIZES} value={size} onChange={setSize} />
                <label className="flex items-center gap-2 pb-1.5 text-sm text-[var(--neutral700)]">
                    <input type="checkbox" checked={dot} onChange={(e) => setDot(e.target.checked)} />
                    Dot only
                </label>
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
