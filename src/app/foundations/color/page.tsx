import {
    neutral0,
    neutral25,
    neutral50,
    neutral100,
    neutral150,
    neutral200,
    neutral300,
    neutral400,
    neutral500,
    neutral600,
    neutral700,
    neutral800,
    neutral900,
    neutral950,
    primary50,
    primary100,
    primary200,
    primary300,
    primary400,
    primary500,
    primary600,
    primary700,
    primary800,
    primary900,
    primary950,
    secondary50,
    secondary100,
    secondary200,
    secondary300,
    secondary400,
    secondary500,
    secondary600,
    secondary700,
    secondary800,
    secondary900,
    secondary950,
    info50,
    info100,
    info200,
    info300,
    info400,
    info500,
    info600,
    info700,
    info800,
    info900,
    info950,
    success50,
    success100,
    success200,
    success300,
    success400,
    success500,
    success600,
    success700,
    success800,
    success900,
    success950,
    warning50,
    warning100,
    warning200,
    warning300,
    warning400,
    warning500,
    warning600,
    warning700,
    warning800,
    warning900,
    warning950,
    danger50,
    danger100,
    danger200,
    danger300,
    danger400,
    danger500,
    danger600,
    danger700,
    danger800,
    danger900,
    danger950,
} from "@/tokens/generated"

function hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `${r}, ${g}, ${b}`
}

const NEUTRAL = [
    { name: "neutral950", hex: neutral950 },
    { name: "neutral900", hex: neutral900 },
    { name: "neutral800", hex: neutral800 },
    { name: "neutral700", hex: neutral700 },
    { name: "neutral600", hex: neutral600 },
    { name: "neutral500", hex: neutral500 },
    { name: "neutral400", hex: neutral400 },
    { name: "neutral300", hex: neutral300 },
    { name: "neutral200", hex: neutral200 },
    { name: "neutral150", hex: neutral150 },
    { name: "neutral100", hex: neutral100 },
    { name: "neutral50", hex: neutral50 },
    { name: "neutral25", hex: neutral25 },
    { name: "neutral0", hex: neutral0 },
]

const SHADE_ALIASES = [
    { shade: "50", suffix: "bg" },
    { shade: "100", suffix: "light" },
    { shade: "200", suffix: "border" },
    { shade: "300", suffix: "accent" },
    { shade: "400", suffix: "indicator" },
    { shade: "500", suffix: "default" },
    { shade: "600", suffix: "strong" },
    { shade: "700", suffix: "text" },
    { shade: "800", suffix: "dark" },
    { shade: "900", suffix: "darkest" },
    { shade: "950", suffix: "near-black" },
]

function statusGroup(name: string, description: string, hexes: string[]) {
    return {
        name,
        description,
        swatches: SHADE_ALIASES.map(({ shade, suffix }, i) => ({
            name: shade,
            hex: hexes[i],
            alias: `${name} ${suffix}`,
        })),
    }
}

const BRAND_GROUPS = [
    statusGroup("Primary", "The brand color — used for primary buttons, active states and links.", [
        primary50, primary100, primary200, primary300, primary400, primary500, primary600, primary700, primary800, primary900, primary950,
    ]),
    statusGroup("Secondary", "Complements primary for accents, charts and secondary emphasis.", [
        secondary50, secondary100, secondary200, secondary300, secondary400, secondary500, secondary600, secondary700, secondary800, secondary900, secondary950,
    ]),
]

const STATUS_GROUPS = [
    statusGroup("Info", "Informational messages, tips, neutral notifications.", [
        info50, info100, info200, info300, info400, info500, info600, info700, info800, info900, info950,
    ]),
    statusGroup("Success", "Positive outcomes, confirmations, completed states.", [
        success50, success100, success200, success300, success400, success500, success600, success700, success800, success900, success950,
    ]),
    statusGroup("Warning", "Caution states, pending actions, attention required.", [
        warning50, warning100, warning200, warning300, warning400, warning500, warning600, warning700, warning800, warning900, warning950,
    ]),
    statusGroup("Danger", "Destructive actions, error states, validation failures.", [
        danger50, danger100, danger200, danger300, danger400, danger500, danger600, danger700, danger800, danger900, danger950,
    ]),
]

function row(path: string, token: string, hex: string) {
    return { path, token, hex }
}

