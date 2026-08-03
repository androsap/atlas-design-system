import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-16 py-32 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Atlas Design System</h1>
      <p className="max-w-md text-zinc-500">
        Documentation and component library for the Atlas Design System.
      </p>
      <Link
        href="/components/button"
        className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Browse components
      </Link>
    </div>
  );
}
