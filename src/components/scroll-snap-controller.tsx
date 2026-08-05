"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollSnapController() {
    const pathname = usePathname()

    useEffect(() => {
        const isSnapPage = pathname === "/"
        document.documentElement.classList.toggle("snap-y", isSnapPage)
        document.documentElement.classList.toggle("snap-mandatory", isSnapPage)

        return () => {
            document.documentElement.classList.remove("snap-y", "snap-mandatory")
        }
    }, [pathname])

    return null
}
