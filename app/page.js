import Navbar from "@/components/Navbar";
import ScrollProvider from "@/components/ScrollProvider";
import Cursor from "@/components/ui/Cursor";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ScrollProvider>
      <Cursor />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </ScrollProvider>
  );
}
