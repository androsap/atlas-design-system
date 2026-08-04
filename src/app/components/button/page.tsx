import { DocsTabs } from "@/components/docs/docs-tabs"
import { Button } from "@/components/ui/button"

export default function ButtonPage() {
    return (
        <div className="max-w-3xl mx-auto py-10 px-6 text-[var(--neutral900)]">
            <p className="text-sm text-[var(--neutral500)] mb-2">Components / Button</p>
            <h1 className="text-2xl font-medium mb-8">Button</h1>
            <DocsTabs>
                <div className="space-y-4"><p>Button digunakan untuk memicu aksi utama pengguna dalam satu klik.</p></div>
                <div>Anatomy content di sini</div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="border border-[var(--color-border)] rounded-lg p-4 flex flex-col items-center gap-2"><Button variant="primary">Primary</Button></div>
                    <div className="border border-[var(--color-border)] rounded-lg p-4 flex flex-col items-center gap-2"><Button variant="secondary">Secondary</Button></div>
                    <div className="border border-[var(--color-border)] rounded-lg p-4 flex flex-col items-center gap-2"><Button variant="ghost">Ghost</Button></div>
                </div>
                <div>Usage guidelines content di sini</div>
                <div>Accessibility content di sini</div>
                <div className="border border-[var(--color-border)] rounded-lg p-8 flex items-center justify-center"><Button variant="primary">Click me</Button></div>
                <div>Code snippet + copy button di sini</div>
            </DocsTabs>
        </div>
    )
}