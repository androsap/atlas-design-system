"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const SECTIONS = ["hero", "about", "components", "principles", "cta"]

export function ScrollProgressDots() {
    const [active, setActive] = useState(SECTIONS[0])

    useEffect(() => {
        const elements = SECTIONS.map((id) => document.getElementById(id)).filter(
            (el): el is HTMLElement => el !== null
        )

        if (elements.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id)
                    }
                })
            },
            { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
        )

        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-full bg-[var(--neutral900)]/10 px-2 py-4 backdrop-blur-sm md:flex">
            {SECTIONS.map((id) => (
                <button
                    key={id}
                    type="button"
                    aria-label={`Go to ${id} section`}
                    aria-current={active === id}
                    onClick={() =>
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className={cn(
                        "w-2 rounded-full transition-all duration-300",
                        active === id
                            ? "h-6 bg-[var(--primary500)]"
                            : "h-2 bg-[var(--neutral300)] hover:bg-[var(--neutral400)]"
                    )}
                />
            ))}
        </div>
    )
}
