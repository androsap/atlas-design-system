"use client"

import { useState } from "react"
import { Alert } from "@asyst/atlas"
import { Toaster, useToast } from "@asyst/atlas"

/**
 * Client-only wrapper for the Overview/Anatomy demos — kept out of the
 * Server-rendered page.tsx the same way dropdown-demo.tsx and
 * tooltip-demo.tsx are, so no icon or callback ever has to cross the
 * Server -> Client boundary as a prop.
 */
export function AlertOverviewDemo() {
    const [dismissed, setDismissed] = useState(false)

    if (dismissed) {
        return (
            <button
                type="button"
                onClick={() => setDismissed(false)}
                className="cursor-pointer text-sm font-medium text-[var(--text-link)] underline-offset-2 hover:underline"
            >
                Show the alert again
            </button>
        )
    }

    return (
        <Alert title="System performance notice" actionLabel="View archives" onDismiss={() => setDismissed(true)}>
            The database cluster is migrating storage engines. Some read operations might see brief, intermittent
            latency spikes over the next 15 minutes.
        </Alert>
    )
}

function ToastTriggerButton() {
    const toast = useToast()
    return (
        <button
            type="button"
            onClick={() =>
                toast({
                    color: "info",
                    title: "New features available",
                    description: "A new version of the application is available. Refresh to get the latest features.",
                    actionLabel: "Refresh",
                })
            }
            className="cursor-pointer rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-4 py-2 text-sm font-medium text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)]"
        >
            Show toast
        </button>
    )
}

export function ToastOverviewDemo() {
    return (
        <Toaster>
            <ToastTriggerButton />
        </Toaster>
    )
}

export function AlertAnatomyDemo() {
    return (
        <Alert color="warning" title="SSL certificate nearing expiration" actionLabel="Renew SSL">
            Your primary subdomain certificate is scheduled to expire in 3 days. Renew now to avoid any secure
            transport interruptions.
        </Alert>
    )
}
