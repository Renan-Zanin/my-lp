"use client";

import React from "react";
import NumbersCard from "./NumbersCard";

export default function Numbers() {
  return (
    <section
      id="#gymAbout"
      className="pb-16 flex justify-center px-[15vw] pt-16"
    >
      <div className="grid grid-cols-4 gap-8">
        <NumbersCard amount={99} text="Taxa de sucesso" />
        <NumbersCard amount={150} text="Clientes Satisfeitos" />
        <NumbersCard amount={200} text="Projetos acompanhados" />
        <NumbersCard amount={10} text="Parceiros" />
      </div>
    </section>
  );
}
