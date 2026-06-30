import type { Metadata } from "next";
import { Mark } from "@/components/brand/mark";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page slipped into the dark. Head back to your money.",
};

export default function NotFound() {
  return (
    <section className="bg-canvas px-6">
      <div className="mx-auto flex max-w-[640px] flex-col items-center gap-5 pb-32 pt-40 text-center md:pt-44">
        <Mark className="h-[88px] w-[88px]" />
        <p className="t-overline text-accent-ink">404 &middot; Page not found</p>
        <h1 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-ink sm:text-[48px] lg:text-[56px]">
          This page slipped into the dark.
        </h1>
        <p className="t-body-l max-w-[520px] text-muted">
          The page you are looking for moved, or never existed. Let us get you back
          to your money.
        </p>
        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact support
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
