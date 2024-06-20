"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import DepositionsCarrousel from "./DepositionsCarrousel";

export default function DepositionsProfile() {
  return (
    <section
      id="#gymAbout"
      className="pb-24 flex justify-start px-[15vw] pt-10"
    >
      <div className="flex items-center justify-between w-full">
        <div className="relative">
          <DepositionsCarrousel />
        </div>
        <div className="mt-10 flex flex-col items-end">
          <h1 className=" md:text-5xl text-orange-900 tracking-wide text-end uppercase w-[40vw]">
            Depoimentos de Alunos Satisfeitos
          </h1>
          <h2 className="mt-8 text-2xl text-black w-[30vw] text-end">
            Veja como nosso curso transformou a vida de outras pessoas como
            você.
          </h2>
          <div className="flex flex-col items-end mt-10">
            <p className="w-[30vw] text-end text-[18px] text-black">
              Não precisa acreditar apenas na minha palavra. Confira o que meus
              alunos têm a dizer. Essas histórias são apenas uma amostra do
              impacto que meu curso pode ter na sua vida.
            </p>
            <Button variant="profile" className="mt-10">
              Transforme Sua Vida Hoje
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
