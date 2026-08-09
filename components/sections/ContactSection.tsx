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
              <a href={`tel:${profile.phone}`} className="transition-colors hover:text-white">
                {profile.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden border-y border-white/10 py-4 md:mt-28">
          <div className="marquee-track flex w-max whitespace-nowrap">
            {[0, 1].map((copy) => (
              <span
                key={copy}
                aria-hidden={copy === 1}
                className="font-display text-[13vw] font-semibold uppercase leading-none tracking-[-0.045em] text-white/10"
              >
                Healthcare — Cybersecurity — Games — Fitness — Social — SaaS —&nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 pt-8 text-sm text-white/45 md:grid-cols-3 md:pt-10">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/25">
              Version
            </p>
            <p>2026 © Edition</p>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/25">
              Local time
            </p>
            <p>{localTime}</p>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/25">
              Socials
            </p>
            <div className="flex gap-4 md:justify-start">
              {footer.connect.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
