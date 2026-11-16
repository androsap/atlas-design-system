#!/usr/bin/env node
/**
 * Generates dist/llms.txt — a compact, LLM-friendly reference of every
 * component exported from src/index.ts: name, props, valid values, defaults
 * and a one-line example.
 *
 * Everything is read from the real TypeScript types (via the compiler API),
 * so the file can never drift from the code. Runs as part of `npm run build`.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"
import ts from "typescript"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const srcDir = join(root, "src") + sep
const entry = join(root, "src", "index.ts")
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"))

/**
 * Hand-written examples for compound components whose usage can't be
 * derived from a single props type. Everything else is generated.
 */
const EXAMPLE_OVERRIDES = {
    Breadcrumbs: `<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Settings" }]} />`,
    Tooltip: `<TooltipProvider><Tooltip><TooltipTrigger asChild><Button>Hover</Button></TooltipTrigger><TooltipContent>Hint</TooltipContent></Tooltip></TooltipProvider>`,
    TooltipProvider: `<TooltipProvider delayDuration={200}>{app}</TooltipProvider>`,
    TooltipTrigger: `<TooltipTrigger asChild><Button>Hover</Button></TooltipTrigger>`,
    DropdownMenu: `<DropdownMenu><DropdownMenuTrigger asChild><Button>Open</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Edit</DropdownMenuItem></DropdownMenuContent></DropdownMenu>`,
    DropdownMenuTrigger: `<DropdownMenuTrigger asChild><Button>Open</Button></DropdownMenuTrigger>`,
    Toaster: `<Toaster><App /></Toaster>  // then: const toast = useToast(); toast({ title: "Saved", color: "success" })`,
}

/** Components that accept `children` via inherited HTML attributes but render none. */
const NO_CHILDREN = new Set(["Input", "Textarea", "DropdownMenuSeparator"])

/** Non-component exports worth documenting in a short "Utilities" section. */
const UTILITIES = {
    cn: "cn(...classes) — merge class names (clsx + tailwind-merge).",
    buttonClasses: `buttonClasses({ color, variant, size }) — Button's class string, for styling links as buttons.`,
    useToast: `useToast() — returns toast(options: ToastOptions); call inside <Toaster>.`,
}

// ---------------------------------------------------------------------------

const program = ts.createProgram([entry], {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    jsx: ts.JsxEmit.ReactJSX,
    strict: true,
    skipLibCheck: true,
    esModuleInterop: true,
})
const checker = program.getTypeChecker()
const indexFile = program.getSourceFile(entry)
if (!indexFile) throw new Error(`Cannot read ${entry}`)

const moduleSymbol = checker.getSymbolAtLocation(indexFile)
const exportsList = checker.getExportsOfModule(moduleSymbol)

const isOwnFile = (fileName) => resolve(fileName).startsWith(srcDir)
const isComponentName = (name) => /^[A-Z][a-z]/.test(name)

function resolveAlias(symbol) {
    return symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol
}

function firstLine(text) {
    return text.replace(/\s+/g, " ").trim().split(/(?<=\.)\s/)[0] ?? ""
}

function docOf(symbol) {
    return firstLine(ts.displayPartsToString(symbol.getDocumentationComment(checker)))
}

/** Props type of a component = type of the first parameter of its call signature. */
function propsTypeOf(symbol) {
    const decl = symbol.valueDeclaration ?? symbol.declarations?.[0]
    if (!decl) return undefined
    const type = checker.getTypeOfSymbolAtLocation(symbol, decl)
    const sig = type.getCallSignatures()[0]
    const param = sig?.getParameters()[0]
    if (!param) return undefined
    return checker.getTypeOfSymbolAtLocation(param, decl)
}

/** Default values from `function X({ a = 1 })` or `forwardRef(function X({ a = 1 }, ref))`. */
function defaultsOf(symbol) {
    const defaults = {}
    const decl = symbol.valueDeclaration
    if (!decl) return defaults
    let fn
    const visit = (node) => {
        if (fn) return
        if (ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isArrowFunction(node)) {
            fn = node
            return
        }
        ts.forEachChild(node, visit)
    }
    visit(decl)
    const pattern = fn?.parameters[0]?.name
    if (pattern && ts.isObjectBindingPattern(pattern)) {
        for (const el of pattern.elements) {
            if (!el.initializer) continue
            const key = (el.propertyName ?? el.name).getText()
            defaults[key] = el.initializer.getText()
        }
    }
    return defaults
}

