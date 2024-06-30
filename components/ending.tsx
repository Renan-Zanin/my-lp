"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export default function EndingSection() {
  return (
    <section
      id="#solutionSection"
      className="flex flex-col md:items-start items-center mt-14 md:mb-36 mb-24 xl:px-[5vw] lg:px-[10vw] px-[5vw]"
    >
      <h1 className="lg:text-xl text-lg text-purple-500 font-medium leading-tight md:mb-8 mb-10 text-center border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        Transforme agora seu negócio Online!
      </h1>
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex flex-col md:items-start items-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-white md:text-start text-center md:w-[70vw] xl:w-[50vw] w-[80vw] leading-tight mb-10">
            Entre em contato agora e inicie a sua jornada rumo ao sucesso
            digital
          </h2>
          <p className="xl:text-xl text-base lg:text-lg lg:w-[60vw] xl:w-[40vw] w-[80vw] md:w-[60vw] lg:mb-24 mb-16 text-wrap text-start">
            Não espere mais para elevar sua presença online a novos patamares de
            sucesso. Minhas Landing Pages de Alto Impacto e Soluções Web
            Personalizadas estão prontas para impulsionar seu negócio para o
            próximo nível. Entre em contato hoje mesmo para começar sua jornada
            rumo ao sucesso digital. Estou ansiosos para trabalhar com você!
          </p>
          <Button aria-label="Aproveite a oferta" asChild>
            <Link
              to="#contactSection"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
              className="text-foreground ml-10 cursor-pointer"
            >
              Aproveite a Oferta!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
