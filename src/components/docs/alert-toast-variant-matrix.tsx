import { Alert } from "@asyst/atlas"
import type { AlertColor, AlertLayout } from "@asyst/atlas"

type Row = { color: AlertColor; title: string; description: string; actionLabel: string }

const ROWS: Row[] = [
    {
        color: "neutral",
        title: "System performance notice",
        description:
            "The database cluster is migrating storage engines. Some read operations might see brief, intermittent latency spikes over the next 15 minutes.",
        actionLabel: "View archives",
    },
    {
        color: "info",
        title: "New features available",
        description: "A new version of the application is available. Refresh to get the latest features and bug fixes.",
        actionLabel: "Refresh",
    },
    {
        color: "success",
        title: "Deployment succeeded",
        description: "Your latest changes are live in production. It may take a minute to reach every edge region.",
        actionLabel: "View deployment",
    },
    {
        color: "warning",
        title: "SSL certificate nearing expiration",
        description:
            "Your primary subdomain certificate is scheduled to expire in 3 days. Renew now to avoid any secure transport interruptions.",
        actionLabel: "Renew SSL",
    },
    {
        color: "danger",
        title: "Deployment pipeline failed",
        description: "A fatal error occurred during the build step. Review the compilation logs for the exact stack trace before retrying.",
        actionLabel: "Retry",
    },
]

const LAYOUTS: { key: AlertLayout; label: string }[] = [
    { key: "stacked", label: "Stacked (Alert)" },
    { key: "inline", label: "Inline (Toast-style)" },
]

export function AlertToastVariantMatrix() {
    return (
        <div className="overflow-x-auto overflow-y-hidden">
            <div className="min-w-[840px]">
                <div className="grid grid-cols-2 gap-x-6 border-b border-[var(--neutral100)] pb-3">
                    {LAYOUTS.map((layout) => (
                        <span
                            key={layout.key}
                            className="text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase"
                        >
                            {layout.label}
                        </span>
                    ))}
                </div>
                <div className="space-y-4 pt-6">
                    {ROWS.map((row) => (
                        <div key={row.color} className="grid grid-cols-2 items-start gap-6">
                            {LAYOUTS.map((layout) => (
                                <Alert
                                    key={layout.key}
                                    color={row.color}
                                    layout={layout.key}
                                    title={row.title}
                                    actionLabel={row.actionLabel}
                                >
                                    {row.description}
                                </Alert>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
