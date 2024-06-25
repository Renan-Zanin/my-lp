"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import DepositionsCarrousel from "./DepositionsCarrousel";

export default function DepositionsProfile() {
  return (
    <section
      id="#profileDepositions"
      className="pb-24 flex justify-start 2xl:px-[15vw] lg:px-[10vw] px-[5vw] pt-10"
    >
      <div className="flex items-center md:flex-row flex-col-reverse md:justify-between w-full">
        <div className="relative md:mt-0 -mt-16">
          <DepositionsCarrousel />
        </div>
        <div className="mt-10 flex flex-col md:items-end items-center">
          <h1 className="font-semibold 2xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-orange-900 tracking-normal md:text-end text-center uppercase 2xl:w-[40vw] xl:w-[42vw] lg:w-[40vw] md:w-[55vw] w-[90vw]">
            Depoimentos de Alunos Satisfeitos
          </h1>
          <h2 className="mt-8 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl text-black 2xl:w-[30vw] xl:w-[40vw] lg:w-[28vw] md:w-[40vw] w-[70vw] md:text-end text-center">
            Veja como nosso curso transformou a vida de outras pessoas como
            você.
          </h2>
          <div className="flex flex-col md:items-end items-center mt-10">
            <p className="2xl:w-[30vw] xl:w-[45vw] lg:w-[40vw] md:w-[50vw] w-[70vw] md:text-end text-center xl:text-lg md:text-base text-sm text-black">
              Não precisa acreditar apenas na minha palavra. Confira o que meus
              alunos têm a dizer. Essas histórias são apenas uma amostra do
              impacto que meu curso pode ter na sua vida.
            </p>
            <Button
              variant="profile"
              className="mt-10"
              aria-label="Transforme sua vida hoje"
            >
              Transforme Sua Vida Hoje
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
