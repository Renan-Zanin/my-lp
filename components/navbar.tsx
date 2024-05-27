"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full z-50 flex flex-row items-center justify-center py-4  ${
        isScrolled
          ? "shadow-foreground shadow-sm bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 transition-all duration-200 "
          : ""
      }`}
    >
      <div className="flex gap-x-2">
        <Button asChild variant="link" className="text-xl">
          <Link href="#heroSection">
            <span className="sublinhado-gradiente font-semibold">Home</span>
          </Link>
        </Button>
        <Button asChild variant="link" className="text-xl">
          <Link href="#solutionSection">
            <span className="sublinhado-gradiente font-semibold">Soluções</span>
          </Link>
        </Button>
        <Button asChild variant="link" className="text-xl">
          <Link href="#benefitsSection">
            <span className="sublinhado-gradiente font-semibold">
              Benefícios
            </span>
          </Link>
        </Button>
        <Button asChild variant="link" className="text-xl">
          <Link href="#portifolioSection">
            <span className="sublinhado-gradiente font-semibold">
              Portifólio
            </span>
          </Link>
        </Button>

        <Button asChild>
          <Link href="endingSection" className="text-foreground ml-10">
            Comece agora!
          </Link>
        </Button>
      </div>
    </nav>
  );
}
