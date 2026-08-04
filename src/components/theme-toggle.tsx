"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"

type Theme = "light" | "dark"
type Listener = () => void

const listeners = new Set<Listener>()

function subscribe(listener: Listener) {
    listeners.add(listener)
    return () => listeners.delete(listener)
}

function getSnapshot(): Theme {
    return (document.documentElement.getAttribute("data-theme") as Theme | null) ?? "light"
}

function getServerSnapshot(): Theme | null {
    return null
}

function setTheme(theme: Theme) {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
    listeners.forEach((listener) => listener())
}

export function ThemeToggle() {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

    if (!theme) {
        return <span className="h-9 w-9" aria-hidden />
    }

    return (
        <button
            type="button"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] text-[var(--neutral600)] transition-colors hover:bg-[var(--neutral50)] hover:text-[var(--neutral900)]"
        >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    )
}
