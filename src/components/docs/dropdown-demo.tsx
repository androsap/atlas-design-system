"use client"

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

// A Server Component (page.tsx) can't pass a component reference like
// `Settings` as a prop directly into a "use client" component (only plain
// data / rendered elements cross that boundary) — so the interactive demo
// lives here, entirely on the client side, instead of being inlined in
// the page.
export function DropdownDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button color="neutral" variant="secondary" trailingIcon={ChevronDown}>
                    Options
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Header Text</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem leadingIcon={Settings}>Menu item</DropdownMenuItem>
                <DropdownMenuItem active leadingIcon={Settings}>
                    Menu item
                </DropdownMenuItem>
                <DropdownMenuItem variant="danger" leadingIcon={Settings}>
                    Menu item
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
