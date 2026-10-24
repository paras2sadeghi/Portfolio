// Canonical origin. The bare domain redirects here, so this is the address
// search engines and agents should treat as the site.
export const SITE_URL = "https://www.parastoo.studio";

export const profile = {
  name: "Parastoo Sadeghi",
  lastName: "Sadeghi",
  role: "Product Designer",
  proposition: "Product designer for complex, human experiences.",
  current: "Currently leading healthcare product design at Flash Pharmacy.",
  location: "Vancouver, BC",
  availability: "Available for full-time & freelance",
  workplace: "Vancouver · Remote",
  email: "parastoo.sadeghi1391@gmail.com",
  linkedin: "https://www.linkedin.com/in/parastoo-sadeghi/",
  instagram: "https://instagram.com/the.paras2",
  // Public path of the résumé PDF (e.g. "/Parastoo-Sadeghi-Resume.pdf" with
  // the file in /public). The résumé links in the hero and footer only render
  // once this is set. Use a public version: no phone number, no references.
  resumeUrl: null,
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Vancouver, BC. Where the sky is allergic to being blue.",
  greeting: "Hello!",
  role: "Product Designer",
  tagline:
    "Ten products across healthcare, cybersecurity, games, fitness, social, and SaaS.",
  aboutLink: "About me",
  body: "I design products and then build the front-end for them. Five years, four companies, ten shipped products: a hospital platform, a parental-control app used by families, an AI agent builder for crypto, and a board game. Range is the point, not an accident.",
};

/** Dennis-style home intro block (below hero). */
export const homeIntro = {
  lines: [
    "I've designed hospital software,",
    "crypto AI agents, and snakes and ladders.",
    "Nobody is more surprised than me.",
  ],
  aside:
    "I turn complicated services into understandable flows and consistent interfaces, across healthcare platforms, consumer apps and AI tools. I write the front-end too, so handoff is a conversation instead of a translation.",
  ctaLabel: hero.aboutLink,
  ctaHref: "/about",
};

/** Full /about page copy (see dennissnellenberg.com/about for structure reference). */
export const aboutPage = {
  headline: "I don't do small talk. I ask follow-up questions.",
  facts:
    "Lead Product Designer at Flash Pharmacy in Vancouver. I design healthcare products across e-commerce, online care and membership, and build their front-ends in React.",
  lead:
    "I collect data quietly, and then produce 38 opinions and a redesigned version of whatever we were discussing. At work this is called product design. Growing up it was called “who moved this.”",
  exploring: [
    "Healthcare",
    "Cybersecurity",
    "Games",
    "Fitness & wellbeing",
    "Social & consumer",
    "B2B SaaS",
    "AI products",
    "Design systems",
  ],
  servicesTitle: "I can help you with …",
  spotlight: {
    title: "Range is the whole point.",
    body:
      "A clinical dashboard and a board game want opposite things from you. One should disappear; the other should be delicious. Designing across healthcare, cybersecurity, games, and fitness meant learning what each kind of product actually owes its user, so I don't show up with a template and call it a system.",
  },
};

export const aboutStory = [
  "I went to film school because I liked deciding what people looked at. It turns out that is a job. It's just called product design instead of directing.",
  "I left because I was more interested in fixing the frame than finishing the scene. Everyone else: “we need this shot by six.” Me: “yes, but why is that chair there?” That was the moment.",
  "I grew up in Iran and moved to Vancouver in my twenties, where the recycling has seventeen bins and defeated me immediately. Since then: ten products, four companies, and one snakes-and-ladders game I think about more than is reasonable.",
];

export const experience = [
  {
    year: "2025 – now",
    role: "Lead Product Designer",
    org: "Flash Pharmacy · Vancouver",
    evidence:
      "Led design of a platform spanning shopping, prescriptions, online care and membership; built its shared Figma component library.",
    href: "/work/flash-pharmacy",
    detail:
      "Led design of Flash's first AI-powered telehealth and e-commerce platform, from concept to launch, and built its Figma design system and component library. Work closely with product managers and engineers to define requirements.",
  },
  {
    year: "2023 – 2024",
    role: "Senior UI/UX Designer",
    org: "Sadax Studio · Amsterdam, remote",
    evidence:
      "Client web, mobile and SaaS products from research to development, including Roobinium, an AI agent builder.",
    href: "/work/roobinium",
    detail:
      "Web, mobile and SaaS products for clients, from research to development, including Roobinium, an AI agent builder for crypto and DeFi.",
  },
  {
    year: "2021 – 2023",
    role: "Product Designer",
    org: "Proshot Softwares · Melbourne",
    evidence:
      "User research, usability testing and competitive analysis behind design choices.",
    detail:
      "User research, usability testing and competitive analysis to back design choices, with fast iteration alongside other departments.",
  },
  {
    year: "2020 – 2022",
    role: "Junior UI/UX Designer",
    org: "SternX · Dubai",
    evidence: "Designed Safes Family, a parental-control app shipped on iOS and Android.",
    href: "/work/safes-family",
    detail:
      "Web and mobile interfaces, including Safes Family, a parental-control app shipped on iOS and Android.",
  },
  {
    year: "2021",
    role: "Personal project",
    org: "GreenGenie",
    detail:
      "The plant-care app that started the habit of designing end to end.",
  },
];

