import { Button } from "@/components/ui/button";
import React from "react";

interface ClassesCardProps {
  type: string;
  exercise: string;
}

export default function ClassesCard({ type, exercise }: ClassesCardProps) {
  return (
    <div className="relative group z-20 md:h-[40vh] md:w-[34vh] h-[30vh] w-[30vh] bg-rose-600 rounded-3xl flex flex-col p-4 items-center justify-center md:hover:translate-y-24 hover:translate-y-20 transition duration-500 ease-in-out">
      <div className="absolute z-40 md:h-[40.1vh] md:w-[34.1vh] h-[30.1vh] w-[30.1vh] bg-cover bg-[url('/card-3.webp')] bottom-0 right-0 rounded-3xl md:group-hover:-translate-y-36 group-hover:-translate-y-32 transition duration-500 overflow-hidden">
        <div className="absolute z-30 bottom-0 left-0 w-[34vh] h-[397px] bg-gradient-to-br from-rose-600 to-black rounded-full shadow-lg filter blur-[75px] opacity-10 group-hover:opacity-0 transition duration-500 ease-in-out" />
      </div>
      <div className="z-40 flex flex-col group-hover:hidden text-white transition duration-500 ease-in-out">
        <span className="text-center lg:text-lg text-base transition duration-500 ease-in-out">
          {type}
        </span>
        <p className="text-center lg:text-3xl text-2xl transition duration-500 ease-in-out">
          {exercise}
        </p>
      </div>
      <div className="z-30 hidden items-center group-hover:flex flex-col lg:pt-[300px] md:pt-[260px] pt-[20vh] text-white transition duration-500 mb-12">
        <span className="text-center lg:text-lg text-base transition duration-500 ease-in-out mb-0">
          {type}
        </span>
        <p className="text-center md:mb-4 mb-2 lg:text-3xl text-2xl transition duration-500 ease-in-out">
          {exercise}
        </p>
        <Button
          variant="gym"
          className="bg-black text-white transition duration-500 ease-in-out hover:bg-black/80"
        >
          Junte-se agora
        </Button>
      </div>
    </div>
  );
}
