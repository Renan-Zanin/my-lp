"use client";

import { useEffect, useState } from "react";
import TypingEffect from "./TypingEffect";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function HeroSection() {
  const words = ["Web", "Freelancer", "Versátil", "Dedicado"];

  const [visible, setVisible] = useState(true);

  function handleScroll() {
    if (window.scrollY > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="#heroSection"
      className="flex items-center h-[100vh] relative justify-center"
    >
      <div className="flex flex-col items-center justify-center relative">
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
        <div className="absolute md:top-[-120px] top-4 md:w-[750px] md:h-[550px] w-[60vw] h-[50vw] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg filter blur-[100px] opacity-[0.075]"></div>
      </div>
      <div
        className={`absolute bottom-[5vh] left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <MdOutlineKeyboardDoubleArrowDown
          className=" animate-float text-purple-500"
          size={40}
        />
      </div>
    </section>
  );
}
