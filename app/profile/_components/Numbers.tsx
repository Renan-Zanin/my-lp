"use client";

import React from "react";
import NumbersCard from "./NumbersCard";

export default function Numbers() {
  return (
    <section
      id="#profileNumbers"
      className="pb-16 flex justify-center 2xl:px-[15vw] xl:px-[10vw] px-[5vw] pt-16"
    >
      <div className="grid md:grid-cols-4 grid-cols-2 2xl:gap-8 xl:gap-4 gap-2 w-full">
        <NumbersCard amount={99} text="Taxa de sucesso" />
        <NumbersCard amount={150} text="Clientes Satisfeitos" />
        <NumbersCard amount={200} text="Projetos acompanhados" />
        <NumbersCard amount={10} text="Parceiros" />
      </div>
    </section>
  );
}
