"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BackToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 480)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <button
            type="button"
            aria-label="Back to top"
            onClick={() => {
                const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
                window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
            }}
            className={cn(
                "fixed right-6 bottom-6 z-30 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-[var(--neutral0)] text-[var(--color-primary)] shadow-lg transition-all duration-200 hover:bg-[var(--primary50)] focus-visible:ring-2 focus-visible:ring-[var(--primary500)] focus-visible:ring-offset-2 focus-visible:outline-none",
                visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            )}
        >
            <ArrowUp size={18} />
        </button>
    )
}
