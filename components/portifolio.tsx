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
import Corte from "/public/corte-mockup.png";
import Profile from "/public/profile-mockup.png";
import Gym from "/public/gym-mockup.png";
import Image from "next/image";

export default function PortifolioSection() {
  return (
    <section
      id="#portifolioSection"
      className="flex flex-col items-center mt-14 md:mb-36 mb-24"
    >
      <ScrollAnimation
        animateIn="flipInX"
        animateOut="flipInX"
        animateOnce={true}
      >
        <div className="flex items">
          <h1 className="md:text-xl text-purple-500 font-medium leading-tight md:mb-8 mb-10 text-left border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            Meu portfólio
          </h1>
        </div>
      </ScrollAnimation>

      <div className="mx-auto">
        <div className="flex flex-col items-center">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            duration={1.5}
            animateOnce={true}
          >
            <h2 className="md:text-5xl text-2xl font-bold text-white text-center md:w-[700px] w-[80vw] leading-tight mb-10">
              Projetos de Destaque
            </h2>
          </ScrollAnimation>
          <p className="md:text-xl text-[16px] md:w-[700px] w-[80vw] md:mb-24 mb-16 text-wrap text-start md:text-center">
            Veja como ajudei meus clientes a alcançar seus objetivos através de
            soluções personalizadas e inovadoras. Clique nos projetos para saber
            mais detalhes sobre cada um deles e descobrir como posso ajudar a
            trazer sua visão à vida.
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:mb-24 mb-20">
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
                      className="w-[25vw] object-contain"
                    />
                  </CardTitle>
                  <CardDescription>Evento Corte</CardDescription>
                </CardHeader>
                <CardContent className="w-[25vw]">
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
                      src={Profile}
                      alt="mockup transforme sua carreira"
                      className="w-[25vw] object-contain"
                    />
                  </CardTitle>
                  <CardDescription>Transforme Sua Carreira</CardDescription>
                </CardHeader>
                <CardContent className="w-[25vw]">
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
                      className="w-[25vw] object-contain"
                    />
                  </CardTitle>
                  <CardDescription>Academia</CardDescription>
                </CardHeader>
                <CardContent className="w-[25vw]">
                  <p className="md:text-start text-center">
                    Landing Page projetada para promover uma academia moderna e
                    acolhedora, voltada para pessoas que ainda não conhecem os
                    serviços oferecidos, com intenção de manter o visitante
                    interessado, gerar desejo e incentivar a ação de inscrição.
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
