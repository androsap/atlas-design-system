import { ComponentsSidebar } from "@/components/docs/components-sidebar"

export default function ComponentsLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-start gap-10 px-6 py-10 md:pr-10 md:pl-[52px]">
            <aside className="sticky top-24 hidden w-56 shrink-0 md:block">
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wide text-[var(--neutral400)]">
                    Components
                </p>
                <ComponentsSidebar />
            </aside>
            <div className="min-w-0 flex-1">{children}</div>
        </div>
    )
}
