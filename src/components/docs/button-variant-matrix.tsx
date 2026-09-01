import { Fragment } from "react"
import { RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ButtonColor, ButtonVariant, ButtonSize } from "@/components/ui/button"

type StateKey = "default" | "hover" | "pressed" | "focused" | "disabled"

const STATES: { key: StateKey; label: string }[] = [
    { key: "default", label: "Default" },
    { key: "hover", label: "Hover" },
    { key: "pressed", label: "Pressed" },
    { key: "focused", label: "Focused" },
    { key: "disabled", label: "Disabled" },
]

const SIZES: { key: ButtonSize; label: string }[] = [
    { key: "lg", label: "Large" },
    { key: "md", label: "Medium" },
    { key: "sm", label: "Small" },
]

type VariantGroup = { label: string; color: ButtonColor; variant: ButtonVariant }

const VARIANT_GROUPS: VariantGroup[] = [
    { label: "Brand Primary (Filled)", color: "brand", variant: "primary" },
    { label: "Brand Secondary (Outline)", color: "brand", variant: "secondary" },
    { label: "Brand Tertiary (Text)", color: "brand", variant: "tertiary" },
    { label: "Danger", color: "danger", variant: "primary" },
    { label: "Warning", color: "warning", variant: "primary" },
    { label: "Success", color: "success", variant: "primary" },
    { label: "Neutral Primary (Filled)", color: "neutral", variant: "primary" },
    { label: "Neutral Secondary (Outline)", color: "neutral", variant: "secondary" },
    { label: "Neutral Tertiary (Text)", color: "neutral", variant: "tertiary" },
]

const SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: "gap-1.5 px-3 py-1.5 text-sm",
    md: "gap-1.5 px-4 py-2 text-sm",
    lg: "gap-2 px-5 py-2.5 text-base",
}

const ICON_SIZE: Record<ButtonSize, number> = { sm: 14, md: 16, lg: 18 }

// This mirrors buttonClasses() in src/components/ui/button.tsx, but as
// resolved per-state colors instead of Tailwind hover:/active:/ classes —
// hover, pressed and focused can't be triggered live for a static
// side-by-side comparison grid, so each state is rendered directly with
// the color it would resolve to. Every value is the same real CSS
// variable the live component uses.
// The "brand" color key is the component's API name; the actual token
// scale behind it is "primary" (var(--primary500), not var(--brand500)).
// Every other color key happens to match its token prefix 1:1.
const TOKEN_PREFIX: Record<ButtonColor, string> = {
    brand: "primary",
    neutral: "neutral",
    danger: "danger",
    warning: "warning",
    success: "success",
}

function stateColors(color: ButtonColor, variant: ButtonVariant, state: StateKey) {
    const isNeutral = color === "neutral"
    const token = TOKEN_PREFIX[color]
    const shade = isNeutral
        ? { default: "900", hover: "800", pressed: "950" }
        : { default: "500", hover: "600", pressed: "700" }
    const active = state === "hover" || state === "pressed" ? state : "default"

    if (variant === "primary") {
        return {
            background: `var(--${token}${shade[active]})`,
            // Neutral's fill (--neutral900) inverts in dark mode; "white"
            // would go white-on-white. --background inverts alongside it.
            color: isNeutral ? "var(--background)" : "white",
            borderColor: "transparent",
        }
    }

    const textColor = isNeutral ? "var(--neutral900)" : `var(--${token}600)`
    const tintShade = active === "default" ? null : active === "hover" ? "50" : "100"

    return {
        background: tintShade ? `var(--${token}${tintShade})` : "transparent",
        color: textColor,
        borderColor: variant === "secondary" ? (isNeutral ? "var(--neutral300)" : `var(--${token}500)`) : "transparent",
    }
}

function StateButton({
    color,
    variant,
    size,
    state,
}: {
    color: ButtonColor
    variant: ButtonVariant
    size: ButtonSize
    state: StateKey
}) {
    const colors = stateColors(color, variant, state === "disabled" || state === "focused" ? "default" : state)
    const iconSize = ICON_SIZE[size]

    return (
        <div
            aria-hidden
            className={cn(
                "inline-flex items-center justify-center rounded-[var(--radius-md)] font-medium",
                variant === "secondary" && "border",
                SIZE_CLASSES[size]
            )}
            style={{
                background: colors.background,
                color: colors.color,
                borderColor: colors.borderColor,
                opacity: state === "disabled" ? 0.4 : 1,
                boxShadow: state === "focused" ? "0 0 0 2px var(--surface-base), 0 0 0 4px var(--primary300)" : undefined,
            }}
        >
            <RefreshCw size={iconSize} />
            Button
            <RefreshCw size={iconSize} />
        </div>
    )
}

export function ButtonVariantMatrix() {
    return (
        <div className="overflow-x-auto overflow-y-hidden">
            <div className="min-w-[1100px]">
                <div className="grid grid-cols-[220px_repeat(5,1fr)] gap-x-4 gap-y-1 border-b border-[var(--neutral100)] pb-3">
                    <span className="sticky left-0 z-10 block w-[220px] bg-[var(--neutral0)]" />
                    {STATES.map((s) => (
                        <span
                            key={s.key}
                            className="text-center text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase"
                        >
                            {s.label}
                        </span>
                    ))}
                </div>

                <div className="space-y-10 pt-6">
                    {VARIANT_GROUPS.map((group) => (
                        <div key={group.label}>
                            <p className="sticky left-0 z-10 mb-3 block w-[220px] bg-[var(--neutral0)] pr-4 text-sm font-semibold text-[var(--neutral900)]">
                                {group.label}
                            </p>
                            <div className="grid grid-cols-[220px_repeat(5,1fr)] items-center gap-x-4 gap-y-4">
                                {SIZES.map((size) => (
                                    <Fragment key={size.key}>
                                        <span className="sticky left-0 z-10 flex w-[220px] items-center self-stretch bg-[var(--neutral0)] pr-4 text-xs text-[var(--neutral500)]">
                                            {size.label}
                                        </span>
                                        {STATES.map((state) => (
                                            <div key={`${size.key}-${state.key}`} className="flex justify-center">
                                                <StateButton
                                                    color={group.color}
                                                    variant={group.variant}
                                                    size={size.key}
                                                    state={state.key}
                                                />
                                            </div>
                                        ))}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
