"use client"

import { useEffect, useRef, useState } from "react"
import { Progress } from "@asyst/atlas"

/**
 * A real, running download simulation — value genuinely advances over time
 * via setInterval, not a fixed prop. Demonstrates the thing a progress bar
 * is actually for (per the component's own description: downloading or
 * installing), not just a static percentage.
 */
export function ProgressDownloadDemo() {
    const [value, setValue] = useState(0)
    const [running, setRunning] = useState(false)
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    useEffect(() => {
        if (!running) return
        timerRef.current = setInterval(() => {
            setValue((v) => {
                const next = v + 4 + Math.random() * 8
                if (next >= 100) {
                    setRunning(false)
                    return 100
                }
                return next
            })
        }, 200)
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [running])

    const done = value >= 100

    const start = () => {
        setValue(0)
        setRunning(true)
    }

    return (
        <div className="flex w-full max-w-sm flex-col gap-4">
            <Progress
                value={value}
                color={done ? "info" : "neutral"}
                label={done ? "Download complete" : "atlas-design-system-v2.dmg"}
                helperText={running ? "Downloading…" : done ? "Saved to Downloads" : "Ready to download"}
            />
            <button
                type="button"
                onClick={start}
                disabled={running}
                className="w-fit cursor-pointer rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-3.5 py-1.5 text-sm font-medium text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)] disabled:cursor-not-allowed disabled:opacity-40"
            >
                {running ? "Downloading…" : done ? "Download again" : "Start download"}
            </button>
        </div>
    )
}
