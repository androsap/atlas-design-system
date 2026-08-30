"use client"

import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

/**
 * Client-only wrapper for the Overview/Anatomy demos. TooltipContent's
 * `icon` prop takes a component reference (Info), which can't cross the
 * Server -> Client boundary as a prop — so, like dropdown-demo.tsx before
 * it, the icon is imported and used here, inside the client module, rather
 * than passed in from the Server-rendered page.tsx.
 */
export function TooltipOverviewDemo() {
    return (
        <TooltipProvider delayDuration={150}>
            <div className="mx-auto flex max-w-xs items-center gap-1.5">
                <span className="text-sm font-medium text-[var(--neutral900)]">API Key</span>
                <Tooltip>
                    <TooltipTrigger
                        className="cursor-pointer rounded-full text-[var(--neutral400)] outline-none hover:text-[var(--neutral600)] focus-visible:ring-2 focus-visible:ring-[var(--primary300)]"
                        aria-label="What is an API key?"
                    >
                        <Info size={15} aria-hidden />
                    </TooltipTrigger>
                    <TooltipContent icon={Info} title="Sync complete">
                        All changes were saved 2 minutes ago.
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    )
}

export function TooltipAnatomyDemo() {
    return (
        <TooltipProvider>
            <Tooltip open>
                <TooltipTrigger asChild>
                    <button
                        type="button"
                        className="cursor-default rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-3.5 py-2 text-sm text-[var(--neutral900)]"
                    >
                        Hover trigger
                    </button>
                </TooltipTrigger>
                <TooltipContent icon={Info} title="Sync complete">
                    All changes were saved 2 minutes ago.
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
