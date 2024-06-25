"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function HeroGym() {
  return (
    <section
      id="#gymHero"
      className="relative min-h-screen flex items-center justify-start bg-cover lg:bg-[url('/bg-gym.webp')] md:bg-[url('/bg-gym-md.webp')] bg-[url('/bg-gym-sm.webp')] overflow-hidden object-contain"
    >
      <div className=" absolute z-10 right-2 md:w-[180vw] h-full w-[200px] bg-gradient-to-tr from-neutral-900 to-black rounded-full filter blur-[80px] opacity-80"></div>
      <div className="flex flex-col items-start justify-center relative z-20 pl-[10vw]">
        <h1 className="2xl:text-[70px] xl:text-6xl md:text-5xl text-4xl text-white font-bold leading-tight mb-0 uppercase">
          Transforme seu <span className="text-cyan-500">corpo</span>,
        </h1>
        <h1 className="2xl:text-[70px] xl:text-6xl md:text-5xl text-4xl text-white font-bold leading-tight mb-5 uppercase ">
          Transforme sua <span className="text-rose-600">mente</span>
        </h1>
        <span className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-light md:mb-16 mb-10 2xl:w-[40vw] lg:w-[60vw] w-[80vw]">
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
