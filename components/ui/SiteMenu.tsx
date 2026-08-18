"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { featuredWork } from "@/lib/caseStudies";
import { footer, profile } from "@/lib/content";
import { GSAP_EASE } from "@/utils/motion";

const NAV_ITEMS = [
  { label: "Home", id: "top" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const MENU_OPEN = "inset(0% 0% 0% 0%)";
const MENU_CLOSED = "inset(0% 0% 100% 0%)";

export default function SiteMenu() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    cancelClose();
    setOpen(true);
  }, [cancelClose]);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpen(false), 260);
  }, [cancelClose]);

  useEffect(() => {
    const panel = panelRef.current;
    const content = contentRef.current;
    if (!panel || !content) return;

    gsap.killTweensOf(panel);
    gsap.killTweensOf(content.querySelectorAll("[data-menu-reveal]"));

    if (open) {
      document.documentElement.style.overflow = "hidden";
      gsap.set(panel, { pointerEvents: "auto" });
      gsap.to(panel, {
        clipPath: MENU_OPEN,
        duration: 0.85,
        ease: GSAP_EASE,
      });
      gsap.fromTo(
        content.querySelectorAll("[data-menu-reveal]"),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: GSAP_EASE,
          stagger: 0.04,
          delay: 0.12,
        }
      );
    } else {
      document.documentElement.style.overflow = "";
      gsap.to(panel, {
        clipPath: MENU_CLOSED,
        duration: 0.7,
        ease: GSAP_EASE,
        onComplete: () => gsap.set(panel, { pointerEvents: "none" }),
      });
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    gsap.set(panel, { clipPath: MENU_CLOSED, pointerEvents: "none" });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => () => cancelClose(), [cancelClose]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
        onClick={() => setOpen((value) => !value)}
        className="fixed right-6 top-5 z-[95] rounded-full border border-white/50 bg-white/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl transition-colors hover:bg-white/40 md:right-10 md:top-7"
        aria-expanded={open}
        aria-controls="site-menu"
      >
        {open ? "Close" : "Menu"}
      </button>

      <div
        id="site-menu"
        ref={panelRef}
        className="fixed inset-0 z-[85] overflow-hidden text-foreground"
        style={{ clipPath: MENU_CLOSED, pointerEvents: "none" }}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
        aria-hidden={!open}
      >
        <div aria-hidden className="site-menu-glass absolute inset-0" />

        <div
          ref={contentRef}
          className="relative z-10 mx-auto flex h-full max-h-[100dvh] max-w-[1600px] flex-col justify-between overflow-y-auto px-6 py-7 md:px-10 md:py-10"
        >
          <div
            data-menu-reveal
            className="flex shrink-0 items-center justify-between pr-28 text-sm text-foreground/65"
          >
            <span className="flex items-center gap-2">
              <Image
                src="/brand/mark-64.png"
                alt=""
                aria-hidden
                width={64}
                height={64}
                className="h-4 w-4"
              />
              {profile.name.split(" ")[0]}
            </span>
            <span>{profile.location}</span>
          </div>

          <div className="my-10 grid shrink-0 gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-20">
            <div className="grid grid-cols-2 gap-10 text-sm">
              <div data-menu-reveal>
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-foreground/45">
                  Navigation
                </p>
                <div className="flex flex-col gap-3">
                  {NAV_ITEMS.map((item) =>
                    isHome ? (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={close}
                        className="text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.id}
                        href={sectionHref(item.id)}
                        onClick={close}
                        className="text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>

              <div data-menu-reveal>
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-foreground/45">
                  Socials
                </p>
                <div className="flex flex-col gap-3">
                  {footer.connect.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={close}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-y border-foreground/12">
              {featuredWork.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/work/${item.slug}`}
                  onClick={close}
                  data-menu-reveal
                  className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-b border-foreground/10 py-4 last:border-b-0 md:grid-cols-[4rem_1fr_auto] md:py-5"
                >
                  <span className="text-xs text-foreground/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-4xl font-medium tracking-[-0.04em] text-foreground transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                    {item.name}
                  </span>
                  <span className="hidden text-xs uppercase tracking-[0.18em] text-foreground/50 md:block">
                    {item.year}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div
            data-menu-reveal
            className="flex shrink-0 flex-col gap-2 border-t border-foreground/10 pt-6 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between"
          >
            <a href={`mailto:${profile.email}`} onClick={close} className="hover:text-foreground">
              {profile.email}
            </a>
            <Link href="/work" onClick={close} className="hover:text-foreground">
              View all work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
