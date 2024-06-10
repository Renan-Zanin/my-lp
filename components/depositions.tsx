"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ScrollAnimation from "react-animate-on-scroll";

export default function Depositions() {
  return (
    <section
      id="#solutionSection"
      className="flex flex-col md:items-end items-center mt-14 md:mb-36 mb-24"
    >
      <ScrollAnimation
        animateIn="fadeInRight"
        animateOut="fadeOutRight"
        duration={1.5}
        animateOnce={true}
      >
        <h1 className="md:text-xl text-purple-500 font-medium leading-tight md:mb-8 mb-10 text-right border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          Depoimentos!
        </h1>
      </ScrollAnimation>
      <div className="flex md:flex-row flex-col justify-between items-center mb-10 w-full">
        <div>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
            duration={1.5}
            animateOnce={true}
          >
            <Card className="flex flex-col items-center px-4 py-8 ">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="flex flex-col items-center">
                  <span className="pb-2">Nome</span>
                  <p className="text-sm">Cargo</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="w-[200px] md:text-start text-center">
                  &quot;Ofereço total personalização em minhas soluções,
                  adaptando cada elemento para refletir a identidade da sua
                  empresa.&quot;
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOutRight"
          duration={1.5}
          animateOnce={true}
        >
          <div className="flex flex-col md:items-end items-center">
            <h1 className="md:text-5xl text-2xl font-bold text-white md:text-end text-center w-[700px] leading-tight mb-10">
              Me conheça um pouco mais
            </h1>
            <p className="md:text-xl text-[16px] md:w-[600px] w-[80vw] md:mb-16 mb-12 text-wrap md:text-end text-start">
              Nada fala mais sobre a qualidade do meu trabalho do que as
              palavras dos meus clientes satisfeitos. Veja o que eles têm a
              dizer sobre suas experiências trabalhando comigo e como consegui
              transformar suas visões em realidade digital. Cada projeto que
              aceito é tratado como único. Começo com uma compreensão profunda
              das necessidades e objetivos do cliente, criando soluções
              personalizadas que não apenas atendem, mas superam suas
              expectativas
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
