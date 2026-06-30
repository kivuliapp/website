import { TriangleAlert } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export type LegalSection = { id: string; title: string; paras: string[] };

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="bg-canvas px-6 lg:px-12">
      <div className="mx-auto max-w-[1080px] pb-24 pt-28 md:pt-32">
        <Reveal className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-display text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[40px]">
            {title}
          </h1>
          <p className="t-caption text-faint">Last updated {updated}</p>
        </Reveal>

        <div
          role="note"
          className="mt-8 flex items-start gap-3 rounded-md bg-warning-surface p-4 sm:px-5"
        >
          <TriangleAlert
            className="mt-0.5 h-5 w-5 shrink-0 text-warning"
            strokeWidth={2}
            aria-hidden="true"
          />
          <p className="t-body-m font-medium text-warning">
            Draft, to be reviewed by legal counsel. This is placeholder copy for
            layout only and is not legally binding.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr] lg:gap-14">
          <nav
            aria-label="On this page"
            className="hidden lg:block lg:sticky lg:top-24 lg:self-start"
          >
            <p className="t-overline mb-3 text-accent-ink">On this page</p>
            <ol className="flex flex-col gap-2.5">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="t-label-m rounded-md text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex max-w-[680px] flex-col gap-9">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="flex scroll-mt-24 flex-col gap-2.5"
              >
                <h2 className="t-title-s text-ink">
                  {i + 1}. {s.title}
                </h2>
                {s.paras.map((p, j) => (
                  <p key={j} className="t-body-m text-muted">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