/** Literal values of a union like "sm" | "md" | "lg" (ignoring undefined). */
function literalValues(type) {
    const parts = type.isUnion() ? type.types : [type]
    const values = []
    for (const t of parts) {
        if (t.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)) continue
        if (t.isStringLiteral()) values.push(JSON.stringify(t.value))
        else if (t.isNumberLiteral()) values.push(String(t.value))
        else if (t.flags & ts.TypeFlags.BooleanLiteral) values.push(checker.typeToString(t))
        else return undefined
    }
    if (values.length === 2 && values.includes("true") && values.includes("false")) return undefined
    return values.length ? values : undefined
}

/**
 * Literal values in source order, following type aliases:
 * `color?: ButtonColor` → ButtonColor = "brand" | "neutral" | ... → ["brand", "neutral", ...].
 */
function literalsFromTypeNode(node, depth = 0) {
    if (!node || depth > 5) return undefined
    if (ts.isParenthesizedTypeNode(node)) return literalsFromTypeNode(node.type, depth + 1)
    if (ts.isLiteralTypeNode(node)) return [node.literal.getText()]
    if (ts.isUnionTypeNode(node)) {
        const out = []
        for (const t of node.types) {
            if (t.kind === ts.SyntaxKind.UndefinedKeyword) continue
            const v = literalsFromTypeNode(t, depth + 1)
            if (!v) return undefined
            out.push(...v)
        }
        return out
    }
    if (ts.isTypeReferenceNode(node)) {
        const sym = resolveAlias(checker.getSymbolAtLocation(node.typeName) ?? {})
        const aliasDecl = sym?.declarations?.find(ts.isTypeAliasDeclaration)
        return aliasDecl ? literalsFromTypeNode(aliasDecl.type, depth + 1) : undefined
    }
    return undefined
}

function typeLabel(propSymbol, decl) {
    const type = checker.getNonNullableType(checker.getTypeOfSymbolAtLocation(propSymbol, decl))
    const typeNode = propSymbol.declarations?.[0]?.type
    const values = literalsFromTypeNode(typeNode)?.map((v) => v.replace(/^'(.*)'$/, '"$1"')) ?? literalValues(type)
    if (values) return { label: values.join(" | "), values, type }
    // Prefer the type as written (ReactNode, LucideIcon, BreadcrumbItem[]) over its expansion.
    let label = typeNode ? typeNode.getText().replace(/\s+/g, " ") : checker.typeToString(type, undefined, ts.TypeFormatFlags.NoTruncation)
    if (/ForwardRefExoticComponent<.*LucideProps/.test(label) || label === "LucideIcon") label = "LucideIcon"
    if (label.length > 80) label = label.slice(0, 77) + "..."
    return { label, type }
}

/** Where inherited (non-Atlas) props come from, e.g. "<button> HTML attributes". */
function inheritedSummary(props) {
    const sources = new Set()
    for (const p of props) {
        const file = p.declarations?.[0]?.getSourceFile().fileName ?? ""
        if (file.includes("@radix-ui")) sources.add("Radix primitive props")
        else if (file.includes("@types/react")) sources.add("native HTML/React attributes")
    }
    return [...sources]
}

function exampleValue(name, info) {
    if (info.values) return info.values[0].startsWith('"') ? `${name}=${info.values[0]}` : `${name}={${info.values[0]}}`
    const t = info.label
    if (t === "string") return `${name}="${name === "label" ? "Label" : "..."}"`
    if (t === "number") return `${name}={0}`
    if (t === "boolean") return name
    if (t === "Date") return `${name}={new Date()}`
    if (t.endsWith("[]")) return `${name}={[]}`
    if (t.includes("=>")) return `${name}={() => {}}`
    if (t === "LucideIcon") return `${name}={Icon}`
    return `${name}={...}`
}

