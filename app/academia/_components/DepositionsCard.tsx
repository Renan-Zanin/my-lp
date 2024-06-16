import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DepositionsCard() {
  return (
    <Card className="flex flex-col bg-black border-none shadow-none items-center justify-center w-[20vw]">
      <CardHeader>
        <CardTitle>
          <img
            src="./deposition.jpg"
            alt=""
            className="w-24 h-24 rounded-full"
          />
        </CardTitle>
        <CardDescription className="text-white text-center">
          {" "}
          João D.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Nunca me senti tão bem como desde que comecei a treinar aqui. Os
          instrutores são incríveis e sempre me ajudam a alcançar meus
          objetivos.
        </p>
      </CardContent>
    </Card>
  );
}
