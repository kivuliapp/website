import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { PoweredByOpaque } from "@/components/brand/powered-by-opaque";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { footerColumns, site } from "@/lib/site";

const socials = [
  {
    label: "X",
    href: site.social.x,
    svg: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    svg: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: site.social.github,
    svg: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C4 2 3 2 3 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 2 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line-subtle bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-[340px] flex-col gap-5">
            <Logo />
            <p className="t-body-m text-muted">
              {site.tagline} No seed phrases, no paperwork.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kivuli on ${s.label} (opens in a new tab)`}
                  className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-line-subtle bg-raised text-muted transition-colors hover:border-line-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
                <span className="t-overline text-faint">{col.title}</span>
                {col.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="t-label-m rounded-md text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-line-subtle" />

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <PoweredByOpaque />
          <div className="flex flex-wrap items-center gap-5">
            <span className="t-caption text-faint">
              © 2026 Kivuli. All rights reserved.
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