function buildExample(name, own, hasChildren) {
    if (EXAMPLE_OVERRIDES[name]) return EXAMPLE_OVERRIDES[name]
    const attrs = []
    for (const p of own) if (!p.optional && p.name !== "children") attrs.push(exampleValue(p.name, p.info))
    // Show up to two variant-like props with a non-default value so the example teaches something.
    for (const p of own) {
        if (attrs.length >= 4) break
        if (!p.optional || !p.info.values || p.info.values.length < 2) continue
        const pick = p.info.values.find((v) => v !== p.default) ?? p.info.values[0]
        attrs.push(pick.startsWith('"') ? `${p.name}=${pick}` : `${p.name}={${pick}}`)
        if (attrs.filter((a) => /=/.test(a)).length >= 2 + own.filter((x) => !x.optional).length) break
    }
    // Form controls take their visible text through `label`, not children.
    const hasLabelProp = own.some((p) => p.name === "label" && p.info.label === "string")
    if (hasLabelProp && !attrs.some((a) => a.startsWith("label="))) attrs.unshift(`label="Label"`)
    const open = [name, ...attrs].join(" ")
    const takesChildren = hasChildren && !hasLabelProp && !NO_CHILDREN.has(name)
    return takesChildren ? `<${open}>${name === "TooltipContent" ? "Hint" : "Label"}</${name}>` : `<${open} />`
}

// ---------------------------------------------------------------------------

const components = []
const utilities = []

for (const exp of exportsList) {
    const name = exp.getName()
    const symbol = resolveAlias(exp)
    if (!(symbol.flags & ts.SymbolFlags.Value)) continue
    if (UTILITIES[name]) {
        utilities.push(UTILITIES[name])
        continue
    }
    if (!isComponentName(name)) continue

    const propsType = propsTypeOf(symbol)
    if (!propsType) continue
    const decl = symbol.valueDeclaration ?? symbol.declarations[0]
    const allProps = checker.getPropertiesOfType(propsType)
    const defaults = defaultsOf(symbol)

    const own = []
    const inherited = []
    for (const p of allProps) {
        const pDecl = p.declarations?.[0]
        if (pDecl && isOwnFile(pDecl.getSourceFile().fileName)) {
            own.push({
                name: p.getName(),
                optional: !!(p.flags & ts.SymbolFlags.Optional),
                info: typeLabel(p, decl),
                default: defaults[p.getName()],
                doc: docOf(p),
            })
        } else {
            inherited.push(p)
        }
    }

    const hasChildren = allProps.some((p) => p.getName() === "children")
    components.push({
        name,
        doc: docOf(symbol),
        own,
        inherited: inheritedSummary(inherited),
        example: buildExample(name, own, hasChildren),
    })
}

components.sort((a, b) => a.name.localeCompare(b.name))

// ---------------------------------------------------------------------------

const out = []
out.push(`# ${pkg.name}`)
out.push("")
out.push(`> ${pkg.description} Version ${pkg.version}. React + Tailwind CSS v4 components styled with Atlas design tokens (CSS variables).`)
out.push("")
out.push("## Setup")
out.push("")
// Installed from GitHub (release branch + semver tags), not from the npm registry.
const repo = pkg.repository?.url?.match(/github\.com[/:]([^/]+\/[^/.]+)/)?.[1]
const installCmd = repo ? `npm install github:${repo}#semver:^${pkg.version}` : `npm install ${pkg.name}`
out.push(`- Install: \`${installCmd}\` (peer deps: react, react-dom, tailwindcss v4). Import name stays \`${pkg.name}\`.`)
out.push(`- CSS (before Tailwind): \`@import "${pkg.name}/tokens.css";\` then \`@import "tailwindcss";\``)
out.push(`- Let Tailwind scan the components: \`@source "../node_modules/${pkg.name}/dist";\``)
out.push(`- Import: \`import { Button } from "${pkg.name}"\``)
out.push(`- Dark mode: set \`data-theme="dark"\` on <html>.`)
out.push(`- Icon props take a lucide-react component, e.g. \`leadingIcon={Plus}\`.`)
out.push("")
out.push("## Components")

for (const c of components) {
    out.push("")
    out.push(`### ${c.name}`)
    if (c.doc) out.push(c.doc)
    if (c.own.length) {
        out.push("Props:")
        for (const p of c.own) {
            let line = `- ${p.name}${p.optional ? "?" : ""}: ${p.info.label}`
            if (p.default !== undefined) line += ` (default ${p.default})`
            if (p.doc) line += ` — ${p.doc}`
            out.push(line)
        }
    }
    if (c.inherited.length) out.push(`Also accepts: ${c.inherited.join(", ")}.`)
    out.push(`Example: \`${c.example}\``)
}

if (utilities.length) {
    out.push("")
    out.push("## Utilities")
    out.push("")
    for (const u of utilities) out.push(`- ${u}`)
}
out.push("")

const text = out.join("\n")
mkdirSync(join(root, "dist"), { recursive: true })
writeFileSync(join(root, "dist", "llms.txt"), text)
console.log(`llms.txt: ${components.length} components → dist/llms.txt`)
