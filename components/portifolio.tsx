"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import Corte from "/public/corte-mockup.avif";
import Profile from "/public/profile-mockup.avif";
import Gym from "/public/gym-mockup.avif";
import Mercantil from "/public/mockup-mercantil.avif";
import Image from "next/image";

export default function PortifolioSection() {
  return (
    <section
      id="#portifolioSection"
      className="flex flex-col mt-14 md:mb-36 mb-24 lg:px-[10vw] px-[5vw]"
    >
      <ScrollAnimation
        animateIn="flipInX"
        animateOut="flipInX"
        animateOnce={true}
      >
        <div className="flex items-center justify-center">
          <h1 className="lg:text-xl text-lg text-purple-500 font-medium leading-tight md:mb-8 mb-10 text-center border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            Meu portfólio
          </h1>
        </div>
      </ScrollAnimation>

      <div className="">
        <div className="flex flex-col items-center">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            duration={1.5}
            animateOnce={true}
          >
            <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-white text-center md:w-[50vw] w-[80vw] leading-tight mb-10">
              Projetos de Destaque
            </h2>
          </ScrollAnimation>
          <p className="xl:text-xl text-base lg:text-lg md:w-[700px] w-[80vw] xl:mb-24 mb-16 text-wrap text-start md:text-center">
            Veja como ajudei meus clientes a alcançar seus objetivos através de
            soluções personalizadas e inovadoras. Clique nos projetos para saber
            mais detalhes sobre cada um deles e descobrir como posso ajudar a
            trazer sua visão à vida.
          </p>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 md:mb-24 mb-20 w-full">
            <ScrollAnimation
              animateIn="bounceInUp"
              animateOut="fadeOut"
              delay={600}
              duration={1.8}
              animateOnce={true}
            >
              <Card className="md:order-1 order-3 flex flex-col items-center px-2 py-4 bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.025]">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>
                    <Image
                      src={Corte}
                      alt="mockup corte"
                      className="lg:w-[25vw] md:w-[45vw] w-[60vw] object-contain"
                    />
                  </CardTitle>
                  <CardDescription>Evento Corte</CardDescription>
                </CardHeader>
                <CardContent className="2xl:w-[25vw] xl:w-[40vw]">
                  <p className="md:text-start text-center">
                    Projeto realizado em parceria para o Evento Corte - Homens
                    de Negócios que será realizado por grandes players do
                    mercado digital, com landing page e outras páginas do funil
                    de vendas.
                  </p>
                  <Link
                    href="https://homensdenegocios.cortevisagismo.com.br/"
                    target="_blank"
                  >
                    <Button
                      className="mt-6 w-full"
                      aria-label="Visite a página corte visagismo"
                    >
                      Visite a página
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInUp"
              animateOut="fadeOut"
              delay={600}
              duration={1.8}
              animateOnce={true}
            >
              <Card className="md:order-1 order-3 flex flex-col items-center px-2 py-4 bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.025]">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>
                    <Image
                      src={Mercantil}
                      alt="mockup corte"
                      className="lg:w-[25vw] md:w-[45vw] w-[60vw] object-contain"
                    />
                  </CardTitle>
                  <CardDescription>Mercantil CRM</CardDescription>
                </CardHeader>
                <CardContent className="2xl:w-[30vw] xl:w-[40vw] ">
                  <p className="md:text-start text-center">
                    Web aplicação customizada para um comércio local, focada na
                    gestão de clientes e controle de inadimplências, visando
                    otimizar a administração de contas, melhorando o
                    acompanhamento de clientes em atraso e facilitando a tomada
                    de decisões.
                  </p>
                  <Link href="https://crm-mercantil.vercel.app" target="_blank">
                    <Button
                      className="mt-6 w-full"
                      aria-label="Visite a página corte visagismo"
                    >
                      Visite a página
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="bounceInUp"
              animateOut="fadeOut"
              delay={600}
              duration={1.8}
              animateOnce={true}
            >
              <Card className="md:order-1 order-3 flex flex-col items-center px-2 py-4 bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.025]">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>
                    <Image
                      src={Profile}
                      alt="mockup transforme sua carreira"
                      className="lg:w-[25vw] md:w-[45vw] w-[60vw] object-contain"
                    />
                  </CardTitle>
                  <CardDescription>Transforme Sua Carreira</CardDescription>
                </CardHeader>
                <CardContent className="2xl:w-[25vw] xl:w-[40vw]">
                  <p className="md:text-start text-center">
                    Página projetada para capturar a atenção de profissionais em
                    busca de crescimento na carreira, fornecer informações
                    detalhadas sobre o curso e a mentora e incentivar a
                    inscrição.
                  </p>
                  <Link href="/profile" target="_blank">
                    <Button
                      className="mt-6 w-full"
                      aria-label="Visite a página transforme sua carreira"
                    >
                      Visite a página
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInUp"
              animateOut="fadeOut"
              delay={600}
              duration={1.8}
              animateOnce={true}
            >
              <Card className="md:order-1 order-3 flex flex-col items-center px-2 py-4 bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.025]">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>
                    <Image
                      src={Gym}
                      alt="mockup academia"
                      className="lg:w-[25vw] md:w-[45vw] w-[60vw] object-contain"
                    />
                  </CardTitle>
                  <CardDescription>Academia</CardDescription>
                </CardHeader>
                <CardContent className="2xl:w-[28vw] xl:w-[40vw]">
                  <p className="md:text-start text-center">
                    Landing Page projetada para promover uma academia moderna e
                    acolhedora, voltada para pessoas que ainda não conhecem os
                    serviços oferecidos, com intenção de manter o visitante
                    interessado e gerar desejo.
                  </p>
                  <Link href="/academia" target="_blank">
                    <Button
                      className="mt-6 w-full"
                      aria-label="Visite a página academia"
                    >
                      Visite a página
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
