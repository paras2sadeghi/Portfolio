"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

// Greetings cycle once on first load, then the curtain lifts.
const GREETINGS = ["Hello", "سلام", "Bonjour", "Hola", "こんにちは", "Hallo"];

export default function IntroLoader() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (index >= GREETINGS.length - 1) {
      const t = setTimeout(() => setDone(true), 420);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIndex((i) => i + 1), 230);
    return () => clearTimeout(t);
  }, [index, reduce]);

  useEffect(() => {
    if (reduce || done) {
      document.documentElement.style.overflow = "";
    } else {
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [done, reduce]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="flex items-center gap-3 text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" aria-hidden />
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, ease: EASE }}
              className="text-3xl font-medium tracking-tight md:text-4xl"
            >
              {GREETINGS[index]}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
