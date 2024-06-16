import React from "react";
import FacilitiesCarrousel from "./FacilitiesCarrousel";
import { Button } from "@/components/ui/button";

export default function FacilitiesGym() {
  return (
    <section
      id="#gymFacilities"
      className="relative pb-16 w-[99.6vw] flex pl-[15vw] pr-[15vw] bg-black overflow-hidden"
    >
      <div className="mt-24 flex flex-col items-center w-full">
        <h1 className=" md:text-5xl text-white tracking-wide text-center uppercase w-[40vw]">
          Instalações modernas e confortáveis
        </h1>
        <h2 className="mt-8 text-2xl text-gray-300">
          Tudo para o seu conforto e bem-estar
        </h2>
        <div className="flex flex-row justify-between items-center mt-8 w-full">
          <div className="w-[25vw]">
            <p className="text-start text-[18px]">
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
      {/* <div className="absolute z-[10] bottom-[-100px] left-[-200px] md:w-[550px] md:h-[450px] w-[300px] h-[200px] bg-gradient-to-br from-rose-500 to-amber-500 rounded-full shadow-lg filter blur-[75px] opacity-10" /> */}
    </section>
  );
}
