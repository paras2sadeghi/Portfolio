"use client";

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

  const resolveHref = (label: string) => {
    if (label === "Work") return isHome ? "#work" : "/work";
    if (label === "About") return "/about";
    if (label === "Contact") return isHome ? "#contact" : "/#contact";
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
      className={`nav-bar fixed left-0 top-0 z-[90] w-full transition-[background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        pastHero
          ? "border-b border-foreground/8 bg-background/92 text-foreground backdrop-blur-md"
          : "mix-blend-difference text-white"
      }`}
    >
      <div className="flex h-[4.625rem] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className={`text-sm font-medium tracking-tight transition-opacity hover:opacity-70 ${
            pastHero ? "text-foreground" : "text-white"
          }`}
        >
          © {profile.name}
        </Link>

        <nav
          aria-label="Primary"
          className="flex items-center gap-2 md:gap-3"
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
