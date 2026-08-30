import Image from "next/image"
import * as si from "simple-icons"
import countries from "world-countries"
import { cn } from "@/lib/utils"
import { AssetTabs } from "@/components/docs/asset-tabs"
import {
    ArrowRight,
    ArrowUp,
    CheckCircle2,
    XCircle,
    Moon,
    Sun,
    Check,
    Copy,
    Palette,
    Type,
    Ruler,
    Shapes,
    Accessibility,
    Braces,
    MousePointerClick,
    TextCursorInput,
    ChevronDown,
    SquareCheck,
    CircleDot,
    MessageCircle,
    AlertCircle,
    Tags,
    Tag,
    ToggleLeft,
    Route,
    CalendarDays,
    Gauge,
    Loader2,
    UploadCloud,
} from "lucide-react"
import { size16, size20, size24, size32, size40 } from "@/tokens/generated"

// Icons actually imported and used across this codebase — grep-verified,
// not a curated "best of" list.
const USED_ICONS = [
    { name: "ArrowRight", Icon: ArrowRight },
    { name: "ArrowUp", Icon: ArrowUp },
    { name: "CheckCircle2", Icon: CheckCircle2 },
    { name: "XCircle", Icon: XCircle },
    { name: "Moon", Icon: Moon },
    { name: "Sun", Icon: Sun },
    { name: "Check", Icon: Check },
    { name: "Copy", Icon: Copy },
    { name: "Palette", Icon: Palette },
    { name: "Type", Icon: Type },
    { name: "Ruler", Icon: Ruler },
    { name: "Shapes", Icon: Shapes },
    { name: "Accessibility", Icon: Accessibility },
    { name: "Braces", Icon: Braces },
    { name: "MousePointerClick", Icon: MousePointerClick },
    { name: "TextCursorInput", Icon: TextCursorInput },
    { name: "ChevronDown", Icon: ChevronDown },
    { name: "SquareCheck", Icon: SquareCheck },
    { name: "CircleDot", Icon: CircleDot },
    { name: "MessageCircle", Icon: MessageCircle },
    { name: "AlertCircle", Icon: AlertCircle },
    { name: "Tags", Icon: Tags },
    { name: "Tag", Icon: Tag },
    { name: "ToggleLeft", Icon: ToggleLeft },
    { name: "Route", Icon: Route },
    { name: "CalendarDays", Icon: CalendarDays },
    { name: "Gauge", Icon: Gauge },
    { name: "Loader2", Icon: Loader2 },
    { name: "UploadCloud", Icon: UploadCloud },
]

const SIZE_STEPS = [
    { label: "size.16", value: size16 },
    { label: "size.20", value: size20 },
    { label: "size.24", value: size24 },
    { label: "size.32", value: size32 },
    { label: "size.40", value: size40 },
]

const STROKE_STEPS = [1, 1.5, 2, 2.5]

