import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <ContactSection />
    </main>
  );
}
