"use client";

import { Button } from "@/components/ui/button";
import AboutImage from "@/assets/profile.avif";
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
      id="#aboutSection"
      className="flex flex-col items-center justify-center mt-14 mb-36 lg:px-[10vw] xl:px-[5vw] px-[5vw]"
    >
      <ScrollAnimation
        animateIn="fadeInDown"
        animateOut="fadeOutUp"
        animateOnce={true}
      >
        <h1 className="lg:text-xl text-lg text-purple-500 font-medium leading-tight md:mb-8 mb-10 border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full w-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          Sobre mim
        </h1>
      </ScrollAnimation>

      <div className="flex md:flex-row flex-col justify-between items-center mb-10 w-full">
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
              className="backdrop-filter backdrop-blur-sm bg-opacity-100 xl:w-[25vw] md:w-[30vw] w-[200px] md:mb-0 mb-6 z-20"
            />
          </ScrollAnimation>
          <div className="absolute z-[-10] xl:right-0 md:top-0 right-0 top-[-10px] md:w-[32vw] md:h-[32vw] xl:w-[27vw] xl:h-[27vw] w-[200px] h-[200px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg filter blur-[75px] opacity-20"></div>
        </div>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOutRight"
          duration={1.5}
          animateOnce={true}
        >
          <div className="flex flex-col md:items-end items-center">
            <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-white md:text-end text-center md:w-[55w] leading-tight mb-10">
              Me conheça um pouco mais
            </h2>
            <p className="xl:text-xl text-lg text-[16px] xl:w-[32vw] lg:w-[45vw] md:w-[50vw] w-[80vw] md:mb-16 mb-12 text-wrap md:text-end text-start">
              Bem vindo ao meu mundo digital! Sou o Renan, um desenvolvedor web
              freelancer apaixonado por transformar ideias em experiências
              digitais incríveis. Ajudo clientes a alcançar seus objetivos
              online. Meu foco é fornecer soluções personalizadas e eficazes que
              não apenas atendam às necessidades do cliente, mas também superem
              suas expectativas.
            </p>
            <Button
              className="z-20 md:mb-0 mb-10"
              aria-label="Saiba mais detalhes"
            >
              Saiba Mais Detalhes!
            </Button>
          </div>
        </ScrollAnimation>
      </div>
      <div className="flex flex-col items-center min-w-full">
        <ScrollAnimation
          animateIn="fadeInDown"
          animateOut="fadeOutUp"
          animateOnce={true}
        >
          <h1 className="lg:text-xl text-lg text-purple-500 font-medium leading-tight md:mb-12 mb-10 border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full w-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            Minhas habilidades
          </h1>
        </ScrollAnimation>

        <div className="flex xl:flex-row flex-col md:justify-between items-center min-w-full">
          <ScrollAnimation
            animateIn="slideInUp"
            animateOut="slideOutLeft"
            duration={1.5}
            animateOnce={true}
          >
            <div className="flex items-center">
              <p className="xl:text-xl text-lg lg:w-[40vw] w-[80vw] text-wrap md:text-start text-start xl:mb-0 mb-12">
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

          <div className="grid md:grid-cols-4 grid-cols-3 md:gap-8 md:gap-y-12 gap-6">
            <ScrollAnimation
              animateIn="zoomInDown"
              animateOut="zoomOutDown"
              duration={1.5}
              animateOnce={true}
            >
              <div className="flex flex-col justify-center items-center">
                <FaHtml5
                  size={70}
                  color="#417FF6"
                  className="xl:scale-100 md:scale-90 scale-[0.70]"
                />
                <p className="md:text-[14px] text-[12px] md:mt-2 mt-0">HTML5</p>
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
                <FaCss3Alt
                  size={70}
                  color="#417FF6"
                  className="xl:scale-100 md:scale-90 scale-[0.70]"
                />
                <p className="md:text-[14px] text-[12px] md:mt-2 mt-0">CSS3</p>
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
                <IoLogoJavascript
                  size={70}
                  color="#417FF6"
                  className="xl:scale-100 md:scale-90 scale-[0.70]"
                />
                <p className="md:text-[14px] text-[12px] md:mt-2 mt-0">
                  Javascript
                </p>
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
                <FaReact
                  size={70}
                  color="#417FF6"
                  className="xl:scale-100 md:scale-90 scale-[0.70]"
                />
                <p className="md:text-[14px] text-[12px] md:mt-2 mt-0">React</p>
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
                <SiNextdotjs
                  size={70}
                  color="#417FF6"
                  className="xl:scale-100 md:scale-90 scale-[0.70]"
                />
                <p className="md:text-[14px] text-[12px] md:mt-2 mt-0">
                  NextJs
                </p>
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
                <FaFigma
                  size={70}
                  color="#417FF6"
                  className="xl:scale-100 md:scale-90 scale-[0.70]"
                />
                <p className="md:text-[14px] text-[12px] md:mt-2 mt-0">Figma</p>
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
                <FaWordpress
                  size={70}
                  color="#417FF6"
                  className="xl:scale-100 md:scale-90 scale-[0.70]"
                />
                <p className="md:text-[14px] text-[12px] md:mt-2 mt-0">
                  Wordpress
                </p>
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
                <FaShopify
                  size={70}
                  color="#417FF6"
                  className="xl:scale-100 md:scale-90 scale-[0.70]"
                />
                <p className="md:text-[14px] text-[12px] md:mt-2 mt-0">
                  Shopify
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
