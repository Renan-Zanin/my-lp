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

export default function PricesGym() {
  return (
    <section
      id="#gymPrices"
      className="relative pb-16 flex justify-center 2xl:px-[15vw] lg:px-[10vw] px-[5vw] bg-black"
    >
      <div className="mt-24 flex flex-col items-center w-full">
        <h1 className="xl:text-5xl md:text-4xl text-3xl text-white tracking-wide text-center uppercase 2xl:w-[40vw] lg:w-[55vw] md:w-[70vw] w-[80vw]">
          Planos Flexíveis para Todos os Estilos de Vida
        </h1>
        <h2 className="mt-8 md:text-2xl text-xl text-center text-gray-300 mb-8">
          Escolha o plano perfeito para você e comece hoje mesmo
        </h2>
        <div className="grid lg:grid-cols-3 xl:gap-8 gap-4 justify-center mt-6 md:w-full w-[80vw]">
          <Card className="flex flex-col bg-white border-none shadow-none items-center justify-center w-full mt-10 lg:order-1 order-2">
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
              <Button variant="gym" aria-label="Junte-se agora">
                Junte-se agora
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col bg-rose-600 border-none shadow-none lg:mb-10 items-center justify-center w-full lg:order-2 order-1">
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
              <Button
                variant="gym"
                className="bg-white hover:bg-white/90"
                aria-label="Junte-se agora"
              >
                Junte-se agora
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col bg-white border-none shadow-none items-center justify-center w-full mt-10 order-3">
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
              <Button variant="gym" aria-label="Junte-se agora">
                Junte-se agora
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="absolute -z-[10] left-1/2 top-72 transform -translate-x-1/2 md:w-[550px] md:h-[450px] w-[300px] h-[200px] bg-gradient-to-br from-rose-500 to-rose-600 rounded-full shadow-lg filter blur-[75px] opacity-10" />
    </section>
  );
}
