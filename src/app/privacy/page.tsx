import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What little we collect and why. Kivuli is built to know as little about you as possible.",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    id: "approach",
    title: "Our approach to privacy",
    paras: [
      "Kivuli is built to collect as little as possible. Privacy is the product, not the price you pay for it.",
      "Placeholder text. Final language will be provided by legal counsel before launch.",
    ],
  },
  {
    id: "collect",
    title: "What we collect",
    paras: [
      "The minimum needed to run the app: your sign-in method and basic device information. We do not collect your contacts or track you across other apps.",
    ],
  },
  {
    id: "do-not-collect",
    title: "What we do not collect",
    paras: [
      "No identity documents. No selling of your data. No profile of what you buy or who you pay.",
    ],
  },
  {
    id: "use",
    title: "How we use information",
    paras: [
      "Only to operate and secure Kivuli, and to reply when you reach out to us.",
    ],
  },
  {
    id: "payments",
    title: "Your payments and privacy",
    paras: [
      "Your balance and payments are private by design. We cannot see what we do not hold.",
    ],
  },
  {
    id: "retention",
    title: "Data retention",
    paras: [
      "We keep only what we need, for only as long as we need it, then remove it.",
    ],
  },
  {
    id: "rights",
    title: "Your rights",
    paras: [
      "You can ask what we hold and ask us to delete it. Email privacy@kivuli.xyz and we will help.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paras: [
      "If this policy changes in a meaningful way, we will tell you before it takes effect.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paras: [
      "Privacy questions? Email privacy@kivuli.xyz and a real person will reply.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 30, 2026"
      sections={sections}
    />
  );
}
