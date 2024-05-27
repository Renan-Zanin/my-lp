"use client";

import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/hero.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="#heroSection"
      className="flex items-center justify-between mb-10 mt-20"
    >
      <div>
        <h1 className="text-5xl text-white font-bold w-[550px] leading-tight mb-10">
          Transforme seu negócio com páginas de{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Alto Impacto!
          </span>
        </h1>
        <p className="text-2xl w-[600px] mb-16">
          Conquiste mais clientes, aumente suas vendas e expanda sua presença
          online!
        </p>
        <Button>Descubra Agora!</Button>
      </div>
      <div className="relative">
        <Image
          src={HeroImage}
          alt=""
          className="backdrop-filter backdrop-blur-sm bg-opacity-100 z-50"
        />
        <div className="absolute top-10 z-10 w-[450px] h-[350px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg filter blur-3xl opacity-25"></div>
      </div>
    </section>
  );
}
