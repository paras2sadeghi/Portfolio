import ScrollProvider from "@/components/ScrollProvider";
import Cursor from "@/components/ui/Cursor";
import NavBar from "@/components/ui/NavBar";
import IntroLoader from "@/components/IntroLoader";
import HeroSection from "@/components/sections/HeroSection";
import SelectedWork from "@/components/sections/SelectedWork";
import WorkMarquee from "@/components/sections/WorkMarquee";
import IntroSection from "@/components/sections/IntroSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <ScrollProvider>
      <IntroLoader />
      <Cursor />
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <IntroSection />
        <SelectedWork />
        <WorkMarquee />
        <ContactSection />
      </main>
    </ScrollProvider>
  );
}