// Background — surfaces get the lightest tints (50/100/200) so content on
// top stays readable; "strong" (800) is the exception, meant for solid
// filled banners/badges with white text on top.
const BACKGROUND_TOKENS = [
    row("semantic.surface.neutral.muted", "neutral.100", neutral100),
    row("semantic.surface.neutral.inverse", "neutral.0", neutral0),
    row("semantic.surface.neutral.strong", "neutral.900", neutral900),
    row("semantic.surface.neutral.medium", "neutral.150", neutral150),
    row("semantic.surface.neutral.default", "neutral.50", neutral50),
    row("semantic.surface.neutral.weak", "neutral.25", neutral25),

    row("semantic.surface.primary.strong", "primary.800", primary800),
    row("semantic.surface.primary.medium", "primary.200", primary200),
    row("semantic.surface.primary.default", "primary.100", primary100),
    row("semantic.surface.primary.weak", "primary.50", primary50),

    row("semantic.surface.secondary.strong", "secondary.800", secondary800),
    row("semantic.surface.secondary.medium", "secondary.200", secondary200),
    row("semantic.surface.secondary.default", "secondary.100", secondary100),
    row("semantic.surface.secondary.weak", "secondary.50", secondary50),

    row("semantic.surface.success.strong", "success.800", success800),
    row("semantic.surface.success.medium", "success.200", success200),
    row("semantic.surface.success.default", "success.100", success100),
    row("semantic.surface.success.weak", "success.50", success50),

    row("semantic.surface.info.strong", "info.800", info800),
    row("semantic.surface.info.medium", "info.200", info200),
    row("semantic.surface.info.default", "info.100", info100),
    row("semantic.surface.info.weak", "info.50", info50),

    row("semantic.surface.warning.strong", "warning.800", warning800),
    row("semantic.surface.warning.medium", "warning.200", warning200),
    row("semantic.surface.warning.default", "warning.100", warning100),
    row("semantic.surface.warning.weak", "warning.50", warning50),

    row("semantic.surface.danger.strong", "danger.800", danger800),
    row("semantic.surface.danger.medium", "danger.200", danger200),
    row("semantic.surface.danger.default", "danger.100", danger100),
    row("semantic.surface.danger.weak", "danger.50", danger50),
]

// Typography — chromatic colors use 700 across the board; that's the
// shade Atlas already uses for TextDanger/TextSuccess/TextWarning
// elsewhere because it's the first stop on each ramp that clears 4.5:1
// against a white surface.
const TYPOGRAPHY_TOKENS = [
    row("semantic.typography.neutral.muted", "neutral.300", neutral300),
    row("semantic.typography.neutral.inverse", "neutral.0", neutral0),
    row("semantic.typography.neutral.strong", "neutral.900", neutral900),
    row("semantic.typography.neutral.medium", "neutral.600", neutral600),
    row("semantic.typography.neutral.weak", "neutral.400", neutral400),

    row("semantic.typography.primary", "primary.700", primary700),
    row("semantic.typography.secondary", "secondary.700", secondary700),
    row("semantic.typography.info", "info.700", info700),
    row("semantic.typography.success", "success.700", success700),
    row("semantic.typography.warning", "warning.700", warning700),
    row("semantic.typography.danger", "danger.700", danger700),
]

// Border — one shade deeper than the matching surface tier (surface uses
// 50/100/200, border uses 100/200/300) so a bordered card doesn't
// disappear against its own background.
const BORDER_TOKENS = [
    row("semantic.border.neutral.muted", "neutral.150", neutral150),
    row("semantic.border.neutral.inverse", "neutral.0", neutral0),
    row("semantic.border.neutral.strong", "neutral.900", neutral900),
    row("semantic.border.neutral.medium", "neutral.200", neutral200),
    row("semantic.border.neutral.default", "neutral.100", neutral100),
    row("semantic.border.neutral.weak", "neutral.50", neutral50),

    row("semantic.border.primary.strong", "primary.800", primary800),
    row("semantic.border.primary.medium", "primary.300", primary300),
    row("semantic.border.primary.default", "primary.200", primary200),
    row("semantic.border.primary.weak", "primary.100", primary100),

    row("semantic.border.secondary.strong", "secondary.800", secondary800),
    row("semantic.border.secondary.medium", "secondary.300", secondary300),
    row("semantic.border.secondary.default", "secondary.200", secondary200),
    row("semantic.border.secondary.weak", "secondary.100", secondary100),

    row("semantic.border.success.strong", "success.800", success800),
    row("semantic.border.success.medium", "success.300", success300),
    row("semantic.border.success.default", "success.200", success200),
    row("semantic.border.success.weak", "success.100", success100),

    row("semantic.border.info.strong", "info.800", info800),
    row("semantic.border.info.medium", "info.300", info300),
    row("semantic.border.info.default", "info.200", info200),
    row("semantic.border.info.weak", "info.100", info100),

    row("semantic.border.warning.strong", "warning.800", warning800),
    row("semantic.border.warning.medium", "warning.300", warning300),
    row("semantic.border.warning.default", "warning.200", warning200),
    row("semantic.border.warning.weak", "warning.100", warning100),

    row("semantic.border.danger.strong", "danger.800", danger800),
    row("semantic.border.danger.medium", "danger.300", danger300),
    row("semantic.border.danger.default", "danger.200", danger200),
    row("semantic.border.danger.weak", "danger.100", danger100),
]

