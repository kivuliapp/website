"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { duration, ease, inView } from "@/lib/motion";

/** Fade + rise on scroll into view, once. Honors prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{
        duration: reduce ? duration.fast : duration.slow,
        ease: ease.decelerate,
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
