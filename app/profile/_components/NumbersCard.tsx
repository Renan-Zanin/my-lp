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
    threshold: 0.2, // 10% do elemento visível para disparar a animação
  });

  const props = useSpring({
    from: { number: 0 },
    to: { number: inView ? amount : 0 },
    config: { duration: 1500 },
  });

  return (
    <Card className="bg-orange-50 border-none shadow-none rounded-tl-[100px] py-12 px-8 flex items-center justify-center">
      <CardContent className="flex flex-col items-center justify-center">
        <span className="text-8xl text-orange-900 font-bold mb-2">
          <animated.span ref={ref}>
            {props.number.to((n) => n.toFixed(0))}
          </animated.span>
        </span>
        <p className="text-black">{text}</p>
      </CardContent>
    </Card>
  );
}
