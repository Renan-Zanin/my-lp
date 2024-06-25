import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import DepositionsCard from "./DepositionsCard";
import DepositionImage from "/public/profile.webp";
import DepositionImage2 from "/public/profile-2.webp";
import DepositionImage3 from "/public/deposition.webp";

export default function DepositionsCarrousel() {
  return (
    <Carousel
      className="lg:w-[20vw] md:w-[32vw] w-[60vw] h-[350px] relative flex items-center justify-center mt-24"
      opts={{
        align: "start",
        loop: true,
        duration: 40,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="-ml-4 h-[350px] w-full mt-32">
        <CarouselItem className="pl-4 overflow-visible basis-auto">
          <DepositionsCard
            image={DepositionImage}
            text="Graças a este curso, consegui minha promoção dos sonhos em apenas três meses!"
            name="Maria S."
          />
        </CarouselItem>
        <CarouselItem className="pl-4 overflow-visible basis-auto">
          <DepositionsCard
            image={DepositionImage3}
            text="A mentoria foi um divisor de águas para mim. Finalmente, consegui entender e aplicar os conceitos de maneira prática."
            name="João P."
          />
        </CarouselItem>
        <CarouselItem className="pl-4 overflow-visible basis-auto">
          <DepositionsCard
            image={DepositionImage2}
            text="O conteúdo é incrivelmente prático e direto ao ponto. Vale cada centavo!"
            name="Ana C."
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        variant="profile"
        className="h-6 w-6 top-8 left-5"
        aria-label="Passar para imagem anterior"
      />
      <CarouselNext
        variant="profile"
        className="h-6 w-6 top-8 left-14"
        aria-label="Passar para imagem posterior"
      />
    </Carousel>
  );
}
