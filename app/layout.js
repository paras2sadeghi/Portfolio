import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

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

export const metadata = {
  title: "Parastoo Sadeghi · Product Designer",
  description:
    "Parastoo Sadeghi is a product designer working across healthcare, cybersecurity, games, fitness, social, and SaaS, currently Lead Product Designer at Flash Pharmacy.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" href="/images/hero-wide.png" as="image" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Route curtain (components/CurtainTransition.tsx) is switched off
            for now: it glitched between pages. Re-mount it here to restore. */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
