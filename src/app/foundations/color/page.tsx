import { Layers } from "lucide-react"
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
    info100,
    info500,
    info700,
    success100,
    success500,
    success700,
    warning100,
    warning500,
    warning700,
    danger100,
    danger500,
    danger700,
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

const PRIMARY = [
    { name: "primary950", hex: primary950 },
    { name: "primary900", hex: primary900 },
    { name: "primary800", hex: primary800 },
    { name: "primary700", hex: primary700 },
    { name: "primary600", hex: primary600 },
    { name: "primary500", hex: primary500 },
    { name: "primary400", hex: primary400 },
    { name: "primary300", hex: primary300 },
    { name: "primary200", hex: primary200 },
    { name: "primary100", hex: primary100 },
    { name: "primary50", hex: primary50 },
]

const SECONDARY = [
    { name: "secondary950", hex: secondary950 },
    { name: "secondary900", hex: secondary900 },
    { name: "secondary800", hex: secondary800 },
    { name: "secondary700", hex: secondary700 },
    { name: "secondary600", hex: secondary600 },
    { name: "secondary500", hex: secondary500 },
    { name: "secondary400", hex: secondary400 },
    { name: "secondary300", hex: secondary300 },
    { name: "secondary200", hex: secondary200 },
    { name: "secondary100", hex: secondary100 },
    { name: "secondary50", hex: secondary50 },
]

const STATUS_GROUPS = [
    {
        label: "Success",
        swatches: [
            { name: "success100", hex: success100 },
            { name: "success500", hex: success500 },
            { name: "success700", hex: success700 },
        ],
    },
    {
        label: "Warning",
        swatches: [
            { name: "warning100", hex: warning100 },
            { name: "warning500", hex: warning500 },
            { name: "warning700", hex: warning700 },
        ],
    },
    {
        label: "Danger",
        swatches: [
            { name: "danger100", hex: danger100 },
            { name: "danger500", hex: danger500 },
            { name: "danger700", hex: danger700 },
        ],
    },
    {
        label: "Info",
        swatches: [
            { name: "info100", hex: info100 },
            { name: "info500", hex: info500 },
            { name: "info700", hex: info700 },
        ],
    },
]

const ICON_ALIASES = [
    { token: "IconHighEmphasis", value: "neutral700", hex: neutral700 },
    { token: "IconLowEmphasis", value: "neutral400", hex: neutral400 },
    { token: "IconDisabled", value: "neutral200", hex: neutral200 },
    { token: "IconPrimary", value: "primary500", hex: primary500 },
    { token: "IconDanger", value: "danger500", hex: danger500 },
    { token: "IconSuccess", value: "success500", hex: success500 },
    { token: "IconWarning", value: "warning500", hex: warning500 },
]

const TEXT_ALIASES = [
    { label: "High emphasis text", token: "TextHighEmphasis", value: "neutral900", hex: neutral900 },
    { label: "Low emphasis text", token: "TextLowEmphasis", value: "neutral500", hex: neutral500 },
    { label: "Disabled text", token: "TextDisabled", value: "neutral300", hex: neutral300 },
    { label: "Primary text", token: "TextPrimary", value: "primary500", hex: primary500 },
    { label: "Danger text", token: "TextDanger", value: "danger500", hex: danger500 },
    { label: "Success text", token: "TextSuccess", value: "success700", hex: success700 },
    { label: "Warning text", token: "TextWarning", value: "warning700", hex: warning700 },
    { label: "Invert text", token: "TextInvert", value: "neutral0", hex: neutral0 },
]

