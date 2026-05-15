import { Navbar } from "./_components/layout/Navbar";
import { Footer } from "./_components/layout/Footer";
import { HeroSection } from "./_components/sections/HeroSection";
import { ClientsSection } from "./_components/sections/ClientsSection";
import { AboutSection } from "./_components/sections/AboutSection";
import { SelectedWorkSection } from "./_components/sections/SelectedWorkSection";
import { TestimonialsSection } from "./_components/sections/TestimonialsSection";
import { ExperienceSection } from "./_components/sections/ExperienceSection";
import { JourneySection } from "./_components/sections/JourneySection";
import { PricingSection } from "./_components/sections/PricingSection";
import { FaqSection } from "./_components/sections/FaqSection";
import { CtaSection } from "./_components/sections/CtaSection";
import { LatestNewsSection } from "./_components/sections/LatestNewsSection";

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-full w-full max-w-[min(100%,90rem)] flex-1 flex-col">
      <Navbar />
      <main className="w-full flex-1">
        <HeroSection />
        <ClientsSection />
        <AboutSection />
        <SelectedWorkSection />
        <TestimonialsSection />
        <ExperienceSection />
        <PricingSection />
        <FaqSection />
        <JourneySection />
        <LatestNewsSection />
      </main>
      <Footer />
    </div>
  );
}
