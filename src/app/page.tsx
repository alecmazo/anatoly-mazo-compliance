import { About } from "@/components/About";
import { BusinessDriver } from "@/components/BusinessDriver";
import { ContactSection } from "@/components/ContactSection";
import { Expertise } from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import { MarketEnvironment } from "@/components/MarketEnvironment";
import { Sectors } from "@/components/Sectors";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { StrategicPartner } from "@/components/StrategicPartner";
import { WhyExperience } from "@/components/WhyExperience";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Stats />
      <About />
      <MarketEnvironment />
      <Sectors />
      <Expertise />
      <WhyExperience />
      <StrategicPartner />
      <Services />
      <BusinessDriver />
      <ContactSection />
    </main>
  );
}
