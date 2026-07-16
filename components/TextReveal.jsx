"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Word-by-word mask reveal: each word rises from behind an overflow clip,
 * lightly staggered. No opacity fade — pure editorial motion.
 *
 * Each word's MASK (un-clipped, in normal flow) carries the whileInView
 * trigger, so IntersectionObserver can always see it. The inner span — which
 * starts translated outside the mask — is animated via the mask's variant.
 * Observing the inner span directly would deadlock (it's clipped out of view).
 */
export default function TextReveal({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.045,
  duration = 0.9,
}) {
  const words = String(text).split(" ");
  const reduce = useReducedMotion();

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <motion.span
            className="inline-flex overflow-hidden"
            // padding/margin keep descenders (g, y, p) from being clipped
            style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-8% 0px" }}
          >
            <motion.span
              className="inline-block will-change-transform"
              variants={{ hidden: { y: "115%" }, visible: { y: "0%" } }}
              transition={{ duration, ease: EASE, delay: delay + i * stagger }}
            >
              {word}
            </motion.span>
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
