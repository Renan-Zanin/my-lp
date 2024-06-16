"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import DepositionsCard from "./DepositionsCard";

export default function DespositionsGym() {
  return (
    <section className="relative pb-16 w-[99.6vw] flex justify-end pl-[15vw] pr-[15vw] bg-zinc-900">
      <div className="mt-24 flex flex-col items-end w-full">
        <h1 className=" md:text-5xl text-white tracking-wide text-end uppercase w-[40vw]">
          Histórias de Sucesso que Inspiram
        </h1>
        <h2 className="mt-8 text-2xl text-gray-300 mb-8">
          Veja o que nossos membros têm a dizer
        </h2>
        <div className="flex flex-row items-center justify-between gap-20 w-full">
          <DepositionsCard />
          <div className="flex flex-col items-end">
            <p className="w-[30vw] text-end text-[18px]">
              Na nossa academia, acreditamos que os resultados falam por si. Não
              há melhor forma de entender o impacto positivo que podemos ter na
              sua vida do que ouvir diretamente de quem já trilhou esse caminho.
              Nossos membros compartilham suas histórias de superação,
              conquistas e transformações, mostrando que, com dedicação e apoio,
              qualquer objetivo é alcançável. Leia alguns depoimentos e
              inspire-se com as jornadas de sucesso daqueles que escolheram
              nossa academia para transformar suas vidas.
            </p>
            <Button variant="gym" className="mt-10">
              Venha nos conhecer
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute z-[10] top-0 left-0 md:w-[550px] md:h-[450px] w-[300px] h-[200px] bg-gradient-to-br from-rose-500 to-amber-500 rounded-full shadow-lg filter blur-[75px] opacity-10" />
    </section>
  );
}
