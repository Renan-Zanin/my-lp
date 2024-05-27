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

export default function BenefitsSection() {
  return (
    <section id="#benefitsSection" className="flex flex-col mt-14 mb-24">
      <div>
        <h1 className="text-2xl text-purple-500 font-bold leading-tight mb-8 text-left">
          Por Que Nossas Landing Pages São a Escolha Certa para Você?
        </h1>
      </div>

      <div className="mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-white text-center w-[700px] leading-tight mb-10">
            Conheça os benefícios exclusivos de nossas soluções personalizadas.
          </h2>
          <div className="grid grid-cols-3 gap-10 mb-16">
            <Card className="flex flex-col items-center">
              <CardHeader className="flex flex-col items-center">
                <CardTitle>
                  <Settings size={38} className="text-blue-500" />
                </CardTitle>
                <CardDescription>Total Personalização</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="w-[250px]">
                  Oferecemos total personalização em nossas soluções, adaptando
                  cada elemento para refletir a identidade da sua empresa.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center">
              <CardHeader className="flex flex-col items-center">
                <CardTitle>
                  <Headset size={38} className="text-blue-500" />
                </CardTitle>
                <CardDescription>Suporte Contínuo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="w-[250px]">
                  Nosso suporte especializado estará sempre disponível para
                  garantir que sua presença online evolua conforme as
                  necessidades do seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center">
              <CardHeader className="flex flex-col items-center">
                <CardTitle>
                  <TabletSmartphone size={38} className="text-blue-500" />
                </CardTitle>
                <CardDescription>Responsividade Total</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="w-[250px]">
                  Nossas páginas se adaptam a qualquer dispositivo, garantindo
                  uma experiência consistente para todos os seus clientes.
                </p>
              </CardContent>
            </Card>
          </div>

          <Button>Veja Todos os Benefícios!</Button>
        </div>
      </div>
    </section>
  );
}
