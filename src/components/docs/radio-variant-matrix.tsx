import { RadioButton, type RadioColor, type RadioSize } from "@/components/ui/radio-button"

type Group = { label: string; color: RadioColor; disabled?: boolean }

const GROUPS: Group[] = [
    { label: "Primary", color: "primary" },
    { label: "Danger", color: "danger" },
    { label: "Neutral", color: "neutral" },
    { label: "Disable", color: "primary", disabled: true },
]

const SIZES: { key: RadioSize; label: string }[] = [
    { key: "md", label: "Medium" },
    { key: "sm", label: "Small" },
]

type StateKey = "unselected" | "checked" | "unselected-focused" | "checked-focused"

const STATES: { key: StateKey; label: string }[] = [
    { key: "unselected", label: "Unselected" },
    { key: "checked", label: "Checked" },
    { key: "unselected-focused", label: "Unselected - Focused" },
    { key: "checked-focused", label: "Checked - Focused" },
]

export function RadioVariantMatrix() {
    return (
        <div className="overflow-x-auto">
            <div className="min-w-[820px]">
                <div className="grid grid-cols-[140px_repeat(4,1fr)] gap-x-4 border-b border-[var(--neutral100)] pb-3">
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

                <div className="space-y-8 pt-6">
                    {GROUPS.map((group) =>
                        SIZES.map((size) => (
                            <div
                                key={`${group.label}-${size.key}`}
                                className="grid grid-cols-[140px_repeat(4,1fr)] items-start gap-x-4"
                            >
                                <span className="pt-1 text-sm font-medium text-[var(--neutral900)]">
                                    {group.label} / {size.label}
                                </span>
                                {STATES.map((state) => (
                                    <RadioButton
                                        key={state.key}
                                        color={group.color}
                                        size={size.key}
                                        disabled={group.disabled}
                                        checked={state.key === "checked" || state.key === "checked-focused"}
                                        readOnly
                                        focused={state.key === "unselected-focused" || state.key === "checked-focused"}
                                        label="Label"
                                        helperText="Helper Text"
                                    />
                                ))}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
