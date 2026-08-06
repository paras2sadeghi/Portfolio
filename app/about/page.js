import ScrollProvider from "@/components/ScrollProvider";
import Cursor from "@/components/ui/Cursor";
import NavBar from "@/components/ui/NavBar";
import PageTransition from "@/components/PageTransition";
import AboutPage from "@/components/pages/AboutPage";

export const metadata = {
  title: "About — Parastoo Sadeghi",
  description:
    "Product designer focused on healthcare and SaaS — story, services, and experience.",
};

export default function AboutRoute() {
  return (
    <ScrollProvider>
      <Cursor />
      <NavBar />
      <PageTransition>
        <AboutPage />
      </PageTransition>
    </ScrollProvider>
  );
}
