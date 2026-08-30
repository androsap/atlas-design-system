import { Settings } from "lucide-react"
import { cn } from "@/lib/utils"

// Static spec-sheet view of the four menu item states, side by side — a
// real open Radix menu can only show one interaction state at a time, so
// this mirrors DropdownMenuItem's classes directly rather than rendering
// inside an actual DropdownMenu.Content (which expects a real trigger).
type StaticItem = { label: string; className: string }

const ITEMS: StaticItem[] = [
    { label: "Default", className: "text-[var(--neutral900)]" },
    { label: "Hover", className: "bg-[var(--surface-accent-subtle)] text-[var(--neutral900)]" },
    { label: "Selected", className: "font-medium text-[var(--primary600)]" },
    { label: "Danger", className: "text-[var(--danger600)]" },
]

export function DropdownStatesPanel() {
    return (
        <div className="w-[280px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--neutral100)] bg-[var(--neutral0)] p-1.5 shadow-xl">
            <p className="px-2.5 pt-1.5 pb-2 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                Header Text
            </p>
            <div className="my-1.5 h-px bg-[var(--neutral100)]" />
            {ITEMS.map((item) => (
                <div
                    key={item.label}
                    className={cn(
                        "flex h-9 items-center gap-2 rounded-[6px] px-2.5 text-sm select-none",
                        item.className
                    )}
                >
                    <Settings size={16} className="shrink-0" aria-hidden />
                    <span className="flex-1 truncate">Menu item</span>
                    <Settings size={16} className="shrink-0" aria-hidden />
                </div>
            ))}
        </div>
    )
}
