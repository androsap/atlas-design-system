const CHANGELOG = [
    {
        date: "2026-08-17",
        display: "August 17, 2026",
        title: "Getting started guide, anchor navigation",
        items: [
            "Added a copy-paste \"Getting started\" guide with real install, token and component code.",
            "Added scroll-spy \"On this page\" navigation to Getting started, Color and Typography, with hover and active states.",
            "Fixed missing hover states on the Button and Typography doc tabs.",
            "Retired the News section from the site.",
        ],
    },
    {
        date: "2026-08-15",
        display: "August 15, 2026",
        title: "Typography foundations, deeper color reference",
        items: [
            "Shipped the Typography foundations page with Inter and Manrope specimens and the full type scale.",
            "Expanded the Color foundations page with semantic background, typography, border and icon token tables.",
            "Added the Back to top button.",
        ],
    },
    {
        date: "2026-08-12",
        display: "August 12, 2026",
        title: "Components overview, News, scroll indicator",
        items: [
            "Added the Components overview grid and the Color foundations palette page.",
            "Added the News section with article imagery.",
            "Added a scroll-position indicator to the homepage.",
        ],
    },
    {
        date: "2026-08-11",
        display: "August 11, 2026",
        title: "Homepage redesign",
        items: [
            "Rebuilt the homepage with design-principle illustrations and an animated globe background.",
        ],
    },
    {
        date: "2026-08-10",
        display: "August 10, 2026",
        title: "Foundations overview, navigation",
        items: [
            "Added the Foundations overview page and its sidebar.",
            "Reworked header and footer navigation, and homepage scroll-snap behavior.",
        ],
    },
    {
        date: "2026-08-05",
        display: "August 5, 2026",
        title: "Dark theme, homepage motion",
        items: [
            "Added the light and dark theme toggle.",
            "Added the animated hero cursor decoration and scroll-snap sections.",
        ],
    },
    {
        date: "2026-08-04",
        display: "August 4, 2026",
        title: "Button component, docs shell",
        items: [
            "Built out the Button component docs — Playground and Code tabs, copy-to-clipboard code blocks.",
            "Wired up header, footer and theme toggle ahead of the first deploy.",
        ],
    },
    {
        date: "2026-08-03",
        display: "August 3, 2026",
        title: "Initial project",
        items: [
            "Set up Next.js, Tailwind CSS v4 and the Style Dictionary token pipeline.",
            "Shipped the first version of the Button component.",
        ],
    },
]

export default function ChangelogPage() {
    return (
        <div className="mx-auto w-full max-w-7xl px-6 py-10 text-[var(--neutral900)] md:pr-10 md:pl-[52px]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Changelog</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    What&apos;s new in Atlas
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    A running log of what shipped across the design system — pages, components
                    and foundations alike.
                </p>
            </div>

            <div className="mt-4 max-w-3xl divide-y divide-[var(--neutral100)]">
                {CHANGELOG.map((entry) => (
                    <div
                        key={entry.date}
                        className="grid grid-cols-1 gap-3 py-10 first:pt-10 sm:grid-cols-[140px_1fr] sm:gap-8"
                    >
                        <p className="text-sm font-medium text-[var(--neutral400)]">{entry.display}</p>
                        <div>
                            <h2 className="text-lg font-semibold text-[var(--neutral900)]">{entry.title}</h2>
                            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[var(--neutral600)]">
                                {entry.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
