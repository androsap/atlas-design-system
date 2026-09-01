"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

export function CopyButton({ code, className }: { code: string; className?: string }) {
    const [copied, setCopied] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => () => {
        if (timerRef.current) clearTimeout(timerRef.current)
    }, [])

    return (
        <button
            type="button"
            aria-label="Copy code"
            onClick={async () => {
                await navigator.clipboard.writeText(code)
                setCopied(true)
                if (timerRef.current) clearTimeout(timerRef.current)
                timerRef.current = setTimeout(() => setCopied(false), 1500)
            }}
            className={cn(
                "flex h-8 w-8 items-center justify-center rounded-md text-[var(--neutral400)] transition-colors hover:bg-[var(--neutral800)] hover:text-[var(--neutral0)]",
                className
            )}
        >
            {copied ? <Check size={15} /> : <Copy size={15} />}
        </button>
    )
}
