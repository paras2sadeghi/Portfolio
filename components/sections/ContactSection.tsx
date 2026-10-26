import SplitText from "@/components/animations/SplitText";
import { footer, profile } from "@/lib/content";

/**
 * Closing frame, kept editorial and minimal: one short line and one row of
 * icons for every way to reach me. Nothing else.
 */
export default function ContactSection({ className = "" }: { className?: string }) {
  // Every way to reach me, as one row of icons: email first, then the
  // profiles, then the résumé when there is one.
  const links = [
    ...footer.connect.filter((item) => item.label === "Email"),
    ...footer.connect.filter((item) => item.label !== "Email"),
    ...(profile.resumeUrl ? [{ label: "Résumé", href: profile.resumeUrl }] : []),
  ];

  return (
    <section
      id="contact"
      className={`relative isolate overflow-hidden bg-ink px-6 py-20 text-white md:px-10 md:py-28 ${className}`}
    >
      {/* One line: the headline on the left, the icons on the right, both
          sitting on the same bottom edge, in the same 1200px column as the
          rest of the home page. Stacks on phones. */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/60">
            Contact
          </p>
          <SplitText
            as="h2"
            text="Let’s talk."
            // The same serif as every other section title on the page.
            className="font-serif text-[15vw] font-normal leading-[0.95] tracking-[-0.02em] md:text-[min(8vw,7.5rem)]"
            // Plays on mount rather than on scroll-into-view, so a trigger
            // measured before the images above have loaded can never leave
            // the headline masked. The section starts off-screen anyway.
            immediate
          />
        </div>

        {/* Each icon is a 56px target with its name for screen readers and
            as a hover tooltip. */}
        <ul className="flex flex-wrap gap-3 md:pb-2">
          {links.map((item) => {
            const external = !item.href.startsWith("mailto:");
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  aria-label={item.label}
                  title={item.label}
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white/85 transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink focus-visible:border-white"
                >
                  <SocialIcon label={item.label} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** Thin-line icons, keyed off each link's label. */
function SocialIcon({ label }: { label: string }) {
  const common = {
    width: 22,
    height: 22,
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

  if (label === "Résumé") {
    return (
      <svg {...common}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
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
