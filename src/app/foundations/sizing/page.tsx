import { ScaleTabs } from "@/components/docs/scale-tabs"
import {
    sizeNull,
    size1,
    size2,
    size4,
    size8,
    size12,
    size16,
    size20,
    size24,
    size32,
    size40,
    size48,
    size56,
    size64,
    size72,
    size80,
    size96,
    size128,
    size160,
    size192,
    size224,
    size256,
    size320,
    size384,
    size512,
    size640,
    size768,
    sizeMax,
    spacingNull,
    spacing4xs,
    spacing3xs,
    spacing2xs,
    spacingXs,
    spacingSm,
    spacingMd,
    spacingLg,
    spacingXl,
    spacing2xl,
    spacing3xl,
    spacing4xl,
    spacing5xl,
    spacing6xl,
    spacing7xl,
    spacing8xl,
    spacing9xl,
    spacingMax,
    borderNull,
    border4xs,
    border3xs,
    border2xs,
    borderXs,
    borderSm,
    borderMd,
    borderLg,
    borderXl,
    border2xl,
    border3xl,
    border4xl,
    borderFull,
} from "@asyst/atlas/tokens"

const SIZE_SCALE = [
    { token: "size.null", value: sizeNull },
    { token: "size.1", value: size1 },
    { token: "size.2", value: size2 },
    { token: "size.4", value: size4 },
    { token: "size.8", value: size8 },
    { token: "size.12", value: size12 },
    { token: "size.16", value: `${size16} (1rem)` },
    { token: "size.20", value: size20 },
    { token: "size.24", value: size24 },
    { token: "size.32", value: size32 },
    { token: "size.40", value: size40 },
    { token: "size.48", value: size48 },
    { token: "size.56", value: size56 },
    { token: "size.64", value: size64 },
    { token: "size.72", value: size72 },
    { token: "size.80", value: size80 },
    { token: "size.96", value: size96 },
    { token: "size.128", value: size128 },
    { token: "size.160", value: size160 },
    { token: "size.192", value: size192 },
    { token: "size.224", value: size224 },
    { token: "size.256", value: size256 },
    { token: "size.320", value: size320 },
    { token: "size.384", value: size384 },
    { token: "size.512", value: size512 },
    { token: "size.640", value: size640 },
    { token: "size.768", value: size768 },
    { token: "size.max", value: `${sizeMax} (Full)` },
]

const SPACING_SCALE = [
    { token: "spacing.null", sizeRef: "size.null", value: spacingNull },
    { token: "spacing.4xs", sizeRef: "size.2", value: spacing4xs },
    { token: "spacing.3xs", sizeRef: "size.4", value: spacing3xs },
    { token: "spacing.2xs", sizeRef: "size.8", value: spacing2xs },
    { token: "spacing.xs", sizeRef: "size.12", value: spacingXs },
    { token: "spacing.sm", sizeRef: "size.16", value: spacingSm },
    { token: "spacing.md", sizeRef: "size.20", value: spacingMd },
    { token: "spacing.lg", sizeRef: "size.24", value: spacingLg },
    { token: "spacing.xl", sizeRef: "size.32", value: spacingXl },
    { token: "spacing.2xl", sizeRef: "size.40", value: spacing2xl },
    { token: "spacing.3xl", sizeRef: "size.48", value: spacing3xl },
    { token: "spacing.4xl", sizeRef: "size.56", value: spacing4xl },
    { token: "spacing.5xl", sizeRef: "size.64", value: spacing5xl },
    { token: "spacing.6xl", sizeRef: "size.80", value: spacing6xl },
    { token: "spacing.7xl", sizeRef: "size.96", value: spacing7xl },
    { token: "spacing.8xl", sizeRef: "size.128", value: spacing8xl },
    { token: "spacing.9xl", sizeRef: "size.256", value: spacing9xl },
    { token: "spacing.max", sizeRef: "size.max", value: spacingMax },
]

const RADIUS_SCALE = [
    { token: "border.null", cssVar: "--borderNull", value: borderNull },
    { token: "border.4xs", cssVar: "--border4xs", value: border4xs },
    { token: "border.3xs", cssVar: "--border3xs", value: border3xs },
    { token: "border.2xs", cssVar: "--border2xs", value: border2xs },
    { token: "border.xs", cssVar: "--borderXs", value: borderXs },
    { token: "border.sm", cssVar: "--borderSm", value: borderSm },
    { token: "border.md", cssVar: "--borderMd", value: borderMd },
    { token: "border.lg", cssVar: "--borderLg", value: borderLg },
    { token: "border.xl", cssVar: "--borderXl", value: borderXl },
    { token: "border.2xl", cssVar: "--border2xl", value: border2xl },
    { token: "border.3xl", cssVar: "--border3xl", value: border3xl },
    { token: "border.4xl", cssVar: "--border4xl", value: border4xl },
    { token: "border.full", cssVar: "--borderFull", value: `${borderFull} (Full)` },
]

