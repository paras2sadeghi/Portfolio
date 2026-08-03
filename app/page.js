import ScrollProvider from "@/components/ScrollProvider";
import Cursor from "@/components/ui/Cursor";
import SiteMenu from "@/components/ui/SiteMenu";
import IntroLoader from "@/components/IntroLoader";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <ScrollProvider>
      <IntroLoader />
      <Cursor />
      <SiteMenu />
      <main className="flex-1">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
    </ScrollProvider>
  );
}
