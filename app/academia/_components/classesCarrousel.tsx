import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ClassesCard from "./classesCard";

export default function ClassesCarrousel() {
  return (
    <Carousel
      className="w-full h-[550px] mt-32 relative flex items-center justify-center"
      opts={{
        align: "start",
        loop: true,
        duration: 25,
      }}
    >
      <CarouselContent className="-ml-4 h-[550px] w-full mt-32">
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
