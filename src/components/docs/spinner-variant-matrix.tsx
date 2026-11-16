import { Spinner } from "@asyst/atlas"
import type { SpinnerColor, SpinnerSize } from "@asyst/atlas"

const COLORS: { key: SpinnerColor; label: string }[] = [
    { key: "neutral", label: "Neutral" },
    { key: "info", label: "Info" },
    { key: "danger", label: "Danger" },
]

const SIZES: { key: SpinnerSize; label: string }[] = [
    { key: "xs", label: "XS" },
    { key: "sm", label: "SM" },
    { key: "md", label: "MD" },
    { key: "lg", label: "LG" },
    { key: "xl", label: "XL" },
]

export function SpinnerVariantMatrix() {
    return (
        <div className="overflow-x-auto overflow-y-hidden">
            <div className="min-w-[520px]">
                <div className="grid grid-cols-[100px_repeat(5,1fr)] gap-x-4 border-b border-[var(--neutral100)] pb-3">
                    <span className="text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                        Color
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
                <div className="space-y-6 pt-6">
                    {COLORS.map((color) => (
                        <div
                            key={color.key}
                            className="grid grid-cols-[100px_repeat(5,1fr)] items-center gap-x-4"
                        >
                            <span className="text-sm font-medium text-[var(--neutral900)]">{color.label}</span>
                            {SIZES.map((size) => (
                                <Spinner key={size.key} color={color.key} size={size.key} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
