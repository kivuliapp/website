import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Bg = "canvas" | "surface" | "sunken";

const bgMap: Record<Bg, string> = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  sunken: "bg-sunken",
};

export function Section({
  id,
  bg = "canvas",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  bg?: Bg;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 px-6 lg:px-12", bgMap[bg], className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1200px] py-20 md:py-28",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
