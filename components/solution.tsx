"use client";

import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/hero.png";
import Image from "next/image";

export default function SolutionSection() {
  return (
    <section
      id="#solutionSection"
      className="flex flex-col items-center justify-center mt-14 mb-24"
    >
      <h1 className="text-2xl text-purple-500 font-bold leading-tight mb-8">
        Cansado de Páginas Que Não Convertem?
      </h1>
      <div className="flex flex-row justify-between">
        <div className="relative">
          <Image
            src={HeroImage}
            alt=""
            className="backdrop-filter backdrop-blur-sm bg-opacity-100"
          />
          <div className="absolute top-10 z-10 w-[450px] h-[350px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg filter blur-3xl opacity-25"></div>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-5xl font-bold text-white text-end w-[700px] leading-tight mb-10">
            Nossas Páginas são a solução para seus problemas de conversão!
          </h2>
          <p className="text-2xl w-[600px] mb-16 text-wrap text-end">
            Se suas páginas atuais não estão gerando os resultados desejados,
            você não está sozinho. Muitos negócios enfrentam esse desafio. Mas
            nossa equipe especializada está aqui para mudar isso. Com nossa
            abordagem focada em conversões, transformamos visitantes em
            clientes!
          </p>
          <Button>Saiba Mais Detalhes!</Button>
        </div>
      </div>
    </section>
  );
}
