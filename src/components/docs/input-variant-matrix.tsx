import { Fragment } from "react"
import { Settings } from "lucide-react"
import { Input, type InputSize } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type StateRow = {
    label: string
    error?: boolean
    disabled?: boolean
    readOnly?: boolean
    focused?: boolean
    value?: string
}

const STATE_ROWS: StateRow[] = [
    { label: "Default Empty" },
    { label: "Focused State", focused: true },
    { label: "Error Validation", error: true },
    { label: "Filled Entry", value: "Entered value" },
    { label: "Disabled State", disabled: true },
    { label: "Read-Only Field", readOnly: true, value: "Read-only value" },
]

const SIZES: { key: InputSize; label: string }[] = [
    { key: "lg", label: "Large" },
    { key: "md", label: "Medium" },
    { key: "sm", label: "Small" },
]

export function InputFormStatesMatrix() {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
            {STATE_ROWS.map((row) => (
                <Fragment key={row.label}>
                    {SIZES.map((size) => (
                        <Input
                            key={`${row.label}-${size.key}`}
                            label={`${row.label} - ${size.label}`}
                            placeholder="Placeholder text"
                            helperText="Helper Text"
                            size={size.key}
                            error={row.error}
                            disabled={row.disabled}
                            readOnly={row.readOnly}
                            focused={row.focused}
                            defaultValue={row.value}
                            leadingIcon={Settings}
                            trailingIcon={Settings}
                        />
                    ))}
                </Fragment>
            ))}
        </div>
    )
}

export function TextareaStatesMatrix() {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
            {STATE_ROWS.map((row) => (
                <Textarea
                    key={row.label}
                    label={`${row.label} - Textarea`}
                    placeholder="Placeholder text"
                    helperText="Helper Text"
                    error={row.error}
                    disabled={row.disabled}
                    readOnly={row.readOnly}
                    focused={row.focused}
                    defaultValue={row.value}
                    trailingIcon={Settings}
                />
            ))}
        </div>
    )
}
