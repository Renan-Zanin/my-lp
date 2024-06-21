"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

interface NumbersCardProps {
  amount: number;
  text: string;
}

export default function NumbersCard({ amount, text }: NumbersCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação dispara apenas uma vez
    threshold: 0.5, // 10% do elemento visível para disparar a animação
  });

  const props = useSpring({
    from: { number: 0 },
    to: { number: inView ? amount : 0 },
    config: { duration: 1500 },
  });

  return (
    <Card className="bg-orange-50 border-none shadow-none rounded-tl-[12vw] 2xl:py-12 2xl:px-8 xl:py-12 xl:px-6 py-8 flex items-center justify-center">
      <CardContent className="flex flex-col items-center justify-center p-0">
        <span className="2xl:text-8xl xl:text-7xl text-5xl text-orange-900 font-bold mb-2">
          <animated.span ref={ref}>
            {props.number.to((n) => n.toFixed(0))}
          </animated.span>
        </span>
        <p className="text-black xl:text-lg text-sm text-center">{text}</p>
      </CardContent>
    </Card>
  );
}
