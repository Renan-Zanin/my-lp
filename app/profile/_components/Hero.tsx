"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import ProfileImage from "/public/profile.webp";
import Image from "next/image";

export default function HeroProfile() {
  return (
    <section
      id="#gymHero"
      className=" relative md:h-screen h-[120vh] flex items-center justify-center 2xl:px-[15vw] lg:px-[10vw] px-[5vw] bg-orange-50 mt-14 2xl:rounded-bl-[400px] 2xl:rounded-tr-[400px] md:rounded-bl-[25vw] md:rounded-tr-[25vw] rounded-bl-[60vw] rounded-tr-[60vw]"
    >
      <div className="flex flex-col items-start justify-center relative z-20 w-full mt-2">
        <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center w-full">
          <div className="flex flex-col lg:items-start items-center w-full">
            <h1 className="2xl:text-6xl md:text-5xl text-3xl mb-6 text-orange-900 font-bold leading-tight uppercase lg:w-[41vw] w-[70vw] lg:text-start text-center">
              Transforme sua carreira hoje mesmo
            </h1>
            <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl lg:text-start text-center font-light md:mb-16 mb-10 2xl:w-[40vw] xl:w-[35vw] w-[80vw] text-black">
              Descubra o método que já ajudou diversos profissionais a
              alcançarem o sucesso em tempo recorde.
            </h2>
            <Button
              variant="profile"
              className="lg:mr-0 md:mr-80 mr-28"
              aria-label="Descubra mais"
            >
              Descubra Mais
            </Button>
          </div>
          <div className="relative md:mt-0 mt-16">
            <Image
              src={ProfileImage}
              alt="Imagem de perfil"
              className="items-center rounded-tl-full 2xl:h-[85vh] 2xl:w-[90vh] xl:h-[75vh] xl:w-[80vh] lg:h-[60vh] lg:w-[65vh] md:h-[40vh] md:w-[35vh] h-[35vh] w-[25vh]"
            />
            <div className="absolute bottom-4 h-full w-full border-orange-900 border-2 rounded-tl-full right-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
