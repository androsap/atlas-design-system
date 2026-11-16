"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { X } from "lucide-react"
import { cn } from "../lib/utils.js"
import { NOTIFICATION_ICON, NOTIFICATION_CLASSES, type NotificationColor } from "./notification.js"

export type ToastColor = NotificationColor

export interface ToastOptions {
    color?: ToastColor
    title: string
    description?: string
    actionLabel?: string
    onAction?: () => void
    /** ms before it auto-dismisses. Default 5000. */
    duration?: number
}

interface ToastItem extends Required<Pick<ToastOptions, "color" | "title" | "duration">>, Omit<ToastOptions, "color" | "title" | "duration"> {
    id: string
}

type ToastContextValue = (options: ToastOptions) => void

const ToastContext = createContext<ToastContextValue | null>(null)

/** Push a new toast. Must be called from a component rendered under <Toaster>. */
export function useToast() {
    const toast = useContext(ToastContext)
    if (!toast) throw new Error("useToast must be used within <Toaster>")
    return toast
}

/**
 * Mounts the Radix Toast provider, viewport and queue. Wrap the part of the
 * tree that needs to trigger toasts — a whole app in practice, or just one
 * demo here — in a single <Toaster>; call useToast() anywhere inside it.
 */
export interface ToasterProps {
    children: ReactNode
}

export function Toaster({ children }: ToasterProps) {
    const [items, setItems] = useState<ToastItem[]>([])

    const toast = useCallback((options: ToastOptions) => {
        const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`
        setItems((prev) => [...prev, { color: "neutral", duration: 5000, ...options, id }])
    }, [])

    const remove = useCallback((id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={toast}>
            <ToastPrimitive.Provider swipeDirection="right">
                {children}
                {items.map((item) => {
                    const Icon = NOTIFICATION_ICON[item.color]
                    const c = NOTIFICATION_CLASSES[item.color]
                    return (
                        <ToastPrimitive.Root
                            key={item.id}
                            duration={item.duration}
                            onOpenChange={(open) => {
                                if (!open) remove(item.id)
                            }}
                            className={cn(
                                "flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--neutral100)] bg-[var(--surface-raised)] p-4 shadow-xl",
                                "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
                                "data-[swipe=cancel]:translate-x-0",
                                "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]"
                            )}
                        >
                            <Icon size={18} className={cn("mt-0.5 shrink-0", c.icon)} aria-hidden />
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-3">
                                    <ToastPrimitive.Title className={cn("text-sm font-semibold", c.title)}>
                                        {item.title}
                                    </ToastPrimitive.Title>
                                    <div className="flex shrink-0 items-center gap-3">
                                        {item.actionLabel && (
                                            <ToastPrimitive.Action altText={item.actionLabel} asChild>
                                                <button
                                                    type="button"
                                                    onClick={item.onAction}
                                                    className={cn(
                                                        "inline-flex cursor-pointer rounded-[6px] px-3 py-1.5 text-xs font-medium transition-colors",
                                                        c.action
                                                    )}
                                                >
                                                    {item.actionLabel}
                                                </button>
                                            </ToastPrimitive.Action>
                                        )}
                                        <ToastPrimitive.Close
                                            aria-label="Dismiss"
                                            className="cursor-pointer rounded text-[var(--neutral400)] transition-colors hover:text-[var(--neutral700)]"
                                        >
                                            <X size={16} aria-hidden />
                                        </ToastPrimitive.Close>
                                    </div>
                                </div>
                                {item.description && (
                                    <ToastPrimitive.Description className="mt-1 text-sm text-[var(--neutral500)]">
                                        {item.description}
                                    </ToastPrimitive.Description>
                                )}
                            </div>
                        </ToastPrimitive.Root>
                    )
                })}
                <ToastPrimitive.Viewport className="fixed bottom-4 right-4 z-50 flex w-[360px] max-w-[calc(100vw-2rem)] list-none flex-col gap-2 outline-none" />
            </ToastPrimitive.Provider>
        </ToastContext.Provider>
    )
}
