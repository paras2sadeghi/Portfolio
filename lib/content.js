export const profile = {
  name: "Parastoo Sadeghi",
  lastName: "Sadeghi",
  role: "Product Designer",
  location: "Vancouver, BC",
  email: "parastoo.sadeghi1391@gmail.com",
  linkedin: "https://www.linkedin.com/in/parastoo-sadeghi/",
  instagram: "https://instagram.com/the.paras2",
  whatsapp: "https://wa.me/16046537460",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Vancouver, BC — where the sky is allergic to being blue",
  greeting: "Hello!",
  role: "Product Designer",
  tagline:
    "Ten products across healthcare, cybersecurity, games, fitness, social, and SaaS.",
  aboutLink: "About me",
  body: "I design products and then build the front-end for them. Five years, four companies, ten shipped products — a hospital platform, a parental-control app used by families, an AI agent builder for crypto, and a board game. Range is the point, not an accident.",
};

/** Dennis-style home intro block (below hero). */
export const homeIntro = {
  lines: [
    "I've designed hospital software,",
    "crypto AI agents, and snakes and ladders.",
    "Nobody is more surprised than me.",
  ],
  aside:
    "Ten products in five years across four companies — healthcare, cybersecurity, games, fitness, social, SaaS. I design them, then I write the front-end, which makes me either very useful or very annoying to engineers. Ask them.",
  ctaLabel: hero.aboutLink,
  ctaHref: "/about",
};

/** Full /about page copy (see dennissnellenberg.com/about for structure reference). */
export const aboutPage = {
  headline: "I'm not quiet. I'm buffering.",
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
      "A clinical dashboard and a board game want opposite things from you. One should disappear; the other should be delicious. Designing across healthcare, cybersecurity, games, and fitness meant learning what each kind of product actually owes its user — so I don't show up with a template and call it a system.",
  },
};

export const aboutStory = [
  "I went to film school because I liked deciding what people looked at. It turns out that is a job. It's just called product design instead of directing.",
  "I left because I was more interested in fixing the frame than finishing the scene. Everyone else: “we need this shot by six.” Me: “yes, but why is that chair there?” That was the moment.",
  "I grew up in Iran and moved to Vancouver in my twenties, where the recycling has seventeen bins and defeated me immediately. Since then: ten products, four companies, and one snakes-and-ladders game I think about more than is reasonable.",
];

export const experience = [
  {
    year: "Now",
    role: "Lead Product Designer",
    org: "Flash Pharmacy",
    detail:
      "Leading design for healthcare platforms and complex clinical workflows.",
  },
  {
    year: "2024",
    role: "Product Designer",
    org: "Sadax",
    detail:
      "Designed Roobinium, an AI agent builder for crypto and DeFi tasks.",
  },
  {
    year: "2022",
    role: "Product Designer",
    org: "Sternx",
    detail:
      "Designed Safes Family, a shipped parental control app across iOS and Android.",
  },
  {
    year: "Start",
    role: "First app",
    org: "GreenGenie",
    detail:
      "Built the plant-care app that started the habit of designing end to end.",
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
  { value: "5+", label: "years of experience", dot: "#8B5CF6" },
  { value: "4%", label: "rise in conversion rate at Sadax Studio", dot: "#F5C518" },
  { value: "4", label: "companies shipped products for", dot: "#2FA98A" },
];

export const references = [
  {
    name: "William He",
    title: "Full-Stack Developer",
    company: "Flash Pharmacy",
    phone: "(778) 895-5428",
  },
  {
    name: "Lola Asad",
    title: "AI Developer",
    company: "Flash Pharmacy",
    phone: "(416) 523-4159",
  },
];

export const services = [
  {
    id: "ux-design",
    title: "UX Design",
    description:
      "Research, flows, and interfaces across ten shipped products — clinical tools, consumer apps, games. If it needs a tutorial, I'm not finished.",
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
      "I'm Lead Product Designer at Flash Pharmacy right now. But I'm nosy, so tell me anyway.",
  },
  {
    question: "You've designed wildly different things. Is that on purpose?",
    answer:
      "Completely. Healthcare, cybersecurity, games, fitness, social, SaaS. A board game and a clinical dashboard want opposite things from you, and having to figure that out each time is the fastest cure for designing on autopilot.",
  },
  {
    question: "What's your design process like?",
    answer:
      "Research, flows, wireframes, prototypes. Then I hover near engineering until it ships correctly. The hovering is a real step. I've stopped pretending otherwise.",
  },
  {
    question: "Which tools do you design in?",
    answer:
      "Figma and FigJam mostly, Adobe for visuals, and AI tools like Claude Design and Google Stitch when I want to explore fast. I once spent an entire dinner redesigning the restaurant's menu. I was physically present. Mentally I was in Figma.",
  },
  {
    question: "Do you also write code?",
    answer:
      "Yes — React, TypeScript, JavaScript, CSS, HTML. Enough to build the front-end myself, and enough to know when the thing I'm asking for is genuinely annoying to implement.",
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
    { label: "WhatsApp", href: profile.whatsapp },
    { label: "Email", href: `mailto:${profile.email}` },
  ],
};
