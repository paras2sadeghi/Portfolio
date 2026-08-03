"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { featuredWork } from "@/lib/caseStudies";
import { footer, profile } from "@/lib/content";
import { GSAP_EASE } from "@/utils/motion";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteMenu() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!overlay || !content) return;

    if (open) {
      document.documentElement.style.overflow = "hidden";
      gsap.set(overlay, { pointerEvents: "auto" });
      gsap.fromTo(
        overlay,
        { yPercent: -100 },
        { yPercent: 0, duration: 0.9, ease: GSAP_EASE }
      );
      gsap.fromTo(
        content.querySelectorAll("[data-menu-reveal]"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: GSAP_EASE,
          stagger: 0.045,
          delay: 0.18,
        }
      );
    } else {
      document.documentElement.style.overflow = "";
      gsap.to(overlay, {
        yPercent: -100,
        duration: 0.75,
        ease: GSAP_EASE,
        onComplete: () => gsap.set(overlay, { pointerEvents: "none" }),
      });
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed right-6 top-5 z-[80] rounded-full border border-current/20 bg-background/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur-xl transition-colors hover:bg-foreground hover:text-background md:right-10 md:top-7"
        aria-expanded={open}
        aria-controls="site-menu"
      >
        {open ? "Close" : "Menu"}
      </button>

      <div
        id="site-menu"
        ref={overlayRef}
        className="fixed inset-0 z-[70] translate-y-[-100%] bg-ink px-6 py-7 text-white md:px-10 md:py-10"
        style={{ pointerEvents: "none" }}
      >
        <div
          ref={contentRef}
          className="mx-auto flex h-full max-w-[1600px] flex-col justify-between"
        >
          <div
            data-menu-reveal
            className="flex items-center justify-between pr-28 text-sm text-white/70"
          >
            <span>© {profile.name}</span>
            <span>{profile.location}</span>
          </div>

          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-20">
            <div className="grid grid-cols-2 gap-10 text-sm">
              <div data-menu-reveal>
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/35">
                  Navigation
                </p>
                <div className="flex flex-col gap-3">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div data-menu-reveal>
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/35">
                  Socials
                </p>
                <div className="flex flex-col gap-3">
                  {footer.connect.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={close}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-y border-white/12">
              {featuredWork.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/work/${item.slug}`}
                  onClick={close}
                  data-menu-reveal
                  className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-b border-white/12 py-4 last:border-b-0 md:grid-cols-[4rem_1fr_auto] md:py-5"
                >
                  <span className="text-xs text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-4xl font-medium tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                    {item.name}
                  </span>
                  <span className="hidden text-xs uppercase tracking-[0.18em] text-white/40 md:block">
                    {item.year}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div
            data-menu-reveal
            className="flex flex-col gap-2 text-sm text-white/50 md:flex-row md:items-center md:justify-between"
          >
            <a href={`mailto:${profile.email}`} className="hover:text-white">
              {profile.email}
            </a>
            <Link href="/work" onClick={close} className="hover:text-white">
              View all work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
