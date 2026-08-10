import { FoundationsSidebar } from "@/components/docs/foundations-sidebar"

export default function FoundationsLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-start gap-10 px-6 py-10 md:px-10">
            <aside className="sticky top-24 hidden w-56 shrink-0 md:block">
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wide text-[var(--neutral400)]">
                    Foundations
                </p>
                <FoundationsSidebar />
            </aside>
            <div className="min-w-0 flex-1">{children}</div>
        </div>
    )
}
