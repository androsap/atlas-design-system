import { cn } from "@/lib/utils"

const CURSORS = [
    {
        label: "Developer",
        color: "var(--primary500)",
        textColor: "white",
        position: "left-[50%] top-[0%]",
        rotateDeg: 230,
        direction: "col-reverse",
        delay: "0s",
    },
    {
        label: "Designer",
        color: "var(--warning500)",
        textColor: "var(--neutral900)",
        position: "left-[73%] top-[100%]",
        rotateDeg: 10,
        direction: "col",
        delay: "0.6s",
    },
    {
        label: "Asyst",
        color: "var(--info500)",
        textColor: "white",
        position: "left-[80%] top-[46%]",
        rotateDeg: -65,
        direction: "row",
        delay: "1.2s",
    },
] as const

type Direction = "col" | "col-reverse" | "row" | "row-reverse"

const DIRECTION_CLASSES: Record<Direction, string> = {
    col: "flex-col items-start",
    "col-reverse": "flex-col-reverse items-start",
    row: "flex-row items-center",
    "row-reverse": "flex-row-reverse items-center",
}

function Cursor({
    label,
    color,
    textColor,
    position,
    rotateDeg,
    direction,
    delay,
}: {
    label: string
    color: string
    textColor: string
    position: string
    rotateDeg: number
    direction: Direction
    delay: string
}) {
    return (
        <div className={cn("pointer-events-none absolute -translate-x-1/2 -translate-y-1/2", position)}>
            <div
                className={cn("flex animate-float gap-1", DIRECTION_CLASSES[direction])}
                style={{ animationDelay: delay }}
            >
                <svg
                    width="26"
                    height="26"
                    viewBox="0 0 16 16"
                    fill={color}
                    className="drop-shadow-md"
                    style={{ transform: `rotate(${rotateDeg}deg)` }}
                >
                    <path d="M0 0L16 6L6.5 8L0 16V0Z" />
                </svg>
                <span
                    className="whitespace-nowrap rounded-full px-4 py-2 text-base font-semibold shadow-md"
                    style={{ background: color, color: textColor }}
                >
                    {label}
                </span>
            </div>
        </div>
    )
}

export function HeroCursors() {
    return (
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
            {CURSORS.map((cursor) => (
                <Cursor key={cursor.label} {...cursor} />
            ))}
        </div>
    )
}
