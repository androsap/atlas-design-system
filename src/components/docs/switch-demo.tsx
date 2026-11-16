"use client"

import { useState } from "react"
import { Switch } from "@asyst/atlas"

const SETTINGS = [
    {
        key: "notifications",
        color: "primary" as const,
        label: "Push notifications",
        helperText: "Get notified about replies and mentions",
        defaultChecked: true,
    },
    {
        key: "autosave",
        color: "neutral" as const,
        label: "Auto-save drafts",
        helperText: "Save your work every few seconds",
        defaultChecked: false,
    },
    {
        key: "dangerZone",
        color: "status" as const,
        label: "Allow destructive actions",
        helperText: "Skip the confirmation prompt before deleting",
        defaultChecked: false,
    },
]

export function SwitchOverviewDemo() {
    const [state, setState] = useState<Record<string, boolean>>(
        Object.fromEntries(SETTINGS.map((s) => [s.key, s.defaultChecked]))
    )

    return (
        <div className="flex w-full max-w-sm flex-col gap-5">
            {SETTINGS.map((setting) => (
                <Switch
                    key={setting.key}
                    color={setting.color}
                    label={setting.label}
                    helperText={setting.helperText}
                    checked={state[setting.key]}
                    onChange={(e) => setState((prev) => ({ ...prev, [setting.key]: e.target.checked }))}
                />
            ))}
        </div>
    )
}

export function SwitchAnatomyDemo() {
    return <Switch color="primary" label="Push notifications" helperText="Get notified about replies" defaultChecked />
}