// Brand logos — every slug below is verified to exist in the installed
// simple-icons package (see the icon/hex data it ships). Trademarks
// belong to their respective owners; see the note below the grid.
const LOGO_CATEGORIES: { name: string; slugs: string[] }[] = [
    { name: "Browser", slugs: ["googlechrome", "firefoxbrowser", "safari", "opera", "brave", "vivaldi", "torbrowser", "duckduckgo", "arc"] },
    { name: "Social Network", slugs: ["facebook", "instagram", "x", "tiktok", "pinterest", "snapchat", "reddit", "tumblr", "threads", "quora", "mastodon", "bluesky", "sinaweibo", "vk"] },
    { name: "Messenger", slugs: ["whatsapp", "telegram", "messenger", "wechat", "line", "viber", "signal", "discord", "googlemeet", "zoom"] },
    { name: "Design", slugs: ["figma", "sketch", "framer", "dribbble", "behance", "coreldraw", "webflow", "gimp", "krita", "blender", "cinema4d", "penpot", "marvelapp", "miro"] },
    { name: "OS", slugs: ["apple", "android", "ios", "linux", "ubuntu", "macos", "kalilinux", "debian", "fedora", "archlinux", "raspberrypi", "gnome"] },
    { name: "Video", slugs: ["youtube", "netflix", "twitch", "vimeo", "dailymotion", "flickr", "crunchyroll", "plex", "kodi", "vlcmediaplayer", "letterboxd", "imdb"] },
    { name: "Music", slugs: ["spotify", "applemusic", "soundcloud", "tidal", "shazam", "audiomack", "bandcamp", "deezer", "pandora", "youtubemusic"] },
    { name: "Automotive", slugs: ["bmw", "audi", "toyota", "honda", "ford", "chevrolet", "nissan", "hyundai", "kia", "volkswagen", "porsche", "ferrari", "lamborghini", "tesla", "jeep", "mini", "mitsubishi", "subaru", "mazda", "volvo", "renault", "peugeot", "citroen", "fiat", "astonmartin", "bentley", "rollsroyce", "bugatti"] },
    { name: "Productivity", slugs: ["googledrive", "dropbox", "notion", "trello", "asana", "evernote", "googledocs", "googlesheets", "airtable", "clickup", "todoist", "googlecalendar", "googlemaps"] },
    { name: "Coding", slugs: ["javascript", "typescript", "python", "react", "vuedotjs", "angular", "nodedotjs", "php", "cplusplus", "c", "rust", "go", "kotlin", "swift", "ruby", "html5", "css", "git", "github", "gitlab", "docker", "kubernetes", "npm", "yarn", "webpack", "vite", "tailwindcss", "wordpress", "mongodb", "postgresql", "mysql", "redis", "graphql", "dotnet", "bun", "deno", "svelte", "nextdotjs", "laravel", "django", "flask", "spring", "rubyonrails", "flutter", "dart", "unity", "unrealengine", "androidstudio", "intellijidea", "postman"] },
    { name: "Finance", slugs: ["paypal", "visa", "mastercard", "americanexpress", "stripe", "applepay", "googlepay", "bitcoin", "ethereum", "coinbase", "wise", "revolut", "cashapp", "venmo", "alipay"] },
    { name: "Other", slugs: ["airbnb", "playstation", "steam", "epicgames", "googleplay", "appstore", "ebay", "intel", "dell", "samsung", "huawei", "sony", "target", "shopify", "etsy", "aliexpress", "alibabadotcom", "asus", "lenovo", "hp", "acer", "lg", "xiaomi", "oneplus", "oppo", "razer", "corsair", "nvidia", "amd", "qualcomm", "meta"] },
]

const BRAND_ICONS: Record<string, { title: string; path: string; hex: string }> = {}
for (const icon of Object.values(si)) {
    if (icon && typeof icon === "object" && "slug" in icon) {
        BRAND_ICONS[icon.slug as string] = icon as { title: string; path: string; hex: string }
    }
}

// 194 UN-member-state flags — real ISO data from the world-countries
// package (not a hand-typed list), rendered as SVGs from flag-icons
// (copied into public/flags-round at build time) rather than emoji, since
// flag emoji render as bare two-letter codes on Windows/Chrome.
const FLAGS = countries
    .filter((c) => c.unMember)
    .map((c) => ({ name: c.name.common, code: c.cca2.toLowerCase() }))
    .sort((a, b) => a.name.localeCompare(b.name))

// Relative luminance (WCAG formula) — some brand colors (e.g. Sony, Unity)
// are pure white and disappear on a white swatch, so those get a dark
// chip instead instead of hardcoding a one-off list per brand.
function luminance(hex: string) {
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
}

function BrandLogo({ slug }: { slug: string }) {
    const icon = BRAND_ICONS[slug]
    if (!icon) return null
    const tooLight = luminance(icon.hex) > 0.85

    return (
        <div
            title={icon.title}
            className={cn(
                "flex h-14 w-14 items-center justify-center rounded-lg border transition-colors",
                // Fixed (not theme-reactive) dark chip — a couple of brand
                // colors (Sony, Unity) are pure white and need a dark
                // backdrop regardless of site theme, same reasoning as the
                // always-dark code blocks on the Button page.
                tooLight
                    ? "border-neutral-700 bg-neutral-900"
                    : "border-[var(--neutral100)] bg-[var(--neutral0)] hover:border-[var(--neutral200)]"
            )}
        >
            <svg viewBox="0 0 24 24" width={22} height={22} fill={`#${icon.hex}`} aria-label={icon.title}>
                <path d={icon.path} />
            </svg>
        </div>
    )
}

