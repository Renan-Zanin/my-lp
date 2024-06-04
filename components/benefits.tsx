"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Headset, Settings, TabletSmartphone } from "lucide-react";
import ScrollAnimation from "react-animate-on-scroll";

export default function BenefitsSection() {
  return (
    <section id="#benefitsSection" className="flex flex-col mt-14 mb-36">
      <ScrollAnimation
        animateIn="flipInX"
        animateOut="flipInX"
        animateOnce={true}
      >
        <div className="flex">
          <h1 className="text-xl text-purple-500 font-medium leading-tight mb-8 text-left border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            Por que as minhas Landing Pages são a escolha certa para você?
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
            <h2 className="text-5xl font-bold text-white text-center w-[700px] leading-tight mb-24">
              Conheça os benefícios exclusivos das minhas soluções
              personalizadas.
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-3 gap-10 mb-24">
            <ScrollAnimation
              animateIn="bounceInUp"
              animateOut="fadeOut"
              delay={600}
              duration={1.8}
              animateOnce={true}
            >
              <Card className="flex flex-col items-center px-4 py-8 bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.025]">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>
                    <Settings size={38} className="text-blue-500" />
                  </CardTitle>
                  <CardDescription>Total Personalização</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="w-[250px]">
                    Ofereço total personalização em minhas soluções, adaptando
                    cada elemento para refletir a identidade da sua empresa.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="bounceInUp"
              animateOut="fadeOut"
              delay={300}
              duration={1.8}
              animateOnce={true}
            >
              <Card className="flex flex-col items-center px-4 py-8 bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.025]">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>
                    <Headset size={38} className="text-blue-500" />
                  </CardTitle>
                  <CardDescription>Suporte Contínuo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="w-[250px]">
                    Estou sempre disponível para garantir que sua presença
                    online evolua conforme as necessidades do seu negócio.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="bounceInUp"
              animateOut="fadeOut"
              duration={1.8}
              animateOnce={true}
            >
              <Card className="flex flex-col items-center px-4 py-8 bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.025]">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>
                    <TabletSmartphone size={38} className="text-blue-500" />
                  </CardTitle>
                  <CardDescription>Responsividade Total</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="w-[250px]">
                    Minhas páginas se adaptam a qualquer dispositivo, garantindo
                    uma experiência consistente para todos os seus clientes.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          <Button className="z-10">Veja Todos os Benefícios!</Button>
        </div>
      </div>
    </section>
  );
}
