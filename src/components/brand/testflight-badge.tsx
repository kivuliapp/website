import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { AppleIcon } from "./apple-icon";

export function TestFlightBadge({ className }: { className?: string }) {
  return (
    <a
      href={site.testflightUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Kivuli on TestFlight (opens in a new tab)"
      className={cn(
        "inline-flex items-center gap-[10px] rounded-md bg-inverse py-2.5 pl-4 pr-5 transition-transform duration-[160ms] ease-[var(--ease-standard)] hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      <AppleIcon className="h-[22px] w-[22px] text-inverse-ink" />
      <span className="flex flex-col leading-none">
        <span className="text-[11px] text-inverse-ink/85">Get it on</span>
        <span className="font-sans text-[18px] font-semibold tracking-[-0.01em] text-inverse-ink">
          TestFlight
        </span>
      </span>
    </a>
  );
}
