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

export default function ModulesProfile() {
  return (
    <section
      id="#gymAbout"
      className="pb-24 flex justify-start px-[15vw] pt-10 bg-orange-50 rounded-br-[400px] rounded-tl-[400px]"
    >
      <div className="flex items-center justify-between w-full">
        <div className="mt-24 flex flex-col items-start">
          <h1 className=" md:text-5xl text-orange-900 tracking-wide text-start uppercase w-[40vw]">
            O Que Você Vai Aprender
          </h1>
          <h2 className="mt-8 text-2xl text-black w-[30vw] text-start">
            Um currículo detalhado e prático para garantir sua evolução
            constante.
          </h2>
          <div className="flex flex-col items-start mt-10">
            <p className="w-[30vw] text-start text-[18px] text-black mb-6">
              Você está pronto para dar um salto na sua carreira? O meu curso
              não é apenas mais um. Ele é uma jornada transformadora, projetada
              para levar você do zero ao nível de maestria em semanas, com o
              apoio contínuo. Se você está cansado de tentativas e erros e quer
              resultados reais, você está no lugar certo.
            </p>
            <p className="w-[30vw] text-start text-[18px] text-black">
              No meu curso, você terá acesso a módulos cuidadosamente elaborados
              para cobrir todos os aspectos essenciais. Além disso, você
              receberá mentoria personalizada para tirar todas as suas dúvidas e
              garantir que você aplique o que aprendeu de forma eficaz.
            </p>
          </div>
        </div>
        <div className="relative">
          <Card className="bg-stone-50 border-orange-900 shadow-none rounded-none">
            <CardHeader>
              <CardTitle className="text-orange-900 font-semibold">
                Módulos do curso:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                  <p className="text-black">
                    <span className="font-bold text-orange-900">
                      Módulo 1:{" "}
                    </span>
                    Fundamentos e Introdução
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                  <p className="text-black">
                    <span className="font-bold text-orange-900">Módulo 2 </span>
                    Técnicas Avançadas e Aplicações Práticas
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                  <p className="text-black">
                    <span className="font-bold text-orange-900">Módulo 3:</span>
                    Estudos de Caso e Exemplos Reais
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <IoMdCheckmarkCircleOutline className="text-orange-900 mr-2" />
                  <p className="text-black">
                    <span className="font-bold text-orange-900">
                      Módulo 4:{" "}
                    </span>
                    Projeto Final e Feedback
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="profile" className="mt-10 z-20">
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
