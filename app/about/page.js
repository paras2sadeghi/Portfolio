import ScrollProvider from "@/components/ScrollProvider";
import Cursor from "@/components/ui/Cursor";
import NavBar from "@/components/ui/NavBar";
import PageTransition from "@/components/PageTransition";
import AboutPage from "@/components/pages/AboutPage";

export const metadata = {
  title: "About · Parastoo Sadeghi",
  description:
    "Parastoo Sadeghi is a Vancouver-based product designer who thinks in pictures: how she started, how she works, and what she is building next.",
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
