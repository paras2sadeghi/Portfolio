"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs, profile } from "@/lib/content";
import Reveal from "./Reveal";

function FAQItem({ faq }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-line py-4">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-medium">{faq.question}</span>
        <span
          className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-sm transition-transform ${
            expanded ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm leading-relaxed text-muted">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="mb-3 text-sm text-muted">FAQs</p>
          <h2 className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
            Answers to common questions to help you understand{" "}
            <span className="font-semibold">the process</span> and{" "}
            <span className="font-semibold">how we can work together</span>.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            Email Me
          </a>
        </Reveal>

        <Reveal delay={0.08} className="rounded-3xl border border-line bg-surface p-6 md:p-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
