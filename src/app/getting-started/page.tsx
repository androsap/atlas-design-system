import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CodeBlock } from "@/components/docs/code-block"
import { OnThisPageNav } from "@/components/docs/on-this-page-nav"

const STEPS = [
    { id: "prerequisites", label: "Prerequisites" },
    { id: "install-package", label: "Install the package" },
    { id: "setup-styles", label: "Setup styles & tokens" },
    { id: "use-in-code", label: "Use it in code" },
    { id: "ai-assistants", label: "AI assistants (llms.txt)" },
    { id: "next-steps", label: "Next steps" },
]

const INSTALL = `npm install github:androsap/atlas-design-system#semver:^0.2.0`

const INSTALL_RESULT = `// package.json — the dependency is still named @asyst/atlas
"dependencies": {
  "@asyst/atlas": "github:androsap/atlas-design-system#semver:^0.2.0"
}`

const GLOBALS_CSS = `/* app/globals.css */
@import "@asyst/atlas/tokens.css";
@import "tailwindcss";

/* Atlas components are styled with Tailwind classes —
   let Tailwind scan them so those classes get generated. */
@source "../node_modules/@asyst/atlas/dist";`

const USAGE_TSX = `import { Button } from "@asyst/atlas"
import { Plus } from "lucide-react"

export default function Page() {
    return (
        <Button color="brand" variant="primary" leadingIcon={Plus}>
            Get started
        </Button>
    )
}`

const DARK_MODE = `<html data-theme="dark">`

const TOKENS_TS = `import { primary500, size16 } from "@asyst/atlas/tokens"`

function Code({ children }: { children: React.ReactNode }) {
    return <code className="rounded bg-[var(--neutral100)] px-1.5 py-0.5 font-mono text-xs">{children}</code>
}

function StepCta({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-[var(--neutral200)] px-5 py-2.5 text-sm font-semibold text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)]"
        >
            {children}
            <ArrowRight size={16} />
        </Link>
    )
}

function Step({
    number,
    id,
    title,
    children,
}: {
    number: number
    id: string
    title: string
    children: React.ReactNode
}) {
    return (
        <div id={id} className="scroll-mt-24 border-t border-[var(--neutral100)] py-10 first:border-t-0 first:pt-0">
            <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold text-[var(--secondary600)]">
                    {String(number).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-semibold text-[var(--neutral900)]">{title}</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm text-[var(--neutral600)]">{children}</div>
        </div>
    )
}

export default function GettingStartedPage() {
    return (
        <div className="mx-auto w-full max-w-7xl px-6 py-10 text-[var(--neutral900)] md:pr-10 md:pl-[52px]">
            {/* Hero */}
            <div className="rounded-2xl border border-[var(--surface-accent-subtle-border)] bg-[var(--surface-accent-subtle)] px-8 py-12 md:px-12 md:py-16">
                <p className="text-sm font-medium text-[var(--text-accent-subtle-label)]">Getting started</p>
                <h1 className="mt-1 text-[var(--text-accent-subtle-title)]" style={{ font: "var(--displayMd)" }}>
                    Add Atlas to your project
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--text-accent-subtle-body)]" style={{ font: "var(--bodyLg)" }}>
                    Atlas ships as a single package, <Code>@asyst/atlas</Code>, installed straight from GitHub — every component,
                    the design tokens and the theme. This documentation site is built from that
                    exact package, so what you see here is what you install.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_200px]">
                <div className="min-w-0 pl-8 md:pl-12">
                    <Step number={1} id="prerequisites" title="Prerequisites">
                        <p>Make sure you already have a project with:</p>
                        <ul className="list-inside list-disc space-y-1">
                            <li>React 18 or newer</li>
                            <li>Tailwind CSS v4 configured</li>
                        </ul>
                        <p>
                            This site itself runs on Next.js <Code>16</Code>, React <Code>19</Code> and
                            Tailwind <Code>v4</Code>. Components that need the browser are marked{" "}
                            <Code>&quot;use client&quot;</Code>, so the package works in the Next.js App
                            Router out of the box.
                        </p>
                    </Step>

                    <Step number={2} id="install-package" title="Install the package">
                        <p>
                            Atlas is distributed from GitHub, not the npm registry. Each release
                            is a tagged build on the <Code>release</Code> branch, so npm can follow
                            semver ranges the same way it does for registry packages:
                        </p>
                        <CodeBlock code={INSTALL} lang="bash" />
                        <CodeBlock code={INSTALL_RESULT} lang="json" />
                        <p>
                            Use <Code>#v0.2.0</Code> to pin an exact version, or{" "}
                            <Code>#release</Code> for the latest build.
                        </p>
                        <p>
                            <Code>react</Code>, <Code>react-dom</Code> and <Code>tailwindcss</Code> are
                            peer dependencies — they come from your project. Everything else (Radix
                            primitives, lucide-react, clsx, tailwind-merge) is installed for you.
                        </p>
                    </Step>

                    <Step number={3} id="setup-styles" title="Setup styles & tokens">
                        <p>Import the Atlas tokens before Tailwind in your global stylesheet:</p>
                        <CodeBlock code={GLOBALS_CSS} lang="css" />
                        <p>
                            Every component reads colors and radii from these tokens as CSS
                            variables (e.g. <Code>var(--primary500)</Code>). Adjust the{" "}
                            <Code>@source</Code> path so it points at <Code>node_modules</Code> from
                            your CSS file. For dark mode, set the theme attribute on the root element:
                        </p>
                        <CodeBlock code={DARK_MODE} lang="tsx" />
                        <p>Need token values in JavaScript? They&apos;re exported too:</p>
                        <CodeBlock code={TOKENS_TS} lang="tsx" />
                        <StepCta href="/foundations">Explore foundations</StepCta>
                    </Step>

                    <Step number={4} id="use-in-code" title="Use it in code">
                        <p>Import any component from the package root:</p>
                        <CodeBlock code={USAGE_TSX} lang="tsx" />
                        <StepCta href="/components">Browse components</StepCta>
                    </Step>

                    <Step number={5} id="ai-assistants" title="AI assistants (llms.txt)">
                        <p>
                            Every release includes an auto-generated <Code>llms.txt</Code> — each
                            component&apos;s props, valid values, defaults and a one-line example,
                            read straight from the TypeScript types. Point your coding assistant at{" "}
                            <a href="/llms.txt" className="text-[var(--text-link)] hover:underline">
                                /llms.txt
                            </a>{" "}
                            or at <Code>node_modules/@asyst/atlas/dist/llms.txt</Code>.
                        </p>
                    </Step>

                    <Step number={6} id="next-steps" title="Next steps">
                        <p>From here:</p>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/foundations" className="text-[var(--text-link)] hover:underline">
                                    Foundations
                                </Link>{" "}
                                — color, typography and the rest of the token system every
                                component is built from.
                            </li>
                            <li>
                                <Link href="/components" className="text-[var(--text-link)] hover:underline">
                                    Components
                                </Link>{" "}
                                — every component with live playgrounds and props.
                            </li>
                            <li>
                                <Link href="/changelog" className="text-[var(--text-link)] hover:underline">
                                    Changelog
                                </Link>{" "}
                                — what changed in each release.
                            </li>
                        </ul>
                    </Step>
                </div>

                {/* On this page */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--neutral400)]">
                            On this page
                        </p>
                        <OnThisPageNav items={STEPS} />
                    </div>
                </aside>
            </div>
        </div>
    )
}