function Swatch({ name, hex }: { name: string; hex: string }) {
    return (
        <div>
            <div
                className="h-20 rounded-lg border border-[var(--neutral100)]"
                style={{ background: hex }}
            />
            <p className="mt-2 text-xs font-semibold text-[var(--neutral900)]">{name}</p>
            <p className="text-xs text-[var(--neutral500)]">HEX {hex.toUpperCase()}</p>
            <p className="text-xs text-[var(--neutral500)]">RGB {hexToRgb(hex)}</p>
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
                        Atlas ships {NEUTRAL.length + PRIMARY.length + SECONDARY.length} core color
                        tokens across neutral, brand and status palettes, plus semantic aliases for
                        icons and text so state is recognizable at a glance.
                    </p>

                    <div id="color-palettes" className="mt-12 scroll-mt-24">
                        <h2 className="text-lg font-semibold text-[var(--neutral900)]">Neutral</h2>
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
                            {NEUTRAL.map((s) => (
                                <Swatch key={s.name} {...s} />
                            ))}
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-lg font-semibold text-[var(--neutral900)]">Primary</h2>
                        <p className="mt-1 text-sm text-[var(--neutral500)]">
                            The brand color — used for primary buttons, active states and links.
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                            {PRIMARY.map((s) => (
                                <Swatch key={s.name} {...s} />
                            ))}
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-lg font-semibold text-[var(--neutral900)]">Secondary</h2>
                        <p className="mt-1 text-sm text-[var(--neutral500)]">
                            Complements primary for accents, charts and secondary emphasis.
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                            {SECONDARY.map((s) => (
                                <Swatch key={s.name} {...s} />
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
                        {STATUS_GROUPS.map((group) => (
                            <div key={group.label}>
                                <h2 className="text-lg font-semibold text-[var(--neutral900)]">
                                    {group.label}
                                </h2>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    {group.swatches.map((s) => (
                                        <Swatch key={s.name} {...s} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Icon color alias */}
                    <div id="icon-color-alias" className="mt-16 scroll-mt-24">
                        <h2 className="text-lg font-semibold text-[var(--neutral900)]">
                            Icon color alias
                        </h2>
                        <div className="mt-4 overflow-hidden rounded-xl border border-[var(--neutral100)]">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[var(--neutral900)] text-[var(--neutral0)]">
                                    <tr>
                                        <th className="px-4 py-2.5 font-medium">Visual</th>
                                        <th className="px-4 py-2.5 font-medium">Token</th>
                                        <th className="px-4 py-2.5 font-medium">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ICON_ALIASES.map((row) => (
                                        <tr key={row.token} className="border-t border-[var(--neutral100)]">
                                            <td className="px-4 py-3">
                                                <Layers size={18} style={{ color: row.hex }} />
                                            </td>
                                            <td className="px-4 py-3 text-[var(--neutral700)]">{row.token}</td>
                                            <td className="px-4 py-3 text-[var(--neutral500)]">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Text color alias */}
                    <div id="text-color-alias" className="mt-16 scroll-mt-24">
                        <h2 className="text-lg font-semibold text-[var(--neutral900)]">
                            Text color alias
                        </h2>
                        <div className="mt-4 overflow-hidden rounded-xl border border-[var(--neutral100)]">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[var(--neutral900)] text-[var(--neutral0)]">
                                    <tr>
                                        <th className="px-4 py-2.5 font-medium">Sample</th>
                                        <th className="px-4 py-2.5 font-medium">Token</th>
                                        <th className="px-4 py-2.5 font-medium">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TEXT_ALIASES.map((row) => (
                                        <tr key={row.token} className="border-t border-[var(--neutral100)]">
                                            <td className="px-4 py-3">
                                                {row.token === "TextInvert" ? (
                                                    <span
                                                        className="inline-block rounded px-2 py-0.5 text-xs font-medium"
                                                        style={{ background: neutral900, color: row.hex }}
                                                    >
                                                        {row.label}
                                                    </span>
                                                ) : (
                                                    <span
                                                        className="text-xs font-medium"
                                                        style={{ color: row.hex }}
                                                    >
                                                        {row.label}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3 text-[var(--neutral700)]">{row.token}</td>
                                            <td className="px-4 py-3 text-[var(--neutral500)]">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
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
                            <a href="#icon-color-alias" className="text-[var(--neutral600)] hover:text-[var(--primary600)]">
                                Icon color alias
                            </a>
                            <a href="#text-color-alias" className="text-[var(--neutral600)] hover:text-[var(--primary600)]">
                                Text color alias
                            </a>
                        </nav>
                    </div>
                </aside>
            </div>
        </div>
    )
}
