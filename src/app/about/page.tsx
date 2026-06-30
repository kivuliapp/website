import type { Metadata } from "next";
import { ShieldCheck, Sparkles, Handshake } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { IconTile } from "@/components/ui/card";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Money was private by default until it went digital. Kivuli is putting that back, with privacy as the foundation, not a feature.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Privacy",
    body: "We protect what is yours by default, never only on request. The quiet option is the standard one.",
  },
  {
    icon: Sparkles,
    title: "Simplicity",
    body: "Money should feel obvious. No jargon, no setup rituals, no twelve words to guard with your life.",
  },
  {
    icon: Handshake,
    title: "Trust",
    body: "You hold your money and you can check our claims. We earn trust by making it unnecessary.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our mission"
        title="Money should be private. So we are building it that way."
        intro="Kivuli started with a simple discomfort. Everything we buy, send, and save has quietly become someone else's data. We think your money should be yours alone, and using it should feel calm, not exposed."
      />

      <Section bg="surface">
        <Reveal className="mx-auto flex max-w-[760px] flex-col gap-5">
          <h2 className="font-display text-[24px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[28px]">
            For most of history, cash was private by default.
          </h2>
          <p className="t-body-l text-muted">
            You never announced a coffee, a gift, or a quiet loan to a friend. Then
            money went digital, and without anyone deciding it should, that privacy
            slipped away. Every payment became a record, every record a profile.
          </p>
          <p className="t-body-l text-muted">
            Kivuli puts it back. Your balance is yours to see. Your payments are
            yours to make. There is no ledger of your life to sell on, and no one
            looking over your shoulder. Privacy is not a feature here. It is the
            foundation.
          </p>
        </Reveal>
      </Section>

      <Section bg="canvas" containerClassName="flex flex-col gap-12">
        <Reveal>
          <p className="t-overline text-center text-accent-ink">What we value</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.07} className="flex flex-col gap-4">
              <IconTile>
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
              </IconTile>
              <h3 className="t-title-s text-ink">{title}</h3>
              <p className="t-body-m text-muted">{body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
