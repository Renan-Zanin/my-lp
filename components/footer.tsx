"use client";

import { Link } from "react-scroll";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "/public/logo.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative border-t-[1px] flex items-center justify-center py-6 2xl:px-[15vw] lg:px-[10vw] px-[5vw] bg-background flex-col">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full 2xl:gap-14 xl:gap-8 gap-4">
        <div className="flex flex-col">
          <Image src={Logo} alt="logo rzanin" className="w-[5vw] mb-4" />

          <p className="text-sm mb-6">
            Minha missão é transformar a presença online dos meus clientes,
            oferecendo soluções web personalizadas e landing pages de alto
            impacto. Entre em contato para descobrir como posso ajudar seu
            negócio a alcançar novos patamares de sucesso.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Renan-Zanin"
              target="_blank"
              aria-label="Visite minha página no github"
            >
              <FaGithub size={24} className="text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/renanzanindev/"
              target="_blank"
              aria-label="Visite minha página no Linkedin"
            >
              <FaLinkedin size={24} className="text-blue-500" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-center">
          <Link
            to="#heroSection"
            spy={true}
            smooth={true}
            offset={-110}
            duration={700}
            className="text-sm mb-2 cursor-pointer"
          >
            <span className="sublinhado-gradiente">Home</span>
          </Link>
          <Link
            to="#aboutSection"
            spy={true}
            smooth={true}
            offset={-110}
            duration={700}
            className="text-sm mb-2 cursor-pointer"
          >
            <span className="sublinhado-gradiente">Sobre</span>
          </Link>
          <Link
            to="#benefitsSection"
            spy={true}
            smooth={true}
            offset={-110}
            duration={700}
            className="text-sm mb-2 cursor-pointer"
          >
            <span className="sublinhado-gradiente">Benefícios</span>
          </Link>
          <Link
            to="#depositionsSection"
            spy={true}
            smooth={true}
            offset={-110}
            duration={700}
            className="text-sm mb-2 cursor-pointer"
          >
            <span className="sublinhado-gradiente">Depoimentos</span>
          </Link>

          <Link
            to="#portifolioSection"
            spy={true}
            smooth={true}
            offset={-110}
            duration={700}
            className="text-sm mb-2 cursor-pointer"
          >
            <span className="sublinhado-gradiente">Portifólio</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold mb-6">Entre em contato</h1>
          <div className="flex gap-4 mb-3">
            <FaPhone size={22} className="text-blue-500" />
            <p>(12) 98149-7675</p>
          </div>
          <div className="flex gap-4 mb-3">
            <MdEmail size={24} className="text-blue-500" />
            <p>renanzanin01@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex items-center pt-8">
        <p className="text-sm">Desenvolvido por RZanin Dev</p>
      </div>
    </footer>
  );
}
