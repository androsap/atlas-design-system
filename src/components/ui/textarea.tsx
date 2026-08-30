import { cn } from "@/lib/utils"
import { forwardRef, TextareaHTMLAttributes, useId } from "react"
import { type LucideIcon } from "lucide-react"

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    helperText?: string
    error?: boolean
    /** Force the focused visual state, independent of real DOM focus. */
    focused?: boolean
    trailingIcon?: LucideIcon
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
    { label, helperText, error = false, focused = false, trailingIcon: TrailingIcon, className, id, disabled, readOnly, rows = 3, ...props },
    ref
) {
    const generatedId = useId()
    const textareaId = id ?? generatedId

    return (
        <div className="flex flex-col gap-1.5">
            {label && (
                <label htmlFor={textareaId} className="text-sm font-medium text-[var(--neutral900)]">
                    {label}
                    {error && <span className="ml-0.5 text-[var(--danger500)]">*</span>}
                </label>
            )}
            <div
                className={cn(
                    "flex items-start gap-2 rounded-[var(--radius-md)] border bg-[var(--neutral0)] px-3 py-2.5 transition-colors",
                    "has-[textarea:focus-visible]:border-[var(--primary600)] has-[textarea:focus-visible]:ring-1 has-[textarea:focus-visible]:ring-[var(--primary600)]",
                    focused && "border-[var(--primary600)] ring-1 ring-[var(--primary600)]",
                    error ? "border-[var(--danger500)]" : "border-[var(--neutral200)]",
                    disabled && "border-[var(--neutral100)] bg-[var(--neutral50)]",
                    readOnly && !disabled && "border-[var(--neutral100)] bg-[var(--neutral25)]"
                )}
            >
                <textarea
                    ref={ref}
                    id={textareaId}
                    disabled={disabled}
                    readOnly={readOnly}
                    rows={rows}
                    className={cn(
                        "min-w-0 flex-1 resize-none bg-transparent text-sm text-[var(--neutral900)] outline-none placeholder:text-[var(--neutral400)]",
                        disabled && "cursor-not-allowed text-[var(--neutral300)]",
                        className
                    )}
                    {...props}
                />
                {TrailingIcon && (
                    <TrailingIcon
                        size={16}
                        className={cn("mt-0.5 shrink-0", disabled ? "text-[var(--neutral300)]" : "text-[var(--neutral400)]")}
                        aria-hidden
                    />
                )}
            </div>
            {helperText && (
                <p className={cn("text-xs", error ? "text-[var(--danger500)]" : "text-[var(--neutral400)]")}>
                    {helperText}
                </p>
            )}
        </div>
    )
})
