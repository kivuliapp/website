import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using Kivuli. Plain language, no surprises.",
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    paras: [
      "By creating a Kivuli account or using the app, you agree to these terms. If you do not agree, please do not use Kivuli.",
      "Placeholder text. Final language will be provided by legal counsel before launch.",
    ],
  },
  {
    id: "eligibility",
    title: "Who can use Kivuli",
    paras: [
      "Kivuli is available to individuals who can form a binding agreement under the laws of their country. You are responsible for ensuring Kivuli is permitted where you live.",
    ],
  },
  {
    id: "account",
    title: "Your account and security",
    paras: [
      "You sign in with Face ID, a passkey, or a linked account. You are responsible for keeping access to your device and sign-in method secure.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    paras: [
      "You agree not to use Kivuli for unlawful activity, to harm others, or to interfere with the service. We may suspend accounts that do.",
    ],
  },
  {
    id: "custody",
    title: "Your money and custody",
    paras: [
      "Kivuli is designed so that you control your funds. We describe how custody works in plain language in the app and in our documentation.",
    ],
  },
  {
    id: "fees",
    title: "Fees",
    paras: [
      "Payments on Kivuli are free today. If we ever introduce a fee, we will tell you clearly before it applies to you.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    paras: [
      "We may update these terms over time. If a change is significant, we will let you know in the app or by email before it takes effect.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paras: [
      "Questions about these terms? Email legal@kivuli.xyz and a real person will reply.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 30, 2026"
      sections={sections}
    />
  );
}
