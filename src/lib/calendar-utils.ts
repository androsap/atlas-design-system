const WEEKDAY_HEADERS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

export { WEEKDAY_HEADERS }

export function isSameDay(a: Date, b: Date): boolean {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export function isWeekend(date: Date): boolean {
    const day = date.getDay()
    return day === 0 || day === 6
}

export function addMonths(date: Date, amount: number): Date {
    return new Date(date.getFullYear(), date.getMonth() + amount, 1)
}

export function startOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1)
}

export function formatMonthLabel(date: Date): string {
    return `${MONTH_NAMES[date.getMonth()].slice(0, 3).toUpperCase()} ${date.getFullYear()}`
}

export function formatDateLabel(date: Date): string {
    return `${MONTH_NAMES[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`
}

/** A full 6-week (42-day) grid for the month containing `month`, starting on Sunday. */
export function getMonthGrid(month: Date): Date[] {
    const first = startOfMonth(month)
    const startOffset = first.getDay()
    const gridStart = new Date(first.getFullYear(), first.getMonth(), 1 - startOffset)
    return Array.from(
        { length: 42 },
        (_, i) => new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i)
    )
}
