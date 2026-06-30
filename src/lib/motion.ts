import type { Transition, Variants } from "motion/react";

/**
 * Motion tokens, extracted from the Figma motion spec.
 * Durations in seconds (Framer Motion), easings as cubic-bezier arrays.
 */
export const duration = {
  instant: 0,
  fast: 0.16,
  base: 0.24,
  slow: 0.36,
  bloom: 0.42,
  deliberate: 0.52,
} as const;

export const ease = {
  standard: [0.2, 0, 0, 1],
  decelerate: [0.05, 0.7, 0.1, 1],
  accelerate: [0.3, 0, 1, 1],
} as const;

export const spring: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 26,
  mass: 1,
};

/** Reveal-on-scroll: fade + 20px rise, decelerate. Run once. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.decelerate },
  },
};

/** Stagger container for grids/rows (70ms between children). */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

/** Hero entrance item: fade + 24px rise. */
export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.decelerate },
  },
};

/** Shared viewport config for whileInView reveals. */
export const inView = { once: true, amount: 0.2, margin: "0px 0px -10% 0px" } as const;
