"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "@/hooks/useLenisGsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { profile } from "@/lib/content";

/**
 * Compact fixed header: flower and wordmark on the left, plain text links on
 * the right with a small magenta mark for hover (underline) and the current
 * page (dot). Only "Let's talk" gets a soft pill.
 *
 * Over the hero it is a dark, blurred band (measured at 5:1 or better against
 * the brightest part of the photo); once the hero has scrolled away it turns
 * into the solid page background.
 */
export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const reduced = useReducedMotion();
  const [pastHero, setPastHero] = useState(!isHome);
  const [workInView, setWorkInView] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setPastHero(true);
      return;
    }

    if (reduced) {
      setPastHero(false);
      return;
    }

    // Triggered off the hero's own bottom edge, not the next section's, so
    // there is never a moment of white text on a white page.
    const hero = document.querySelector("#top");
    if (!hero) return;

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: hero,
      start: "bottom 4.5rem",
      onEnter: () => setPastHero(true),
      onLeaveBack: () => setPastHero(false),
    });

    return () => trigger.kill();
  }, [isHome, reduced, pathname]);

  // "Work" lights up while the featured-work section crosses the middle of
  // the screen. An observer, not a scroll trigger, because that section pins.
  useEffect(() => {
    if (!isHome) {
      setWorkInView(false);
      return;
    }
    const section = document.getElementById("work");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setWorkInView(entry.isIntersecting),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [isHome]);

  const goToWork = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return; // From other pages the link navigates home to #work.
    const section = document.getElementById("work");
    if (!section) return;
    event.preventDefault();
    const lenis = getLenis();
    if (reduced) {
      // "instant" overrides the page's CSS smooth-scroll fallback.
      section.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    } else if (lenis) {
      lenis.scrollTo(section, { duration: 1.4 });
    } else {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`nav-bar fixed left-0 top-0 z-[90] w-full border-b transition-[background-color,border-color,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        pastHero
          ? "border-foreground/8 bg-background/92 text-foreground backdrop-blur-md"
          : "border-white/10 bg-black/35 text-white backdrop-blur-md"
      }`}
    >
      <div className="flex h-12 items-center justify-between pl-3 pr-1 md:h-14 md:pl-10 md:pr-7">
        <Link
          href="/"
          className="group flex min-h-11 shrink-0 items-center gap-2 pr-2 text-base font-medium tracking-tight md:pr-3 md:text-lg"
        >
          <Image
            src="/brand/mark-64.png"
            alt=""
            aria-hidden
            width={64}
            height={64}
            // Signature detail: the flower turns a quarter on hover or focus.
            className="h-5 w-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-90 group-focus-visible:rotate-90 motion-reduce:transition-none md:h-6 md:w-6"
          />
          {/* With the résumé link present there isn't room for the wordmark
              on the very smallest phones: it stays in the accessibility tree
              and the flower still carries the brand. */}
          <span className={profile.resumeUrl ? "max-[379px]:sr-only" : undefined}>
            {profile.name.split(" ")[0]}
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center">
          <NavItem
            href="/#work"
            onClick={goToWork}
            active={workInView || pathname.startsWith("/work")}
            solid={pastHero}
          >
            Work
          </NavItem>
          <NavItem
            href="/about"
            active={pathname.startsWith("/about")}
            solid={pastHero}
          >
            About
          </NavItem>
          {/* Only rendered once a résumé file exists (profile.resumeUrl), so
              the header never links to a missing PDF. */}
          {profile.resumeUrl && (
            <NavItem href={profile.resumeUrl} external solid={pastHero}>
              Résumé
            </NavItem>
          )}
          <NavItem
            href="/contact"
            cta
            active={pathname.startsWith("/contact")}
            solid={pastHero}
          >
            Let’s talk <span aria-hidden>↗</span>
          </NavItem>
        </nav>
      </div>
    </header>
  );
}

interface NavItemProps {
  href: string;
  children: ReactNode;
  /** True when the bar is on the solid (light) background. */
  solid: boolean;
  active?: boolean;
  external?: boolean;
  cta?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

function NavItem({
  href,
  children,
  solid,
  active = false,
  external = false,
  cta = false,
  onClick,
}: NavItemProps) {
  // Every link is a full 44px-tall target even though the header is compact.
  const base =
    "group relative flex min-h-11 shrink-0 items-center whitespace-nowrap px-2 text-[13px] font-medium tracking-tight transition-colors duration-300 md:px-3.5 md:text-sm";
  const tone = solid
    ? active
      ? "text-foreground"
      : "text-foreground/70 hover:text-foreground"
    : active
      ? "text-white"
      : "text-white/85 hover:text-white";

  const inner = cta ? (
    <span
      className={`rounded-full px-2.5 py-1.5 transition-colors duration-300 md:px-3.5 ${
        solid
          ? "bg-foreground/[0.06] group-hover:bg-foreground/[0.11]"
          : "bg-white/15 group-hover:bg-white/25"
      }`}
    >
      {children}
    </span>
  ) : (
    <>
      {children}
      {/* Hover and keyboard focus: a thin magenta line draws in. */}
      <span
        aria-hidden
        className="absolute inset-x-2 bottom-2 h-px origin-left scale-x-0 bg-[#ec4899] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none md:inset-x-3.5"
      />
      {/* Current page or section: a small magenta dot. */}
      {active && (
        <span
          aria-hidden
          className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#ec4899]"
        />
      )}
    </>
  );

  const className = `${base} ${tone}`;
  const current = active ? ("page" as const) : undefined;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        onClick={onClick}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-current={current} onClick={onClick}>
      {inner}
    </Link>
  );
}
