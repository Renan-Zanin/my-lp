"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function HeroGym() {
  return (
    <section
      id="#gymHero"
      className="relative min-h-screen w-[99.6vw] flex items-center h-screen justify-start bg-cover bg-[url('/bg-gym.jpg')] overflow-hidden"
    >
      <div className=" absolute z-10 right-2 md:w-[180vw] md:h-full w-[200px] h-[200px] bg-gradient-to-tr from-neutral-900 to-black rounded-full filter blur-[80px] opacity-80"></div>
      <div className="flex flex-col items-start justify-center relative z-20 pl-[10vw]">
        <h1 className="md:text-[70px] text-3xl text-white font-bold leading-tight mb-0 uppercase">
          Transforme seu <span className="text-cyan-500">corpo</span>,
        </h1>
        <h1 className="md:text-[70px] text-3xl text-white font-bold leading-tight mb-5 uppercase ">
          Transforme sua <span className="text-rose-600">mente</span>
        </h1>
        <span className="md:text-4xl text-xl font-light md:mb-16 mb-10 w-[40vw]">
          Descubra um ambiente motivador com equipamentos de última geração e
          treinadores dedicados
        </span>
        <Button variant="gym" className="bg-rose-600">
          Descubra Mais
        </Button>
      </div>
    </section>
  );
}
