"use client"

import { useId, useState } from "react"
import { RadioButton } from "@/components/ui/radio-button"
import { CopyButton } from "@/components/docs/copy-button"

const COLORS = ["primary", "danger", "neutral"] as const
const SIZES = ["md", "sm"] as const

type Color = (typeof COLORS)[number]
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

const OPTIONS = [
    { value: "sm", label: "Small", helperText: "Fits a compact toolbar" },
    { value: "md", label: "Medium", helperText: "The default size" },
    { value: "lg", label: "Large", helperText: "More breathing room" },
]

export function RadioPlayground() {
    const [color, setColor] = useState<Color>("primary")
    const [size, setSize] = useState<Size>("md")
    const [disabled, setDisabled] = useState(false)
    const [selected, setSelected] = useState("md")
    const groupName = useId()

    const props = [
        color !== "primary" && `color="${color}"`,
        size !== "md" && `size="${size}"`,
        disabled && "disabled",
    ]
        .filter(Boolean)
        .join(" ")
    const code = `<RadioButton\n  name="size"\n  value="md"\n  label="Medium"\n  checked={selected === "md"}\n  onChange={() => setSelected("md")}${
        props ? "\n  " + props : ""
    }\n/>`

    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                <div className="mx-auto flex max-w-xs min-h-24 flex-col justify-center gap-4">
                    {OPTIONS.map((option) => (
                        <RadioButton
                            key={option.value}
                            name={groupName}
                            value={option.value}
                            label={option.label}
                            helperText={option.helperText}
                            color={color}
                            size={size}
                            disabled={disabled}
                            checked={selected === option.value}
                            onChange={() => setSelected(option.value)}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap items-end gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                <Segmented label="Color" options={COLORS} value={color} onChange={setColor} />
                <Segmented label="Size" options={SIZES} value={size} onChange={setSize} />
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
