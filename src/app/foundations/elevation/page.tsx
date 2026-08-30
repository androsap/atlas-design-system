type ElevationRow = {
    level: string
    description: string
    boxShadow: string | undefined
    color: string | null
    x: string
    y: string
    blur: string
    spread: string
}

const ELEVATION: ElevationRow[] = [
    {
        level: "Level 0 - Flat",
        description: "No shadow. Default surface.",
        boxShadow: undefined,
        color: null,
        x: "-",
        y: "-",
        blur: "-",
        spread: "-",
    },
    {
        level: "Level 1 - Raised",
        description: "Cards, panels.",
        boxShadow: "var(--level1)",
        color: "semantic.surface.neutral.strong 4%",
        x: "spacing.null",
        y: "spacing.4xs",
        blur: "spacing.xs",
        spread: "spacing.null",
    },
    {
        level: "Level 2 - Elevated",
        description: "Dropdowns, hovercards.",
        boxShadow: "var(--level2)",
        color: "semantic.surface.neutral.strong 6%",
        x: "spacing.null",
        y: "spacing.3xs",
        blur: "spacing.2xs",
        spread: "spacing.null",
    },
    {
        level: "Level 3 - Overlay",
        description: "Popovers, tooltips.",
        boxShadow: "var(--level3)",
        color: "semantic.surface.neutral.strong 8%",
        x: "spacing.null",
        y: "spacing.2xs",
        blur: "spacing.xs",
        spread: "spacing.null",
    },
    {
        level: "Level 4 - Modal",
        description: "Modals, dialogs.",
        boxShadow: "var(--level4)",
        color: "semantic.surface.neutral.strong 12%",
        x: "spacing.null",
        y: "spacing.xs",
        blur: "spacing.sm",
        spread: "spacing.null",
    },
]

export default function FoundationsElevationPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Foundations</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Elevation
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Subtle shadow tokens for layered UI depth — from flat surfaces to modals and
                    popovers.
                </p>
            </div>

            {/* Swatches */}
            <div className="mt-12">
                <h2 className="text-lg font-semibold text-[var(--neutral900)]">Elevation</h2>
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
                    {ELEVATION.map((row) => (
                        <div key={row.level} className="flex flex-col items-center gap-3 text-center">
                            <div
                                className="h-24 w-full rounded-xl bg-[var(--surface-accent-subtle)]"
                                style={{ boxShadow: row.boxShadow }}
                            />
                            <div>
                                <p className="text-sm font-semibold text-[var(--neutral900)]">{row.level}</p>
                                <p className="mt-0.5 max-w-[140px] text-xs text-[var(--neutral500)]">
                                    {row.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="mt-12 overflow-x-auto rounded-xl border border-[var(--neutral100)]">
                <table className="w-full min-w-[720px] text-left text-sm">
                    <thead className="bg-[var(--surface-accent-subtle)] text-[var(--neutral500)]">
                        <tr>
                            {["Level", "Color", "X", "Y", "Blur", "Spread"].map((h) => (
                                <th key={h} className="px-4 py-2.5 text-xs font-medium tracking-wide uppercase">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {ELEVATION.map((row) => (
                            <tr key={row.level} className="border-t border-[var(--neutral100)]">
                                <td className="px-4 py-3 font-semibold whitespace-nowrap text-[var(--neutral900)]">
                                    {row.level}
                                </td>
                                <td className="px-4 py-3 font-mono text-xs whitespace-nowrap text-[var(--neutral500)]">
                                    {row.color ?? "-"}
                                </td>
                                <td className="px-4 py-3 font-mono text-xs text-[var(--neutral500)]">{row.x}</td>
                                <td className="px-4 py-3 font-mono text-xs text-[var(--neutral500)]">{row.y}</td>
                                <td className="px-4 py-3 font-mono text-xs text-[var(--neutral500)]">{row.blur}</td>
                                <td className="px-4 py-3 font-mono text-xs text-[var(--neutral500)]">{row.spread}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
