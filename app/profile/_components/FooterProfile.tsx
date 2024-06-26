"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export function FooterProfile() {
  return (
    <footer className="relative w-full border-t-[1px] border-orange-900 flex items-center justify-center py-6 2xl:px-[15vw] px-[10vw] flex-col">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full md:gap-14 gap-8 text-black">
        <div className="flex flex-col">
          <h1 className="text-2xl text-orange-900 pb-4">
            Junte-se a Nossa Comunidade de Sucesso e Comece Hoje Mesmo!
          </h1>
          <p className="text-sm mb-6">
            Não deixe esta oportunidade passar. Nosso curso e mentoria foram
            desenhados para proporcionar uma transformação real na sua carreira,
            com conteúdos práticos, suporte contínuo e uma comunidade de alunos
            e mentores dedicados ao seu sucesso. Aproveite nossos materiais de
            alta qualidade, certificados e, acima de tudo, a garantia de
            satisfação que oferecemos.
          </p>
          <div className="flex gap-6">
            <FaFacebook size={24} className="text-orange-900" />
            <FaInstagram size={24} className="text-orange-900" />
          </div>
        </div>
        <div className="flex flex-col items-start md:items-center">
          <div className="flex flex-col items-start">
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
              to="#profileAbout"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
              className="text-sm mb-2 cursor-pointer"
            >
              <span className="sublinhado-gradiente">Sobre</span>
            </Link>
            <Link
              to="#profileModules"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
              className="text-sm mb-2 cursor-pointer"
            >
              <span className="sublinhado-gradiente">Módulos</span>
            </Link>
            <Link
              to="#profileDepositions"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
              className="text-sm mb-2 cursor-pointer"
            >
              <span className="sublinhado-gradiente">Depoimentos</span>
            </Link>
            <Link
              to="#profilePrices"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
              className="text-sm mb-2 cursor-pointer"
            >
              <span className="sublinhado-gradiente">Planos</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold mb-6">Entre em contato</h1>
          <div className="flex gap-4 mb-3">
            <FaPhone size={22} className="text-orange-900" />
            <p>(11) 1234-5678</p>
          </div>
          <div className="flex gap-4 mb-3">
            <MdEmail size={24} className="text-orange-900" />
            <p>suporte@seucurso.com</p>
          </div>
          <div className="flex gap-4 mb-3">
            <IoLocationSharp size={24} className="text-orange-900" />
            <p>Rua Exemplo, 123, Cidade, Estado</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 md:gap-0 mt-8 items-center">
        <span className="text-sm text-stone-600 mr-4">
          © 2024 Seu Curso. Todos os direitos reservados.
        </span>
        <a
          className="text-sm text-stone-600 border-l-[1px] pl-4 border-stone-600"
          href="/"
        >
          Desenvolvido por RZanin Dev
        </a>
      </div>
    </footer>
  );
}
