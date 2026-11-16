"use client"

import { useState } from "react"
import { Alert, type AlertColor, type AlertLayout } from "@asyst/atlas"
import { Toaster, useToast } from "@asyst/atlas"
import { CopyButton } from "@/components/docs/copy-button"

const TYPES = ["alert", "toast"] as const
const COLORS = ["neutral", "info", "success", "warning", "danger"] as const
const LAYOUTS = ["stacked", "inline"] as const

type NotifType = (typeof TYPES)[number]

const TITLE = "SSL certificate nearing expiration"
const DESCRIPTION = "Your primary subdomain certificate is scheduled to expire in 3 days."
const ACTION_LABEL = "Renew SSL"

function Segmented<T extends string>({
    label,
    options,
    value,
    onChange,
}: {
    label: string
    options: readonly T[]
    value: T
    onChange: (value: T) => void
}) {
    return (
        <div>
            <p className="mb-2 text-xs font-medium text-[var(--neutral500)]">{label}</p>
            <div className="inline-flex flex-wrap rounded-[var(--radius-md)] border border-[var(--neutral100)] p-1">
                {options.map((option) => (
                    <button
                        key={option}
                        type="button"
                        onClick={() => onChange(option)}
                        className={`cursor-pointer rounded-[6px] px-3 py-1.5 text-sm capitalize transition-colors ${
                            value === option
                                ? "bg-[var(--neutral900)] text-[var(--background)]"
                                : "text-[var(--neutral600)] hover:text-[var(--neutral900)]"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}

function AlertPreview({ color, layout }: { color: AlertColor; layout: AlertLayout }) {
    const [dismissed, setDismissed] = useState(false)

    if (dismissed) {
        return (
            <button
                type="button"
                onClick={() => setDismissed(false)}
                className="cursor-pointer text-sm font-medium text-[var(--text-link)] underline-offset-2 hover:underline"
            >
                Show it again
            </button>
        )
    }

    return (
        <Alert
            key={`${color}-${layout}`}
            color={color}
            layout={layout}
            title={TITLE}
            actionLabel={ACTION_LABEL}
            onDismiss={() => setDismissed(true)}
        >
            {DESCRIPTION}
        </Alert>
    )
}

function ToastPreview({ color }: { color: AlertColor }) {
    const toast = useToast()
    return (
        <button
            type="button"
            onClick={() => toast({ color, title: TITLE, description: DESCRIPTION, actionLabel: ACTION_LABEL })}
            className="cursor-pointer rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-4 py-2 text-sm font-medium text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)]"
        >
            Show toast
        </button>
    )
}

export function AlertToastPlayground() {
    const [type, setType] = useState<NotifType>("alert")
    const [color, setColor] = useState<AlertColor>("warning")
    const [layout, setLayout] = useState<AlertLayout>("stacked")

    const code =
        type === "alert"
            ? `<Alert\n  color="${color}"${layout !== "stacked" ? `\n  layout="${layout}"` : ""}\n  title="${TITLE}"\n  actionLabel="${ACTION_LABEL}"\n>\n  ${DESCRIPTION}\n</Alert>`
            : `const toast = useToast()\n\ntoast({\n  color: "${color}",\n  title: "${TITLE}",\n  description: "${DESCRIPTION}",\n  actionLabel: "${ACTION_LABEL}",\n})`

    return (
        <div className="flex flex-col gap-6">
            <Toaster>
                <div className="flex min-h-40 items-center justify-center rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                    <div className="w-full max-w-md">
                        {type === "alert" ? (
                            <AlertPreview color={color} layout={layout} />
                        ) : (
                            <div className="flex justify-center">
                                <ToastPreview color={color} />
                            </div>
                        )}
                    </div>
                </div>
            </Toaster>

            <div className="flex flex-wrap items-end gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                <Segmented label="Type" options={TYPES} value={type} onChange={setType} />
                <Segmented label="Color" options={COLORS} value={color} onChange={setColor} />
                {type === "alert" && <Segmented label="Layout" options={LAYOUTS} value={layout} onChange={setLayout} />}
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-[var(--neutral100)] bg-[#0d1117]">
                <CopyButton
                    code={code}
                    className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
                />
                <pre className="overflow-x-auto overflow-y-hidden p-4 text-sm text-[#c9d1d9]">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    )
}
