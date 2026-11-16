"use client"

import { useEffect, useId, useRef, useState, type DragEvent, type ChangeEvent } from "react"
import { Upload, X, CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "../lib/utils.js"
import { Progress } from "./progress.js"

export interface UploaderProps {
    /** Defaults to 1 MB, matching the spec. */
    maxSizeBytes?: number
    accept?: string
    multiple?: boolean
    disabled?: boolean
    /** Docs-only: force the drag-active look without a real drag. */
    forceActive?: boolean
    className?: string
}

interface UploadItem {
    id: string
    file: File
    progress: number
    status: "uploading" | "done" | "error"
    error?: string
}

function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
    const mb = bytes / (1024 * 1024)
    return `${mb % 1 === 0 ? mb.toFixed(0) : mb.toFixed(1)} MB`
}

export function Uploader({
    maxSizeBytes = 1024 * 1024,
    accept,
    multiple = true,
    disabled = false,
    forceActive = false,
    className,
}: UploaderProps) {
    const [items, setItems] = useState<UploadItem[]>([])
    const [dragActive, setDragActive] = useState(false)
    const inputId = useId()
    // Counts nested dragenter/dragleave pairs (children fire their own),
    // so the active state doesn't flicker off while still over the zone.
    const dragDepth = useRef(0)
    // One interval per in-flight simulated upload, so each can be stopped
    // individually (on completion or removal) without touching the others.
    const timersRef = useRef<Map<string, ReturnType<typeof setInterval>>>(new Map())

    // Belt-and-suspenders: stop every still-running upload on unmount too —
    // e.g. someone navigates away mid-upload. Without this the interval
    // keeps ticking in the background indefinitely, doing real work for a
    // component nobody can see anymore.
    useEffect(() => {
        const timers = timersRef.current
        return () => {
            timers.forEach((timer) => clearInterval(timer))
            timers.clear()
        }
    }, [])

    const simulateUpload = (id: string) => {
        const timer = setInterval(() => {
            setItems((prev) =>
                prev.map((it) => {
                    if (it.id !== id || it.status !== "uploading") return it
                    const next = it.progress + 8 + Math.random() * 14
                    if (next >= 100) {
                        clearInterval(timer)
                        timersRef.current.delete(id)
                        return { ...it, progress: 100, status: "done" }
                    }
                    return { ...it, progress: next }
                })
            )
        }, 180)
        timersRef.current.set(id, timer)
    }

    const addFiles = (fileList: FileList | File[]) => {
        const incoming = Array.from(fileList)
        const newItems: UploadItem[] = incoming.map((file) => {
            const tooBig = file.size > maxSizeBytes
            return {
                id: `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
                file,
                progress: 0,
                status: tooBig ? "error" : "uploading",
                error: tooBig ? `File exceeds ${formatBytes(maxSizeBytes)} limit` : undefined,
            }
        })
        setItems((prev) => [...prev, ...newItems])
        newItems.filter((it) => it.status === "uploading").forEach((it) => simulateUpload(it.id))
    }

    const removeItem = (id: string) => {
        const timer = timersRef.current.get(id)
        if (timer) {
            clearInterval(timer)
            timersRef.current.delete(id)
        }
        setItems((prev) => prev.filter((it) => it.id !== id))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) addFiles(e.target.files)
        e.target.value = ""
    }

    const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        dragDepth.current = 0
        setDragActive(false)
        if (disabled) return
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) addFiles(e.dataTransfer.files)
    }

    const handleDragEnter = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        if (disabled) return
        dragDepth.current += 1
        setDragActive(true)
    }

    const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        dragDepth.current = Math.max(0, dragDepth.current - 1)
        if (dragDepth.current === 0) setDragActive(false)
    }

    const isActive = (dragActive || forceActive) && !disabled

    return (
        <div className={cn("w-full", className)}>
            <label
                htmlFor={inputId}
                onDrop={handleDrop}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={(e) => e.preventDefault()}
                className={cn(
                    "flex flex-col items-center justify-center rounded-2xl border px-6 py-8 text-center transition-colors",
                    disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
                    isActive
                        ? "border-[var(--primary500)] bg-[var(--primary50)]"
                        : "border-[var(--neutral200)] bg-[var(--neutral0)] hover:border-[var(--neutral300)]"
                )}
            >
                <input
                    id={inputId}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                    onChange={handleChange}
                    className="sr-only"
                />
                <Upload
                    size={20}
                    className={isActive ? "text-[var(--primary500)]" : "text-[var(--neutral500)]"}
                    aria-hidden
                />
                <p
                    className={cn(
                        "mt-3 text-sm font-semibold",
                        isActive ? "text-[var(--primary600)]" : "text-[var(--neutral900)]"
                    )}
                >
                    {isActive ? "Drag your file here or click to upload" : "Drag a file here or click to upload"}
                </p>
                <p className="mt-1 text-xs text-[var(--neutral400)]">Max file size {formatBytes(maxSizeBytes)}</p>
            </label>

            {items.length > 0 && (
                <ul aria-live="polite" className="mt-4 space-y-2">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className={cn(
                                "flex items-start gap-3 rounded-[var(--radius-md)] border px-3 py-2.5",
                                item.status === "error"
                                    ? "border-[var(--danger200)] bg-[var(--danger50)]"
                                    : "border-[var(--neutral100)]"
                            )}
                        >
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-2">
                                    <p className="truncate text-sm font-medium text-[var(--neutral900)]">
                                        {item.file.name}
                                    </p>
                                    <span className="shrink-0 text-xs text-[var(--neutral400)]">
                                        {formatBytes(item.file.size)}
                                    </span>
                                </div>
                                {item.status === "uploading" && (
                                    <div className="mt-1.5">
                                        <Progress value={item.progress} showValue={false} />
                                    </div>
                                )}
                                {item.status === "done" && (
                                    <p className="mt-1 flex items-center gap-1 text-xs text-[var(--success600)]">
                                        <CheckCircle2 size={12} aria-hidden /> Uploaded
                                    </p>
                                )}
                                {item.status === "error" && (
                                    <p className="mt-1 flex items-center gap-1 text-xs text-[var(--danger600)]">
                                        <AlertCircle size={12} aria-hidden /> {item.error}
                                    </p>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                aria-label={`Remove ${item.file.name}`}
                                className="shrink-0 cursor-pointer rounded-full p-1 text-[var(--neutral400)] transition-colors hover:bg-[var(--neutral100)] hover:text-[var(--neutral700)]"
                            >
                                <X size={14} aria-hidden />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
