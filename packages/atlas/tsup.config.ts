import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { defineConfig } from "tsup"

export default defineConfig({
    // One output file per source file (bundle: false) so each component keeps
    // its own "use client" directive. Server-safe components (Button, Badge,
    // Input, ...) stay usable from React Server Components, and only the
    // interactive ones become client boundaries.
    entry: ["src/**/*.{ts,tsx}"],
    bundle: false,
    format: ["esm"],
    target: "es2020",
    outDir: "dist",
    clean: true,
    sourcemap: true,
    // .d.ts is bundled per public entry point.
    dts: {
        entry: {
            index: "src/index.ts",
            tokens: "src/tokens.ts",
        },
    },
    async onSuccess() {
        // dist/tokens.css = generated primitives (style-dictionary) + semantic
        // tokens & dark theme. This is the file consumers import as
        // "@asyst/atlas/tokens.css".
        mkdirSync("dist", { recursive: true })
        const primitives = readFileSync("src/styles/tokens.css", "utf8")
        const theme = readFileSync("src/styles/theme.css", "utf8")
        writeFileSync("dist/tokens.css", `${primitives.trimEnd()}\n\n${theme}`)
    },
})
