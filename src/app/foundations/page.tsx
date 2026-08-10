import Link from "next/link"
import { Palette, Type, Shapes, LayoutGrid, Accessibility, Braces } from "lucide-react"

const FOUNDATIONS = [
    {
        icon: Palette,
        title: "Color",
        description:
            "Neutral, brand and status palettes tuned for contrast and consistency across every surface.",
    },
    {
        icon: Type,
        title: "Typography",
        description:
            "A Manrope + Inter type scale from display headings down to captions and labels.",
    },
    {
        icon: Shapes,
        title: "Iconography",
        description: "A shared icon set that keeps interface language consistent everywhere.",
    },
    {
        icon: LayoutGrid,
        title: "Grid & spacing",
        description: "Layout primitives and a spacing scale for building balanced, aligned pages.",
    },
    {
        icon: Accessibility,
        title: "Accessibility",
        description: "Guidelines baked into every foundation so accessible is the default.",
    },
    {
        icon: Braces,
        title: "Tokens",
        description: "Design tokens synced from Figma straight into code, no drift.",
    },
]

export default function FoundationsPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl bg-[var(--primary50)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--primary600)]">Foundations</p>
                <h1 className="mt-1 text-[var(--primary900)]" style={{ font: "var(--displayMd)" }}>
                    Overview
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--primary700)]" style={{ font: "var(--bodyLg)" }}>
                    Foundation elements provide the essential building blocks for creating cohesive
                    and visually appealing design across platforms, ensuring consistency, usability
                    and efficiency.
                </p>
            </div>

            {/* Foundations grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FOUNDATIONS.map(({ icon: Icon, title, description }) => (
                    <div
                        key={title}
                        className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral0)] p-6"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary50)] text-[var(--primary500)]">
                            <Icon size={20} />
                        </span>
                        <p className="mt-4 text-sm font-semibold text-[var(--neutral900)]">{title}</p>
                        <p className="mt-1.5 text-sm text-[var(--neutral500)]">{description}</p>
                        <Link
                            href="#"
                            className="mt-4 inline-block text-sm font-medium text-[var(--primary500)] hover:underline"
                        >
                            see more
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
