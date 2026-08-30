import { Info, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { TOOLTIP_VARIANT_CLASSES, type TooltipVariant } from "@/components/ui/tooltip"

/**
 * A tooltip is only ever on screen while it's open, so a static spec sheet
 * can't reuse the real, portal-positioned <TooltipContent /> the way the
 * Checkbox/Radio matrices reuse their real inputs — there's no fixed layout
 * slot for a floating element to sit in. Instead this renders a plain,
 * always-visible bubble built from the exact same TOOLTIP_VARIANT_CLASSES
 * the real component uses, so every color here is still a real token, just
 * laid out in normal flow instead of floating-ui placement. The genuine,
 * hover-driven Radix positioning is demonstrated separately by
 * <TooltipPlacementDemo /> and the Playground tab below.
 */
function TooltipBubble({
    variant,
    icon: Icon,
    title,
    description,
}: {
    variant: TooltipVariant
    icon?: LucideIcon
    title: string
    description?: string
}) {
    return (
        <div
            className={cn(
                "inline-flex max-w-[240px] items-start gap-2 rounded-[var(--radius-md)] px-3.5 py-2.5 shadow-lg",
                TOOLTIP_VARIANT_CLASSES[variant]
            )}
        >
            {Icon && <Icon size={16} className="mt-0.5 shrink-0" aria-hidden />}
            <div className="space-y-0.5">
                <p className="text-sm font-semibold">{title}</p>
                {description && (
                    <p className={cn("text-xs", variant === "dark" ? "opacity-75" : "text-[var(--neutral500)]")}>
                        {description}
                    </p>
                )}
            </div>
        </div>
    )
}

const THEMES: { key: TooltipVariant; label: string }[] = [
    { key: "dark", label: "Dark" },
    { key: "light", label: "Light" },
]

export function TooltipVariantMatrix() {
    return (
        <div className="overflow-x-auto">
            <div className="min-w-[640px]">
                <div className="grid grid-cols-[100px_1fr_1fr] gap-x-6 border-b border-[var(--neutral100)] pb-3">
                    <span className="text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                        Theme
                    </span>
                    <span className="text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                        Icon + title + description
                    </span>
                    <span className="text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                        Label only
                    </span>
                </div>
                <div className="space-y-8 pt-6">
                    {THEMES.map((theme) => (
                        <div key={theme.key} className="grid grid-cols-[100px_1fr_1fr] items-center gap-x-6">
                            <span className="text-sm font-medium text-[var(--neutral900)]">{theme.label}</span>
                            <TooltipBubble
                                variant={theme.key}
                                icon={Info}
                                title="Sync complete"
                                description="All changes were saved 2 minutes ago."
                            />
                            <TooltipBubble variant={theme.key} title="Edit configurations" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
