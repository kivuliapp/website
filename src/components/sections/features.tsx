import { ShieldCheck, Globe, AtSign, EyeOff, ScanFace, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, IconTile } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

type Feature = { icon: LucideIcon; title: string; body: string };

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Off the public ledger",
    body: "Your balance and payments never get posted to a public chain, so there is no trail for anyone to follow or trace back to you.",
  },
  {
    icon: Globe,
    title: "One balance, every network",
    body: "Your money lives in one place and moves across networks on its own. You just see a single balance.",
  },
  {
    icon: AtSign,
    title: "Send to a name",
    body: "Pay anyone by their Kivuli name. No long addresses to copy, check, and second-guess.",
  },
  {
    icon: EyeOff,
    title: "Incognito when it matters",
    body: "Turn on Incognito to send and receive with no trace, for the moments that are nobody else's business.",
  },
  {
    icon: ScanFace,
    title: "Face ID, no seed phrase",
    body: "Sign in with your face or a passkey. No twelve words to write down, lose, or have stolen.",
  },
  {
    icon: Zap,
    title: "Instant and free",
    body: "Payments land in seconds with no fees to think about. It feels like cash, not a bank transfer.",
  },
];

export function Features() {
  return (
    <Section id="features" bg="surface" containerClassName="flex flex-col gap-14">
      <SectionHeading
        eyebrow="Features"
        title="Built to keep your money quiet."
        subtitle="Everything Kivuli does serves one idea. Your money is yours, and no one else needs to know."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={(i % 3) * 0.07}>
            <Card hover className="flex h-full flex-col gap-4">
              <IconTile>
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
              </IconTile>
              <h3 className="t-title-s text-ink">{title}</h3>
              <p className="t-body-m text-muted">{body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
