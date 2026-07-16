import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import FAQ from "@/components/FAQ";
import CTAFooter from "@/components/CTAFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedWork />
        <TrustSection />
        <Services />
        <Workflow />
        <FAQ />
        <CTAFooter />
      </main>
      <Footer />
    </>
  );
}
