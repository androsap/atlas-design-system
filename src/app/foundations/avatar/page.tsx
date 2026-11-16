import { Fragment } from "react"
import { User, Shapes, Smile, UserRound } from "lucide-react"
import {
    neutral500,
    primary500,
    info500,
    success500,
    danger500,
    warning500,
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
} from "@asyst/atlas/tokens"

type TypeKey = "icon" | "logo" | "memoji" | "initial" | "picture"
type ColorKey = "neutral" | "primary" | "info" | "success" | "danger" | "warning"

const TYPES: { key: TypeKey; label: string }[] = [
    { key: "icon", label: "Icon" },
    { key: "logo", label: "Logo" },
    { key: "memoji", label: "Memoji" },
    { key: "initial", label: "Initial" },
    { key: "picture", label: "Picture" },
]

const COLORS: { key: ColorKey; label: string; hex: string }[] = [
    { key: "neutral", label: "Neutral", hex: neutral500 },
    { key: "primary", label: "Primary", hex: primary500 },
    { key: "info", label: "Info", hex: info500 },
    { key: "success", label: "Success", hex: success500 },
    { key: "danger", label: "Danger", hex: danger500 },
    { key: "warning", label: "Warning", hex: warning500 },
]

const SIZES = [size16, size20, size24, size32, size40, size48, size56, size64, size72, size80].map(
    (v) => parseInt(v, 10)
)

function Avatar({ type, hex, size }: { type: TypeKey; hex: string; size: number }) {
    const iconSize = Math.max(10, Math.round(size * 0.55))

    if (type === "picture") {
        return (
            <div
                className="flex shrink-0 items-center justify-center rounded-full bg-[var(--neutral100)]"
                style={{ width: size, height: size, boxShadow: `0 0 0 2px ${hex}` }}
            >
                <UserRound size={iconSize} className="text-[var(--neutral400)]" strokeWidth={1.5} />
            </div>
        )
    }

    if (type === "initial") {
        return (
            <div
                className="flex shrink-0 items-center justify-center rounded-full font-semibold text-white"
                style={{ width: size, height: size, background: hex, fontSize: Math.max(9, Math.round(size * 0.32)) }}
            >
                AS
            </div>
        )
    }

    const Icon = type === "icon" ? User : type === "logo" ? Shapes : Smile
    return (
        <div
            className="flex shrink-0 items-center justify-center rounded-full"
            style={{ width: size, height: size, background: hex }}
        >
            <Icon size={iconSize} className="text-white" strokeWidth={1.75} />
        </div>
    )
}

export default function AvatarFoundationPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Foundations</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Avatar
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    An avatar visually symbolizes users or characters. Designers incorporate
                    avatars to customize the user experience by showing a profile image or
                    distinctive icon for each user, and to distinguish user roles like customers
                    or administrators.
                </p>
            </div>

            {/* Base */}
            <div className="mt-12">
                <h2 className="text-lg font-semibold text-[var(--neutral900)]">Base</h2>
                <p className="mt-1 max-w-2xl text-sm text-[var(--neutral500)]">
                    Every avatar type — Icon, Logo, Memoji, Initial, Picture — across all 6
                    status colors, at every size in our{" "}
                    <a href="/foundations/sizing" className="text-[var(--text-link)] hover:underline">
                        size scale
                    </a>
                    .
                </p>

                <div className="mt-8 space-y-14">
                    {SIZES.map((size) => (
                        <div key={size}>
                            <p className="mb-3 font-mono text-xs font-semibold text-[var(--neutral400)]">
                                {size}px
                            </p>
                            <div className="overflow-x-auto rounded-xl border border-[var(--neutral100)] p-6">
                                <div className="grid min-w-[560px] grid-cols-[80px_repeat(6,1fr)] items-center gap-y-5">
                                    <span />
                                    {COLORS.map((c) => (
                                        <span
                                            key={c.key}
                                            className="text-center text-xs font-medium text-[var(--neutral400)]"
                                        >
                                            {c.label}
                                        </span>
                                    ))}
                                    {TYPES.map((t) => (
                                        <Fragment key={t.key}>
                                            <span className="text-xs font-medium text-[var(--neutral600)]">
                                                {t.label}
                                            </span>
                                            {COLORS.map((c) => (
                                                <div key={`${t.key}-${c.key}`} className="flex justify-center">
                                                    <Avatar type={t.key} hex={c.hex} size={size} />
                                                </div>
                                            ))}
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
