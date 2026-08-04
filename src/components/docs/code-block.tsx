import { codeToHtml } from "shiki"
import { CopyButton } from "@/components/docs/copy-button"

export async function CodeBlock({ code, lang = "tsx" }: { code: string; lang?: string }) {
    const html = await codeToHtml(code, { lang, theme: "github-dark" })

    return (
        <div className="group relative overflow-hidden rounded-xl border border-[var(--neutral100)] bg-[#0d1117]">
            <CopyButton
                code={code}
                className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
            />
            <div
                className="overflow-x-auto p-4 text-sm [&_pre]:bg-transparent! [&_pre]:p-0!"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    )
}
