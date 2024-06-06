"use client";

import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/hero.png";
import Image from "next/image";
import TypingEffect from "./TypingEffect";

export default function HeroSection() {
  const words = ["Web", "Freelancer", "Versátil", "Dedicado"];
  return (
    <section id="#heroSection" className="flex items-center h-[100vh]">
      <div className="flex flex-col items-center mx-auto relative">
        <h1 className="md:text-[80px] text-3xl text-white font-bold leading-tight mb-5">
          Renan Zanin Oliveira
        </h1>
        <span className="md:text-4xl text-xl font-extralight md:mb-16 mb-10">
          Desenvolvedor{" "}
          <TypingEffect
            words={words}
            delay={200}
            deletingSpeed={100}
            typingSpeed={150}
          />
        </span>
        <h2 className="md:text-2xl md:w-full w-[80vw] text-center text-white leading-tight mb-5">
          Transformando ideias em experiências digitais incríveis
        </h2>
        <div className="absolute top-[-120px] w-[750px] h-[550px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg filter blur-[100px] opacity-[0.075]"></div>
      </div>
    </section>
  );
}
