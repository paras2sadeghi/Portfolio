import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { SITE_URL, profile } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Tight neo-grotesque for display type — the oversized name and section heads.
const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const description =
  "Parastoo Sadeghi is a product designer working across healthcare, cybersecurity, games, fitness, social, and SaaS, currently Lead Product Designer at Flash Pharmacy.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Parastoo Sadeghi · Product Designer",
  description,
  // Link previews (LinkedIn, Slack, iMessage). The preview image comes from
  // app/opengraph-image.jpg, which Next wires up automatically.
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: "Parastoo Sadeghi · Product Designer",
    description,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parastoo Sadeghi · Product Designer",
    description,
  },
};

// Structured data: tells search engines and AI agents who this is without
// having to infer it from the page layout. Deliberately no phone number.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  jobTitle: "Lead Product Designer",
  worksFor: { "@type": "Organization", name: "Flash Pharmacy" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  email: profile.email,
  sameAs: [profile.linkedin, profile.instagram],
  knowsAbout: [
    "Product design",
    "UX design",
    "Design systems",
    "Front-end development",
    "Healthcare products",
    "SaaS",
    "AI products",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // The intro script above adds a class before hydration.
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <head>
        {/* Intro loader plays only when a visit opens on the home page, once
            per tab. Runs before paint so a skipped loader never flashes. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var k="intro-seen";if(sessionStorage.getItem(k)||location.pathname!=="/")document.documentElement.classList.add(k);sessionStorage.setItem(k,"1")}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Route curtain (components/CurtainTransition.tsx) is switched off
            for now: it glitched between pages. Re-mount it here to restore. */}
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
