import { Progress } from "@/components/ui/progress"
import type { ProgressColor } from "@/components/ui/progress"

const COLORS: { key: ProgressColor; label: string }[] = [
    { key: "neutral", label: "Neutral" },
    { key: "info", label: "Info" },
    { key: "danger", label: "Danger" },
]

const VALUES = [0, 20, 40, 60, 80, 100]

export function ProgressVariantMatrix() {
    return (
        <div className="space-y-10">
            {COLORS.map((color) => (
                <div key={color.key}>
                    <p className="mb-4 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                        {color.label}
                    </p>
                    <div className="space-y-3">
                        {VALUES.map((value) => (
                            <div key={value} className="flex items-center gap-4">
                                <span className="w-10 shrink-0 text-right text-xs text-[var(--neutral400)]">
                                    {value}%
                                </span>
                                <Progress value={value} color={color.key} showValue={false} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
