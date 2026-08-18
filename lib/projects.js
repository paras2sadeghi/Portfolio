/**
 * Single source of truth: work list + case study content.
 * Sorted newest → oldest (year, then sortOrder).
 */

const baseProjects = [
  {
    slug: "flash-longevity",
    name: "Flash Longevity",
    year: "2026",
    sortOrder: 1,
    discipline: "Product design · Healthcare",
    liveUrl: "https://longevity-pk75.vercel.app/#longevity",
    liveLabel: "View live site",
    thumbnail: "/images/work/mockups/flash-longevity-transparent.png",
    heroImage: "/images/work/mockups/flash-longevity-mockup-v2.png",
    tileBg: "#d4e8f6",
    card: {
      category: "Flash Pharmacy",
      subtitle: "Biological-age program landing page with calm glass UI",
      tags: ["Healthcare", "Web"],
      gradient: "linear-gradient(135deg, #b8d4f0 0%, #7eb8e8 100%)",
    },
    caseStudy: {
      headline: "A longevity program landing page that feels clinical, not cold.",
      summary:
        "Flash Longevity introduces Flash Pharmacy's biological-age offering: glass surfaces, soft motion, and copy that explains science without overwhelming visitors.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Client", value: "Flash Pharmacy" },
        { label: "Year", value: "2026" },
        { label: "Platform", value: "Marketing web" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/flash-longevity-mockup-v2.png",
          alt: "Flash Longevity product mockup",
        },
      ],
      sections: [
        {
          title: "Overview",
          body: [
            "The page had to communicate trust for a sensitive health product while staying approachable for consumers researching longevity programs for the first time.",
            "I focused on hierarchy: what the program is, how it works, and how to start, with glassmorphism and parallax used sparingly so the page still feels fast.",
          ],
        },
        {
          title: "Key decisions",
          body: [
            "Lead with outcomes, not lab jargon: biological age is explained through plain language and progressive disclosure.",
            "Motion reinforces calm: slow fades and scroll-linked depth instead of aggressive CTAs.",
          ],
        },
      ],
    },
  },
  {
    slug: "connected-health-pitch",
    name: "Connected Health",
    year: "2026",
    sortOrder: 2,
    discipline: "Pitch deck · Healthcare",
    liveUrl: null,
    liveLabel: null,
    thumbnail: "/images/work/mockups/connected-health-transparent.png",
    heroImage: "/images/work/mockups/connected-health-mockup-v2.png",
    tileBg: "#03070b",
    card: {
      category: "Under NDA",
      subtitle: "Series A pitch for a connected care platform",
      tags: ["Pitch", "Healthcare"],
      gradient: "linear-gradient(135deg, #00d4a8 0%, #03070b 85%)",
    },
    caseStudy: {
      headline: "Investor narrative for a connected health platform at Series A.",
      summary:
        "Under NDA. A visual story for AI-assisted clinical workflows, distributed care, and verified patient signals.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Format", value: "Pitch deck + UI concepts" },
        { label: "Year", value: "2026" },
        { label: "Status", value: "Confidential" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/connected-health-mockup.png",
          alt: "Connected Health product mockup",
        },
        {
          src: "/assets/connected-health-pitch/ai-clinical-assistant.png",
          alt: "AI clinical assistant concept",
        },
        {
          src: "/assets/connected-health-pitch/care-network.png",
          alt: "Distributed care network visualization",
        },
        {
          src: "/assets/connected-health-pitch/patient-signals.png",
          alt: "Verified patient signals dashboard",
        },
        {
          src: "/assets/connected-health-pitch/wearable-health.png",
          alt: "Wearable health platform dashboard",
        },
      ],
      sections: [
        {
          title: "Overview",
          body: [
            "The deck needed to show how fragmented care becomes a coherent system, for clinicians, patients, and investors evaluating platform risk.",
            "Each chapter paired a business claim with a concrete interface moment so the story felt buildable, not hypothetical.",
          ],
        },
      ],
    },
  },
  {
    slug: "transit",
    name: "Transit",
    year: "2026",
    sortOrder: 3,
    discipline: "Concept · Mobile",
    liveUrl: null,
    thumbnail: "/images/work/mockups/transit-transparent.png",
    heroImage: "/images/work/mockups/transit-mockup-v2.png",
    tileBg: "#ffffff",
    card: {
      category: "Concept",
      subtitle: "Honest ETAs that rebuild rider trust",
      tags: ["Transit", "Research"],
      gradient: "linear-gradient(135deg, #fff 0%, #d81e05 140%)",
    },
    caseStudy: {
      headline: "Transit apps lie politely. Riders stop believing them.",
      summary:
        "A Swiss-influenced mobile concept that shows uncertainty honestly: ranges, delays, and why the ETA changed.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Scope", value: "Research → UI" },
        { label: "Year", value: "2026" },
        { label: "Platform", value: "Mobile" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/transit-mockup.png",
          alt: "Transit product mockup in use",
        },
        {
          src: "/images/work/case-studies/transit-hero.png",
          alt: "Transit case study hero",
        },
        {
          src: "/images/work/case-studies/transit-detail.png",
          alt: "Transit app design detail",
        },
      ],
      sections: [
        {
          title: "Problem",
          body: [
            "Riders plan around single-minute ETAs that refresh into worse news at the stop. Trust erodes faster than accuracy improves.",
          ],
        },
        {
          title: "Approach",
          body: [
            "Show confidence bands, delay reasons, and historical reliability for a line. Design for skepticism, not delight loops.",
          ],
        },
      ],
    },
  },
  {
    slug: "huddle",
    name: "Huddle",
    year: "2026",
    sortOrder: 4,
    discipline: "Concept · B2B SaaS",
    liveUrl: null,
    thumbnail: "/images/work/mockups/huddle-transparent.png",
    heroImage: "/images/work/mockups/huddle-mockup-v2.png",
    tileBg: "#0c0c0e",
    card: {
      category: "Concept",
      subtitle: "Async video feedback that replaces the meeting",
      tags: ["SaaS", "Web"],
      gradient: "linear-gradient(135deg, #3e63dd 0%, #0c0c0e 100%)",
    },
    caseStudy: {
      headline: "“Can we hop on a call” shouldn’t be the default.",
      summary:
        "Async video feedback with comments pinned to the timeline, built for design and product reviews across time zones.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Scope", value: "Research → Prototype" },
        { label: "Year", value: "2026" },
        { label: "Platform", value: "Web" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/huddle-mockup.png",
          alt: "Huddle product mockup in a design studio",
        },
        {
          src: "/images/work/case-studies/huddle-hero.png",
          alt: "Huddle case study hero",
        },
        {
          src: "/images/work/case-studies/huddle-detail.png",
          alt: "Huddle interface design detail",
        },
      ],
      sections: [
        {
          title: "Overview",
          body: [
            "Remote teams default to live calls for nuance. Huddle explores recording, timeline comments, and clear reply status so async actually works.",
          ],
        },
      ],
    },
  },
  {
    slug: "wavelength",
    name: "Wavelength",
    year: "2026",
    sortOrder: 5,
    discipline: "Concept · Consumer",
    liveUrl: null,
    thumbnail: "/images/work/mockups/wavelength-transparent.png",
    heroImage: "/images/work/mockups/wavelength-mockup-v2.png",
    tileBg: "#c2456b",
    card: {
      category: "Concept",
      subtitle: "Music queued around your mood",
      tags: ["Mobile", "Glass UI"],
      gradient: "linear-gradient(135deg, #ffb454 0%, #c2456b 100%)",
    },
    caseStudy: {
      headline: "A music player that queues around how you feel, not what you typed.",
      summary:
        "Glass UI exploration for mood-first listening: fewer menus, more context from time of day and recent saves.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Year", value: "2026" },
        { label: "Platform", value: "Mobile" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/wavelength-mockup.png",
          alt: "Wavelength music app product mockup",
        },
        {
          src: "/images/work/case-studies/wavelength-hero.png",
          alt: "Wavelength case study hero",
        },
        {
          src: "/images/work/case-studies/wavelength-detail.png",
          alt: "Wavelength interface design detail",
        },
        { src: "/wavelength-art/good-to-be.svg", alt: "Wavelength mood screen" },
        { src: "/wavelength-art/half-awake.svg", alt: "Half awake playlist art" },
        { src: "/wavelength-art/coffee-light.svg", alt: "Coffee light mood" },
      ],
      sections: [
        {
          title: "Overview",
          body: [
            "Streaming apps optimize for search and charts. Wavelength asks what if the first screen reflected emotional context instead of catalogs.",
          ],
        },
      ],
    },
  },
  {
    slug: "fang-rung",
    name: "Fang & Rung",
    year: "2026",
    sortOrder: 6,
    discipline: "Concept · Game UX",
    liveUrl: null,
    thumbnail: "/images/work/mockups/fang-rung-transparent.png",
    heroImage: "/images/work/mockups/fang-rung-mockup-v2.png",
    tileBg: "#8b6bff",
    card: {
      category: "Concept",
      subtitle: "Snakes and ladders, redesigned with craft",
      tags: ["Game", "Mobile"],
      gradient: "linear-gradient(135deg, #ffe14d 0%, #8b6bff 100%)",
    },
    caseStudy: {
      headline: "Classic board game energy without casino anxiety.",
      summary:
        "Memphis-influenced mobile game UX: tactile boards, clear turns, and illustration-led delight.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Year", value: "2026" },
        { label: "Platform", value: "Mobile game" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/fang-rung-mockup.png",
          alt: "Fang and Rung game product mockup",
        },
        {
          src: "/images/work/case-studies/fang-rung-hero.png",
          alt: "Fang & Rung case study hero",
        },
        {
          src: "/images/work/case-studies/fang-rung-detail.png",
          alt: "Fang & Rung game interface detail",
        },
      ],
      sections: [
        {
          title: "Overview",
          body: [
            "Reframed snakes and ladders as a cozy session game: short rounds, readable boards, and motion that celebrates progress without punishment.",
          ],
        },
      ],
    },
  },
  {
    slug: "bloom",
    name: "Bloom",
    year: "2026",
    sortOrder: 7,
    discipline: "Concept · Wellbeing",
    liveUrl: null,
    thumbnail: "/images/work/mockups/bloom-transparent.png",
    heroImage: "/images/work/mockups/bloom-mockup-v2.png",
    tileBg: "#c9a2ff",
    card: {
      category: "Concept",
      subtitle: "Workplace check-ins people answer honestly",
      tags: ["Wellbeing", "Mobile"],
      gradient: "linear-gradient(135deg, #ffb3c6 0%, #c9a2ff 100%)",
    },
    caseStudy: {
      headline: "Workplace check-ins people answer honestly.",
      summary:
        "Mobile wellbeing concept: low-pressure prompts and team insights without surveillance vibes.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Year", value: "2026" },
        { label: "Platform", value: "Mobile" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/bloom-mockup.png",
          alt: "Bloom wellbeing product mockup",
        },
        {
          src: "/images/work/case-studies/bloom-hero.png",
          alt: "Bloom case study hero",
        },
        {
          src: "/images/work/case-studies/bloom-detail.png",
          alt: "Bloom wellbeing interface detail",
        },
      ],
      sections: [
        {
          title: "Overview",
          body: [
            "Most HR tools feel like performance monitoring. Bloom explores anonymous pulse checks and manager summaries that protect psychological safety.",
          ],
        },
      ],
    },
  },
  {
    slug: "flash-marketplace",
    name: "Flash Marketplace",
    year: "2026",
    sortOrder: 8,
    discipline: "Product design · E-commerce",
    liveUrl: null,
    thumbnail: "/images/work/mockups/flash-marketplace-transparent.png",
    heroImage: "/images/work/mockups/flash-marketplace-mockup-v2.png",
    tileBg: "#f3d9c4",
    card: {
      category: "Flash Pharmacy",
      subtitle: "Product pages and category browsing for the everyday shop",
      tags: ["E-commerce", "Web"],
      gradient: "linear-gradient(135deg, #f7c9a8 0%, #e39a6b 100%)",
    },
    caseStudy: {
      headline: "The other side of Flash Pharmacy: makeup, self-care, same-day.",
      summary:
        "Flash Marketplace is the everyday shop behind Flash Pharmacy: product pages, filtering, and category browsing for makeup and self-care, sitting next to the clinical Longevity program on the same platform.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Client", value: "Flash Pharmacy" },
        { label: "Year", value: "2026" },
        { label: "Platform", value: "Marketing web" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/flash-marketplace-mockup-v2.png",
          alt: "Flash Marketplace product page mockup",
        },
        {
          src: "/images/work/mockups/flash-marketplace-detail-v2.png",
          alt: "Flash Marketplace makeup category page mockup",
        },
      ],
      sections: [
        {
          title: "Overview",
          body: [
            "Flash Longevity gets the clinical treatment: calm, glass, restrained. Flash Marketplace is the opposite brief: a same-day pharmacy shop that also has to sell lip butter and daily moisturizer, so it needs to feel warm and fast, not sterile.",
            "Product pages carry trending colors, size selectors, and a loyalty-points nudge (Glow Drops). Category pages lean on smart filters (skin tone matcher, mood-based browsing) so a large catalog still feels curated rather than dumped on the visitor.",
          ],
        },
        {
          title: "Key decisions",
          body: [
            "One design system, two moods: same components as Flash Longevity, but warmer color and photography direction so the shop doesn't feel like a hospital gift store.",
            "Social proof over specs: \"54 of your friends bought this\" does more work than another bullet list of ingredients.",
          ],
        },
      ],
    },
  },
  {
    slug: "roobinium",
    name: "Roobinium",
    year: "2024",
    sortOrder: 1,
    discipline: "Product design · AI agents",
    liveUrl: null,
    liveLabel: null,
    thumbnail: "/images/work/mockups/roobinium-transparent.png",
    heroImage: "/images/work/mockups/roobinium-mockup-v2.png",
    tileBg: "#1a0f0a",
    card: {
      category: "Real project",
      subtitle: "Autonomous agents by voice or text",
      tags: ["AI", "Mobile"],
      gradient: "linear-gradient(135deg, #ff7a2e 0%, #c22a1f 100%)",
    },
    caseStudy: {
      headline: "Building and running autonomous agents, by voice or by text.",
      summary:
        "Roobinium at Sadax: an AI agent builder for crypto and DeFi workflows with a bold, terminal-adjacent mobile UI.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Company", value: "Sadax" },
        { label: "Year", value: "2024" },
        { label: "Platform", value: "Mobile" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/roobinium-mockup.png",
          alt: "Roobinium AI-agent product mockup",
        },
        {
          src: "/images/work/case-studies/roobinium-hero.png",
          alt: "Roobinium case study hero",
        },
        {
          src: "/images/work/case-studies/roobinium-detail.png",
          alt: "Roobinium agent interface detail",
        },
        { src: "/assets/roobinium/home.png", alt: "Roobinium home screen" },
        { src: "/assets/roobinium/chat.png", alt: "Agent chat interface" },
        { src: "/assets/roobinium/voice.png", alt: "Voice agent control" },
      ],
      sections: [
        {
          title: "Overview",
          body: [
            "Users needed to spin up agents, monitor tasks, and recover from failure without reading dense docs. The UI balances power-user density with clear status at a glance.",
          ],
        },
        {
          title: "Outcomes",
          body: [
            "Shipped flows for agent creation, chat, and voice control, contributing to measurable engagement improvements on the Sadax studio product line.",
          ],
        },
      ],
    },
  },
  {
    slug: "safes-family",
    name: "Safes Family",
    year: "2022",
    sortOrder: 1,
    discipline: "Product design · Mobile",
    liveUrl: "https://www.safes.so/",
    liveLabel: "Visit Safes",
    thumbnail: "/images/work/mockups/safes-family-transparent.png",
    heroImage: "/images/work/mockups/safes-family-mockup-v2.png",
    tileBg: "#0c1a3a",
    card: {
      category: "Shipped",
      subtitle: "Parental control across 40+ screens",
      tags: ["Mobile", "Safety"],
      gradient: "linear-gradient(135deg, #151f46 0%, #f8b400 130%)",
    },
    caseStudy: {
      headline: "Balancing a child's independence with their safety.",
      summary:
        "Safes Family parental control: geofences, screen time, and onboarding that doesn't feel like surveillance.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Company", value: "Sternx" },
        { label: "Year", value: "2022" },
        { label: "Platform", value: "iOS & Android" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/safes-family-mockup.png",
          alt: "Safes Family mobile app product mockup",
        },
        { src: "/assets/safes/hero.png", alt: "Safes Family hero" },
        { src: "/assets/safes/onboarding.png", alt: "Onboarding flow" },
        { src: "/assets/safes/geofence.png", alt: "Geofence screens" },
        { src: "/assets/safes/smart-screen.png", alt: "Screen time controls" },
      ],
      sections: [
        {
          title: "Overview",
          body: [
            "Parents need control without constant conflict. I designed flows for limits, location, and trust, across more than forty shipped screens.",
          ],
        },
      ],
    },
  },
  {
    slug: "greengenie",
    name: "GreenGenie",
    year: "2021",
    sortOrder: 1,
    discipline: "Product design · Mobile",
    liveUrl: null,
    thumbnail: "/images/work/mockups/greengenie-transparent.png",
    heroImage: "/images/work/mockups/greengenie-mockup-v2.png",
    tileBg: "#2f6b4f",
    card: {
      category: "First app",
      subtitle: "Plant care companion end to end",
      tags: ["Mobile", "Lifestyle"],
      gradient: "linear-gradient(135deg, #69b48c 0%, #2f6b4f 100%)",
    },
    caseStudy: {
      headline: "The app that taught me to design an app end to end.",
      summary:
        "GreenGenie: identify plants, get care instructions, and receive reminders before they wilt.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Type", value: "Personal project" },
        { label: "Year", value: "2021" },
        { label: "Platform", value: "iOS" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/greengenie-mockup.png",
          alt: "GreenGenie plant care app product mockup",
        },
        {
          src: "/assets/greengenie/onboarding-hero.png",
          alt: "GreenGenie onboarding",
        },
        {
          src: "/assets/greengenie/home-dashboard.png",
          alt: "Home dashboard",
        },
        {
          src: "/assets/greengenie/plant-scan-result.png",
          alt: "Plant scan result",
        },
      ],
      sections: [
        {
          title: "Overview",
          body: [
            "My first full product loop: onboarding, core habit, and edge cases like unknown species. GreenGenie is where I learned to justify every screen.",
          ],
        },
      ],
    },
  },
];

export const projects = [...baseProjects].sort((a, b) => {
  const y = Number(b.year) - Number(a.year);
  if (y !== 0) return y;
  return a.sortOrder - b.sortOrder;
});

export const workPortfolio = projects.map((p) => ({
  slug: p.slug,
  name: p.name,
  year: p.year,
  discipline: p.discipline,
  thumbnail: p.thumbnail,
  tileBg: p.tileBg,
  card: p.card,
  liveUrl: p.liveUrl,
}));

export const WORK_PORTFOLIO_COUNT = workPortfolio.length;

/** Four newest projects by date (year + sort order). */
export const homeWorkPortfolio = workPortfolio.slice(0, 4);

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function workHref(slug) {
  return `/work/${slug}`;
}

export function getAdjacentProject(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: projects[i + 1] ?? null,
    next: projects[i - 1] ?? null,
  };
}
