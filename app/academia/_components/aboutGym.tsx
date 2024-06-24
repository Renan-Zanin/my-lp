"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function AboutGym() {
  return (
    <section
      id="#gymAbout"
      className="relative overflow-hidden pb-16 flex xl:justify-start justify-center 2xl:px-[15vw] lg:px-[10vw] px-[5vw] bg-black"
    >
      <div className="mt-24 flex flex-col xl:items-start items-center">
        <h1 className="xl:text-5xl md:text-4xl text-3xl text-white tracking-wide xl:text-start text-center uppercase 2xl:w-[40vw] lg:w-[60vw] md:w-[70vw] w-[80vw]">
          Tudo o que Você Precisa para Alcançar Suas Metas!
        </h1>
        <h2 className="mt-8 md:text-2xl text-xl text-center text-gray-300 mb-10 xl:mt-0">
          Saúde física e mental em um único lugar
        </h2>
        <div className="grid xl:grid-cols-2 grid-cols-1 items-center">
          <div className="flex flex-col lg:items-start items-center w-full lg:mb-20 mb-28 xl:mb-0">
            <p className="xl:w-[30vw] lg:w-[50vw] w-[60vw] lg:text-start lg:text-lg text-base">
              Ao se juntar à nossa academia, você não está apenas melhorando sua
              saúde física, mas também sua saúde mental e emocional. Nossas
              atividades ajudam a reduzir o estresse, aumentar a autoestima e
              criar uma sensação de bem-estar geral. Além disso, o ambiente
              amigável e de apoio torna cada visita uma experiência agradável e
              motivadora.
            </p>
            <Button variant="gym" className="mt-10">
              Experimente a Transformação
            </Button>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center gap-4">
            <div className=" relative z-20 h-[38vh] w-[30vh] bg-black rounded-3xl md:mt-20 mt-6 md:order-1 order-2">
              <div className="absolute z-30 h-[38vh] w-[30vh] bg-cover bg-[url('/card-4.jpg')] bottom-0 right-0 rounded-3xl" />
            </div>
            <div className=" relative z-20 h-[38vh] w-[30vh] bg-rose-600 rounded-3xl md:order-2 order-1">
              <div className="absolute z-30 h-[48vh] w-[30vh] bg-cover bg-[url('/card-2.png')] bottom-0 right-0 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-[10] top-0 right-0 md:w-[55vh] md:h-[45vh] w-[30vh] h-[20vh] bg-gradient-to-br from-rose-500 to-amber-500 rounded-full shadow-lg filter blur-[75px] opacity-10" />
    </section>
  );
}
