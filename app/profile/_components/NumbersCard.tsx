"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useSpring, animated } from "@react-spring/web";

interface NumbersCardProps {
  amount: number;
  text: string;
}

export default function NumbersCard({ amount, text }: NumbersCardProps) {
  const props = useSpring({
    from: { number: 0 },
    to: { number: amount },
    config: { duration: 1500 },
  });

  return (
    <Card className="bg-orange-50 border-none shadow-none rounded-tl-[100px] py-12 px-8 flex items-center justify-center">
      <CardContent className="flex flex-col items-center justify-center">
        <span className="text-8xl text-orange-900 font-bold mb-2">
          <animated.span>{props.number.to((n) => n.toFixed(0))}</animated.span>
        </span>
        <p className="text-black">{text}</p>
      </CardContent>
    </Card>
  );
}
