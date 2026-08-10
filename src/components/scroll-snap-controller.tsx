"use client"

import { useLayoutEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollSnapController() {
    const pathname = usePathname()

    useLayoutEffect(() => {
        const isSnapPage = pathname === "/"
        document.documentElement.classList.toggle("snap-y", isSnapPage)
        document.documentElement.classList.toggle("snap-mandatory", isSnapPage)

        // Force an instant reset to the top on every route change — without
        // this, scroll-behavior: smooth can carry the previous page's
        // (much taller, snap-scrolled) offset into a shorter page and clamp
        // it partway down instead of landing at the top.
        const previousBehavior = document.documentElement.style.scrollBehavior
        document.documentElement.style.scrollBehavior = "auto"
        window.scrollTo(0, 0)
        document.documentElement.style.scrollBehavior = previousBehavior

        return () => {
            document.documentElement.classList.remove("snap-y", "snap-mandatory")
        }
    }, [pathname])

    return null
}
