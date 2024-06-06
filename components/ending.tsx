"use client";

import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/hero.png";
import Image from "next/image";

export default function EndingSection() {
  return (
    <section
      id="#solutionSection"
      className="flex flex-col md:items-start items-center mt-14 md:mb-36 mb-24"
    >
      <h1 className="md:text-xl text-purple-500 font-medium leading-tight md:mb-8 mb-10 text-left border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        Transforme agora seu negócio Online!
      </h1>
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex flex-col md:items-start items-center">
          <h2 className="md:text-5xl text-2xl font-bold text-white md:text-start text-center md:w-[700px] w-[80vw] leading-tight mb-10">
            Entre em contato agora e inicie a sua jornada rumo ao sucesso
            digital
          </h2>
          <p className="md:text-xl text-[16px] md:w-[700px] w-[80vw] md:mb-24 mb-16 text-wrap text-start">
            Não espere mais para elevar sua presença online a novos patamares de
            sucesso. Nossas Landing Pages de Alto Impacto e Soluções Web
            Personalizadas estão prontas para impulsionar seu negócio para o
            próximo nível. Entre em contato conosco hoje mesmo para começar sua
            jornada rumo ao sucesso digital. Estamos ansiosos para trabalhar com
            você!
          </p>
          <Button>Aproveite a Oferta!</Button>
        </div>
      </div>
    </section>
  );
}
