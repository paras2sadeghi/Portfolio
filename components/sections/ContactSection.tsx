"use client";

import { useEffect, useState } from "react";
import MagneticButton from "@/components/animations/MagneticButton";
import SplitText from "@/components/animations/SplitText";
import { footer, profile } from "@/lib/content";

/**
 * Closing frame. The CTA gets the most weight, then the utility footer folds
 * in below it so the homepage ends in one deliberate gesture.
 */
export default function ContactSection() {
  const [localTime, setLocalTime] = useState("");
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      setLocalTime(
        new Intl.DateTimeFormat("en-CA", {
          timeZone: "America/Vancouver",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZoneName: "short",
        }).format(new Date())
      );
    };

    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-ink px-6 py-24 text-white md:px-10 md:py-36"
    >
      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">
              Contact
            </p>
            <SplitText
              as="h2"
              text="Let's fix something"
              className="font-display text-[15vw] font-medium leading-[0.82] tracking-[-0.06em] md:text-[8vw]"
              // Plays on mount rather than on scroll-into-view. PinnedShowcase
              // above pins and adds ~2400px to the document after this
              // trigger's position is first measured, which can leave a
              // scroll-triggered reveal here permanently masked depending on
              // refresh timing. Mount-time is invisible either way since this
              // section starts off-screen, so nothing is lost by not waiting.
              immediate
            />
          </div>

          <div className="flex flex-col gap-5 md:items-end md:pb-4">
            <MagneticButton
              href={`mailto:${profile.email}`}
              strength={0.38}
              radius={120}
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-5 text-base font-medium text-ink transition-transform duration-500 hover:scale-[1.03]"
            >
              Start a conversation
            </MagneticButton>

            <div className="flex flex-col gap-1 text-sm text-white/55 md:text-right">
              <a
                href={`mailto:${profile.email}`}
                className="transition-colors hover:text-white"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/40 md:mt-28 md:flex-row md:items-center md:justify-between">
          <p>© {year ?? "2026"} Parastoo Sadeghi · {localTime}</p>
          <div className="flex gap-5">
            {footer.connect.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
                className="transition-colors hover:text-white"
              >
                <SocialIcon label={item.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Thin-line social icons, keyed off the label already in footer.connect. */
function SocialIcon({ label }: { label: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (label === "LinkedIn") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="2.5" />
        <line x1="8" y1="10.5" x2="8" y2="17" />
        <circle cx="8" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
        <path d="M12 17v-4.2c0-1.4 1-2.3 2.2-2.3 1.2 0 2.1.9 2.1 2.3V17" />
        <line x1="12" y1="10.5" x2="12" y2="17" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "WhatsApp") {
    return (
      <svg {...common}>
        <path d="M6.5 17.5 4 20l2.6-.7A8 8 0 1 0 4 12a7.9 7.9 0 0 0 1.1 4.1Z" />
        <path d="M9 10.2c.3 1.9 2 3.6 3.9 3.9.8.1 1.1-.5 1.1-1v-.6l1.6.5c.3.1.5.4.4.7-.3 1.1-1.5 1.9-2.7 1.8-2.8-.2-5.4-2.8-5.6-5.6-.1-1.2.7-2.4 1.8-2.7.3-.1.6.1.7.4l.5 1.6h-.6c-.5 0-1.1.3-1 1.1Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}
