import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import DepositionImage from "/public/deposition.webp";
import { IoMdStar } from "react-icons/io";

interface DepositionsCardProps {
  image: StaticImageData;
  text: string;
  name: string;
}

export default function DepositionsCard({
  image,
  text,
  name,
}: DepositionsCardProps) {
  return (
    <Card className="flex flex-col bg-orange-50 border-orange-900 shadow-none items-center justify-center xl:w-[18vw] xl:h-[250px] h-[280px] lg:w-[20vw] md:w-[30vw] w-[55vw]">
      <CardContent className="xl:p-8 p-4">
        <p className="text-black 2xl:text-base text-sm">&quot;{text}&quot;</p>
        <div className="flex xl:flex-row flex-col xl:mt-4 mt-4 items-center">
          <Image
            src={image}
            alt=""
            className="2xl:w-14 2xl:h-14 w-12 h-12 rounded-full mr-6"
          />
          <div className="flex 2xl:items-end 2xl:flex-row flex-col items-start">
            <p className="xl:mt-6 mt-2 text-orange-900 font-semibold">{name}</p>
            <div className="flex gap-1 2xl:mt-6 2xl:ml-6">
              <IoMdStar className="text-yellow-400" />
              <IoMdStar className="text-yellow-400" />
              <IoMdStar className="text-yellow-400" />
              <IoMdStar className="text-yellow-400" />
              <IoMdStar className="text-yellow-400" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
