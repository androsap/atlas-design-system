import { cn } from "@/lib/utils"
import { TypographyTabs } from "@/components/docs/typography-tabs"
import {
    fontSize0,
    fontSize1,
    fontSize2,
    fontSize3,
    fontSize4,
    fontSize5,
    fontSize6,
    fontSize7,
    fontSize8,
    fontSize9,
    fontSize10,
    fontSize11,
    fontSize12,
} from "@/tokens/generated"

type TypeRow = {
    label: string
    token: string
    cssVar: string
    weight: string
    size: number
    lineHeight: number
    tracking: string | null
    sample: string
    uppercase?: boolean
}

function typeRow(
    label: string,
    token: string,
    cssVar: string,
    weight: string,
    size: number,
    lineHeight: number,
    tracking: string | null,
    sample: string,
    uppercase = false
): TypeRow {
    return { label, token, cssVar, weight, size, lineHeight, tracking, sample, uppercase }
}

const TYPE_GROUPS: { title: string; rows: TypeRow[] }[] = [
    {
        title: "Display",
        rows: [
            typeRow("Display Xtra Large", "typography.display.xl", "displayXl", "Bold", 112, 120, "-1.2", "Display Extra Large."),
            typeRow("Display Large", "typography.display.lg", "displayLg", "Bold", 56, 64, "-0.8", "Display Large."),
            typeRow("Display Medium", "typography.display.md", "displayMd", "Bold", 48, 56, "-0.6", "Display Medium."),
        ],
    },
    {
        title: "Heading",
        rows: [
            typeRow("Heading Large", "typography.heading.lg", "headingLg", "Semi Bold", 40, 56, "-0.22", "Heading One (h1)."),
            typeRow("Heading Medium", "typography.heading.md", "headingMd", "Semi Bold", 32, 42, "-0.21", "Heading Two (h2)."),
            typeRow("Heading Small", "typography.heading.sm", "headingSm", "Semi Bold", 24, 34, "-0.19", "Heading Three (h3)."),
        ],
    },
    {
        title: "Title",
        rows: [
            typeRow("Title Medium", "typography.title.md", "titleMd", "Semi Bold", 20, 28, "-0.17", "Title medium for prominent titles"),
            typeRow("Title Small", "typography.title.sm", "titleSm", "Semi Bold", 18, 25, "-0.14", "Used for secondary titles or headings."),
        ],
    },
    {
        title: "Subtitle",
        rows: [
            typeRow("Subtitle Medium", "typography.subtitle.md", "subtitleMd", "Semi Bold", 16, 22, "-0.11", "Subtitle medium used for subtitles."),
            typeRow("Subtitle Small", "typography.subtitle.sm", "subtitleSm", "Semi Bold", 14, 20, "-0.06", "Subtitle small used for smaller subtitles."),
        ],
    },
    {
        title: "Body",
        rows: [
            typeRow("Body Large", "typography.body.lg", "bodyLg", "Regular", 20, 28, "0.17", "Body large text for introductory paragraphs and highlighted content blocks."),
            typeRow("Body Medium", "typography.body.md", "bodyMd", "Regular", 16, 22, "0.11", "Body medium is the default text size for paragraphs and general content."),
            typeRow("Body Small", "typography.body.sm", "bodySm", "Regular", 14, 20, "0.06", "Body small for secondary information, table cells, and compact layouts."),
        ],
    },
    {
        title: "Label",
        rows: [
            typeRow("Label Medium", "typography.label.md", "labelMd", "Medium", 14, 20, "0", "Label Medium."),
            typeRow("Label Small", "typography.label.sm", "labelSm", "Medium", 12, 17, "0.1", "Label Small."),
        ],
    },
    {
        title: "Caption & Overline",
        rows: [
            typeRow("Caption Medium", "typography.caption.md", "captionMd", "Regular", 12, 16, "0.05", "Caption text for supplementary information and metadata."),
            typeRow("Caption Small", "typography.caption.sm", "captionSm", "Regular", 10, 14, null, "Caption text for supplementary information and metadata, but smaller."),
            typeRow("Overline", "typography.overline", "overlineBase", "Medium", 11, 15, null, "Overline label text", true),
        ],
    },
]

// Real, documented Inter OpenType features (from the Inter typeface itself —
// see the guide link below), not something specific to our next/font setup.
const INTER_FEATURES = [
    { sample: "10305", feature: "'zero' 1", description: "Slashed zero", notes: "Use selectively with data points" },
    { sample: "1,234.50", feature: "'tnum' 1", description: "Tabular figures", notes: "For use in tables and lists" },
    { sample: "fi fl ffi", feature: "'liga' 1", description: "Standard ligatures", notes: "On by default" },
]

const SCALE_SIZES = [
    fontSize12, fontSize11, fontSize10, fontSize9, fontSize8, fontSize7,
    fontSize6, fontSize5, fontSize4, fontSize3, fontSize2, fontSize1, fontSize0,
]

function TypeRowItem({ label, token, cssVar, weight, size, lineHeight, tracking, sample, uppercase }: TypeRow) {
    return (
        <div className="grid grid-cols-1 gap-3 border-t border-[var(--neutral100)] py-6 first:border-t-0 sm:grid-cols-[260px_1fr] sm:items-center sm:gap-8">
            <div>
                <p className="text-sm font-semibold text-[var(--neutral900)]">{label}</p>
                <p className="mt-0.5 font-mono text-xs text-[var(--secondary600)]">{token}</p>
                <p className="mt-0.5 text-xs text-[var(--neutral400)]">
                    {weight} · {size}px / {lineHeight}
                    {tracking !== null ? ` · ${tracking}` : ""}
                </p>
            </div>
            <p
                className={cn("min-w-0 text-[var(--neutral900)]", uppercase && "uppercase")}
                style={{ font: `var(--${cssVar})` }}
            >
                {sample}
            </p>
        </div>
    )
}

