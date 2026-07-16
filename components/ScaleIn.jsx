"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Slow scale-in for imagery — settles from slightly oversized to natural.
 * No fade; the scale does the work for a calm, cinematic entrance.
 * Falls back to a static render for reduced-motion users.
 */
export default function ScaleIn({
  children,
  className = "",
  from = 1.12,
  duration = 1.5,
  delay = 0,
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ scale: from }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
