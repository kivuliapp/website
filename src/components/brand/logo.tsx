import Link from "next/link";
import { cn } from "@/lib/utils";
import { Mark } from "./mark";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Kivuli, home"
      className={cn(
        "inline-flex items-center gap-[9px] rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus",
        className,
      )}
    >
      <Mark className="h-[30px] w-[30px]" />
      <span className="font-display text-[22px] font-semibold leading-none tracking-[-0.02em] text-ink">
        Kivuli
      </span>
    </Link>
  );
}
