"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function PrizesGym() {
  return (
    <section
      id="#gymPrizes"
      className="relative pb-16 w-[99.6vw] flex justify-center pl-[15vw] pr-[15vw] bg-black"
    >
      <div className="mt-24 flex flex-col items-center w-full">
        <h1 className=" md:text-5xl text-white tracking-wide text-center uppercase w-[40vw]">
          Planos Flexíveis para Todos os Estilos de Vida
        </h1>
        <h2 className="mt-8 text-2xl text-gray-300 mb-8">
          Escolha o plano perfeito para você e comece hoje mesmo
        </h2>
        <div className="grid grid-cols-3 gap-8 mt-6">
          <Card className="flex flex-col bg-white border-none shadow-none items-center justify-center w-[20vw] mt-10">
            <CardHeader>
              <CardTitle>
                <p className="bg-black p-1 text-center text-xs mt-4 mb-[-16px]">
                  Básico
                </p>
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-black text-center text-3xl font-bold mb-8">
              R$ 99,00
            </CardDescription>
            <CardContent>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-rose-600 mr-2" />
                <p className="text-zinc-900">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-rose-600 mr-2" />
                <p className="text-zinc-900">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-rose-600 mr-2" />
                <p className="text-zinc-900 line-through">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-rose-600 mr-2" />
                <p className="text-zinc-900 line-through">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-rose-600 mr-2" />
                <p className="text-zinc-900 line-through">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="gym">Junte-se agora</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col bg-rose-600 border-none shadow-none mb-10 items-center justify-center w-[20vw] ">
            <CardHeader>
              <CardTitle>
                <p className="bg-black p-1 text-center text-xs mt-0 mb-[-16px]">
                  Diamante
                </p>
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-black text-center text-3xl font-bold mb-8">
              R$ 149,00
            </CardDescription>
            <CardContent>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-white mr-2" />
                <p className="text-zinc-900">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-white mr-2" />
                <p className="text-zinc-900">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-white mr-2" />
                <p className="text-zinc-900">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-white mr-2" />
                <p className="text-zinc-900">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-white mr-2" />
                <p className="text-zinc-900">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="gym" className="bg-white hover:bg-white/90">
                Junte-se agora
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col bg-white border-none shadow-none items-center justify-center w-[20vw] mt-10">
            <CardHeader>
              <CardTitle>
                <p className="bg-black p-1 text-center text-xs mt-4 mb-[-16px]">
                  Premium
                </p>
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-black text-center text-3xl font-bold mb-8">
              R$ 119,00
            </CardDescription>
            <CardContent>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-rose-600 mr-2" />
                <p className="text-zinc-900">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-rose-600 mr-2" />
                <p className="text-zinc-900">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-rose-600 mr-2" />
                <p className="text-zinc-900 ">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-rose-600 mr-2" />
                <p className="text-zinc-900 ">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center mb-6">
                <VscDebugBreakpointLog className="text-rose-600 mr-2" />
                <p className="text-zinc-900 line-through">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="gym">Junte-se agora</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="absolute z-[10] left-1/2 top-72 transform -translate-x-1/2 md:w-[550px] md:h-[450px] w-[300px] h-[200px] bg-gradient-to-br from-rose-500 to-rose-600 rounded-full shadow-lg filter blur-[75px] opacity-10" />
    </section>
  );
}
