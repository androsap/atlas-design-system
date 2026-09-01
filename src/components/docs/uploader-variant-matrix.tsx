import { Uploader } from "@/components/ui/uploader"

export function UploaderVariantMatrix() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
                <p className="mb-3 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                    Default
                </p>
                <Uploader />
            </div>
            <div>
                <p className="mb-3 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                    Active (dragging a file over it)
                </p>
                <Uploader forceActive />
            </div>
            <div>
                <p className="mb-3 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase">
                    Disabled
                </p>
                <Uploader disabled />
            </div>
        </div>
    )
}
