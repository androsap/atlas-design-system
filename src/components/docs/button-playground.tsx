"use client"

import { useState } from "react"
import { RefreshCw } from "lucide-react"
import { Button } from "@asyst/atlas"
import { CopyButton } from "@/components/docs/copy-button"

const COLORS = ["brand", "neutral", "danger", "warning", "success"] as const
const VARIANTS = ["primary", "secondary", "tertiary"] as const
const SIZES = ["sm", "md", "lg"] as const

type Color = (typeof COLORS)[number]
type Variant = (typeof VARIANTS)[number]
type Size = (typeof SIZES)[number]

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

export function ButtonPlayground() {
    const [color, setColor] = useState<Color>("brand")
    const [variant, setVariant] = useState<Variant>("primary")
    const [size, setSize] = useState<Size>("md")
    const [icon, setIcon] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [label, setLabel] = useState("Click me")

    const props = [
        color !== "brand" && `color="${color}"`,
        variant !== "primary" && `variant="${variant}"`,
        size !== "md" && `size="${size}"`,
        icon && "leadingIcon={RefreshCw}",
        disabled && "disabled",
    ]
        .filter(Boolean)
        .join(" ")
    const code = `<Button${props ? " " + props : ""}>\n  ${label}\n</Button>`

    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                <div className="flex min-h-24 items-center justify-center">
                    <Button
                        color={color}
                        variant={variant}
                        size={size}
                        disabled={disabled}
                        leadingIcon={icon ? RefreshCw : undefined}
                    >
                        {label}
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap items-end gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                <Segmented label="Color" options={COLORS} value={color} onChange={setColor} />
                <Segmented label="Variant" options={VARIANTS} value={variant} onChange={setVariant} />
                <Segmented label="Size" options={SIZES} value={size} onChange={setSize} />
                <div>
                    <p className="mb-2 text-xs font-medium text-[var(--neutral500)]">Label</p>
                    <input
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        className="rounded-[var(--radius-md)] border border-[var(--neutral100)] px-3 py-1.5 text-sm text-[var(--neutral900)] outline-none focus:border-[var(--primary500)]"
                    />
                </div>
                <label className="flex items-center gap-2 pb-1.5 text-sm text-[var(--neutral700)]">
                    <input type="checkbox" checked={icon} onChange={(e) => setIcon(e.target.checked)} />
                    Icon
                </label>
                <label className="flex items-center gap-2 pb-1.5 text-sm text-[var(--neutral700)]">
                    <input
                        type="checkbox"
                        checked={disabled}
                        onChange={(e) => setDisabled(e.target.checked)}
                    />
                    Disabled
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
