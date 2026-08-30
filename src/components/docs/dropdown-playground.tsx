"use client"

import { useState } from "react"
import { ChevronDown, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CopyButton } from "@/components/docs/copy-button"

export function DropdownPlayground() {
    const [header, setHeader] = useState(true)
    const [icons, setIcons] = useState(true)
    const [danger, setDanger] = useState(true)

    const code = `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button color="neutral" variant="secondary" trailingIcon={ChevronDown}>
      Options
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>${
      header ? `\n    <DropdownMenuLabel>Header Text</DropdownMenuLabel>\n    <DropdownMenuSeparator />` : ""
  }
    <DropdownMenuItem${icons ? " leadingIcon={Settings}" : ""}>Menu item</DropdownMenuItem>
    <DropdownMenuItem active${icons ? " leadingIcon={Settings}" : ""}>Menu item</DropdownMenuItem>${
        danger
            ? `\n    <DropdownMenuItem variant="danger"${icons ? " leadingIcon={Settings}" : ""}>Menu item</DropdownMenuItem>`
            : ""
    }
  </DropdownMenuContent>
</DropdownMenu>`

    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral25)] p-10">
                <div className="flex min-h-24 items-center justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button color="neutral" variant="secondary" trailingIcon={ChevronDown}>
                                Options
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {header && (
                                <>
                                    <DropdownMenuLabel>Header Text</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                </>
                            )}
                            <DropdownMenuItem leadingIcon={icons ? Settings : undefined}>
                                Menu item
                            </DropdownMenuItem>
                            <DropdownMenuItem active leadingIcon={icons ? Settings : undefined}>
                                Menu item
                            </DropdownMenuItem>
                            {danger && (
                                <DropdownMenuItem variant="danger" leadingIcon={icons ? Settings : undefined}>
                                    Menu item
                                </DropdownMenuItem>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="flex flex-wrap items-end gap-6 rounded-xl border border-[var(--neutral100)] p-4">
                <label className="flex items-center gap-2 pb-1.5 text-sm text-[var(--neutral700)]">
                    <input type="checkbox" checked={header} onChange={(e) => setHeader(e.target.checked)} />
                    Header
                </label>
                <label className="flex items-center gap-2 pb-1.5 text-sm text-[var(--neutral700)]">
                    <input type="checkbox" checked={icons} onChange={(e) => setIcons(e.target.checked)} />
                    Icons
                </label>
                <label className="flex items-center gap-2 pb-1.5 text-sm text-[var(--neutral700)]">
                    <input type="checkbox" checked={danger} onChange={(e) => setDanger(e.target.checked)} />
                    Danger item
                </label>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-[var(--neutral100)] bg-[#0d1117]">
                <CopyButton
                    code={code}
                    className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
                />
                <pre className="overflow-x-auto p-4 text-sm text-[#c9d1d9]">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    )
}
