import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function PoweredByOpaque({ className }: { className?: string }) {
  return (
    <a
      href={site.opaqueUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Powered by Opaque (opens in a new tab)"
      className={cn(
        "inline-flex items-center gap-[7px] rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus",
        className,
      )}
    >
      <span className="t-caption text-faint">Powered by</span>
      <span className="inline-flex items-end gap-1">
        <span className="font-syne text-[19px] font-extrabold leading-none tracking-[-0.01em] text-ink">
          Opaque
        </span>
        <span className="mb-[3px] h-[7px] w-[7px] rounded-full bg-accent" />
      </span>
    </a>
  );
}
