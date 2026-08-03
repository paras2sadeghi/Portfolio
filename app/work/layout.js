import { Fraunces, Bricolage_Grotesque } from "next/font/google";
import "./casestudy.css";
import Cursor from "@/components/ui/Cursor";
import PageTransition from "@/components/PageTransition";
import ScrollProvider from "@/components/ScrollProvider";
import SiteMenu from "@/components/ui/SiteMenu";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function WorkLayout({ children }) {
  return (
    <div className={`${fraunces.variable} ${bricolage.variable}`}>
      <ScrollProvider>
        <Cursor />
        <SiteMenu />
        <PageTransition>{children}</PageTransition>
      </ScrollProvider>
    </div>
  );
}
