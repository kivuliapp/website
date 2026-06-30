export const site = {
  name: "Kivuli",
  url: "https://kivuli.xyz",
  domain: "kivuli.xyz",
  supportEmail: "support@kivuli.xyz",
  ensName: "kivuli.eth",
  tagline:
    "Private money for everyday life. Hold it, send it, keep it yours.",
  testflightUrl: "https://testflight.apple.com/join/kivuli",
  opaqueUrl: "https://opaque.cash",
  social: {
    x: "https://x.com/kivuli",
    instagram: "https://instagram.com/kivuli",
    github: "https://github.com/kivuli",
  },
} as const;

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Security", href: "/#security" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Security", href: "/#security" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
] as const;
