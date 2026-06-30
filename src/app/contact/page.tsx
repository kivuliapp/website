import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions, press, or partnerships? Email a real person and hear back within two business days.",
  alternates: { canonical: "/contact" },
};

const blocks = [
  {
    label: "Email",
    title: site.supportEmail,
    body: "We answer within two business days.",
    href: `mailto:${site.supportEmail}`,
  },
  {
    label: "Response time",
    title: "Within 2 business days",
    body: "Real people, no ticket numbers.",
  },
  {
    label: "Follow",
    title: "@kivuli",
    body: "Updates and the occasional quiet brag.",
    href: site.social.x,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to a human."
        intro="Questions, press, partnerships, or just hello. We read everything and reply within two business days."
      />

      <Section bg="canvas">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-8">
            {blocks.map((b) => (
              <div key={b.label} className="flex flex-col gap-1.5">
                <span className="t-overline text-accent-ink">{b.label}</span>
                {b.href ? (
                  <a
                    href={b.href}
                    {...(b.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="t-title-s rounded-md text-ink transition-colors hover:text-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    {b.title}
                  </a>
                ) : (
                  <span className="t-title-s text-ink">{b.title}</span>
                )}
                <span className="t-body-m text-muted">{b.body}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
