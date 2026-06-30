import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PoweredByOpaque } from "@/components/brand/powered-by-opaque";

export function OpaqueBand() {
  return (
    <Section bg="sunken" containerClassName="py-20 md:py-20">
      <Reveal className="mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center">
        <h2 className="t-title-m text-ink">
          Privacy you can verify, not just trust.
        </h2>
        <p className="t-body-m max-w-[600px] text-muted">
          Kivuli is built on Opaque, an open protocol for private money. The
          technology is auditable, so our privacy is something you can check, not
          just take our word for.
        </p>
        <div className="pt-2">
          <PoweredByOpaque />
        </div>
      </Reveal>
    </Section>
  );
}
