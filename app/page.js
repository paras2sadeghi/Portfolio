import ScrollProvider from "@/components/ScrollProvider";
import Cursor from "@/components/ui/Cursor";
import NavBar from "@/components/ui/NavBar";
import IntroLoader from "@/components/IntroLoader";
import HeroSection from "@/components/sections/HeroSection";
import HomeIntroSection from "@/components/sections/HomeIntroSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <ScrollProvider>
      <IntroLoader />
      <Cursor />
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <HomeIntroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
    </ScrollProvider>
  );
}
