export const profile = {
  name: "Parastoo Sadeghi",
  lastName: "Sadeghi",
  role: "Product Designer",
  location: "Vancouver, BC",
  email: "parastoo.sadeghi1391@gmail.com",
  phone: "(604) 653-7460",
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
  badge: "Based in Vancouver, BC",
  headline: `${profile.lastName} is solving complex problems through strategic design and intuitive interfaces`,
  role: "Product Designer",
  tagline:
    "Designing healthcare and SaaS products where clarity is not decoration.",
  aboutLink: "About me",
  body: "As a product designer with a strong focus on healthcare and SaaS platforms, she collaborates closely with product managers and engineers to turn complex workflows into user-centered experiences. A reliable partner in bringing ideas to life.",
};

/** Dennis-style home intro block (below hero). */
export const homeIntro = {
  lines: [
    "Helping brands to stand out in the digital era.",
    "Together we will set the new status quo.",
    "No nonsense, always on the cutting edge.",
  ],
  aside:
    "The combination of my passion for design, code & interaction positions me in a unique place in the web design world.",
  ctaLabel: hero.aboutLink,
  ctaHref: "/about",
};

/** Full /about page copy (see dennissnellenberg.com/about for structure reference). */
export const aboutPage = {
  headline: "Helping products thrive in complex domains",
  lead:
    "I partner with teams building healthcare and SaaS products — tailoring flows, systems, and interfaces that stay calm under pressure. Each project pushes the work toward clearer decisions and sharper craft.",
  exploring: [
    "Healthcare UX",
    "Clinical workflows",
    "Design systems",
    "Motion & interaction",
    "AI products",
    "End-to-end craft",
  ],
  servicesTitle: "I can help you with …",
  spotlight: {
    title: "Where clarity is not decoration",
    body:
      "Most of my work sits where design meets regulation, legacy systems, and real users under stress. I think in sequences — pacing, empty states, and what you withhold matter as much as what you show on screen.",
  },
};

export const aboutStory = [
  "I started in cinema and UX writing, which is a strange route into product design and also the reason I think in sequences rather than screens.",
  "Storytelling taught me that structure carries meaning. A flow has pacing. An empty state is a beat. What you withhold matters as much as what you show.",
  "Today I work on healthcare and SaaS platforms, where the stakes are real and clarity is not decoration. The craft is making something complicated feel obvious.",
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
      "From user flows to high-fidelity interfaces, designed for clarity and ease of use across web and mobile.",
    tags: ["Figma", "FigJam", "Adobe Suite", "+more"],
    swatches: ["#FF9A6C", "#C74B8B", "#123B46"],
    featured: false,
  },
  {
    id: "design-systems",
    title: "Design Systems",
    description:
      "Scalable component libraries and design systems that keep growing products consistent and fast to build.",
    tags: ["Component Libraries", "Prototyping", "+more"],
    swatches: ["#EDE7FF", "#B9A6FF", "#6D4AFF"],
    featured: true,
  },
  {
    id: "frontend-collab",
    title: "Front-End Collaboration",
    description:
      "Comfortable in the code, so handoff to engineering is fast and the shipped product matches the design.",
    tags: ["React", "TypeScript", "+more"],
    swatches: ["#2FA98A", "#1F6F5C", "#8C6A4E"],
    featured: false,
  },
];

export const workflow = {
  heading:
    "A simple and efficient process to bring your product vision to life. From kickoff to launch, every step is designed for clarity and impact.",
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
      "I'm currently Lead Product Designer at Flash Pharmacy, but I'm always happy to hear about interesting opportunities and collaborations.",
  },
  {
    question: "What's your design process like?",
    answer:
      "Research first, then flows and wireframes, then high-fidelity prototypes, then close collaboration with engineering through build and launch.",
  },
  {
    question: "Which tools do you design in?",
    answer:
      "Mostly Figma and FigJam, with Adobe Creative Suite and Canva for visual assets, and AI tools like Claude Design and Google Stitch to speed up exploration.",
  },
  {
    question: "Do you also write code?",
    answer:
      "Yes. I'm comfortable in JavaScript, TypeScript, React, CSS, and HTML, which makes handoff to engineering faster and more accurate.",
  },
  {
    question: "Do you take on freelance projects?",
    answer:
      "Occasionally, depending on scope and timing. Reach out and let's talk about what you need.",
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
