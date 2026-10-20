"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

// Greetings cycle once when the site is first opened, then the curtain lifts.
// It plays only if the visit starts on the home page, once per browser tab:
// an inline script in app/layout.js tags <html> with "intro-seen" before
// paint (so the overlay never flashes), and that tag sticks for client-side
// navigation back to home.
const SEEN_CLASS = "intro-seen";

const GREETINGS = ["Hello", "سلام", "Bonjour", "Hola", "こんにちは", "Hallo"];

export default function IntroLoader() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    if (document.documentElement.classList.contains(SEEN_CLASS)) setDone(true);
  }, []);

  useEffect(() => {
    if (done) document.documentElement.classList.add(SEEN_CLASS);
  }, [done]);

  useEffect(() => {
    if (reduce || done) return;
    if (index >= GREETINGS.length - 1) {
      const t = setTimeout(() => setDone(true), 420);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIndex((i) => i + 1), 230);
    return () => clearTimeout(t);
  }, [index, reduce, done]);

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
          data-intro-loader
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
