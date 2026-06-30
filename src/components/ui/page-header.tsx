import { Reveal } from "./reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-canvas px-6 lg:px-12">
      <Reveal className="mx-auto flex max-w-[820px] flex-col items-center gap-5 pb-12 pt-28 text-center md:pb-14 md:pt-32">
        <p className="t-overline text-accent-ink">{eyebrow}</p>
        <h1 className="max-w-[20ch] font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[44px]">
          {title}
        </h1>
        {intro ? (
          <p className="t-body-l max-w-[660px] text-muted">{intro}</p>
        ) : null}
      </Reveal>
    </section>
  );
}
