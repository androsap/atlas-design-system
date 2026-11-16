import { Hash } from "lucide-react"
import { Badge } from "@asyst/atlas"
import type { BadgeColor, BadgeVariant, BadgeSize } from "@asyst/atlas"

const COLORS: { key: BadgeColor; label: string }[] = [
    { key: "neutral", label: "Neutral" },
    { key: "primary", label: "Brand-primary" },
    { key: "secondary", label: "Brand-secondary" },
    { key: "info", label: "Info" },
    { key: "success", label: "Success" },
    { key: "warning", label: "Warning" },
    { key: "danger", label: "Danger" },
]

const VARIANTS: { key: BadgeVariant; label: string }[] = [
    { key: "fill", label: "Fill" },
    { key: "outline", label: "Outline" },
    { key: "light", label: "Light" },
]

const SIZES: { key: BadgeSize; label: string }[] = [
    { key: "lg", label: "Large" },
    { key: "md", label: "Medium" },
    { key: "sm", label: "Small" },
]

export function BadgeVariantMatrix() {
    return (
        <div className="overflow-x-auto overflow-y-hidden">
            <div className="min-w-[600px]">
                <div className="grid grid-cols-[180px_repeat(3,1fr)] gap-x-4 border-b border-[var(--neutral100)] pb-3">
                    <span className="text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                        State
                    </span>
                    {SIZES.map((s) => (
                        <span
                            key={s.key}
                            className="text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase"
                        >
                            {s.label}
                        </span>
                    ))}
                </div>
                <div className="space-y-5 pt-6">
                    {COLORS.map((color) =>
                        VARIANTS.map((variant) => (
                            <div
                                key={`${color.key}-${variant.key}`}
                                className="grid grid-cols-[180px_repeat(3,1fr)] items-center gap-x-4"
                            >
                                <span className="text-sm font-medium text-[var(--neutral900)]">
                                    {color.label} / {variant.label}
                                </span>
                                {SIZES.map((size) => (
                                    <Badge
                                        key={size.key}
                                        color={color.key}
                                        variant={variant.key}
                                        size={size.key}
                                        leadingIcon={Hash}
                                        trailingIcon={Hash}
                                    >
                                        Badge
                                    </Badge>
                                ))}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
