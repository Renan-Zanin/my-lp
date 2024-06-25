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
    <Card className="flex flex-col bg-black border-none shadow-none items-center justify-center xl:w-[20vw] lg:w-[30vw] md:w-[40vw] w-[70vw]">
      <CardHeader>
        <CardTitle>
          <img
            src="./deposition.webp"
            alt=""
            className="md:w-24 md:h-24 w-20 h-20 rounded-full"
          />
        </CardTitle>
        <CardDescription className="text-white text-center">
          {" "}
          João D.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          &quot;Nunca me senti tão bem como desde que comecei a treinar aqui. Os
          instrutores são incríveis e sempre me ajudam a alcançar meus
          objetivos.&quot;
        </p>
      </CardContent>
    </Card>
  );
}
