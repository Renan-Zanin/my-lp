import BenefitsSection from "@/components/benefits";
import EndingSection from "@/components/ending";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="pt-4">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <EndingSection />
      <Contact />
    </main>
  );
}
