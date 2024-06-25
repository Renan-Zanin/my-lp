"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import DepositionsCard from "./DepositionsCard";

export default function DespositionsGym() {
  return (
    <section
      id="#gymDepositions"
      className="relative pb-16 w-[99.6vw] flex justify-end 2xl:px-[15vw] lg:px-[10vw] px-[5vw] bg-zinc-900"
    >
      <div className="mt-24 flex flex-col lg:items-end items-center w-full">
        <h1 className="xl:text-5xl md:text-4xl text-3xl text-white tracking-wide lg:text-end text-center uppercase 2xl:w-[40vw] xl:w-[50vw] w-[67vw]">
          Histórias de Sucesso que Inspiram
        </h1>
        <h2 className="mt-8 md:text-2xl text-xl md:text-end text-center text-gray-300 mb-8 md:w-full w-[70vw]">
          Veja o que nossos membros têm a dizer
        </h2>
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-20 w-full">
          <DepositionsCard />
          <div className="flex flex-col items-end">
            <p className="xl:w-[30vw] lg:w-[40vw] md:w-[60vw] w-[75vw] lg:text-end lg:text-lg text-base">
              Na nossa academia, acreditamos que os resultados falam por si. Não
              há melhor forma de entender o impacto positivo que podemos ter na
              sua vida do que ouvir diretamente de quem já trilhou esse caminho.
              Nossos membros compartilham suas histórias de superação,
              conquistas e transformações, mostrando que, com dedicação e apoio,
              qualquer objetivo é alcançável. Leia alguns depoimentos e
              inspire-se com as jornadas de sucesso daqueles que escolheram
              nossa academia para transformar suas vidas.
            </p>
            <Button
              variant="gym"
              className="mt-10"
              aria-label="Venha nos conhecer"
            >
              Venha nos conhecer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
