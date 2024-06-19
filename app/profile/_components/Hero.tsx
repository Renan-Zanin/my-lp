"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import ProfileImage from "/public/profile.jpg";
import Image from "next/image";

export default function HeroProfile() {
  return (
    <section
      id="#gymHero"
      className=" relative h-screen flex items-center justify-center px-[15vw] bg-orange-50 mt-14 rounded-bl-[400px] rounded-tr-[400px]"
    >
      <div className="flex flex-col items-start justify-center relative z-20 w-full mt-2">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="md:text-[60px] text-3xl mb-6 text-orange-900 font-bold leading-tight uppercase w-[40vw] ">
              Transforme sua carreira hoje mesmo
            </h1>
            <span className="md:text-4xl text-xl font-light md:mb-16 mb-10 w-[40vw] text-black">
              Descubra o método que já ajudou diversos profissionais a
              alcançarem o sucesso em tempo recorde.
            </span>
            <Button variant="profile">Descubra Mais</Button>
          </div>
          <div className="relative">
            <Image
              src={ProfileImage}
              alt="Imagem de perfil"
              className="items-center rounded-tl-full h-[85vh] w-[90vh]"
            />
            <div className="absolute bottom-4 h-full w-full border-orange-900 border-2 rounded-tl-full right-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
