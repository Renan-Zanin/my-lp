"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PriceProfile() {
  return (
    <section
      id="#gymAbout"
      className="flex items-center justify-center px-[15vw] bg-orange-50 pt-12 rounded-tl-[400px] rounded-tr-[400px] pb-16"
    >
      <div className="mt-12 flex flex-col items-center justify-center">
        <h1 className=" md:text-5xl text-orange-900 tracking-wide text-center uppercase w-[40vw]">
          Oferta Exclusiva e Limitada!
        </h1>
        <h2 className="mt-8 text-2xl text-black w-[30vw] text-center">
          Desconto especial para os primeiros 100 inscritos
        </h2>
        <div className="flex flex-col items-center mt-10">
          <p className="w-[30vw] text-center text-[18px] text-black">
            Não perca essa oportunidade única de transformar sua carreira a um
            preço especial. Inscreva-se agora e aproveite um desconto de 20% no
            valor do curso. Esta oferta é limitada aos primeiros 100 inscritos,
            então não espere mais para garantir seu futuro de sucesso. Cada
            segundo conta!
          </p>
          <div className="relative mt-10">
            <Card className="bg-stone-50 border-orange-900 shadow-none rounded-none flex flex-col items-center">
              <CardHeader>
                <CardTitle className="text-orange-900 font-semibold text-3xl uppercase">
                  Valor especial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                    <p className="text-black">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                    <p className="text-black">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                    <p className="text-black">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                    <p className="text-black">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div className="flex flex-col items-center mt-4">
                    <p className="text-stone-700 line-through">De: R$999,99</p>
                    <p className="text-black text-5xl font-semibold mb-1">
                      R$800,00
                    </p>
                    <p className="text-orange-900 font-semibold text-xl">
                      Ou 12x de R$70,00
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="profile" className="mt-8 z-20 mb-6">
                  Inscreva-se Agora
                </Button>
              </CardFooter>
            </Card>
            <div className="absolute bottom-2 h-full w-full border-orange-900 border-2 rounded-none left-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
