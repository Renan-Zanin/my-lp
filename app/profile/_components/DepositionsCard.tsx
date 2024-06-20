import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import DepositionImage from "/public/deposition.jpg";
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
    <Card className="flex flex-col bg-orange-50 border-orange-900 shadow-none items-center justify-center w-[18vw] h-[250px]">
      <CardContent className="p-8">
        <p className="text-black">&quot;{text}&quot;</p>
        <div className="flex mt-4 items-center">
          <Image src={image} alt="" className="w-14 h-14 rounded-full mr-6" />
          <p className="mt-6 text-orange-900 font-semibold">{name}</p>
          <div className="flex gap-1 mt-6 ml-6">
            <IoMdStar className="text-yellow-400" />
            <IoMdStar className="text-yellow-400" />
            <IoMdStar className="text-yellow-400" />
            <IoMdStar className="text-yellow-400" />
            <IoMdStar className="text-yellow-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