export const capabilities = [
  "Product strategy",
  "UX research",
  "Interaction design",
  "Design systems",
  "Prototyping",
  "Front-end collaboration",
];

// Featured projects now live in lib/caseStudies.js and are rendered by
// components/FeaturedWork.jsx.

export const stats = [
  { value: "6", label: "years designing products, since 2020", dot: "#8B5CF6" },
  { value: "10", label: "products shipped across four companies", dot: "#F5C518" },
  { value: "4", label: "cities of teams: Vancouver, Amsterdam, Melbourne, Dubai", dot: "#2FA98A" },
];

export const services = [
  {
    id: "ux-design",
    title: "UX Design",
    description:
      "Research, flows, and interfaces across ten shipped products: clinical tools, consumer apps, games. I keep simplifying until the interface explains itself, and save onboarding for what genuinely needs it.",
    tags: ["Figma", "FigJam", "Adobe Suite", "+more"],
    swatches: ["#FF9A6C", "#C74B8B", "#123B46"],
    featured: false,
  },
  {
    id: "design-systems",
    title: "Design Systems",
    description:
      "Component libraries that stop a product from quietly becoming six products in a trench coat. Safes Family was 40+ screens across iOS and Android and stayed consistent.",
    tags: ["Component Libraries", "Prototyping", "+more"],
    swatches: ["#EDE7FF", "#B9A6FF", "#6D4AFF"],
    featured: true,
  },
  {
    id: "frontend-collab",
    title: "Front-End Collaboration",
    description:
      "I write React and TypeScript. Handoff stops being a game of telephone when the designer can read the pull request.",
    tags: ["React", "TypeScript", "+more"],
    swatches: ["#2FA98A", "#1F6F5C", "#8C6A4E"],
    featured: false,
  },
];

export const workflow = {
  heading:
    "Kickoff to launch, without the middle part where everyone quietly forgets what we were building.",
  steps: [
    {
      title: "Discovery Call",
      description:
        "We start with a conversation about your users, your product, and what success looks like.",
    },
    {
      title: "Research & Requirements",
      description:
        "User research and competitive analysis inform the requirements before any pixels move.",
    },
    {
      title: "Design & Prototype",
      description:
        "Wireframes, flows, and high-fidelity prototypes are built and tested with real users.",
    },
    {
      title: "Build & Iterate",
      description:
        "Close collaboration with engineers during build, iterating quickly as feedback comes in.",
    },
    {
      title: "Launch & Support",
      description:
        "Post-launch, I stay close to the data and the team to refine and improve what shipped.",
    },
  ],
};

export const faqs = [
  {
    question: "Are you open to new roles?",
    answer:
      "Yes. I'm leading design at Flash Pharmacy now, and I'm open to the right full-time role or freelance project. Email me what you're building.",
  },
  {
    question: "You've designed wildly different things. Is that on purpose?",
    answer:
      "Completely. Healthcare, cybersecurity, games, fitness, social, SaaS. A board game and a clinical dashboard want opposite things from you, and having to figure that out each time is the fastest cure for designing on autopilot.",
  },
  {
    question: "What's your design process like?",
    answer:
      "It depends on what's riskiest. If we don't understand the problem, I start with research and the people who live it; if the idea is clear but untested, I prototype early and put it in front of users; if the risk is in the build, I pair with engineering from the first component. Then I review implementation until it ships the way it was designed. That last step involves some hovering near engineering. I've stopped pretending otherwise.",
  },
  {
    question: "Which tools do you design in?",
    answer:
      "Figma and FigJam mostly, Adobe for visuals, and AI tools like Claude Design and Google Stitch when I want to explore fast. I once spent an entire dinner redesigning the restaurant's menu. I was physically present. Mentally I was in Figma.",
  },
  {
    question: "Do you also write code?",
    answer:
      "Yes. React, TypeScript, JavaScript, CSS, HTML. Enough to build the front-end myself, and enough to know when the thing I'm asking for is genuinely annoying to implement.",
  },
  {
    question: "Do you take on freelance projects?",
    answer:
      "Occasionally, depending on scope and timing. Ask. Worst case I say no politely.",
  },
  {
    question: "What's the best way to reach you?",
    answer: `Email is best: ${profile.email}. You can also find me on LinkedIn.`,
  },
];

export const footer = {
  navigation: [
    { label: "Home", href: "#top" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  connect: [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Instagram", href: profile.instagram },
    { label: "Email", href: `mailto:${profile.email}` },
  ],
};
