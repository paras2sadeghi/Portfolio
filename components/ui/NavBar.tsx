"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavFillLink from "@/components/ui/NavFillLink";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { nav, profile } from "@/lib/content";

/**
 * Dennis-style bar: difference blend on the hero, solid bar + btn-fill pills after scroll.
 */
export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const reduced = useReducedMotion();
  const headerRef = useRef<HTMLElement | null>(null);
  const [pastHero, setPastHero] = useState(!isHome);

  // Each link routes to its own page rather than scrolling to a homepage
  // section, regardless of which page you're currently on.
  const resolveHref = (label: string) => {
    if (label === "Work") return "/work";
    if (label === "About") return "/about";
    if (label === "Contact") return "/contact";
    return "/";
  };

  const linkTheme = pastHero ? "bar" : "hero";

  useEffect(() => {
    if (!isHome) {
      setPastHero(true);
      return;
    }

    if (reduced) {
      setPastHero(false);
      return;
    }

    const work = document.querySelector("#work");
    if (!work) return;

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: work,
      start: "top 4.5rem",
      onEnter: () => setPastHero(true),
      onLeaveBack: () => setPastHero(false),
    });

    return () => trigger.kill();
  }, [isHome, reduced, pathname]);

  return (
    <header
      ref={headerRef}
      // Solid colors instead of mix-blend-difference: white text/mark over
      // the hero photo, flipping to a solid blurred bar with dark text once
      // scrolled past it. A blend mode inverts per-pixel against whatever's
      // behind it, which is what made everything look soft/inconsistent over
      // a busy photo — plain color swap is the standard, predictable version.
      className={`nav-bar fixed left-0 top-0 z-[90] w-full transition-[background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        pastHero
          ? "border-b border-foreground/8 bg-background/92 text-foreground backdrop-blur-md"
          : "border-b border-transparent text-white"
      }`}
    >
      <div className="flex h-9 items-center justify-between px-6 md:h-10 md:px-10">
        <Link
          href="/"
          className={`flex items-center gap-2 text-base font-medium tracking-tight transition-opacity hover:opacity-70 md:text-lg ${
            pastHero ? "text-foreground" : "text-white"
          }`}
        >
          <Image
            src="/brand/mark-64.png"
            alt=""
            aria-hidden
            width={64}
            height={64}
            className="h-6 w-6 md:h-7 md:w-7"
          />
          {profile.name.split(" ")[0]}
        </Link>

        <nav
          aria-label="Primary"
          className="flex items-center gap-1.5 md:gap-2"
        >
          {nav.map((item) => {
            const href = resolveHref(item.label);
            return (
              <NavFillLink key={item.href} href={href} theme={linkTheme}>
                {item.label}
              </NavFillLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
