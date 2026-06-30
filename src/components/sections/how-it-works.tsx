import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    n: "01",
    title: "Sign in in seconds",
    body: "Use Face ID, a passkey, or your Apple or Google account. No seed phrase, ever.",
  },
  {
    n: "02",
    title: "Claim your name",
    body: "Pick a Kivuli name that is yours. It is how friends pay you, instead of a long address.",
  },
  {
    n: "03",
    title: "Send and receive privately",
    body: "Add money, then pay or get paid in seconds. Private by default, Incognito whenever you want.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      bg="canvas"
      containerClassName="flex flex-col gap-16"
    >
      <SectionHeading
        eyebrow="How it works"
        title="Three steps. No paperwork."
        subtitle="From download to your first private payment in a couple of minutes."
      />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-10">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.07} className="flex flex-col gap-3">
            <span className="font-display text-[40px] font-semibold leading-none tracking-[-0.01em] text-accent-ink">
              {s.n}
            </span>
            <h3 className="t-title-s text-ink">{s.title}</h3>
            <p className="t-body-m text-muted">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
