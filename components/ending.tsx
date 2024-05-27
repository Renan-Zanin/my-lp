"use client";

import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/hero.png";
import Image from "next/image";

export default function EndingSection() {
  return (
    <section id="#solutionSection" className="flex flex-col items-start my-14">
      <h1 className="text-2xl text-purple-500 font-bold leading-tight mb-8">
        Chegou a Hora de Transformar Seu Negócio Online. Vamos Começar!
      </h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-start">
          <h2 className="text-5xl font-bold text-white text-start w-[700px] leading-tight mb-10">
            Entre em Contato Conosco para Iniciar Sua Jornada Rumo ao Sucesso
            Digital.
          </h2>
          <p className="text-2xl w-[700px] mb-16 text-wrap text-start">
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
