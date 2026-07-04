"use client";

import { motion, useReducedMotion } from "motion/react";
import { Mark } from "@/components/brand/mark";
import { TestFlightBadge } from "@/components/brand/testflight-badge";
import { ButtonLink } from "@/components/ui/button";
import { duration, ease } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.slow, ease: ease.decelerate },
    },
  };

  return (
    <section className="relative overflow-hidden bg-canvas px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-[1200px] flex-col items-center pb-24 pt-24 text-center md:pb-28 md:pt-28"
      >
        <motion.h1
          variants={item}
          className="max-w-[15ch] font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[64px] lg:leading-[1.0625]"
        >
          Money that stays yours.
        </motion.h1>

        <motion.p variants={item} className="t-body-l mt-5 max-w-[560px] text-muted">
          The private wallet only you control. Your balance and payments never hit
          a public ledger, so no one can see your money or trace where it goes.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <TestFlightBadge />
          <ButtonLink href="/#how-it-works" variant="secondary">
            See how it works
          </ButtonLink>
        </motion.div>

        <motion.div variants={item} className="mt-14 lg:mt-16">
          <Mark className="h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
