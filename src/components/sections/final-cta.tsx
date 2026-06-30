import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Mark } from "@/components/brand/mark";
import { TestFlightBadge } from "@/components/brand/testflight-badge";
import { ButtonLink } from "@/components/ui/button";

export function FinalCta() {
  return (
    <Section bg="canvas" containerClassName="py-24 md:py-32">
      <Reveal className="mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center">
        <Mark className="h-[88px] w-[88px]" />
        <h2 className="max-w-[16ch] font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-ink sm:text-[48px] lg:text-[56px]">
          Carry your money in the dark.
        </h2>
        <p className="t-body-l max-w-[520px] text-muted">
          Private by default. Yours from the first tap. Join the beta and see for
          yourself.
        </p>
        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <TestFlightBadge />
          <ButtonLink href="/#how-it-works" variant="secondary">
            See how it works
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
