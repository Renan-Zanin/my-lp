"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ModulesProfile() {
  return (
    <section
      id="#profileModules"
      className="pb-24 flex justify-start 2xl:px-[15vw] lg:px-[10vw] px-[5vw] pt-10 bg-orange-50 2xl:rounded-br-[400px] 2xl:rounded-tl-[400px] md:rounded-br-[25vw] md:rounded-tl-[25vw] rounded-br-[50vw] rounded-tl-[50vw]"
    >
      <div className="flex lg:flex-row flex-col items-center justify-between w-full">
        <div className="mt-24 flex flex-col lg:items-start items-center">
          <h1 className="font-semibold 2xl:text-6xl lg:text-5xl text-3xl text-orange-900 tracking-normal lg:text-start text-center uppercase md:w-[40vw] w-[80vw]">
            O Que Você Vai Aprender
          </h1>
          <h2 className="mt-8 2xl:text-4xl xl:text-3xl text-2xl text-black lg:w-[30vw] md:w-[60vw] w-[80w] lg:text-start text-center">
            Um currículo detalhado e prático para garantir sua evolução
            constante.
          </h2>
          <div className="flex lg:flex-col md:flex-row flex-col md:gap-12 lg:gap-0 items-start mt-10">
            <p className="lg:w-[30vw] md:w-[35vw] w-[80vw] text-start xl:text-lg md:text-base text-sm text-black lg:mb-6 mb-4">
              Você está pronto para dar um salto na sua carreira? O meu curso
              não é apenas mais um. Ele é uma jornada transformadora, projetada
              para levar você do zero ao nível de maestria em semanas, com o
              apoio contínuo. Se você está cansado de tentativas e erros e quer
              resultados reais, você está no lugar certo.
            </p>
            <p className="lg:w-[30vw] md:w-[35vw] w-[80vw] text-start xl:text-lg md:text-base text-sm text-black">
              No meu curso, você terá acesso a módulos cuidadosamente elaborados
              para cobrir todos os aspectos essenciais. Além disso, você
              receberá mentoria personalizada para tirar todas as suas dúvidas e
              garantir que você aplique o que aprendeu de forma eficaz.
            </p>
          </div>
        </div>
        <div className="relative mt-16 lg:mt-0">
          <Card className="bg-stone-50 border-orange-900 shadow-none rounded-none ">
            <CardHeader>
              <CardTitle className="text-orange-900 font-semibold xl:text-2xl">
                Módulos do curso:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                  <p className="text-black md:text-base text-sm">
                    <span className="font-bold text-orange-900">
                      Módulo 1:{" "}
                    </span>
                    Fundamentos e Introdução
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                  <p className="text-black md:text-base text-sm">
                    <span className="font-bold  text-orange-900">
                      Módulo 2:{" "}
                    </span>
                    Técnicas Avançadas e Aplicações Práticas
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                  <p className="text-black md:text-base text-sm">
                    <span className="font-bold text-orange-900">Módulo 3:</span>
                    Estudos de Caso e Exemplos Reais
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                  <p className="text-black md:text-base text-sm">
                    <span className="font-bold text-orange-900">
                      Módulo 4:{" "}
                    </span>
                    Projeto Final e Feedback
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="profile"
                className="mt-10 z-20"
                aria-label="Veja todos os detalhes"
              >
                Veja Todos os Detalhes
              </Button>
            </CardFooter>
          </Card>
          <div className="absolute bottom-2 h-full w-full border-orange-900 border-2 rounded-none left-2"></div>
        </div>
      </div>
    </section>
  );
}
