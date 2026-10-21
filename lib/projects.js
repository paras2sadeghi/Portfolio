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
    liveLabel: "Live site",
    thumbnail: "/images/work/mockups/flash-longevity-cover-transparent.png",
    heroImage: "/images/work/mockups/flash-longevity-cover.jpg",
    tileBg: "#d4e8f6",
    card: {
      contribution: "Design and front-end · live",
      category: "Flash Pharmacy",
      subtitle: "Biological-age program landing page with calm glass UI",
      tags: ["Healthcare", "Web"],
      gradient: "linear-gradient(135deg, #b8d4f0 0%, #7eb8e8 100%)",
    },
    caseStudy: {
      headline: "A blood test is intimidating. A benefit nobody opens is worse.",
      summary:
        "Flash Longevity is Flash Pharmacy's biological-age program, sold to employers as a $25-a-month benefit: a 40+ biomarker lab panel, a doctor and pharmacist-built plan, and same-day delivery of whatever the plan recommends. I designed the landing page that has to explain it, and built its front-end.",
      meta: [
        { label: "Role", value: "Product design · Front-end" },
        { label: "Client", value: "Flash Pharmacy" },
        { label: "Year", value: "2026" },
        { label: "Platform", value: "Marketing web · Responsive" },
      ],
      gallery: [
        {
          src: "/images/work/mockups/flash-longevity-mockup-v2.png",
          alt: "Flash Longevity product mockup",
        },
      ],
      blocks: [
        {
          type: "text",
          label: "The brief",
          title: "Sell a lab panel to HR, then get employees to actually use it.",
          body: [
            "Flash Pharmacy already ran online doctors and same-day medication delivery. Longevity adds a blood panel that estimates biological age and turns it into a plan, sold to companies as an employee benefit and to individuals directly.",
            "That gives the page two audiences with opposite worries. The employer is asking what it costs, how rollout works and whether they'll see anyone's health data. The employee is asking whether a blood test is going to scare them. Most longevity sites answer neither: they lead with a lab-coat wall of markers or with a wellness-retreat mood board.",
          ],
        },
        {
          type: "statement",
          text: "The goal: make proactive health feel like a clear sky, not a hospital corridor.",
        },
        {
          type: "image",
          src: "/images/work/flash-longevity/hero.jpg", width: 2400, height: 1500,
          alt: "Flash Longevity hero: headline 'The healthcare benefit your team will actually use' beside a smiling woman outdoors under a blue sky",
          caption: "The hero puts the employer promise first (\"a benefit your team will actually use\"), with the price and the three things it bundles visible before any scroll.",
          frame: "browser",
        },
        {
          type: "split",
          label: "Decision 01",
          title: "Forty biomarkers, browsed by body system instead of dumped in a table.",
          body: [
            "A full panel is 40+ results, and a table of acronyms is exactly what makes people close the tab. I grouped them into six systems people already have words for (metabolic, heart, kidney and liver, inflammation, nutrients, hormones) and pinned the section so scrolling walks through one system at a time.",
            "Every marker gets one plain-language line (\"ApoB: primary driver of arterial plaque\"), a trend sparkline and a single amber flag when it falls out of range. Calm by default, specific when something needs attention.",
          ],
          images: [
            {
              src: "/images/work/flash-longevity/biomarkers-heart.jpg", width: 2400, height: 1500,
              alt: "Biomarker explorer showing the Heart & vessels system with ApoB flagged out of range",
            },
            {
              src: "/images/work/flash-longevity/biomarkers-nutrients.jpg", width: 2400, height: 1500,
              alt: "Biomarker explorer showing Vitamins & nutrients with Vitamin D flagged out of range",
            },
          ],
        },
        {
          type: "split",
          label: "Decision 02",
          title: "Three steps, one at a time.",
          body: [
            "\"How it works\" is where benefit pages usually lose HR buyers: six icons, twelve bullet points. I cut it to three steps (enroll your team, complete labs and sync wearables, get a strategy) and showed them as a pinned stepper, so only one step is ever on screen with a progress bar underneath.",
          ],
          images: [
            {
              src: "/images/work/flash-longevity/how-step-1.jpg", width: 2400, height: 1500,
              alt: "How it works, step 1: Enroll your team",
            },
            {
              src: "/images/work/flash-longevity/how-step-3.jpg", width: 2400, height: 1500,
              alt: "How it works, step 3: Get a strategy",
            },
          ],
          reverse: true,
        },
        {
          type: "split",
          label: "Decision 03",
          title: "Trust before the pricing card.",
          body: [
            "The price is in the hero, so nobody has to hunt for it. But before the pricing card asks anyone to commit, the page answers the questions that block a health purchase: who reads my results (a licensed Canadian pharmacist, not an algorithm alone), who builds my plan (physicians), and what my employer sees (anonymized, aggregate trends, never individual results).",
            "That last line is for the employee as much as the buyer. Without it, \"benefit\" reads as \"surveillance\".",
          ],
          images: [
            {
              src: "/images/work/flash-longevity/clinical.jpg", width: 2400, height: 903,
              alt: "Clinical trust section: reviewed by licensed pharmacists, doctor-guided care, your data stays private",
            },
          ],
        },
        {
          type: "pair",
          label: "Decision 04",
          title: "One price, compared honestly.",
          body: [
            "Pricing is a single card with everything included and no tiers to decode. The comparison table puts Flash next to what a team already has (other longevity tests, existing benefits, primary care) on the things that matter to both audiences: wait time, wearable sync, same-day delivery, and what it costs.",
          ],
          images: [
            {
              src: "/images/work/flash-longevity/pricing.jpg", width: 2400, height: 1588,
              alt: "Pricing card: $25 per employee per month with included features",
            },
            {
              src: "/images/work/flash-longevity/comparison.jpg", width: 2400, height: 1541,
              alt: "Comparison table of Flash Longevity against other longevity tests, existing benefits and primary care",
            },
          ],
        },
        {
          type: "text",
          label: "Visual language",
          title: "Spa-calm, still clinical.",
          body: [
            "One continuous sky runs behind the whole page, with frosted-glass cards floating on it. A serif with italic accents (\"actually use\", \"made simple\") carries warmth; a mono face carries the numbers, so lab values always read as data. Teal is the only accent and amber is reserved for out-of-range markers, so colour never cries wolf.",
            "Motion follows the same rule: slow fades, scroll-linked depth and ambient particles in the hero. Nothing bounces at you while you're reading about your kidneys.",
          ],
        },
        {
          type: "phones",
          label: "Mobile",
          caption: "On phones the biomarker explorer un-pins into a normal scroll, and pricing stays a single card.",
          images: [
            { src: "/images/work/flash-longevity/mobile-hero.jpg", width: 1170, height: 2532, alt: "Flash Longevity hero on mobile" },
            { src: "/images/work/flash-longevity/mobile-biomarkers.jpg", width: 1170, height: 2532, alt: "Biomarker explorer on mobile" },
            { src: "/images/work/flash-longevity/mobile-pricing.jpg", width: 1170, height: 2532, alt: "Pricing on mobile" },
          ],
        },
        {
          type: "text",
          label: "Constraints",
          title: "Health claims are regulated. The copy had to know that.",
          body: [
            "Canadian rules limit what you can promise about health outcomes, so biological age is framed as an estimate that a doctor and pharmacist interpret, never a diagnosis. The sample biomarker values on the page are illustrative and labelled for compliance review before launch.",
          ],
        },
        {
          type: "todo",
          title: "Process: research, flows, early iterations",
          note: "Add 2–4 images here: research notes or HR interviews, the page flow or wireframes, and an early version next to the final one. Drop them in public/images/work/flash-longevity/process/.",
        },
        {
          type: "todo",
          title: "Outcome",
          note: "Add 1–3 real numbers: e.g. demo bookings or conversion from the page, employers or employees enrolled, launch date. Until then this block is hidden on the live site.",
        },
        {
          type: "image",
          src: "/images/work/flash-longevity/cta.jpg", width: 2400, height: 1061,
          alt: "Closing call to action: Give your team the healthcare experience they deserve",
          frame: "plain",
        },
      ],
      sections: [],
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
      contribution: "Confidential investor pitch",
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
      contribution: "Self-initiated concept",
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
      contribution: "Self-initiated concept",
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
      contribution: "Self-initiated concept",
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
      contribution: "Self-initiated concept",
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
      contribution: "Self-initiated concept",
      category: "Concept",
      subtitle: "Workplace check-ins people answer honestly",
      tags: ["Wellbeing", "Mobile"],
      gradient: "linear-gradient(135deg, #ffb3c6 0%, #c9a2ff 100%)",
    },
    caseStudy: {
      headline: "Workplace check-ins people answer honestly.",
      summary:
        "Mobile concept for workplace wellbeing check-ins: low-pressure prompts and anonymous team insights, without the surveillance vibes.",
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
    slug: "flash-pharmacy",
    name: "Flash Pharmacy",
    year: "2026",
    sortOrder: 0,
    discipline: "Product design · Health platform",
    // Pre-launch build; swap for the production domain once it's live.
    liveUrl: "https://pari-workspace-git-ecom-main-flash-pharmacy.vercel.app/",
    liveLabel: "Preview the build",
    thumbnail: "/images/work/mockups/flash-pharmacy-transparent.png",
    heroImage: "/images/work/mockups/flash-pharmacy-mockup.jpg",
    tileBg: "#dceee8",
    card: {
      contribution: "Lead designer · launching soon",
      category: "Flash Pharmacy",
      subtitle: "One platform for the pharmacy shop, online doctors, refills and Longevity",
      tags: ["Healthcare", "E-commerce", "Telehealth"],
      gradient: "linear-gradient(135deg, #dceee8 0%, #9fd0c0 100%)",
    },
    caseStudy: {
      headline: "One front door for everything a pharmacy does.",
      summary:
        "Making shopping, prescriptions and care work as one platform: a same-day pharmacy shop, online doctor visits, refills with a smart-pharmacist assistant, and the Longevity+ membership. I led the design for desktop and phone, from first concept to the launch build.",
      meta: [
        { label: "Role", value: "Head of design & front-end" },
        { label: "Client", value: "Flash Pharmacy" },
        { label: "Year", value: "2026" },
        { label: "Platform", value: "Web · Phone · E-commerce + telehealth" },
        { label: "Status", value: "Launching soon" },
      ],
      gallery: [],
      blocks: [
        {
          type: "text",
          label: "The brief",
          title: "Four products that had to feel like one pharmacy.",
          body: [
            "Flash Pharmacy sells medicine, vitamins and beauty with same-day delivery, runs online doctor visits, fills and refills prescriptions, and offers Longevity+, a biological-age membership. That's four products with four different jobs, for customers who often need two of them at once.",
            "The redesign had to hold all of it in one system without turning into a cluttered portal: browse like a beauty store, trust it like a pharmacy, and reach a professional from anywhere.",
            "The obvious alternative was a separate site per product, the way most pharmacies bolt on telehealth. It's easier to build, but it hands the joining-up to the customer: buying a cold remedy and asking a pharmacist about it become two logins and two carts. One catalogue, with care reachable from every page, was harder to design, and that was the point.",
          ],
        },
        {
          type: "text",
          label: "My role",
          title: "Head of design and front-end, from first concept to the launch build.",
          body: [
            "I owned the design of the platform and built its front-end: the flows, prototypes and web and phone interfaces, the Figma design system all four products share, and the code that implements it. I worked alongside Flash's engineers, and with its pharmacists on the clinical flows (prescriptions, refills, symptom checks, and what the assistant may and may not say), so the line between helpful guidance and medical advice was drawn with the people who carry that responsibility.",
          ],
        },
        {
          type: "statement",
          text: "Shop like a beauty store. Trust it like a pharmacy. Reach a pharmacist from anywhere.",
        },
        {
          type: "image",
          src: "/images/work/flash-pharmacy/home.jpg", width: 2400, height: 1500, alt: "Flash Pharmacy home: Healthcare for your whole family, with Fill a prescription and Talk to a doctor actions",
          caption: "The home page leads with the two things only a pharmacy can do (fill a prescription, talk to a doctor) and lets the shop, Glow Points and Longevity+ follow below.",
          frame: "browser",
        },
        {
          type: "split",
          label: "Decision 01",
          title: "A catalogue that browses like a beauty store.",
          body: [
            "Fourteen categories, from Cold & Flu to Makeup & Beauty, share one template: a visual subcategory rail, an editorial banner, and product cards that show shade swatches before you click.",
            "Product pages put the decisions people actually make up top: shade or size, Delivery or Pickup with a same-day cut-off (\"Order within 4 hr 51 min to get it today\"), and an Auto-replenish price for things you buy every month.",
          ],
          images: [
            { src: "/images/work/flash-pharmacy/category-makeup.jpg", width: 2400, height: 1500, alt: "Makeup & Beauty category page with a subcategory icon rail, editorial banner and product cards with shade swatches" },
            { src: "/images/work/flash-pharmacy/product-detail.jpg", width: 2400, height: 1500, alt: "CeraVe cleanser product page with size options, Add to bag, delivery and pickup tabs and auto-replenish" },
          ],
        },
        {
          type: "split",
          label: "Decision 02",
          title: "A pharmacist on every product page.",
          body: [
            "The question that stalls a beauty purchase (\"which shade suits my skin tone?\") opens Ask about this product, a smart-pharmacist chat that already knows which product you're looking at and answers from shade reviews.",
            "It's scoped honestly: every answer carries \"General guidance, not a diagnosis\", and clinical questions hand off to a person.",
          ],
          images: [
            { src: "/images/work/flash-pharmacy/product-makeup.jpg", width: 1200, height: 750, alt: "NARS Insatiable Liquid Blush product page with named shade swatches" },
            { src: "/images/work/flash-pharmacy/shade-guidance.jpg", width: 1200, height: 750, alt: "Ask about this product dialog answering which shade suits my skin tone" },
          ],
          reverse: true,
        },
        {
          type: "phones",
          label: "Care, as a conversation",
          caption: "Ask Flash is one hub for booking a doctor, uploading a prescription, checking a symptom or refilling. People rarely arrive knowing which of those they need, so the entry point is a question rather than a menu, and every path still ends in a plain, form-like step (a time slot, a body area) rather than open-ended chat. The assistant explains and organises; a doctor reviews anything clinical.",
          images: [
            { src: "/images/work/flash-pharmacy/mobile-ask-flash.jpg", width: 530, height: 1147, alt: "Ask Flash hub: Book a doctor, Upload a prescription, Check a symptom, Refill a medicine" },
            { src: "/images/work/flash-pharmacy/mobile-book-doctor.jpg", width: 530, height: 1147, alt: "Doctor booking inside the chat with earliest available and date and time choices" },
            { src: "/images/work/flash-pharmacy/mobile-symptom-check.jpg", width: 530, height: 1147, alt: "Symptom check, step 1 of 3: where is it?" },
          ],
        },
        {
          type: "pair",
          label: "Decision 03",
          title: "Same-day, made concrete.",
          body: [
            "Fast delivery only feels real when it's specific. Delivery or Pickup is a toggle on the product page and at checkout, with a cut-off countdown and a chosen pharmacy instead of a vague promise.",
            "The bag opens as a panel over the page you're on, so adding a cleanser never throws you out of browsing, and it shows the Glow Points you're about to earn right at the subtotal.",
          ],
          images: [
            { src: "/images/work/flash-pharmacy/cart.jpg", width: 2400, height: 1500, alt: "Bag panel over the product page with subtotal, Glow Points earned and Checkout" },
            { src: "/images/work/flash-pharmacy/checkout.jpg", width: 2400, height: 1500, alt: "Checkout with contact, delivery or pickup, payment and order summary" },
          ],
        },
        {
          type: "phones",
          label: "When things go wrong",
          caption: "The unhappy paths got the same care as the happy ones. Out of stock says when it's coming back, takes an email in one step and shows what's in stock now. A broken link stays on-brand and points to search. Prescriptions ask you to sign in and say why (allergies and insurance). An empty bag always offers a way back.",
          images: [
            { src: "/images/work/flash-pharmacy/mobile-out-of-stock.jpg", width: 530, height: 1147, alt: "Out-of-stock product with restock timing, Notify me when it’s back, and in-stock alternatives" },
            { src: "/images/work/flash-pharmacy/mobile-404.jpg", width: 530, height: 1147, alt: "Error 404 page: This page is out of stock, with search and pharmacy details" },
            { src: "/images/work/flash-pharmacy/mobile-rx-sign-in.jpg", width: 530, height: 1147, alt: "Fill a prescription asks you to sign in so your pharmacist can check allergies and bill insurance" },
            { src: "/images/work/flash-pharmacy/mobile-empty-bag.jpg", width: 530, height: 1147, alt: "Empty bag with Continue shopping" },
          ],
        },
        {
          type: "phones",
          label: "Phone",
          caption: "On phones the platform becomes an app: a bottom bar (Me, Shop, Orders, Doctors, Account), filters and sorting as sheets, and delivery choices as a bottom sheet.",
          images: [
            { src: "/images/work/flash-pharmacy/mobile-home.jpg", width: 1170, height: 2532, alt: "Flash Pharmacy home on a phone with the bottom tab bar" },
            { src: "/images/work/flash-pharmacy/mobile-filters.jpg", width: 530, height: 1147, alt: "Filters sheet with Brand, Availability and Price" },
            { src: "/images/work/flash-pharmacy/mobile-product.jpg", width: 650, height: 1407, alt: "Product page on a phone with shade swatches and Add to bag" },
            { src: "/images/work/flash-pharmacy/mobile-delivery.jpg", width: 530, height: 1147, alt: "Delivery or pickup bottom sheet with same-day cut-off" },
          ],
        },
        {
          type: "pair",
          label: "Decision 04",
          title: "Loyalty and membership, part of the same system.",
          body: [
            "Glow Points earns on every OTC and beauty purchase and climbs through three tiers (Soft, Lux and Supernova Glow), each a card you can picture in your wallet. Longevity+ appears as a preview of your own health dashboard behind a single, clear unlock rather than a separate sales site.",
          ],
          images: [
            { src: "/images/work/flash-pharmacy/glow-points.jpg", width: 1200, height: 750, alt: "Glow Points section with Soft Glow, Lux Glow and Supernova Glow tier cards" },
            { src: "/images/work/flash-pharmacy/longevity.jpg", width: 2400, height: 1500, alt: "Flash for Teams Longevity page: The healthcare benefit your team will actually use" },
          ],
        },
        {
          type: "text",
          label: "One system",
          title: "Four products, one design language.",
          body: [
            "A deep pharmacy teal for every primary action, a serif display with an italic accent word (\"your whole family\", \"actually use\") shared with Longevity, and a mono face for numbers. The Ask Flash button floats on every screen, so help is always one tap away, whatever you're doing.",
          ],
        },
        {
          type: "text",
          label: "What I'll measure",
          title: "The questions launch has to answer.",
          body: [
            "It hasn't launched yet, so there are no results to show. These are the signals I'll watch first, because each tests a core bet: how many shoppers also use a care service (does one platform actually join things up?), how many bookings started in Ask Flash get completed (does a question beat a menu?), and how often a same-day promise at checkout is kept (is the cut-off honest?).",
          ],
        },
        {
          type: "text",
          label: "Where it stands",
          title: "Built, and launching soon.",
          body: [
            "The platform is built and in final pre-launch checks; you can open the build from the top of this page. Until launch, checkout runs as a demo and says so (\"no payment is taken\"), the legal pages are drafts awaiting legal review, and the assistant is scoped to explain and organise, never to diagnose or prescribe.",
          ],
        },
        {
          type: "todo",
          title: "Process: research, flows, early iterations",
          note: "Add 2–4 images: research or customer interviews, the information architecture across shop, doctors and Longevity, wireframes, and an early version next to the final. Drop them in public/images/work/flash-pharmacy/process/.",
        },
        {
          type: "todo",
          title: "Outcome",
          note: "Add 1–3 real numbers (launch date, conversion, bookings, refills, Glow Points sign-ups). The figures shown inside the design (1.5M+ customers, reviews, prices) are page content, not results, so don't use them here.",
        },
      ],
      sections: [],
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
      contribution: "Designer at Sadax Studio",
      category: "Real project",
      subtitle: "AI agent builder for crypto and DeFi, driven by voice or text",
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
            "Shipped flows for agent creation, chat, and voice control for the Sadax Studio product line.",
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
      contribution: "Designer at SternX · shipped on iOS and Android",
      category: "Shipped",
      subtitle: "Location, screen time and safe-arrival alerts that don't feel like surveillance",
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
      contribution: "Personal project",
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

/**
 * Home showcase: shipped work, in the order a recruiter should meet it.
 * Concepts and older pieces stay on the /work page.
 */
// Three different hiring signals first (platform scope, a shipped mobile
// product, AI tooling), then the related deep dive and supporting work.
const FEATURED_ORDER = [
  "flash-pharmacy",
  "safes-family",
  "roobinium",
  "flash-longevity",
  "connected-health-pitch",
];

export const featuredProjects = FEATURED_ORDER.flatMap((slug) =>
  projects.filter((p) => p.slug === slug)
);

const isConcept = (p) => p.discipline.startsWith("Concept");

/** /work, first group: featured order, then any other shipped work. */
export const shippedProjects = [
  ...featuredProjects,
  ...projects.filter((p) => !isConcept(p) && !FEATURED_ORDER.includes(p.slug)),
];

/** /work, second group: self-initiated concepts. */
export const conceptProjects = projects.filter(isConcept);

export const WORK_PORTFOLIO_COUNT = workPortfolio.length;

/** Four newest projects by date (year + sort order). */
export const homeWorkPortfolio = workPortfolio.slice(0, 4);

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function workHref(slug) {
  return `/work/${slug}`;
}

/** Prev/next follow the /work page order: shipped work, then explorations. */
export function getAdjacentProject(slug) {
  const order = [...shippedProjects, ...conceptProjects];
  const i = order.findIndex((p) => p.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: order[i - 1] ?? null,
    next: order[i + 1] ?? null,
  };
}
