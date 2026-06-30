import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const points = [
  {
    title: "Private by default",
    body: "Balances and payments are shielded from the very first tap.",
  },
  {
    title: "You hold your money",
    body: "Only you can move your funds. Kivuli never takes custody.",
  },
  {
    title: "No KYC, ever",
    body: "No documents, no selfies, no waiting on approval.",
  },
];

export function Security() {
  return (
    <Section id="security" bg="surface">
      <Reveal>
        <div className="grid grid-cols-1 gap-12 rounded-2xl border border-line-subtle bg-raised p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <div className="flex flex-col gap-4">
            <p className="t-overline text-accent-ink">Security &amp; privacy</p>
            <h2 className="font-display text-[26px] font-semibold leading-[1.18] tracking-[-0.01em] text-ink sm:text-[28px]">
              Private is the default, not a setting.
            </h2>
            <p className="t-body-l text-muted">
              Kivuli is built so privacy is not a switch you remember to flip. Your
              balance and your payments are yours alone, and staying private takes
              no extra thought.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            {points.map((p) => (
              <li key={p.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="t-label-l text-ink">{p.title}</span>
                  <span className="t-body-m text-muted">{p.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