const SPACING_MAX_PX = Math.max(...SPACING_SCALE.map((row) => parseInt(row.value, 10)))
const SPACING_TRACK_MAX_PX = 420

function SpacingRow({ token, sizeRef, value }: { token: string; sizeRef: string; value: string }) {
    const px = parseInt(value, 10)
    const barWidth = (px / SPACING_MAX_PX) * SPACING_TRACK_MAX_PX

    return (
        <div className="grid grid-cols-1 gap-3 border-t border-[var(--neutral100)] px-4 py-4 first:border-t-0 sm:grid-cols-[180px_1fr] sm:items-center sm:gap-6">
            <div>
                <p className="font-mono text-sm font-semibold text-[var(--neutral900)]">{token}</p>
                <p className="font-mono text-xs text-[var(--neutral400)]">
                    {sizeRef} · {value}
                </p>
            </div>
            <div className="flex h-5 items-center gap-0.5">
                <span
                    className="h-3 rounded-l-sm bg-[var(--success200)]"
                    style={{ width: `${barWidth / 2}px` }}
                />
                <span
                    className="h-3 rounded-r-sm bg-[var(--success600)]"
                    style={{ width: `${barWidth / 2}px` }}
                />
            </div>
        </div>
    )
}

function RadiusSwatch({ token, cssVar, value }: { token: string; cssVar: string; value: string }) {
    return (
        <div className="flex flex-col items-center gap-3">
            <div
                className="h-32 w-32 border-2 border-[var(--icon-accent-subtle)] bg-[var(--surface-accent-subtle)]"
                style={{ borderRadius: `var(${cssVar})` }}
            />
            <div className="text-center">
                <p className="text-sm font-semibold text-[var(--neutral900)]">{token}</p>
                <p className="text-xs text-[var(--neutral400)]">{value}</p>
            </div>
        </div>
    )
}

const sizingTab = (
    <div>
        <p className="max-w-2xl text-sm text-[var(--neutral600)]">
            Numeric primitive size scale with proportional values. Every spacing and radius
            token is aliased from this scale — it&apos;s the single source of truth for pixel
            values across Atlas.
        </p>
        <div className="mt-6 max-w-2xl overflow-hidden rounded-xl border border-[var(--neutral100)]">
            <div className="grid grid-cols-[1fr_1fr] bg-[var(--neutral25)] px-4 py-2.5 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                <span>Token</span>
                <span>Value</span>
            </div>
            {SIZE_SCALE.map((row) => (
                <div
                    key={row.token}
                    className="grid grid-cols-[1fr_1fr] border-t border-[var(--neutral100)] px-4 py-2.5"
                >
                    <span className="font-mono text-sm font-semibold text-[var(--neutral900)]">
                        {row.token}
                    </span>
                    <span className="font-mono text-sm text-[var(--neutral500)]">{row.value}</span>
                </div>
            ))}
        </div>
    </div>
)

const spacingTab = (
    <div>
        <p className="max-w-2xl text-sm text-[var(--neutral600)]">
            Consistent spacing tokens based on an 8pt grid system. Use these values for padding,
            margins, gaps and sizing across all components.
        </p>
        <div className="mt-6 max-w-3xl overflow-hidden rounded-xl border border-[var(--neutral100)]">
            <div className="grid grid-cols-1 gap-3 bg-[var(--neutral25)] px-4 py-2.5 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase sm:grid-cols-[180px_1fr]">
                <span>Token</span>
                <span>Value</span>
            </div>
            {SPACING_SCALE.map((row) => (
                <SpacingRow key={row.token} {...row} />
            ))}
        </div>
        <p className="mt-4 max-w-3xl text-xs text-[var(--neutral400)]">
            Every spacing token is an alias of a size primitive — bars above are drawn
            proportionally to their real pixel value.
        </p>
    </div>
)

const radiusTab = (
    <div>
        <p className="max-w-2xl text-sm text-[var(--neutral600)]">
            Corner radius tokens for consistent rounding across UI elements — from sharp to
            fully rounded.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-6">
            {RADIUS_SCALE.map((row) => (
                <RadiusSwatch key={row.token} {...row} />
            ))}
        </div>
    </div>
)

export default function FoundationsSizingPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Foundations</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Sizing, Spacing &amp; Radius
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    A numeric size scale, and the spacing and corner-radius tokens aliased from
                    it — the shared measurements every component is built on.
                </p>
            </div>

            <ScaleTabs sizing={sizingTab} spacing={spacingTab} radius={radiusTab} />
        </div>
    )
}
