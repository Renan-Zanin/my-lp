import React from "react";
import FacilitiesCarrousel from "./FacilitiesCarrousel";
import { Button } from "@/components/ui/button";

export default function FacilitiesGym() {
  return (
    <section
      id="#gymFacilities"
      className="relative pb-16 flex pl-[15vw] pr-[15vw] bg-black overflow-hidden"
    >
      <div className="mt-24 flex flex-col items-center w-full">
        <h1 className="xl:text-5xl md:text-4xl text-3xl text-white tracking-wide text-center uppercase 2xl:w-[40vw] lg:w-[50vw] w-[60vw]">
          Instalações modernas e confortáveis
        </h1>
        <h2 className="mt-8 md:text-2xl text-xl text-center text-gray-300">
          Tudo para o seu conforto e bem-estar
        </h2>
        <div className="flex xl:flex-row flex-col-reverse justify-between items-center mt-8 w-full">
          <div className="xl:w-[30vw] lg:w-[50vw] md:w-[60vw] w-[70vw] mt-20 xl:mt-0">
            <p className="text-start lg:text-lg text-base">
              Nossa academia oferece instalações de primeira linha para garantir
              que você tenha a melhor experiência possível. Desde amplas salas
              de musculação e estúdios para aulas em grupo até áreas de
              relaxamento como sauna e piscina, cada detalhe foi pensado para o
              seu conforto e comodidade. Venha conhecer nosso espaço e se
              surpreenda com o ambiente acolhedor e profissional.
            </p>
            <Button variant="gym" className="mt-10">
              Inscreva-se agora
            </Button>
          </div>
          <FacilitiesCarrousel />
        </div>
      </div>
    </section>
  );
}