function FeatureTable({ rows }: { rows: typeof INTER_FEATURES }) {
    return (
        <div className="mt-4 overflow-hidden rounded-xl border border-[var(--neutral100)]">
            <table className="w-full text-left text-sm">
                <thead className="bg-[var(--neutral25)] text-[var(--neutral500)]">
                    <tr>
                        <th className="px-4 py-2.5 font-medium">Preview</th>
                        <th className="px-4 py-2.5 font-medium">Description</th>
                        <th className="px-4 py-2.5 font-medium">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r) => (
                        <tr key={r.description} className="border-t border-[var(--neutral100)]">
                            <td
                                className="px-4 py-3 text-[var(--neutral700)]"
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontFeatureSettings: r.feature,
                                }}
                            >
                                {r.sample}
                            </td>
                            <td className="px-4 py-3 text-[var(--neutral700)]">{r.description}</td>
                            <td className="px-4 py-3 text-[var(--neutral500)]">{r.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function Specimen({
    name,
    fontVar,
    weight,
}: {
    name: string
    fontVar: string
    weight?: number
}) {
    return (
        <div className="rounded-xl border border-[var(--neutral100)] bg-[var(--neutral0)] p-10">
            <p
                className="text-5xl"
                style={{ fontFamily: `var(${fontVar})`, fontWeight: weight ?? 600 }}
            >
                {name}
            </p>
            <p
                className="mt-4 text-lg text-[var(--neutral500)]"
                style={{ fontFamily: `var(${fontVar})` }}
            >
                The quick brown fox jumps over the lazy dog
            </p>
        </div>
    )
}

const typefacesTab = (
    <div className="space-y-14">
        <p className="max-w-2xl text-sm text-[var(--neutral600)]">
            We use two typefaces — <span className="font-semibold text-[var(--neutral900)]">Inter</span>{" "}
            for headings, body copy and UI, and{" "}
            <span className="font-semibold text-[var(--neutral900)]">Manrope</span> for display and
            high-impact marketing content. The combination creates a clear hierarchy without
            sacrificing consistency across the design system.
        </p>

        <div>
            <h3 className="text-base font-semibold text-[var(--neutral900)]">Inter</h3>
            <p className="mt-1 max-w-2xl text-sm text-[var(--neutral500)]">
                Our workhorse typeface for UI, headings and body copy — designed for screens and
                legible at small sizes.{" "}
                <a
                    href="https://d.rsms.me/inter-website/v3/dynmetrics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-link)] hover:underline"
                >
                    Guide: d.rsms.me/inter-website/v3/dynmetrics
                </a>
            </p>
            <div className="mt-4">
                <Specimen name="Inter" fontVar="--font-inter" weight={600} />
            </div>
            <p className="mt-6 text-sm text-[var(--neutral600)]">
                OpenType features — Inter ships a set of type features beyond the default; most
                are used selectively rather than globally.
            </p>
            <FeatureTable rows={INTER_FEATURES} />
        </div>

        <div>
            <h3 className="text-base font-semibold text-[var(--neutral900)]">Manrope</h3>
            <p className="mt-1 max-w-2xl text-sm text-[var(--neutral500)]">
                Our display typeface — used only for the Display styles, where its distinct
                geometry gives marketing and high-impact content a separate visual identity.
            </p>
            <div className="mt-4">
                <Specimen name="Manrope" fontVar="--font-manrope" weight={700} />
            </div>
        </div>

        <div>
            <h3 className="text-base font-semibold text-[var(--neutral900)]">Scale</h3>
            <p className="mt-1 max-w-2xl text-sm text-[var(--neutral500)]">
                Atlas&apos;s type scale runs from {fontSize0} to {fontSize12} — sizes are tuned by
                eye per style rather than a single fixed ratio. See the exact size, line-height
                and tracking for every style under the &ldquo;Type scale&rdquo; tab.
            </p>
            <div className="mt-4 flex flex-wrap items-end gap-x-8 gap-y-6 rounded-xl border border-[var(--neutral100)] bg-[var(--neutral0)] p-8">
                {SCALE_SIZES.map((size) => (
                    <div key={size} className="flex flex-col items-center gap-2">
                        <span
                            className="font-semibold text-[var(--neutral900)]"
                            style={{ fontSize: size, fontFamily: "var(--font-inter)" }}
                        >
                            Aa
                        </span>
                        <span className="text-xs text-[var(--neutral400)]">{size}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

const scaleTab = (
    <div>
        {TYPE_GROUPS.map((group) => (
            <div key={group.title} className="mt-14 first:mt-0">
                <h2 className="text-lg font-semibold text-[var(--neutral900)]">{group.title}</h2>
                <div className="mt-2">
                    {group.rows.map((row) => (
                        <TypeRowItem key={row.token} {...row} />
                    ))}
                </div>
            </div>
        ))}
    </div>
)

export default function FoundationsTypographyPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Foundations</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Typography
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Learn about our app typefaces and their scale considerations — Inter for UI
                    and body copy, Manrope for display and high-impact content.
                </p>
            </div>

            <TypographyTabs typefaces={typefacesTab} scale={scaleTab} />
        </div>
    )
}
