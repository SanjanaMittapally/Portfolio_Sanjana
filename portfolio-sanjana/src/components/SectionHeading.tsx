import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", align === "center" ? "text-center" : "text-left", className)}>
      {kicker ? (
        <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">{kicker}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">{title}</h2>
      {description ? <div className="max-w-2xl text-zinc-700 dark:text-zinc-300">{description}</div> : null}
    </div>
  );
}

