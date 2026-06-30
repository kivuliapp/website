import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

const quotes = [
  {
    quote:
      "I finally stopped explaining wallets to my friends. They just send to my name and it works.",
    initial: "M",
    name: "Maya R.",
    role: "Designer",
  },
  {
    quote:
      "It feels like cash again. Quick, private, and nobody is watching over my shoulder.",
    initial: "D",
    name: "Daniel O.",
    role: "Freelancer",
  },
  {
    quote:
      "No seed phrase to lose at 2am. Face ID and I am in. That alone sold me.",
    initial: "P",
    name: "Priya S.",
    role: "Student",
  },
];

export function Testimonials() {
  return (
    <Section bg="canvas" containerClassName="flex flex-col gap-14">
      <SectionHeading eyebrow="Early users" title="Quietly, people are switching." />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.07}>
            <Card className="flex h-full flex-col gap-6">
              <p className="t-body-l text-ink">&ldquo;{q.quote}&rdquo;</p>
              <div className="mt-auto flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-subtle text-[16px] font-semibold text-accent-ink">
                  {q.initial}
                </span>
                <span className="flex flex-col">
                  <span className="t-label-m text-ink">{q.name}</span>
                  <span className="t-caption text-faint">{q.role}</span>
                </span>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
