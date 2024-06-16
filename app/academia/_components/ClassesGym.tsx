import React from "react";
import ClassesCard from "./classesCard";
import ClassesCarrousel from "./classesCarrousel";

export default function ClassesGym() {
  return (
    <section className="relative pb-16 w-[99.6vw] flex justify-start pl-[15vw] pr-[15vw] bg-zinc-900 overflow-hidden">
      <div className="mt-24 flex flex-col items-center w-full">
        <h1 className=" md:text-5xl text-white tracking-wide text-center uppercase w-[40vw]">
          Muito Mais que um Treino!
        </h1>
        <h2 className="mt-8 text-2xl text-gray-300">
          Aulas diversificadas, equipamentos modernos e suporte completo
        </h2>
        <ClassesCarrousel />
      </div>
      <div className="absolute z-[10] bottom-[-100px] left-[-200px] md:w-[550px] md:h-[450px] w-[300px] h-[200px] bg-gradient-to-br from-rose-500 to-amber-500 rounded-full shadow-lg filter blur-[75px] opacity-10" />
    </section>
  );
}
