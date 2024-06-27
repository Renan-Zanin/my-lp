"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Headset, Settings, TabletSmartphone } from "lucide-react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";

export default function BenefitsSection() {
  return (
    <section
      id="#benefitsSection"
      className="flex flex-col items-center mt-14 md:mb-36 mb-24 px-[5vw]"
    >
      <ScrollAnimation
        animateIn="flipInX"
        animateOut="flipInX"
        animateOnce={true}
      >
        <div className="flex items">
          <h1 className="xl:text-xl text-lg text-purple-500 font-medium leading-tight md:mb-8 mb-10 text-left border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            A escolha certa para você
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
            <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-white text-center lg:w-[70vw] xl:w-[50vw] w-[80vw] leading-tight md:mb-24 mb-16">
              Conheça os benefícios exclusivos das minhas soluções
              personalizadas.
            </h2>
          </ScrollAnimation>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:mb-24 mb-20">
            <ScrollAnimation
              animateIn="bounceInUp"
              animateOut="fadeOut"
              delay={600}
              duration={1.8}
              animateOnce={true}
            >
              <Card className="md:order-1 order-3 flex flex-col items-center px-4 py-8 bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.025]">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>
                    <Settings size={38} className="text-blue-500" />
                  </CardTitle>
                  <CardDescription>Total Personalização</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="w-[250px] md:text-start text-center">
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
              <Card className="order-2 flex flex-col items-center px-4 py-8 bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.025]">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>
                    <Headset size={38} className="text-blue-500" />
                  </CardTitle>
                  <CardDescription>Suporte Contínuo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="w-[250px] md:text-start text-center">
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
              <Card className="md:order-3 order-1 flex flex-col items-center px-4 py-8 bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.025]">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>
                    <TabletSmartphone size={38} className="text-blue-500" />
                  </CardTitle>
                  <CardDescription>Responsividade Total</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="w-[250px] md:text-start text-center">
                    Minhas páginas se adaptam a qualquer dispositivo, garantindo
                    uma experiência consistente para todos os seus clientes.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          <Button
            className="z-10"
            aria-label="Veja todos os benefícios"
            asChild
          >
            <Link
              to="#contactSection"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
              className="text-foreground ml-10 cursor-pointer"
            >
              Veja Todos os Benefícios!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
