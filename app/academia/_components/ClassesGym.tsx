import React from "react";
import ClassesCarrousel from "./classesCarrousel";

export default function ClassesGym() {
  return (
    <section
      id="#gymClasses"
      className="relative pb-16 w-[99.6vw] flex justify-start 2xl:px-[15vw] lg:px-[10vw] px-[5vw] bg-zinc-900 overflow-hidden"
    >
      <div className="mt-24 flex flex-col items-center w-full">
        <h1 className="xl:text-5xl md:text-4xl text-3xl text-white tracking-wide text-center uppercase lg:w-[40vw] md:w-[60vw] w-[70vw]">
          Muito Mais que um Treino!
        </h1>
        <h2 className="mt-8 md:text-2xl text-xl text-center text-gray-300 text-center">
          Aulas diversificadas, equipamentos modernos e suporte completo
        </h2>
        <ClassesCarrousel />
      </div>
    </section>
  );
}
