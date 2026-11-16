"use client"

import { Fragment } from "react"
import { Hash } from "lucide-react"
import { Chip } from "@asyst/atlas"
import type { ChipColor, ChipVariant, ChipSize } from "@asyst/atlas"

type StateKey = "default" | "selected" | "focused"

const STATES: { key: StateKey; label: string }[] = [
    { key: "default", label: "Default" },
    { key: "selected", label: "Selected" },
    { key: "focused", label: "Focused" },
]

const SIZES: { key: ChipSize; label: string }[] = [
    { key: "lg", label: "Large" },
    { key: "md", label: "Medium" },
    { key: "sm", label: "Small" },
]

type Group = { label: string; color: ChipColor; variant: ChipVariant }

const GROUPS: Group[] = [
    { label: "Neutral Fill", color: "neutral", variant: "fill" },
    { label: "Neutral Outline", color: "neutral", variant: "outline" },
    { label: "Primary Fill", color: "primary", variant: "fill" },
    { label: "Primary Outline", color: "primary", variant: "outline" },
    { label: "Success Fill", color: "success", variant: "fill" },
    { label: "Success Outline", color: "success", variant: "outline" },
    { label: "Warning Fill", color: "warning", variant: "fill" },
    { label: "Warning Outline", color: "warning", variant: "outline" },
    { label: "Danger Fill", color: "danger", variant: "fill" },
    { label: "Danger Outline", color: "danger", variant: "outline" },
]

export function ChipVariantMatrix() {
    return (
        <div className="overflow-x-auto overflow-y-hidden">
            <div className="min-w-[720px]">
                <div className="grid grid-cols-[160px_repeat(3,1fr)] gap-x-4 border-b border-[var(--neutral100)] pb-3">
                    <span className="sticky left-0 z-10 block w-[160px] bg-[var(--neutral0)]" />
                    {STATES.map((s) => (
                        <span
                            key={s.key}
                            className="text-center text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase"
                        >
                            {s.label}
                        </span>
                    ))}
                </div>

                <div className="space-y-8 pt-6">
                    {GROUPS.map((group) => (
                        <div key={group.label}>
                            <p className="sticky left-0 z-10 mb-3 block w-[160px] bg-[var(--neutral0)] pr-4 text-sm font-semibold text-[var(--neutral900)]">
                                {group.label}
                            </p>
                            <div className="grid grid-cols-[160px_repeat(3,1fr)] items-center gap-x-4 gap-y-3">
                                {SIZES.map((size) => (
                                    <Fragment key={size.key}>
                                        <span className="sticky left-0 z-10 flex w-[160px] items-center self-stretch bg-[var(--neutral0)] pr-4 text-xs text-[var(--neutral500)]">
                                            {size.label}
                                        </span>
                                        {STATES.map((state) => (
                                            <div key={`${size.key}-${state.key}`} className="flex justify-center">
                                                <Chip
                                                    color={group.color}
                                                    variant={group.variant}
                                                    size={size.key}
                                                    leadingIcon={Hash}
                                                    selected={state.key === "selected" || state.key === "focused"}
                                                    focused={state.key === "focused"}
                                                    tabIndex={-1}
                                                >
                                                    Chips
                                                </Chip>
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
