"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@asyst/atlas"

const PLACEMENTS = [
    { side: "top", label: "Top placement" },
    { side: "bottom", label: "Bottom placement" },
    { side: "left", label: "Left placement" },
    { side: "right", label: "Right placement" },
] as const

/**
 * Held open (controlled `open`, no interaction needed) so all four
 * placements are visible at once for reference — this is still the real,
 * floating-ui-positioned <TooltipContent />, not a mockup. Genuine
 * hover-driven open/close is demonstrated in the Playground tab.
 *
 * Two columns, not four: a left/right tooltip is ~160px wide, wider than
 * half of a four-column cell at typical content widths. Packed four across,
 * a "right" tooltip in the last column has nowhere to go but to collide
 * with the viewport edge (Radix correctly auto-flips it to "left", which
 * then visually collides with the real "left" demo next to it). Two
 * columns gives every side, including left/right, real room either way.
 */
export function TooltipPlacementDemo() {
    return (
        <TooltipProvider>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PLACEMENTS.map(({ side, label }) => (
                    <div key={side} className="flex flex-col items-center gap-3">
                        {/* The label lives outside the demo box, not stacked above
                            the trigger inside it — a "top"-side tooltip floats
                            directly above the trigger and would otherwise cover it. */}
                        <div className="flex w-full items-center justify-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] px-4 py-16">
                            <Tooltip open>
                                <TooltipTrigger asChild>
                                    <button
                                        type="button"
                                        className="cursor-default rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-3.5 py-2 text-sm text-[var(--neutral900)]"
                                    >
                                        Hover trigger
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side={side} variant="dark">
                                    Edit configurations
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <span className="text-xs font-medium tracking-wide text-[var(--neutral400)] uppercase">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </TooltipProvider>
    )
}
