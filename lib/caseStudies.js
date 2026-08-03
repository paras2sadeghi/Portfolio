// Full content + theming for each case study, ported from the published
// concept case-study artifacts. Rendered by app/work/[slug]/page.js.

export const caseStudies = {
  huddle: {
    slug: "huddle",
    brand: "huddle",
    name: "Huddle",
    eyebrow: "Product design · B2B SaaS",
    theme: {
      accent: "#8b7cff",
      accent2: "#4fd1ff",
      warn: "#ff8a7a",
      ink: "#eef0f8",
      inkDim: "#9298b3",
      glass: "rgba(255,255,255,0.055)",
      glassBorder: "rgba(255,255,255,0.12)",
      bodyBg:
        "radial-gradient(ellipse 900px 600px at 10% -5%, rgba(139,124,255,0.20), transparent 60%), radial-gradient(ellipse 700px 500px at 95% 15%, rgba(79,209,255,0.14), transparent 55%), radial-gradient(ellipse 800px 600px at 40% 105%, rgba(255,138,122,0.10), transparent 60%), #0a0d16",
    },
    hero: {
      titleLead: "“Can we hop on a call”",
      titleEm: "shouldn’t be the default.",
      sub: "An async video feedback tool for remote design and product teams — built so a 90-second recording can replace a 30-minute meeting.",
    },
    meta: [
      { k: "Role", v: "Product Designer" },
      { k: "Scope", v: "Research → UI → Prototype" },
      { k: "Timeline", v: "Self-directed, 2026" },
      { k: "Platform", v: "Web · Desktop" },
    ],
    problem: {
      paras: [
        "Remote design teams default to a meeting for anything that needs nuance — a screen with three “not quite right” states, a flow that reads fine in a ticket but feels off when clicked through. But scheduling across time zones is slow, and most of a 30-minute review call is spent just pointing at things.",
        "Existing async tools (Loom, screen-recording plugins) solved recording, but not the conversation that follows — feedback stayed as scattered comments disconnected from the exact moment in the video it referred to.",
      ],
      stats: [
        { big: "4.6 hrs", lbl: "average weekly time designers reported spending in review meetings*" },
        { big: "61%", lbl: "of that feedback could have been given without a live call*" },
      ],
      footnote: "*From informal interviews with 9 designers/PMs conducted for this project, not a published study.",
    },
    principlesTitle: "What teams actually needed",
    principles: [
      { icon: "◐", title: "Feedback tied to the frame", text: "A comment about “the spacing at 0:14” is useless once decoupled from that exact moment. Every note needed to live on the timeline, not in a separate thread." },
      { icon: "◑", title: "Watch once, respond anytime", text: "Teams wanted the async-ness to be real — no pressure to reply live, but a clear signal of who’s watched and who still owes a response." },
      { icon: "◒", title: "Low friction to start", text: "The tool had to beat “just open a Zoom” in speed. If recording and sharing took more than two clicks, people reverted to old habits." },
    ],
    decisions: [
      { no: "01", title: "Comments live on the scrubber, not a sidebar", why: "Markers pinned directly to the timeline make feedback spatially tied to the moment it describes — no re-explaining “at the part where…”" },
      { no: "02", title: "“Awaiting reply” as a first-class status", why: "Async only works if it’s visible who owes what. This status replaces the anxiety of “did they see this?” that drove people back to live calls." },
      { no: "03", title: "Record-and-share in one motion", why: "No separate upload/share step — recording auto-attaches to the project it was opened from, removing the friction that made Zoom feel faster." },
    ],
    reflection: [
      "The interesting design problem here wasn’t video — it was status. Async tools live or die on whether people trust that their feedback will actually be seen. Most of my iteration went into small, unglamorous signals: read receipts, reply badges, gentle nudges — not the recorder itself.",
      "If I extended this, I’d want to design for the moment a thread should escalate back to a live call — async shouldn’t mean never talking, just not defaulting to it.",
    ],
    footerNote: "Designed as an original product exploration; not an existing or shipped product.",
    card: {
      category: "B2B SaaS",
      subtitle: "Async video feedback that replaces the meeting",
      tags: ["Web app", "Prototype"],
      gradient: "linear-gradient(135deg, #8b7cff 0%, #4fd1ff 100%)",
    },
  },

  transit: {
    slug: "transit",
    brand: "transit",
    name: "Transit",
    eyebrow: "Product design · Mobile",
    theme: {
      accent: "#7fffb0",
      accent2: "#7fffb0",
      warn: "#ffb454",
      ink: "#eef4f1",
      inkDim: "#9fb3ac",
      glass: "rgba(255,255,255,0.06)",
      glassBorder: "rgba(255,255,255,0.14)",
      titleEmSolid: true,
      bodyBg:
        "radial-gradient(ellipse 900px 600px at 15% -5%, rgba(127,255,176,0.16), transparent 60%), radial-gradient(ellipse 700px 500px at 90% 10%, rgba(255,180,84,0.10), transparent 55%), radial-gradient(ellipse 900px 700px at 50% 100%, rgba(60,140,110,0.14), transparent 60%), #0b1210",
    },
    hero: {
      titleLead: "Knowing the bus is late",
      titleEm: "before you leave the house.",
      sub: "A redesign of the everyday transit app — rebuilding trust in real-time predictions through honest uncertainty, not false precision.",
    },
    meta: [
      { k: "Role", v: "Product Designer" },
      { k: "Scope", v: "Research → UI → Prototype" },
      { k: "Timeline", v: "Self-directed, 2026" },
      { k: "Platform", v: "iOS · Android" },
    ],
    problem: {
      paras: [
        "Most transit apps show a single confident number — “4 min” — and then let riders stand at a cold curb while the bus doesn’t come. The prediction isn’t wrong on purpose; live transit data is genuinely noisy. But apps present it as fact, so when it breaks, riders stop trusting the app entirely and fall back on guessing.",
        "The goal wasn’t to build a better prediction algorithm — it was to design an interface honest about what it doesn’t know, so riders can make better decisions even when the data is uncertain: leave now, wait two more minutes, or take the next one.",
      ],
      stats: [
        { big: "68%", lbl: "of riders say they’ve been “burned” by a wrong ETA in the last month*" },
        { big: "3.2×", lbl: "more likely to distrust the whole app after one bad prediction*" },
      ],
      footnote: "*Directional figures from an informal survey of 22 daily transit riders conducted for this project, not a published study.",
    },
    principlesTitle: "What riders actually needed",
    principles: [
      { icon: "◐", title: "Confidence, not just a number", text: "Riders wanted to know how sure the app was — a wobbly signal near a bus that hasn’t left the depot feels different from a bus two stops away." },
      { icon: "◑", title: "A decision, not data", text: "What they actually wanted was one clear instruction: leave now, or you have time. Not a wall of numbers to interpret under stress." },
      { icon: "◒", title: "Silence is worse than bad news", text: "A stalled or cancelled route with no explanation caused more frustration than any late bus. People just wanted to be told what was happening." },
    ],
    decisions: [
      { no: "01", title: "Color-coded confidence, not just numbers", why: "Green/amber signal reliability at a glance, before the rider even reads the ETA — critical for a screen glanced at for 2 seconds while walking." },
      { no: "02", title: "One instruction, always at the top", why: "“You have time to walk” outranks the raw minute count in visual hierarchy — the decision matters more than the data behind it." },
      { no: "03", title: "Alerts explain themselves", why: "Every disruption includes a plain-language reason. Unexplained delays were the single biggest driver of reported distrust in early interviews." },
    ],
    reflection: [
      "The hardest part of this project wasn’t the UI — it was accepting that a good transit app sometimes has to say “we’re not sure.” Most products are built to project confidence. Here, confidence is the thing that needed to be earned back.",
      "If I extended this further, I’d want to test the amber “low confidence” state with real riders under time pressure — glanceable trust signals are easy to design and hard to validate without a live deployment.",
    ],
    footerNote: "Designed as an original product exploration; not affiliated with or built for any transit agency.",
    card: {
      category: "Mobile",
      subtitle: "Honest ETAs that rebuild rider trust",
      tags: ["iOS · Android", "Research"],
      gradient: "linear-gradient(135deg, #7fffb0 0%, #2f9d78 55%, #ffb454 100%)",
    },
  },

  bloom: {
    slug: "bloom",
    brand: "bloom",
    name: "Bloom",
    eyebrow: "Product design · Wellbeing · Mobile",
    theme: {
      accent: "#ffb3c6",
      accent2: "#c9a2ff",
      warn: "#ffcf9e",
      ink: "#f7eef2",
      inkDim: "#c2a9bb",
      glass: "rgba(255,255,255,0.07)",
      glassBorder: "rgba(255,255,255,0.15)",
      bodyBg:
        "radial-gradient(ellipse 900px 650px at 12% -8%, rgba(255,179,198,0.24), transparent 60%), radial-gradient(ellipse 800px 600px at 95% 10%, rgba(201,162,255,0.22), transparent 55%), radial-gradient(ellipse 900px 700px at 45% 105%, rgba(255,207,158,0.14), transparent 60%), #180f1c",
    },
    hero: {
      titleLead: "“How are you, really”",
      titleEm: "needs a better answer than a smiley.",
      sub: "A workplace check-in app designed to surface real team stress early — without turning wellbeing into another metric to perform for.",
    },
    meta: [
      { k: "Role", v: "Product Designer" },
      { k: "Scope", v: "Research → UI → Prototype" },
      { k: "Timeline", v: "Self-directed, 2026" },
      { k: "Platform", v: "iOS · Android" },
    ],
    problem: {
      paras: [
        "Most workplace wellbeing tools ask “how do you feel, 1 to 5?” once a week and call it done. People learn fast that honest answers get flagged, so they answer what’s safe — a green dashboard that hides a team quietly burning out.",
        "This project started from a personal place: watching how easy it is to smile through a check-in while privately falling apart, and how little most tools do to make honesty feel safe rather than risky.",
      ],
      stats: [
        { big: "76%", lbl: "of employees say they’ve under-reported stress in a workplace survey, fearing consequences*" },
        { big: "12 sec", lbl: "average time spent on a typical weekly check-in — too fast to be honest*" },
      ],
      footnote: "*Directional figures gathered from informal peer conversations for this project, not a published study.",
    },
    principlesTitle: "What people actually needed",
    principles: [
      { icon: "◐", title: "Privacy by default", text: "Individual answers had to stay private from managers by design — only aggregated, anonymized team trends surface upward. Trust had to be structural, not promised." },
      { icon: "◑", title: "Room for nuance", text: "A single mood slider flattens everything. People wanted to say “fine, but tired” or “stressed, but excited” — two dimensions, not one." },
      { icon: "◒", title: "A soft landing, not a form", text: "The check-in needed to feel like being asked by a friend, not filling out HR paperwork — tone and pacing mattered as much as the questions themselves." },
    ],
    decisions: [
      { no: "01", title: "Two-axis mood, not one slider", why: "Separating surface energy from underlying feeling let people express contradictions honestly — “okay on the outside, exhausted underneath” is a real, common state." },
      { no: "02", title: "Privacy explained as a screen, not a footnote", why: "Trust doesn’t come from a privacy policy nobody reads. Making the data boundary visible in-product was the single highest-impact decision in early testing." },
      { no: "03", title: "Nudges instead of alarms for managers", why: "Framing dips as gentle suggestions rather than red-flag alerts avoided turning the tool into a surveillance system that punishes visible struggle." },
    ],
    reflection: [
      "This was the project where design decisions felt the most consequential in a non-obvious way. A slightly wrong default — showing individual data by accident, or wording a nudge like a warning — could undo months of trust instantly. Working on it made me much more careful about what “safe by design” actually requires, not just states as a value.",
      "If I extended this, I’d want to pressure-test the anonymity threshold with very small teams, where “5+ people” can still feel identifiable — that’s the edge case that would make or break real-world trust.",
    ],
    footerNote: "Designed as an original product exploration; not an existing or shipped product.",
    card: {
      category: "Wellbeing",
      subtitle: "Workplace check-ins people answer honestly",
      tags: ["Mobile", "Research"],
      gradient: "linear-gradient(135deg, #ffb3c6 0%, #c9a2ff 100%)",
    },
  },

  wavelength: {
    slug: "wavelength",
    brand: "wavelength",
    name: "Wavelength",
    eyebrow: "Product design · Consumer · Mobile",
    theme: {
      accent: "#ff8a3d",
      accent2: "#ffd166",
      warn: "#c2456b",
      ink: "#fbf1e6",
      inkDim: "#c9a98c",
      glass: "rgba(255,255,255,0.06)",
      glassBorder: "rgba(255,255,255,0.14)",
      bodyBg:
        "radial-gradient(ellipse 900px 650px at 10% -5%, rgba(255,138,61,0.22), transparent 60%), radial-gradient(ellipse 800px 600px at 95% 15%, rgba(194,69,107,0.20), transparent 55%), radial-gradient(ellipse 900px 700px at 45% 105%, rgba(255,209,102,0.13), transparent 60%), #170f0a",
    },
    hero: {
      titleLead: "Music for a mood",
      titleEm: "you haven’t named yet.",
      sub: "A music player that queues around how you feel, not just what you searched — built to reduce choice fatigue with a warm, tactile now-playing experience.",
    },
    meta: [
      { k: "Role", v: "Product Designer" },
      { k: "Scope", v: "UI System → Prototype" },
      { k: "Timeline", v: "Self-directed, 2026" },
      { k: "Platform", v: "iOS · Android" },
    ],
    problem: {
      paras: [
        "Streaming apps have solved catalog size, not decision fatigue. Opening a music app with 100 million songs available and zero direction is its own small daily friction — most people default to the same three playlists because choosing feels like work.",
        "This project explores a player built around mood-first browsing and a now-playing screen designed to feel worth lingering on, not just a control bar to glance past — closer to a small ritual than a utility.",
      ],
      stats: [
        { big: "142", lbl: "average seconds spent browsing before a track is picked, self-tracked over one week*" },
        { big: "4", lbl: "playlists account for the vast majority of daily listening, per personal streaming history*" },
      ],
      footnote: "*Personal, informal usage observations gathered for this project, not a published study.",
    },
    principlesTitle: "Design principles",
    principles: [
      { icon: "◐", title: "Mood before genre", text: "Browsing starts from a feeling — “focused,” “wired,” “slow morning” — rather than genre tags that require already knowing what you want." },
      { icon: "◑", title: "Album art does the talking", text: "The now-playing screen treats artwork as the dominant visual element, with the interface receding into translucent glass rather than competing for attention." },
      { icon: "◒", title: "Warmth over sterility", text: "Amber and wine gradients replace the cold blacks-and-greens of most players — the goal was an interface that feels like dusk, not a spreadsheet." },
    ],
    decisions: [
      { no: "01", title: "Mood chips as the home screen, not a hidden filter", why: "Putting mood selection at the very top of the app, above search, forces the product to commit to being a feeling-first experience rather than a search engine with mood as decoration." },
      { no: "02", title: "Glass, not solid, control surfaces", why: "Translucent panels let the album art’s color bleed through the whole screen, making every track visually distinct instead of sitting behind identical chrome." },
      { no: "03", title: "One consistent gradient family across states", why: "Amber-to-wine gradients repeat across mood chips, play button, and queue art so the whole app reads as one warm object, not disconnected screens." },
    ],
    reflection: [
      "This was the most purely visual project of the set, and the hardest to know when to stop polishing. The real design challenge was restraint — letting the album artwork be the star meant resisting the urge to add more UI, not less.",
      "If I extended this, I’d want to test whether mood-first browsing actually gets used after the novelty wears off, or whether people just fall back to search once they know exactly what they want.",
    ],
    footerNote: "Designed as an original product exploration; not an existing or shipped product. Track/artist names are placeholder content.",
    card: {
      category: "Consumer",
      subtitle: "A music player that queues around your mood",
      tags: ["Mobile", "UI system"],
      gradient: "linear-gradient(135deg, #ff8a3d 0%, #c2456b 100%)",
    },
  },

  "drift-atlas": {
    slug: "drift-atlas",
    brand: "drift atlas",
    name: "Drift Atlas",
    eyebrow: "Game UX design · Mobile",
    theme: {
      accent: "#4fe0c9",
      accent2: "#5b8dff",
      warn: "#ffcf6b",
      ink: "#e9f2f7",
      inkDim: "#8aa3b3",
      glass: "rgba(255,255,255,0.06)",
      glassBorder: "rgba(255,255,255,0.14)",
      bodyBg:
        "radial-gradient(ellipse 900px 650px at 10% -5%, rgba(79,224,201,0.18), transparent 60%), radial-gradient(ellipse 800px 600px at 95% 15%, rgba(91,141,255,0.20), transparent 55%), radial-gradient(ellipse 900px 700px at 45% 105%, rgba(255,207,107,0.09), transparent 60%), #070d16",
    },
    hero: {
      titleLead: "A cozy exploration game",
      titleEm: "that never punishes you for stopping.",
      sub: "UX and interface design for a mobile exploration puzzle game, built around short sessions, calm pacing, and progress that’s always visible — never gated behind anxiety-inducing timers.",
    },
    meta: [
      { k: "Role", v: "Game UX Designer" },
      { k: "Scope", v: "UX Flows → UI System" },
      { k: "Timeline", v: "Self-directed, 2026" },
      { k: "Platform", v: "iOS · Android" },
    ],
    problem: {
      paras: [
        "Most mobile “cozy” games still borrow anxiety mechanics from hardcore free-to-play design — energy timers that punish you for playing too much, streaks that guilt you for missing a day, maps that hide progress behind fog until you pay. That’s exhausting to design around and exhausting to play.",
        "Drift Atlas set out to prove a mobile game can be genuinely calming at the systems level, not just visually — where stopping mid-session never feels like losing, and progress is always legible at a glance.",
      ],
      stats: [
        { big: "4–6 min", lbl: "target average session length — designed for a commute or a coffee break" },
        { big: "0", lbl: "punitive timers, streak-loss mechanics, or paywalled progress in the core loop" },
      ],
    },
    principlesTitle: "Design principles",
    principles: [
      { icon: "◐", title: "Progress is always visible", text: "The world map shows every discovered and undiscovered node at once — no fog of war used as a manipulation tactic, only as genuine mystery worth exploring." },
      { icon: "◑", title: "Stopping is never a loss", text: "No decaying resources, no streak resets. The “energy” system regenerates fully within a day and caps generously, so a missed day costs nothing." },
      { icon: "◒", title: "Collection over competition", text: "Relics and discoveries are personal keepsakes, not leaderboard fuel — the game measures a player’s own journey, never against strangers." },
    ],
    decisions: [
      { no: "01", title: "Full map visibility from the start", why: "Fog-of-war is often used to manufacture urgency. Showing the whole world upfront turns exploration into curiosity instead of FOMO." },
      { no: "02", title: "An energy system that can’t be lost, only spent", why: "Generous caps and no decay remove the guilt loop common in mobile games — the interface actively reassures players that stepping away is fine." },
      { no: "03", title: "No leaderboards, ranks, or social comparison", why: "Keeping the collection screen entirely personal protects the calm tone — competition mechanics reliably reintroduce the anxiety this game was designed to avoid." },
    ],
    reflection: [
      "Designing a system to feel calm is harder than designing one to feel exciting — every default in mobile game design (timers, streaks, ranks) pulls toward urgency, so removing them meant justifying each omission rather than each addition.",
      "If I extended this, I’d want to playtest whether “nothing to lose” mechanics still create enough of a pull to open the app daily — cozy design still has to earn attention, just without anxiety as the tool.",
    ],
    footerNote: "Designed as an original game UX exploration; not an existing or shipped product.",
    card: {
      category: "Game UX",
      subtitle: "A cozy game that never punishes you for stopping",
      tags: ["Mobile", "Game UX"],
      gradient: "linear-gradient(135deg, #4fe0c9 0%, #5b8dff 100%)",
    },
  },
};

