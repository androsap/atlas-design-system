"use client"

import { useEffect, useRef, useState } from "react"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerButtonDemo() {
    const [status, setStatus] = useState<"idle" | "loading" | "done">("idle")
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Clears the pending timeout on unmount so a click right before
    // navigating away doesn't try to update state that's no longer there.
    useEffect(() => () => {
        if (timerRef.current) clearTimeout(timerRef.current)
    }, [])

    const handleClick = () => {
        setStatus("loading")
        timerRef.current = setTimeout(() => setStatus("done"), 1800)
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={status === "loading"}
            className="flex w-40 cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--primary500)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary600)] disabled:cursor-not-allowed disabled:opacity-80"
        >
            {status === "loading" && <Spinner size="sm" className="text-white" label="" />}
            {status === "loading" ? "Saving…" : status === "done" ? "Saved" : "Save changes"}
        </button>
    )
}

export function SpinnerSectionDemo() {
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(3)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => () => {
        if (timerRef.current) clearTimeout(timerRef.current)
    }, [])

    const reload = () => {
        setLoading(true)
        timerRef.current = setTimeout(() => {
            setCount((c) => c + 1)
            setLoading(false)
        }, 1500)
    }

    return (
        <div className="flex w-full max-w-xs flex-col gap-3">
            <div className="flex h-28 items-center justify-center rounded-lg border border-[var(--neutral100)] bg-[var(--neutral0)]">
                {loading ? (
                    <Spinner size="lg" color="info" label="Loading results" />
                ) : (
                    <p className="text-sm text-[var(--neutral600)]">{count} results loaded</p>
                )}
            </div>
            <button
                type="button"
                onClick={reload}
                disabled={loading}
                className="cursor-pointer rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-3.5 py-1.5 text-sm font-medium text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)] disabled:cursor-not-allowed disabled:opacity-40"
            >
                {loading ? "Loading…" : "Reload"}
            </button>
        </div>
    )
}
