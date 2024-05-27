import BenefitsSection from "@/components/benefits";
import EndingSection from "@/components/ending";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/hero";
import SolutionSection from "@/components/solution";

export default function Home() {
  return (
    <main className="pt-4">
      <HeroSection />
      <SolutionSection />
      <BenefitsSection />
      <EndingSection />
    </main>
  );
}
