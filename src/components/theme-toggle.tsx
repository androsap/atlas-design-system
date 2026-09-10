"use client"

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

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
        return <span className="h-9 w-9 sm:w-20" aria-hidden />
    }

    return (
        <button
            type="button"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] bg-[var(--color-primary)] p-2 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-4 sm:py-2"
        >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{theme === "dark" ? "Light theme" : "Dark theme"}</span>
        </button>
    )
}
