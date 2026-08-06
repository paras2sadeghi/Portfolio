import ScrollProvider from "@/components/ScrollProvider";
import Cursor from "@/components/ui/Cursor";
import PageTransition from "@/components/PageTransition";
import NavBar from "@/components/ui/NavBar";

export default function WorkLayout({ children }) {
  return (
    <ScrollProvider>
      <Cursor />
      <NavBar />
      <PageTransition>
        <main className="flex-1">{children}</main>
      </PageTransition>
    </ScrollProvider>
  );
}
