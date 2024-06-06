import React from "react";
import ContactForm from "./contactForm";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center mt-14 md:mb-36 mb-24">
      <div>
        <h1 className="md:text-xl text-purple-500 font-medium leading-tight md:mb-8 mb-10 border-solid border-purple-500 border-2 px-4 py-1 rounded-full h-full w-full bg-purple-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          Entre em contato
        </h1>
      </div>
      <>
        <h2 className="md:text-5xl text-2xl font-bold text-white text-center md:w-[700px] w-[80vw] leading-tight mb-10">
          Vamos transformar sua visão em realidade
        </h2>
        <div className="flex md:w-full md:justify-between md:flex-row flex-col-reverse">
          <ContactForm />
          <div className="flex flex-col md:items-end items-start justify-center">
            <h2 className="text-xl font-bold text-white md:text-end text-start md:w-[700px] w-[80vw] leading-tight md:mb-10 mb-4">
              Vamos conversar!
            </h2>
            <p className="md:text-xl md:w-[500px] w-[75vw] md:mb-16 mb-10 text-wrap md:text-end text-start">
              Estou sempre à procura de novos desafios e oportunidades para
              ajudar meus clientes a alcançar seus objetivos digitais. Se você
              precisa de um site do zero, uma atualização no seu site atual ou
              uma nova aplicação web, estou aqui para ajudar!
            </p>
            <div className="flex justify-center items-center gap-4">
              <span>Visite também minhas redes:</span>
              <a
                href="https://github.com/Renan-Zanin"
                target="_blank"
                className="hover:text-[#181717] inline-block transform hover:-translate-y-1 transition duration-200"
              >
                <FaGithub
                  size={26}
                  className="hover:scale-[1.20] transition-all duration-200"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/renanzanindev/"
                target="_blank"
                className="hover:text-[#0077B5] inline-block transform hover:-translate-y-1 transition duration-200"
              >
                <FaLinkedin
                  size={26}
                  className="hover:scale-[1.20] transition-all duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
