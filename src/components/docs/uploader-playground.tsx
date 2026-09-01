"use client"

import { useState } from "react"
import { Uploader } from "@/components/ui/uploader"
import { CopyButton } from "@/components/docs/copy-button"

const SIZE_OPTIONS = [
    { label: "1 MB", bytes: 1024 * 1024 },
    { label: "5 MB", bytes: 5 * 1024 * 1024 },
    { label: "10 MB", bytes: 10 * 1024 * 1024 },
]

export function UploaderPlayground() {
    const [sizeIndex, setSizeIndex] = useState(0)
    const [multiple, setMultiple] = useState(true)
    const [disabled, setDisabled] = useState(false)

    const size = SIZE_OPTIONS[sizeIndex]
    const props = [
        size.bytes !== 1024 * 1024 && `maxSizeBytes={${size.bytes}}`,
        !multiple && "multiple={false}",
        disabled && "disabled",
    ]
        .filter(Boolean)
        .join("\n  ")
    const code = `<Uploader${props ? "\n  " + props : ""} />`

    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                <div className="mx-auto max-w-sm">
                    <Uploader maxSizeBytes={size.bytes} multiple={multiple} disabled={disabled} />
                </div>
            </div>

            <div className="flex flex-wrap items-end gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                <div>
                    <p className="mb-2 text-xs font-medium text-[var(--neutral500)]">Max file size</p>
                    <div className="inline-flex flex-wrap rounded-[var(--radius-md)] border border-[var(--neutral100)] p-1">
                        {SIZE_OPTIONS.map((option, i) => (
                            <button
                                key={option.label}
                                type="button"
                                onClick={() => setSizeIndex(i)}
                                className={`cursor-pointer rounded-[6px] px-3 py-1.5 text-sm transition-colors ${
                                    sizeIndex === i
                                        ? "bg-[var(--neutral900)] text-[var(--background)]"
                                        : "text-[var(--neutral600)] hover:text-[var(--neutral900)]"
                                }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
                <label className="flex items-center gap-2 pb-1.5 text-sm text-[var(--neutral700)]">
                    <input type="checkbox" checked={multiple} onChange={(e) => setMultiple(e.target.checked)} />
                    Multiple files
                </label>
                <label className="flex items-center gap-2 pb-1.5 text-sm text-[var(--neutral700)]">
                    <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
                    Disabled
                </label>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-[var(--neutral100)] bg-[#0d1117]">
                <CopyButton
                    code={code}
                    className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
                />
                <pre className="overflow-x-auto overflow-y-hidden p-4 text-sm text-[#c9d1d9]">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    )
}
