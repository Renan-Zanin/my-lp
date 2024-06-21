"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="relative w-full border-t-[1px] flex items-center justify-center py-6 px-[15vw] bg-zinc-900 flex flex-col">
      <div className="grid grid-cols-3 w-full gap-14">
        <div className="flex flex-col">
          <span className="text-2xl text-cyan-500 pb-4">Sua logo aqui</span>
          <p className="text-sm mb-6">
            Estamos aqui para ajudar você a alcançar seus objetivos de fitness e
            bem-estar. Entre em contato conosco para mais informações, tirar
            dúvidas ou agendar uma visita. Junte-se à nossa comunidade e
            transforme sua vida hoje mesmo!
          </p>
          <div className="flex gap-6">
            <FaFacebook size={24} className="text-rose-600" />
            <FaInstagram size={24} className="text-rose-600" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold mb-6">Sobre</h1>
          <Link
            to="#gymHero"
            spy={true}
            smooth={true}
            offset={-110}
            duration={700}
            className="text-sm mb-2 cursor-pointer"
          >
            <span className="sublinhado-gradiente">Home</span>
          </Link>
          <Link
            to="#gymAbout"
            spy={true}
            smooth={true}
            offset={-110}
            duration={700}
            className="text-sm mb-2 cursor-pointer"
          >
            <span className="sublinhado-gradiente">Sobre</span>
          </Link>
          <Link
            to="#gymClasses"
            spy={true}
            smooth={true}
            offset={-110}
            duration={700}
            className="text-sm mb-2 cursor-pointer"
          >
            <span className="sublinhado-gradiente">Aulas</span>
          </Link>
          <Link
            to="#gymFacilities"
            spy={true}
            smooth={true}
            offset={-110}
            duration={700}
            className="text-sm mb-2 cursor-pointer"
          >
            <span className="sublinhado-gradiente">Instalações</span>
          </Link>
          <Link
            to="#gymDepositions"
            spy={true}
            smooth={true}
            offset={-110}
            duration={700}
            className="text-sm mb-2 cursor-pointer"
          >
            <span className="sublinhado-gradiente">Depoimentos</span>
          </Link>
          <Link
            to="#gymPrizes"
            spy={true}
            smooth={true}
            offset={-110}
            duration={700}
            className="text-sm mb-2 cursor-pointer"
          >
            <span className="sublinhado-gradiente">Planos</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold mb-6">Contate-nos</h1>
          <div className="flex gap-4 mb-3">
            <FaPhone size={22} className="text-rose-600" />
            <p>(11) 1234-5678</p>
          </div>
          <div className="flex gap-4 mb-3">
            <MdEmail size={24} className="text-rose-600" />
            <p>contato@academiaexemplo.com.br</p>
          </div>
          <div className="flex gap-4 mb-3">
            <IoLocationSharp size={24} className="text-rose-600" />
            <p>Rua da Saúde, 123 - Centro, Cidade</p>
          </div>
        </div>
      </div>
      <div className="flex items-center pt-8">
        <p className="text-sm">Desenvolvido por RZanin Dev</p>
      </div>
    </footer>
  );
}
