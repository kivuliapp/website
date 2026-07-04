"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { duration, ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is Kivuli a crypto wallet?",
    a: "Kivuli holds real US dollars and moves them privately. You never deal with crypto jargon, seed phrases, or network names.",
  },
  {
    q: "How is it private?",
    a: "Each payment uses a fresh address, so nothing lands on a public ledger. Incognito mode adds another layer with no trace.",
  },
  {
    q: "Does Kivuli hold my money?",
    a: "No. Only you hold the keys, so only you can move your funds. Kivuli can't touch, freeze, or see them.",
  },
  {
    q: "Do I need to verify my identity?",
    a: "No. Kivuli never asks for documents, selfies, or KYC. You sign in and you are ready.",
  },
  {
    q: "What if I lose my phone?",
    a: "You sign back in with Face ID, a passkey, or your Apple or Google account. There is no seed phrase to lose.",
  },
  {
    q: "Is there a fee?",
    a: "Payments are free and land in seconds.",
  },
  {
    q: "When can I get it?",
    a: "Kivuli is in private beta on TestFlight. Join from the buttons above.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);
  const reduce = useReducedMotion();

  return (
    <Section id="faq" bg="surface" containerClassName="flex flex-col items-center gap-12">
      <SectionHeading eyebrow="FAQ" title="Questions, answered." />
      <div className="w-full max-w-[760px]">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-line-subtle">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 rounded-md py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                  <span className="t-title-s text-ink">{f.q}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "h-5 w-5 shrink-0 transition-transform duration-[240ms] ease-[var(--ease-standard)] motion-reduce:transition-none",
                      isOpen ? "rotate-180 text-accent" : "text-muted",
                    )}
                  />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: reduce ? 0 : duration.base,
                      ease: ease.standard,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="t-body-m pb-5 text-muted">{f.a}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
