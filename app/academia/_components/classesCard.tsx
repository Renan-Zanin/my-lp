import { Button } from "@/components/ui/button";
import React from "react";

interface ClassesCardProps {
  type: string;
  exercise: string;
}

export default function ClassesCard({ type, exercise }: ClassesCardProps) {
  return (
    <div className="relative group z-20 h-[397px] w-[347px] bg-rose-600 rounded-3xl flex flex-col p-4 items-center justify-center hover:translate-y-4 transition duration-500 ease-in-out">
      <div className="absolute z-40 h-[400px] w-[350px] bg-cover bg-[url('/card-3.jpg')] bottom-0 right-0 rounded-3xl group-hover:-translate-y-32 transition duration-500 overflow-hidden">
        <div className="absolute z-30 bottom-0 left-0 md:w-[347px] md:h-[397px] w-[300px] h-[200px] bg-gradient-to-br from-rose-600 to-black rounded-full shadow-lg filter blur-[75px] opacity-10 group-hover:opacity-0 transition duration-500 ease-in-out" />
      </div>
      <div className="z-40 flex flex-col group-hover:hidden text-white transition duration-500 ease-in-out">
        <span className="text-center text-[18px] transition duration-500 ease-in-out">
          {type}
        </span>
        <p className="text-center text-3xl transition duration-500 ease-in-out">
          {exercise}
        </p>
      </div>
      <div className="z-30 hidden items-center group-hover:flex flex-col pt-[300px] text-white transition duration-500">
        <span className="text-center text-[18px] transition duration-500 ease-in-out">
          {type}
        </span>
        <p className="text-center mb-1 text-3xl transition duration-500 ease-in-out">
          {exercise}
        </p>
        <Button
          variant="gym"
          className="bg-black text-white mb-8 transition duration-500 ease-in-out"
        >
          Junte-se agora
        </Button>
      </div>
    </div>
  );
}
