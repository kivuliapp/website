import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium text-[16px] leading-5 whitespace-nowrap select-none transition-[transform,background-color,border-color,color] duration-[160ms] ease-[var(--ease-standard)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const sizes: Record<Size, string> = {
  md: "px-5 py-3",
  lg: "px-8 py-4",
};

const variants: Record<Variant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-pressed hover:-translate-y-px",
  secondary:
    "border border-line-strong bg-transparent text-ink hover:border-focus hover:bg-hover hover:text-accent-ink hover:-translate-y-px",
};

function styles(variant: Variant, size: Size, className?: string) {
  return cn(base, sizes[size], variants[variant], className);
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "lg",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "lg",
  className,
  href,
  external,
  children,
}: CommonProps & { href: string; external?: boolean }) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles(variant, size, className)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={styles(variant, size, className)}>
      {children}
    </Link>
  );
}
