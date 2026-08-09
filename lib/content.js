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
  badge: "Vancouver, BC — where the sky is allergic to being blue",
  greeting: "Hello!",
  role: "Product Designer",
  tagline:
    "I rearranged my mother's kitchen at seven. Nobody asked. I still haven't stopped.",
  aboutLink: "About me",
  body: "I design healthcare platforms, apps, and brands — anything with a confusing part I can delete. I got into this accidentally. I kept making things easier to use and eventually found out someone had invented a job for it. Huge win for me.",
};

/** Dennis-style home intro block (below hero). */
export const homeIntro = {
  lines: [
    "I had no authority.",
    "I simply had vision.",
    "Now it's a job, which is frankly a huge win for me.",
  ],
  aside:
    "Desks. Bookshelves. Kitchen cabinets. Other people's stuff. Why is the thing you use every day behind the thing you use once a year? This was personal.",
  ctaLabel: hero.aboutLink,
  ctaHref: "/about",
};

/** Full /about page copy (see dennissnellenberg.com/about for structure reference). */
export const aboutPage = {
  headline: "I'm not quiet. I'm buffering.",
  lead:
    "I'm collecting data. Then suddenly I have 38 opinions and a redesigned version of whatever we were talking about. Professionally this is called product design. At home it was called “who moved this.”",
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
    title: "Not me. The interface.",
    body:
      "If you need a 14-step tutorial to refill a prescription, somebody has failed. A lot of my work is in healthcare, where software has a real habit of making people feel stupid for being human. That's the part I'm actually trying to fix.",
  },
};

export const aboutStory = [
  "I went to film school because I liked controlling what people looked at. In hindsight this was an extremely obvious sign.",
  "Then I realized I was more interested in fixing the frame than making the movie. Everyone else: “we need to finish the scene.” Me: “yeah, but why is that chair there?” That was probably the moment.",
  "I grew up in Iran and moved to Vancouver in my early twenties, where I was immediately defeated by the recycling. Seventeen bins. One yogurt container. A full existential crisis. Now I design healthcare platforms, apps, and brands. Same instinct, bigger screens.",
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
      "Flows, wireframes, and interfaces that don't need a tutorial. If someone has to be taught how to use it, I'm not done.",
    tags: ["Figma", "FigJam", "Adobe Suite", "+more"],
    swatches: ["#FF9A6C", "#C74B8B", "#123B46"],
    featured: false,
  },
  {
    id: "design-systems",
    title: "Design Systems",
    description:
      "Component libraries that stop your product from quietly becoming six different products in a trench coat.",
    tags: ["Component Libraries", "Prototyping", "+more"],
    swatches: ["#EDE7FF", "#B9A6FF", "#6D4AFF"],
    featured: true,
  },
  {
    id: "frontend-collab",
    title: "Front-End Collaboration",
    description:
      "I'm comfortable in the code, so handoff doesn't become a game of telephone where the buttons arrive wrong.",
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
      "Yes. JavaScript, TypeScript, React, CSS, HTML. Enough to be genuinely useful, and enough to know when the thing I'm asking for is annoying.",
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
