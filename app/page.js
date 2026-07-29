import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
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
        <Journey />
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
