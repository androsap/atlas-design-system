import { Home } from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import type { BreadcrumbState } from "@/components/ui/breadcrumbs"

const STATES: { key: BreadcrumbState; label: string }[] = [
    { key: "default", label: "Default" },
    { key: "hover", label: "Hover" },
    { key: "active", label: "Active" },
]

const DEPTHS: { label: string; items: { label: string }[] }[] = [
    { label: "2 levels", items: [{ label: "Home" }, { label: "Components" }] },
    { label: "3 levels", items: [{ label: "Home" }, { label: "Components" }, { label: "Button" }] },
    {
        label: "4 levels",
        items: [{ label: "Home" }, { label: "Components" }, { label: "Button" }, { label: "Variants & states" }],
    },
]

export function BreadcrumbsVariantMatrix() {
    return (
        <div className="space-y-10">
            <div className="overflow-x-auto overflow-y-hidden">
                <div className="min-w-[480px]">
                    <div className="grid grid-cols-3 gap-x-6 border-b border-[var(--neutral100)] pb-3">
                        {STATES.map((s) => (
                            <span
                                key={s.key}
                                className="text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase"
                            >
                                {s.label}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-x-6 pt-6">
                        {STATES.map((s) => (
                            <Breadcrumbs key={s.key} items={[{ label: "Home", icon: Home, forceState: s.key }]} />
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <p className="mb-4 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                    Trail depth
                </p>
                <div className="space-y-4">
                    {DEPTHS.map((depth) => (
                        <div
                            key={depth.label}
                            className="flex items-center justify-between gap-6 rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] px-4 py-3"
                        >
                            <Breadcrumbs
                                items={depth.items.map((item, i) => ({
                                    label: item.label,
                                    icon: i === 0 ? Home : undefined,
                                }))}
                            />
                            <span className="shrink-0 text-xs text-[var(--neutral400)]">{depth.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
