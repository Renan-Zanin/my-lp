"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import ProfileImage from "/public/profile-2.jpg";
import Image from "next/image";

export default function DepositionsProfile() {
  return (
    <section
      id="#gymAbout"
      className="pb-24 flex justify-start px-[15vw] pt-10"
    >
      <div className="flex items-center justify-between">
        <div className="relative">
          <Image
            src={ProfileImage}
            alt="Imagem de perfil"
            className="items-center rounded-tr-[400px] h-[85vh] w-[90vh]"
          />
          <div className="absolute top-10 h-full w-full border-orange-900 border-2 rounded-tr-[400px] left-14"></div>
        </div>
        <div className="mt-24 flex flex-col items-end">
          <h1 className=" md:text-5xl text-orange-900 tracking-wide text-end uppercase w-[40vw]">
            Me conheça um pouco melhor
          </h1>
          <h2 className="mt-8 text-2xl text-black w-[30vw] text-end">
            De anos de experiência no campo para a sala de aula, ela traz o
            conhecimento que você precisa.
          </h2>
          <div className="flex flex-col items-end mt-10">
            <p className="w-[30vw] text-end text-[18px] text-black">
              Oi, eu sou [Nome da Vendedora], e minha paixão é ajudar pessoas
              como você a atingir seu potencial máximo. Com mais de [X] anos de
              experiência em [Área de Especialização], eu desenvolvi métodos
              eficazes que já beneficiaram milhares de alunos. Minha missão é
              proporcionar uma educação de qualidade que seja acessível e
              prática. Vamos embarcar nessa jornada juntos?
            </p>
            <Button variant="profile" className="mt-10">
              Comece Sua Jornada Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
