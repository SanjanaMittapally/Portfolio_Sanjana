import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300",
        className,
      )}
    >
      {children}
    </span>
  );
}

