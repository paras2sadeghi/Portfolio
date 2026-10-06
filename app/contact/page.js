import ScrollProvider from "@/components/ScrollProvider";
import Cursor from "@/components/ui/Cursor";
import NavBar from "@/components/ui/NavBar";
import PageTransition from "@/components/PageTransition";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact · Parastoo Sadeghi",
  description: "Get in touch with Parastoo Sadeghi.",
};

export default function ContactRoute() {
  return (
    <ScrollProvider>
      <Cursor />
      <NavBar />
      <PageTransition>
        <main className="flex min-h-svh flex-1 flex-col pt-12 md:pt-14">
          <ContactSection className="flex-1" />
        </main>
      </PageTransition>
    </ScrollProvider>
  );
}