// Featured order on the home page (old dynamic-route entries, kept for
// backward compatibility while Bloom still renders through CaseStudyShell).
export const caseStudyOrder = ["bloom"];

export const caseStudyList = caseStudyOrder.map((slug) => caseStudies[slug]);

export function getCaseStudy(slug) {
  return caseStudies[slug] || null;
}

// Cards shown on the home page. Real projects first, then self-directed
// concept explorations, each a standalone page under app/work/<slug>
// (Bloom is the one holdout still on the old shared shell/theme).
export const featuredWork = [
  {
    slug: "roobinium",
    name: "Roobinium",
    year: "2024",
    discipline: "Product design · AI agents",
    thumbnail: "/assets/roobinium/home.png",
    featured: true,
    card: {
      category: "Real project",
      subtitle: "Building and running autonomous agents, by voice or by text",
      tags: ["AI agents", "Mobile"],
      gradient: "linear-gradient(135deg, #ff7a2e 0%, #c22a1f 100%)",
    },
  },
  {
    slug: "flash-longevity",
    name: "Flash Longevity",
    year: "2026",
    discipline: "Product design · Healthcare landing page",
    thumbnail: "",
    featured: true,
    card: {
      category: "Real project · Flash Pharmacy",
      subtitle: "A biological-age program landing page with glassmorphism and calm motion",
      tags: ["Healthcare", "Web"],
      gradient: "linear-gradient(135deg, #b8d4f0 0%, #7eb8e8 50%, #e8f4fc 100%)",
    },
  },
  {
    slug: "connected-health-pitch",
    name: "Connected Health Platform",
    year: "2026",
    discipline: "Pitch deck · Healthcare · NDA",
    thumbnail: "/assets/connected-health-pitch/ai-clinical-assistant.png",
    featured: true,
    card: {
      category: "Real project · Under NDA",
      subtitle: "Series A investor pitch for a connected health platform",
      tags: ["Pitch deck", "Healthcare"],
      gradient: "linear-gradient(135deg, #00d4a8 0%, #03070b 85%)",
    },
  },
  {
    slug: "safes-family",
    name: "Safes Family",
    year: "2022",
    discipline: "Product design · Parental control",
    thumbnail: "/assets/safes/hero.png",
    featured: true,
    card: {
      category: "Real project · Shipped",
      subtitle: "Balancing a child's independence with their safety, across 40+ real screens",
      tags: ["Parental control", "Mobile"],
      gradient: "linear-gradient(135deg, #151f46 0%, #04132c 60%, #f8b400 130%)",
    },
  },
  {
    slug: "greengenie",
    name: "GreenGenie",
    year: "2021",
    discipline: "Product design · First app",
    thumbnail: "/assets/greengenie/onboarding-hero.png",
    featured: true,
    card: {
      category: "Real project · First app",
      subtitle: "A plant care companion, and the first app I designed end to end",
      tags: ["Plant care", "Mobile"],
      gradient: "linear-gradient(135deg, #69b48c 0%, #2f6b4f 100%)",
    },
  },
  {
    slug: "transit",
    name: "Transit",
    year: "2026",
    discipline: "Concept · Mobile utility",
    thumbnail: "",
    featured: true,
    card: {
      category: "Concept · Mobile",
      subtitle: "Honest ETAs that rebuild rider trust",
      tags: ["Swiss style", "Research"],
      gradient: "linear-gradient(135deg, #ffffff 0%, #d81e05 140%)",
    },
  },
  {
    slug: "huddle",
    name: "Huddle",
    year: "2026",
    discipline: "Concept · B2B SaaS",
    thumbnail: "",
    featured: false,
    card: {
      category: "Concept · B2B SaaS",
      subtitle: "Async video feedback that replaces the meeting",
      tags: ["SaaS editorial", "Web app"],
      gradient: "linear-gradient(135deg, #3e63dd 0%, #0c0c0e 100%)",
    },
  },
  {
    slug: "wavelength",
    name: "Wavelength",
    year: "2026",
    discipline: "Concept · Consumer mobile",
    thumbnail: "/wavelength-art/photos/good-to-be.png",
    featured: false,
    card: {
      category: "Concept · Consumer",
      subtitle: "A music player that queues around your mood",
      tags: ["Glass UI", "Mobile"],
      gradient: "linear-gradient(135deg, #ffb454 0%, #c2456b 100%)",
    },
  },
  {
    slug: "fang-rung",
    name: "Fang & Rung",
    year: "2026",
    discipline: "Concept · Game UX",
    thumbnail: "",
    featured: false,
    card: {
      category: "Concept · Game UX",
      subtitle: "Snakes and ladders, redesigned with real graphic craft",
      tags: ["Memphis", "Mobile game"],
      gradient: "linear-gradient(135deg, #ffe14d 0%, #8b6bff 100%)",
    },
  },
  {
    slug: "bloom",
    name: "Bloom",
    year: "2026",
    discipline: "Concept · Workplace wellbeing",
    thumbnail: "",
    featured: false,
    card: {
      category: "Concept · Wellbeing",
      subtitle: "Workplace check-ins people answer honestly",
      tags: ["Mobile", "Research"],
      gradient: "linear-gradient(135deg, #ffb3c6 0%, #c9a2ff 100%)",
    },
  },
];

