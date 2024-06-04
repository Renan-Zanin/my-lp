"use client";

import { Button } from "@/components/ui/button";
import AboutImage from "@/assets/profile.png";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutSection() {
  return (
    <section
      id="#solutionSection"
      className="flex flex-col items-center justify-center mt-14 mb-36"
    >
      <ScrollAnimation
        animateIn="fadeInDown"
        animateOut="fadeOutUp"
        animateOnce={true}
      >
        <h1 className="text-xl text-purple-500 font-medium leading-tight mb-8 border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full w-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          Sobre mim
        </h1>
      </ScrollAnimation>

      <div className="flex flex-row justify-between mb-10">
        <div className="relative">
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
            duration={1.5}
            animateOnce={true}
          >
            <Image
              src={AboutImage}
              alt=""
              className="backdrop-filter backdrop-blur-sm bg-opacity-100 w-[500px] z-20"
            />
          </ScrollAnimation>
          <div className="absolute z-[-10] right-0 top-5 w-[550px] h-[450px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg filter blur-[75px] opacity-20"></div>
        </div>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOutRight"
          duration={1.5}
          animateOnce={true}
        >
          <div className="flex flex-col items-end">
            <h2 className="text-5xl font-bold text-white text-end w-[700px] leading-tight mb-10">
              Me conheça um pouco mais
            </h2>
            <p className="text-xl w-[600px] mb-16 text-wrap text-end">
              Bem vindo ao meu mundo digital! Sou o Renan, um desenvolvedor web
              freelancer apaixonado por transformar ideias em experiências
              digitais incríveis. Ajudo clientes a alcançar seus objetivos
              online. Meu foco é fornecer soluções personalizadas e eficazes que
              não apenas atendam às necessidades do cliente, mas também superem
              suas expectativas.
            </p>
            <Button className="z-20">Saiba Mais Detalhes!</Button>
          </div>
        </ScrollAnimation>
      </div>
      <div className="flex flex-col items-center min-w-full">
        <ScrollAnimation
          animateIn="fadeInDown"
          animateOut="fadeOutUp"
          animateOnce={true}
        >
          <h1 className="text-xl text-purple-500 font-medium leading-tight mb-12 border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full w-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            Minhas habilidades
          </h1>
        </ScrollAnimation>

        <div className="flex flex-row justify-between min-w-full">
          <ScrollAnimation
            animateIn="slideInUp"
            animateOut="slideOutLeft"
            duration={1.5}
            animateOnce={true}
          >
            <div className="flex items-center">
              <p className="text-xl w-[700px] text-wrap text-start">
                Sou hábil com as principais tecnologias de desenvolvimento web,
                incluindo HTML5, CSS3, JavaScript, incluindo frameworks como
                React.js e Next.js, e ferramentas como Figma, Wordpress, Wix e
                Shopify. Com uma abordagem inovadora, estou constantemente
                explorando novas maneiras de resolver problemas e criar
                experiências digitais memoráveis, personalizadas e que atendam
                as necessidades dos meus clientes.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-4 gap-8 gap-y-12">
            <ScrollAnimation
              animateIn="zoomInDown"
              animateOut="zoomOutDown"
              duration={1.5}
              animateOnce={true}
            >
              <div className="flex flex-col justify-center items-center">
                <FaHtml5 size={70} color="#417FF6" />
                <p className="text-[14px] mt-2">HTML5</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="zoomInDown"
              animateOut="zoomOutDown"
              delay={200}
              duration={1.5}
              animateOnce={true}
            >
              <div className="flex flex-col justify-center items-center">
                <FaCss3Alt size={70} color="#417FF6" />
                <p className="text-[14px] mt-2">CSS3</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="zoomInDown"
              animateOut="zoomOutDown"
              delay={300}
              duration={1.5}
              animateOnce={true}
            >
              <div className="flex flex-col justify-center items-center">
                <IoLogoJavascript size={70} color="#417FF6" />
                <p className="text-[14px] mt-2">Javascript</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="zoomInDown"
              animateOut="zoomOutDown"
              delay={400}
              duration={1.5}
              animateOnce={true}
            >
              <div className="flex flex-col justify-center items-center">
                <FaReact size={70} color="#417FF6" />
                <p className="text-[14px] mt-2">React</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="zoomInDown"
              animateOut="zoomOutDown"
              delay={500}
              duration={1.5}
              animateOnce={true}
            >
              <div className="flex flex-col justify-center items-center">
                <SiNextdotjs size={70} color="#417FF6" />
                <p className="text-[14px] mt-2">NextJs</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="zoomInDown"
              animateOut="zoomOutDown"
              delay={600}
              duration={1.5}
              animateOnce={true}
            >
              <div className="flex flex-col justify-center items-center">
                <FaFigma size={70} color="#417FF6" />
                <p className="text-[14px] mt-2">Figma</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="zoomInDown"
              animateOut="zoomOutDown"
              delay={700}
              duration={1.5}
              animateOnce={true}
            >
              <div className="flex flex-col justify-center items-center">
                <FaWordpress size={70} color="#417FF6" />
                <p className="text-[14px] mt-2">Wordpress</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="zoomInDown"
              animateOut="zoomOutDown"
              delay={800}
              duration={1.5}
              animateOnce={true}
            >
              <div className="flex flex-col justify-center items-center">
                <FaShopify size={70} color="#417FF6" />
                <p className="text-[14px] mt-2">Shopify</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
