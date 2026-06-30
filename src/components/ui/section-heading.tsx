import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto flex max-w-[760px] flex-col items-center text-center",
        className,
      )}
    >
      <p className="t-overline text-accent-ink">{eyebrow}</p>
      <h2 className="mt-3 font-display text-[28px] font-semibold leading-[1.12] tracking-[-0.015em] text-ink sm:text-[34px] lg:text-[40px] lg:leading-[1.1]">
        {title}
      </h2>
      {subtitle ? (
        <p className="t-body-l mt-4 max-w-[600px] text-muted">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
