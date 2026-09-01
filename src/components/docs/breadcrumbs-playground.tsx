"use client"

import { useState } from "react"
import { Home } from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { CopyButton } from "@/components/docs/copy-button"

const TRAIL = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Button", href: "/components/button" },
    { label: "Variants & states" },
]

const DEPTHS = [2, 3, 4] as const

export function BreadcrumbsPlayground() {
    const [depth, setDepth] = useState<(typeof DEPTHS)[number]>(3)
    const [showIcon, setShowIcon] = useState(true)

    const items = TRAIL.slice(0, depth)
    const previewItems = items.map((item, i) => ({
        label: item.label,
        href: item.href,
        icon: showIcon && i === 0 ? Home : undefined,
    }))

    const codeItems = items
        .map((item, i) => {
            const parts = [`label: "${item.label}"`]
            if (item.href) parts.push(`href: "${item.href}"`)
            if (showIcon && i === 0) parts.push("icon: Home")
            return `    { ${parts.join(", ")} },`
        })
        .join("\n")
    const code = `<Breadcrumbs\n  items={[\n${codeItems}\n  ]}\n/>`

    return (
        <div className="flex flex-col gap-6">
            <div className="flex min-h-24 items-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                <Breadcrumbs items={previewItems} />
            </div>

            <div className="flex flex-wrap items-end gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                <div>
                    <p className="mb-2 text-xs font-medium text-[var(--neutral500)]">Depth</p>
                    <div className="inline-flex flex-wrap rounded-[var(--radius-md)] border border-[var(--neutral100)] p-1">
                        {DEPTHS.map((d) => (
                            <button
                                key={d}
                                type="button"
                                onClick={() => setDepth(d)}
                                className={`cursor-pointer rounded-[6px] px-3 py-1.5 text-sm transition-colors ${
                                    depth === d
                                        ? "bg-[var(--neutral900)] text-[var(--background)]"
                                        : "text-[var(--neutral600)] hover:text-[var(--neutral900)]"
                                }`}
                            >
                                {d} levels
                            </button>
                        ))}
                    </div>
                </div>
                <label className="flex items-center gap-2 pb-1.5 text-sm text-[var(--neutral700)]">
                    <input type="checkbox" checked={showIcon} onChange={(e) => setShowIcon(e.target.checked)} />
                    Home icon
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
