"use client"

import { useState } from "react"
import { Info } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    type TooltipVariant,
} from "@/components/ui/tooltip"
import { CopyButton } from "@/components/docs/copy-button"

const VARIANTS = ["dark", "light"] as const
const SIDES = ["top", "right", "bottom", "left"] as const

type Side = (typeof SIDES)[number]

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

export function TooltipPlayground() {
    const [variant, setVariant] = useState<TooltipVariant>("dark")
    const [side, setSide] = useState<Side>("top")
    const [richContent, setRichContent] = useState(true)

    const attrs = [
        side !== "top" && `side="${side}"`,
        variant !== "dark" && `variant="${variant}"`,
        richContent && `icon={Info}`,
        richContent && `title="Sync complete"`,
    ]
        .filter(Boolean)
        .join("\n    ")
    const body = richContent ? "All changes were saved 2 minutes ago." : "Edit configurations"
    const code = `<Tooltip>\n  <TooltipTrigger asChild>\n    <button>Hover trigger</button>\n  </TooltipTrigger>\n  <TooltipContent\n    ${attrs}\n  >\n    ${body}\n  </TooltipContent>\n</Tooltip>`

    return (
        <div className="flex flex-col gap-6">
            <TooltipProvider delayDuration={150}>
                <div className="flex min-h-40 items-center justify-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button
                                type="button"
                                className="cursor-pointer rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-4 py-2 text-sm font-medium text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)]"
                            >
                                Hover trigger
                            </button>
                        </TooltipTrigger>
                        <TooltipContent
                            side={side}
                            variant={variant}
                            icon={richContent ? Info : undefined}
                            title={richContent ? "Sync complete" : undefined}
                        >
                            {body}
                        </TooltipContent>
                    </Tooltip>
                </div>
            </TooltipProvider>

            <div className="flex flex-wrap items-end gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                <Segmented label="Variant" options={VARIANTS} value={variant} onChange={setVariant} />
                <Segmented label="Side" options={SIDES} value={side} onChange={setSide} />
                <label className="flex items-center gap-2 pb-1.5 text-sm text-[var(--neutral700)]">
                    <input
                        type="checkbox"
                        checked={richContent}
                        onChange={(e) => setRichContent(e.target.checked)}
                    />
                    Icon + title
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
