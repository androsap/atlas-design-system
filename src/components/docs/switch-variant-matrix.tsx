import { Fragment } from "react"
import { cn } from "@/lib/utils"
import type { SwitchColor, SwitchSize } from "@asyst/atlas"

type StateKey = "default" | "hover" | "focused" | "disabled"

const STATES: { key: StateKey; label: string }[] = [
    { key: "default", label: "Default" },
    { key: "hover", label: "Hover" },
    { key: "focused", label: "Focused" },
    { key: "disabled", label: "Disabled" },
]

const SIZES: { key: SwitchSize; label: string }[] = [
    { key: "md", label: "Medium" },
    { key: "sm", label: "Small" },
]

type Group = { label: string; color: SwitchColor }

const GROUPS: Group[] = [
    { label: "Neutral", color: "neutral" },
    { label: "Status", color: "status" },
    { label: "Primary", color: "primary" },
]

const TRACK_SIZE: Record<SwitchSize, string> = { sm: "h-5 w-9", md: "h-6 w-11" }
const THUMB_SIZE: Record<SwitchSize, string> = { sm: "h-4 w-4", md: "h-5 w-5" }
const THUMB_OFFSET: Record<SwitchSize, number> = { sm: 2, md: 2 }
const THUMB_TRAVEL: Record<SwitchSize, number> = { sm: 16, md: 20 }

// Mirrors switch.tsx's real classes, but as a resolved per-state color
// instead of Tailwind's :hover/:focus-visible pseudo-classes — hover and
// focused can't be triggered live for a static side-by-side comparison
// grid, so each state is rendered directly with the color it would
// resolve to. Every value is the same real CSS variable the live
// component uses (see the same technique in button-variant-matrix.tsx).
function trackColor(color: SwitchColor, checked: boolean, state: StateKey) {
    const active = state === "hover" ? "hover" : "default"

    if (color === "status") {
        const on = { default: "var(--success500)", hover: "var(--success600)" }
        const off = { default: "var(--danger500)", hover: "var(--danger600)" }
        return checked ? on[active] : off[active]
    }
    if (!checked) {
        return active === "hover" ? "var(--neutral300)" : "var(--neutral200)"
    }
    if (color === "primary") {
        return active === "hover" ? "var(--primary600)" : "var(--primary500)"
    }
    return active === "hover" ? "var(--neutral800)" : "var(--neutral900)"
}

function StateSwitch({
    color,
    size,
    checked,
    state,
}: {
    color: SwitchColor
    size: SwitchSize
    checked: boolean
    state: StateKey
}) {
    const background = trackColor(color, checked, state === "disabled" || state === "focused" ? "default" : state)
    const travel = checked ? THUMB_TRAVEL[size] : 0

    return (
        <span
            aria-hidden
            className={cn("relative inline-flex shrink-0 rounded-full", TRACK_SIZE[size])}
            style={{
                background,
                opacity: state === "disabled" ? 0.4 : 1,
                boxShadow: state === "focused" ? "0 0 0 2px var(--surface-base), 0 0 0 4px var(--primary300)" : undefined,
            }}
        >
            <span
                className={cn("absolute rounded-full bg-[var(--neutral0)] shadow-sm transition-transform", THUMB_SIZE[size])}
                style={{ left: THUMB_OFFSET[size], top: THUMB_OFFSET[size], transform: `translateX(${travel}px)` }}
            />
        </span>
    )
}

export function SwitchVariantMatrix() {
    return (
        <div className="overflow-x-auto overflow-y-hidden">
            <div className="min-w-[720px]">
                <div className="grid grid-cols-[180px_repeat(4,1fr)] gap-x-4 border-b border-[var(--neutral100)] pb-3">
                    <span className="text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                        State
                    </span>
                    {STATES.map((s) => (
                        <span
                            key={s.key}
                            className="text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase"
                        >
                            {s.label}
                        </span>
                    ))}
                </div>
                <div className="space-y-6 pt-6">
                    {GROUPS.map((group) =>
                        SIZES.map((size) => (
                            <Fragment key={`${group.label}-${size.key}`}>
                                {[false, true].map((checked) => (
                                    <div
                                        key={`${size.key}-${checked}`}
                                        className="grid grid-cols-[180px_repeat(4,1fr)] items-center gap-x-4"
                                    >
                                        <span className="text-sm font-medium text-[var(--neutral900)]">
                                            {group.label} / {size.label} / {checked ? "On" : "Off"}
                                        </span>
                                        {STATES.map((state) => (
                                            <StateSwitch
                                                key={state.key}
                                                color={group.color}
                                                size={size.key}
                                                checked={checked}
                                                state={state.key}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </Fragment>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
