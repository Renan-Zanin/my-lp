import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function FacilitiesCarrousel() {
  return (
    <Carousel
      className="xl:w-[30vw] lg:w-[45vw] w-[60vw] md:h-[40vh] h-[30vh] mt-6 relative flex items-center justify-center"
      opts={{
        align: "start",
        loop: true,
        duration: 25,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent className=" md:h-[40vh] h-[30vh] w-full md:mt-10 mt-4">
        <CarouselItem className="overflow-visible basis-auto">
          <div className="relative group z-20 md:h-[40vh] h-[30vh] xl:w-[25vw] lg:w-[35vw] w-[50vw] rounded-3xl flex flex-col p-4 items-center justify-center ">
            <div
              className={`absolute z-40 md:h-[40vh] h-[30vh] xl:w-[25vw] lg:w-[35vw] w-[50vw] bg-cover bg-[url('/facilitie-1.webp')] bottom-0 right-0 rounded-3xl overflow-hidden`}
            >
              <div className="absolute z-30 bottom-0 left-0 md:w-[25vw] md:h-[38vh] w-[15vw] h-[20vh] bg-gradient-to-br from-black to-black rounded-full filter blur-[80px] opacity-60" />
            </div>
            <div className="z-40 hidden flex-col group-hover:flex text-white transition duration-500 ease-in-out">
              <span className="text-center md:text-3xl text-xl transition duration-500 ease-in-out">
                Musculação
              </span>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="overflow-visible basis-auto">
          <div className="relative group z-20 md:h-[40vh] h-[30vh] xl:w-[25vw] lg:w-[35vw] w-[50vw] rounded-3xl flex flex-col p-4 items-center justify-center ">
            <div
              className={`absolute z-40 md:h-[40vh] h-[30vh] xl:w-[25vw] lg:w-[35vw] w-[50vw] bg-cover bg-[url('/facilitie-2.webp')] bottom-0 right-0 rounded-3xl overflow-hidden`}
            >
              <div className="absolute z-30 bottom-0 left-0 md:w-[25vw] md:h-[38vh] w-[15vw] h-[20vh] bg-gradient-to-br from-black to-black rounded-full filter blur-[80px] opacity-60" />
            </div>
            <div className="z-40 hidden flex-col group-hover:flex text-white transition duration-500 ease-in-out">
              <span className="text-center text-md:3xl text-xl transition duration-500 ease-in-out">
                Força
              </span>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="overflow-visible basis-auto">
          <div className="relative group z-20 md:h-[40vh] h-[30vh] xl:w-[25vw] lg:w-[35vw] w-[50vw] rounded-3xl flex flex-col p-4 items-center justify-center ">
            <div
              className={`absolute z-40 md:h-[40vh] h-[30vh] xl:w-[25vw] lg:w-[35vw] w-[50vw] bg-cover bg-[url('/facilitie-3.webp')] bottom-0 right-0 rounded-3xl overflow-hidden`}
            >
              <div className="absolute z-30 bottom-0 left-0 md:w-[25vw] md:h-[38vh] w-[15vw] h-[20vh] bg-gradient-to-br from-black to-black rounded-full filter blur-[80px] opacity-60" />
            </div>
            <div className="z-40 hidden flex-col group-hover:flex text-white transition duration-500 ease-in-out">
              <span className="text-center text-md:3xl text-xl transition duration-500 ease-in-out">
                Cardio
              </span>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
