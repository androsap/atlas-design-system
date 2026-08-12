import Image from "next/image"

const ARTICLES = [
    {
        tag: "Grouping",
        title: "Gestalt principles",
        excerpt:
            "Our eyes group related elements before we consciously notice individual details. Proximity, similarity and closure let interfaces communicate structure without needing a border or label around every section.",
        image: "https://picsum.photos/seed/atlas-gestalt/800/500",
    },
    {
        tag: "Interaction",
        title: "Fitts's law",
        excerpt:
            "The time it takes to reach a target is a function of its size and distance from the cursor. Bigger, closer targets are faster to hit — the reasoning behind large tap targets and keeping primary actions near the user's last action.",
        image: "https://picsum.photos/seed/atlas-fitts/800/500",
    },
    {
        tag: "Usability",
        title: "Nielsen's 10 usability heuristics",
        excerpt:
            "A set of broad rules of thumb — visibility of system status, user control and freedom, consistency, error prevention — that has guided interface design since 1994 and still holds up today.",
        image: "https://picsum.photos/seed/atlas-nielsen/800/500",
    },
    {
        tag: "Accessibility",
        title: "WCAG contrast ratios",
        excerpt:
            "Text needs a contrast ratio of at least 4.5:1 against its background (3:1 for large text) to meet WCAG AA — the baseline every Atlas color pairing is checked against before it ships.",
        image: "https://picsum.photos/seed/atlas-contrast/800/500",
    },
    {
        tag: "Layout",
        title: "The 8pt grid system",
        excerpt:
            "Basing spacing and sizing on multiples of 8px keeps layouts visually consistent across screen densities and makes handoff between design and code predictable.",
        image: "https://picsum.photos/seed/atlas-grid/800/500",
    },
    {
        tag: "Color",
        title: "Semantic color",
        excerpt:
            "Color should carry meaning, not just decoration — success, warning and danger tokens exist so state is recognizable at a glance, even before you read the label.",
        image: "https://picsum.photos/seed/atlas-color/800/500",
    },
]

export default function NewsPage() {
    const [featured, ...rest] = ARTICLES

    return (
        <div className="mx-auto w-full max-w-7xl px-6 py-10 text-[var(--neutral900)] md:px-10">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">News</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Notes on UI/UX
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Short write-ups on the design theory behind Atlas — the principles that shape
                    how components, spacing and color are decided.
                </p>
            </div>

            {/* Featured article */}
            <div className="relative mt-10 h-[440px] overflow-hidden rounded-2xl border border-[var(--neutral100)] md:h-[560px]">
                <Image
                    src={featured.image}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-4 flex w-[calc(100%-2rem)] max-w-sm flex-col justify-center rounded-2xl bg-[var(--neutral0)]/90 p-6 backdrop-blur-sm md:inset-y-8 md:right-8 md:left-auto md:p-8">
                    <p className="text-lg font-semibold text-[var(--neutral900)]" style={{ font: "var(--headingSm)" }}>
                        {featured.title}
                    </p>
                    <p className="mt-3 text-sm text-[var(--neutral500)]">{featured.excerpt}</p>
                    <span className="mt-4 inline-block w-fit rounded-full bg-[var(--secondary50)] px-2.5 py-1 text-xs font-medium text-[var(--secondary700)]">
                        {featured.tag}
                    </span>
                </div>
            </div>

            {/* Articles grid */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map(({ tag, title, image }) => (
                    <div
                        key={title}
                        className="overflow-hidden rounded-xl border border-[var(--neutral100)] bg-[var(--neutral0)]"
                    >
                        <div className="relative aspect-[16/10] w-full">
                            <Image
                                src={image}
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <span className="inline-block rounded-full bg-[var(--secondary50)] px-2.5 py-1 text-xs font-medium text-[var(--secondary700)]">
                                {tag}
                            </span>
                            <p className="mt-2 text-sm font-semibold text-[var(--neutral900)]">{title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
