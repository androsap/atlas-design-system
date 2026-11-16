"use client"

import { useState } from "react"
import { Hash } from "lucide-react"
import { Chip } from "@asyst/atlas"

/**
 * Client-only wrapper for the Overview/Anatomy demos — the leading icon
 * (Hash) can't cross the Server -> Client boundary as a prop, so it's
 * imported and used here, the same way every other icon-taking demo in
 * these docs is split out of the Server-rendered page.tsx.
 */
const CATEGORIES = ["Design", "Engineering", "Marketing", "Sales"]

export function ChipFilterDemo() {
    const [selected, setSelected] = useState<string[]>(["Engineering"])

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
                {CATEGORIES.map((label) => (
                    <Chip
                        key={label}
                        color="primary"
                        selected={selected.includes(label)}
                        onSelectedChange={(isSelected) =>
                            setSelected((prev) => (isSelected ? [...prev, label] : prev.filter((v) => v !== label)))
                        }
                    >
                        {label}
                    </Chip>
                ))}
            </div>
            <p className="text-xs text-[var(--neutral500)]">
                Selected: {selected.length > 0 ? selected.join(", ") : "none"}
            </p>
        </div>
    )
}

export function ChipRemovableDemo() {
    const [tags, setTags] = useState(["React", "TypeScript", "Tailwind"])

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex min-h-9 flex-wrap justify-center gap-2">
                {tags.length === 0 ? (
                    <p className="text-sm text-[var(--neutral400)]">All tags removed.</p>
                ) : (
                    tags.map((tag) => (
                        <Chip key={tag} color="neutral" onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}>
                            {tag}
                        </Chip>
                    ))
                )}
            </div>
            {tags.length < 3 && (
                <button
                    type="button"
                    onClick={() => setTags(["React", "TypeScript", "Tailwind"])}
                    className="cursor-pointer text-sm font-medium text-[var(--text-link)] underline-offset-2 hover:underline"
                >
                    Reset tags
                </button>
            )}
        </div>
    )
}

export function ChipAnatomyDemo() {
    return (
        <Chip color="primary" selected leadingIcon={Hash}>
            Chips
        </Chip>
    )
}
