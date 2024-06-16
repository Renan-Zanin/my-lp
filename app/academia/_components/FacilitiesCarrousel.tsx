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
      className="w-[30vw] h-[420px] mt-6 relative flex items-center justify-center"
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
      <CarouselContent className="-ml-4 h-[420px] w-full mt-10">
        <CarouselItem className="pl-4 overflow-visible basis-auto">
          <div className="relative group z-20 h-[397px] w-[500px] rounded-3xl flex flex-col p-4 items-center justify-center ">
            <div
              className={`absolute z-40 h-[400px] w-[500px] bg-cover bg-[url('/facilitie-1.jpg')] bottom-0 right-0 rounded-3xl overflow-hidden`}
            >
              <div className="absolute z-30 bottom-0 left-0 md:w-[500px] md:h-[397px] w-[300px] h-[200px] bg-gradient-to-br from-black to-black rounded-full filter blur-[80px] opacity-60" />
            </div>
            <div className="z-40 hidden flex-col group-hover:flex text-white transition duration-500 ease-in-out">
              <span className="text-center text-3xl transition duration-500 ease-in-out">
                Força
              </span>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-4 overflow-visible basis-auto">
          <div className="relative group z-20 h-[397px] w-[500px] rounded-3xl flex flex-col p-4 items-center justify-center">
            <div
              className={`absolute z-40 h-[400px] w-[500px] bg-cover bg-[url('/facilitie-2.jpg')] bottom-0 right-0 rounded-3xl overflow-hidden`}
            >
              <div className="absolute z-30 bottom-0 left-0 md:w-[500px] md:h-[397px] w-[300px] h-[200px] bg-gradient-to-br from-black to-black rounded-full filter blur-[80px] opacity-60" />
            </div>
            <div className="z-40 hidden flex-col group-hover:flex text-white transition duration-500 ease-in-out">
              <span className="text-center text-3xl transition duration-500 ease-in-out">
                Cardio
              </span>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-4 overflow-visible basis-auto">
          <div className="relative group z-20 h-[397px] w-[500px] rounded-3xl flex flex-col p-4 items-center justify-center">
            <div
              className={`absolute z-40 h-[400px] w-[500px] bg-cover bg-[url('/facilitie-3.jpg')] bottom-0 right-0 rounded-3xl overflow-hidden`}
            >
              <div className="absolute z-30 bottom-0 left-0 md:w-[500px] md:h-[397px] w-[300px] h-[200px] bg-gradient-to-br from-black to-black rounded-full filter blur-[80px] opacity-60" />
            </div>
            <div className="z-40 hidden flex-col group-hover:flex text-white transition duration-500 ease-in-out">
              <span className="text-center text-3xl transition duration-500 ease-in-out">
                Dança
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
