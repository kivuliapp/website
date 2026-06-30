import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  hover = false,
}: {
  className?: string;
  children: ReactNode;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-line-subtle bg-raised p-6 sm:p-7",
        hover &&
          "transition-[transform,border-color] duration-[160ms] ease-[var(--ease-standard)] hover:-translate-y-[3px] hover:border-line-strong motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconTile({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent-subtle text-accent",
        className,
      )}
    >
      {children}
    </div>
  );
}
