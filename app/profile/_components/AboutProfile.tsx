"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import ProfileImage from "/public/profile-2.webp";
import Image from "next/image";

export default function AboutProfile() {
  return (
    <section
      id="#profileAbout"
      className="pb-24 flex justify-start 2xl:px-[15vw] lg:px-[10vw] px-[5vw] pt-10"
    >
      <div className="flex md:flex-row flex-col-reverse items-center md:justify-between justify-center">
        <div className="relative md:mt-20 mt-16">
          <Image
            src={ProfileImage}
            alt="Imagem de perfil"
            className="items-center rounded-tr-[400px] h-full  object-contain"
          />
          <div className="absolute xl:top-10 md:top-6 top-2 h-full w-[36vh] lg:w-[34vh] 2xl:w-[35vh] xl:w-[38vh] border-orange-900 border-2 rounded-tr-[400px] lg:left-36 md:right-10 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <div className="mt-24 flex flex-col md:items-end items-center">
          <h1 className="font-semibold 2xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-orange-900 tracking-normal md:text-end text-center uppercase xl:w-[40vw] lg:w-[50vw] md:w-[55vw] w-[80vw]">
            Conheça a Mentora que Vai Transformar sua Carreira
          </h1>
          <h2 className="mt-8 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl text-black 2xl:w-[30vw] xl:w-[32vw] lg:w-[31vw] md:w-[45vw] w-[70vw] md:text-end text-center">
            De anos de experiência no campo para a sala de aula, ela traz o
            conhecimento que você precisa.
          </h2>
          <div className="flex flex-col items-end mt-10">
            <p className="xl:w-[30vw] md:w-[40vw] w-[80vw] text-sm md:text-base xl:text-lg md:text-end text-start text-black">
              Oi, eu sou Maria, e minha paixão é ajudar pessoas como você a
              atingir seu potencial máximo. Com mais de 10 anos de experiência,
              eu desenvolvi métodos eficazes que já beneficiaram milhares de
              alunos. Minha missão é proporcionar uma educação de qualidade que
              seja acessível e prática. Vamos embarcar nessa jornada juntos?
            </p>
            <Button
              variant="profile"
              className="mt-10"
              aria-label="Comece sua jornada agora"
            >
              Comece Sua Jornada Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
