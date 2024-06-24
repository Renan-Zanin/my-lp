import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ClassesCard from "./classesCard";
import Autoplay from "embla-carousel-autoplay";

export default function ClassesCarrousel() {
  return (
    <Carousel
      className="md:w-[75vw] w-[70vw] lg:w-full md:h-[600px] h-[450px] relative flex items-center justify-center"
      opts={{
        align: "start",
        loop: true,
        duration: 25,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="-ml-4 md:h-[600px] h-[450px] w-full items-center">
        <CarouselItem className="pl-4 overflow-visible basis-auto">
          <ClassesCard type="Força" exercise="Musculação" />
        </CarouselItem>
        <CarouselItem className="pl-4 overflow-visible basis-auto">
          <ClassesCard type="Cardio" exercise="Spinning" />
        </CarouselItem>
        <CarouselItem className="pl-4 overflow-visible basis-auto">
          <ClassesCard type="Ritmo" exercise="Zumba" />
        </CarouselItem>
        <CarouselItem className="pl-4 overflow-visible basis-auto">
          <ClassesCard type="Combate" exercise="Jiu-Jitsu" />
        </CarouselItem>
        <CarouselItem className="pl-4 overflow-visible basis-auto">
          <ClassesCard type="Alta intensidade" exercise="Crossfit" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