// Icon — chromatic colors use 500 (the ramp's "default" stop), matching
// the IconPrimary/IconDanger/IconSuccess/IconWarning aliases already used
// elsewhere on this site.
const ICON_TOKENS = [
    row("semantic.icon.neutral.muted", "neutral.300", neutral300),
    row("semantic.icon.neutral.inverse", "neutral.0", neutral0),
    row("semantic.icon.neutral.strong", "neutral.900", neutral900),
    row("semantic.icon.neutral.medium", "neutral.600", neutral600),
    row("semantic.icon.neutral.weak", "neutral.400", neutral400),

    row("semantic.icon.primary", "primary.500", primary500),
    row("semantic.icon.secondary", "secondary.500", secondary500),
    row("semantic.icon.info", "info.500", info500),
    row("semantic.icon.success", "success.500", success500),
    row("semantic.icon.warning", "warning.500", warning500),
    row("semantic.icon.danger", "danger.500", danger500),
]

const TOKEN_SECTIONS = [
    { id: "background", title: "Background", rows: BACKGROUND_TOKENS },
    { id: "typography", title: "Typography", rows: TYPOGRAPHY_TOKENS },
    { id: "border", title: "Border", rows: BORDER_TOKENS },
    { id: "icon", title: "Icon", rows: ICON_TOKENS },
]

function TokenRow({ path, token, hex }: { path: string; token: string; hex: string }) {
    return (
        <div className="flex items-center gap-3 border-t border-[var(--neutral100)] px-4 py-2.5 first:border-t-0">
            <span
                className="h-5 w-5 shrink-0 rounded border border-[var(--neutral100)]"
                style={{ background: hex }}
            />
            <span className="min-w-0 flex-1 truncate font-mono text-xs text-[var(--neutral800)]">
                {path}
            </span>
            <span className="w-24 shrink-0 text-right text-xs text-[var(--neutral400)]">{token}</span>
            <span className="hidden w-20 shrink-0 text-right text-xs text-[var(--neutral400)] sm:inline-block">
                {hex.toUpperCase()}
            </span>
        </div>
    )
}

function Swatch({ name, hex, alias }: { name: string; hex: string; alias?: string }) {
    return (
        <div>
            <div
                className="h-20 rounded-lg border border-[var(--neutral100)]"
                style={{ background: hex }}
            />
            <p className="mt-2 text-xs font-semibold text-[var(--neutral900)]">{name}</p>
            <p className="text-xs text-[var(--neutral500)]">{hex.toUpperCase()}</p>
            {alias ? (
                <p className="text-xs text-[var(--neutral400)]">{alias}</p>
            ) : (
                <p className="text-xs text-[var(--neutral500)]">RGB {hexToRgb(hex)}</p>
            )}
        </div>
    )
}

export default function FoundationsColorPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Foundations</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Color
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    We use color purposefully to communicate how things function in the interface,
                    how they relate to other elements, and their level of prominence.
                </p>
            </div>

            {/* Tabs */}
            <div className="mt-8 flex gap-6 border-b border-[var(--neutral100)]">
                <span className="border-b-2 border-[var(--primary500)] pb-3 text-sm font-semibold text-[var(--primary600)]">
                    Solid color
                </span>
                <span className="pb-3 text-sm text-[var(--neutral300)]">Gradient color</span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_200px]">
                <div className="min-w-0">
                    <p className="text-sm text-[var(--neutral600)]">
                        Atlas ships {NEUTRAL.length + (BRAND_GROUPS.length + STATUS_GROUPS.length) * 11}{" "}
                        core color tokens across neutral, brand and status palettes, plus semantic
                        aliases for icons and text so state is recognizable at a glance.
                    </p>

                    <div id="color-palettes" className="mt-12 scroll-mt-24">
                        <h2 className="text-lg font-semibold text-[var(--neutral900)]">Neutral</h2>
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                            {NEUTRAL.map((s) => (
                                <Swatch key={s.name} {...s} />
                            ))}
                        </div>
                    </div>

                    {[...BRAND_GROUPS, ...STATUS_GROUPS].map((group) => (
                        <div key={group.name} className="mt-12">
                            <h2 className="text-lg font-semibold text-[var(--neutral900)]">
                                {group.name}
                            </h2>
                            <p className="mt-1 text-sm text-[var(--neutral500)]">{group.description}</p>
                            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                                {group.swatches.map((s) => (
                                    <Swatch key={s.name} {...s} />
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Semantic color tokens */}
                    {TOKEN_SECTIONS.map((section) => (
                        <div key={section.id} id={section.id} className="mt-16 scroll-mt-24">
                            <h2 className="text-lg font-semibold text-[var(--neutral900)]">
                                {section.title}
                            </h2>
                            <div className="mt-4 overflow-hidden rounded-xl border border-[var(--neutral100)]">
                                {section.rows.map((r) => (
                                    <TokenRow key={r.path} {...r} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* On this page */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--neutral400)]">
                            On this page
                        </p>
                        <nav className="mt-3 flex flex-col gap-2 text-sm">
                            <a href="#color-palettes" className="text-[var(--neutral600)] hover:text-[var(--primary600)]">
                                Color palettes
                            </a>
                            {TOKEN_SECTIONS.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="text-[var(--neutral600)] hover:text-[var(--primary600)]"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>
            </div>
        </div>
    )
}
