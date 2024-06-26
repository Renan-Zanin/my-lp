import BenefitsSection from "@/components/benefits";
import EndingSection from "@/components/ending";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import Contact from "@/components/contact";
import Depositions from "@/components/depositions";
import PortifolioSection from "@/components/portifolio";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative pt-4">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <Depositions />
      <PortifolioSection />
      <EndingSection />
      <Contact />
      <a href="https://wa.me/5512981497675" target="_blank">
        <FaWhatsapp className="fixed z-40 animate-float md:bottom-20 md:right-20 bottom-10 right-10 text-blue-500 lg:w-[3vw] lg:h-[3vw] md:w-[6vw] md:h-[6vw] w-[9vw] h-[9vw]" />
      </a>
    </main>
  );
}
