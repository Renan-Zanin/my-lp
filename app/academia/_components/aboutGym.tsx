"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function AboutGym() {
  return (
    <section
      id="#gymAbout"
      className="relative pb-16 w-[99.6vw] flex justify-start pl-[15vw] pr-[15vw] bg-black"
    >
      <div className="mt-24 flex flex-col items-start w-full">
        <h1 className=" md:text-5xl text-white tracking-wide text-start uppercase w-[40vw]">
          Tudo o que Você Precisa para Alcançar Suas Metas!
        </h1>
        <h2 className="mt-8 text-2xl text-gray-300">
          Saúde física e mental em um único lugar
        </h2>
        <div className="flex flex-row items-center justify-between gap-20 w-full">
          <div>
            <p className="w-[30vw] text-start text-[18px]">
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
          <div className="flex flex-row gap-8">
            <div className=" relative z-20 h-[400px] w-[350px] bg-black rounded-3xl mt-20">
              <div className="absolute z-30 h-[400px] w-[350px] bg-cover bg-[url('/card-4.jpg')] bottom-0 right-0 rounded-3xl" />
            </div>
            <div className=" relative z-20 h-[400px] w-[350px] bg-rose-600 rounded-3xl">
              <div className="absolute z-30 h-[500px] w-[350px] bg-cover bg-[url('/card-2.png')] bottom-0 right-0 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-[10] top-0 right-0 md:w-[550px] md:h-[450px] w-[300px] h-[200px] bg-gradient-to-br from-rose-500 to-amber-500 rounded-full shadow-lg filter blur-[75px] opacity-10" />
    </section>
  );
}
