import { Checkbox, type CheckboxColor, type CheckboxSize } from "@asyst/atlas"

type Group = { label: string; color: CheckboxColor; disabled?: boolean }

const GROUPS: Group[] = [
    { label: "Primary", color: "primary" },
    { label: "Danger", color: "danger" },
    { label: "Neutral", color: "neutral" },
    { label: "Disabled", color: "primary", disabled: true },
]

const SIZES: { key: CheckboxSize; label: string }[] = [
    { key: "md", label: "Medium" },
    { key: "sm", label: "Small" },
]

type StateKey = "unselected" | "checked" | "indeterminate" | "focused"

const STATES: { key: StateKey; label: string }[] = [
    { key: "unselected", label: "Unselected" },
    { key: "checked", label: "Checked" },
    { key: "indeterminate", label: "Indeterminate" },
    { key: "focused", label: "Focused" },
]

export function CheckboxVariantMatrix() {
    return (
        <div className="overflow-x-auto overflow-y-hidden">
            <div className="min-w-[760px]">
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
                                    <Checkbox
                                        key={state.key}
                                        color={group.color}
                                        size={size.key}
                                        disabled={group.disabled}
                                        checked={state.key === "checked"}
                                        readOnly
                                        indeterminate={state.key === "indeterminate"}
                                        focused={state.key === "focused"}
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