const iconsTab = (
    <div className="space-y-14">
        <div>
            <p className="max-w-2xl text-sm text-[var(--neutral600)]">
                We use <span className="font-semibold text-[var(--neutral900)]">Lucide</span> — a
                clean, consistent open-source icon set with over 1,500 icons.{" "}
                <a
                    href="https://lucide.dev/icons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-link)] hover:underline"
                >
                    Browse the full set at lucide.dev
                </a>
                .
            </p>
        </div>

        <div>
            <h3 className="text-base font-semibold text-[var(--neutral900)]">Used across Atlas</h3>
            <p className="mt-1 text-sm text-[var(--neutral500)]">
                Every icon this site itself currently imports from lucide-react.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-7">
                {USED_ICONS.map(({ name, Icon }) => (
                    <div
                        key={name}
                        className="flex flex-col items-center gap-2 rounded-lg border border-[var(--neutral100)] bg-[var(--neutral0)] py-4"
                    >
                        <Icon size={22} strokeWidth={1.75} className="text-[var(--neutral700)]" />
                        <span className="font-mono text-[11px] text-[var(--neutral400)]">{name}</span>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h3 className="text-base font-semibold text-[var(--neutral900)]">Customize</h3>
            <p className="mt-1 text-sm text-[var(--neutral500)]">
                Every Lucide icon takes a real <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">size</code> and{" "}
                <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">strokeWidth</code> prop — sized here with our own{" "}
                <a href="/foundations/sizing" className="text-[var(--text-link)] hover:underline">
                    size tokens
                </a>
                .
            </p>
            <div className="mt-4 flex flex-wrap items-end gap-8 rounded-xl border border-[var(--neutral100)] bg-[var(--neutral0)] p-8">
                {SIZE_STEPS.map((step) => (
                    <div key={step.label} className="flex flex-col items-center gap-2">
                        <Gauge size={parseInt(step.value, 10)} strokeWidth={1.75} className="text-[var(--neutral900)]" />
                        <span className="text-xs text-[var(--neutral400)]">{step.label}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex flex-wrap items-end gap-8 rounded-xl border border-[var(--neutral100)] bg-[var(--neutral0)] p-8">
                {STROKE_STEPS.map((width) => (
                    <div key={width} className="flex flex-col items-center gap-2">
                        <Gauge size={32} strokeWidth={width} className="text-[var(--neutral900)]" />
                        <span className="text-xs text-[var(--neutral400)]">strokeWidth {width}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

const logosTab = (
    <div>
        <p className="max-w-2xl text-sm text-[var(--neutral600)]">
            All product names, logos and brands mentioned on this site belong to their respective
            owners. Any mention of companies, products or services is for identification only and
            does not imply endorsement. Logos are rendered from{" "}
            <a
                href="https://simpleicons.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-link)] hover:underline"
            >
                Simple Icons
            </a>
            , an open-source SVG icon set.
        </p>

        <div className="mt-8 space-y-10">
            {LOGO_CATEGORIES.map((category) => (
                <div key={category.name}>
                    <h3 className="text-sm font-semibold text-[var(--neutral900)]">{category.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-3">
                        {category.slugs.map((slug) => (
                            <BrandLogo key={slug} slug={slug} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
)

const flagsTab = (
    <div>
        <p className="max-w-2xl text-sm text-[var(--neutral600)]">
            Flags for all {FLAGS.length} United Nations member states, drawn as crisp SVGs — not
            Unicode flag emoji, which render as bare two-letter codes on Windows/Chrome.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-3 sm:grid-cols-4 lg:grid-cols-6">
            {FLAGS.map((c) => (
                <div key={c.name} className="flex items-center gap-2">
                    <Image
                        src={`/flags-round/${c.code}.svg`}
                        alt=""
                        width={22}
                        height={22}
                        unoptimized
                        className="aspect-square shrink-0 border border-[var(--neutral100)] object-cover"
                        style={{ borderRadius: "var(--borderFull)" }}
                    />
                    <span className="truncate text-sm text-[var(--neutral700)]">{c.name}</span>
                </div>
            ))}
        </div>
    </div>
)

export default function FoundationsIconsPage() {
    return (
        <div className="text-[var(--neutral900)]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Foundations</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Icons, Logos &amp; Flags
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Our interface icon set, a reference library of brand logos, and every UN
                    member state flag — all in one place.
                </p>
            </div>

            <AssetTabs icons={iconsTab} logos={logosTab} flags={flagsTab} />
        </div>
    )
}
