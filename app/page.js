import ScrollProvider from "@/components/ScrollProvider";
import Cursor from "@/components/ui/Cursor";
import NavBar from "@/components/ui/NavBar";
import IntroLoader from "@/components/IntroLoader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PinnedShowcase from "@/components/sections/PinnedShowcase";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <ScrollProvider>
      <IntroLoader />
      <Cursor />
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <PinnedShowcase />
        <AboutSection />
        <ContactSection />
      </main>
    </ScrollProvider>
  );
}
