"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Menu, X } from "lucide-react";

export function GymNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isDesktop) {
    return (
      <nav className="absolute top-0 w-[80vw] z-50 flex flex-row items-center justify-center py-4 bg-neutral-800 rounded-full mt-4">
        <div className="flex xl:gap-x-2 gap-x-1">
          <Button
            asChild
            variant="link"
            className="xl:text-xl text-lg"
            aria-label="Home"
          >
            <Link
              to="#gymHero"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <span className="sublinhado-gradiente font-semibold">Home</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="xl:text-xl text-lg"
            aria-label="Sobre"
          >
            <Link
              to="#gymAbout"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <span className="sublinhado-gradiente font-semibold">Sobre</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="xl:text-xl text-lg"
            aria-label="Aulas"
          >
            <Link
              to="#gymClasses"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <span className="sublinhado-gradiente font-semibold">Aulas</span>
            </Link>
          </Button>
          <Button asChild variant="link" className="xl:text-xl text-lg">
            <Link
              to="#gymFacilities"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <span className="sublinhado-gradiente font-semibold">
                Instalações
              </span>
            </Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="xl:text-xl text-lg"
            aria-label="Depoimentos"
          >
            <Link
              to="#gymDepositions"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <span className="sublinhado-gradiente font-semibold">
                Depoimentos
              </span>
            </Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="xl:text-xl text-lg"
            aria-label="Planos"
          >
            <Link
              to="#gymPrices"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <span className="sublinhado-gradiente font-semibold">Planos</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="gym"
            className="cursor-pointer bg-rose-600 text-black"
            aria-label="Comece agora"
          >
            <Link
              to="#contactSection"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
              className="text-foreground xl:ml-10 ml-4 text-black"
            >
              <p className="text-black">Comece agora!</p>
            </Link>
          </Button>
        </div>
      </nav>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger asChild className="fixed top-4 left-4 z-50">
        <Button variant="ghost" aria-label="Abrir menu">
          <Menu size={32} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col rounded-r-3xl h-full w-[70vw] md:w-[50vw] fixed bottom-0 left-0 justify-center bg-black">
        <DrawerHeader>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              className="fixed top-4 right-2"
              aria-label="Fechar menu"
            >
              <X size={32} />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className="flex flex-col items-start gap-y-8">
          <DrawerClose asChild>
            <Button
              asChild
              variant="link"
              className="text-xl"
              aria-label="Home"
            >
              <Link
                to="#gymHero"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
              >
                <span className="sublinhado-gradiente font-semibold">Home</span>
              </Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              asChild
              variant="link"
              className="text-xl"
              aria-label="Sobre"
            >
              <Link
                to="#gymAbout"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="sublinhado-gradiente font-semibold"
              >
                Sobre
              </Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              asChild
              variant="link"
              className="text-xl"
              aria-label="Aulas"
            >
              <Link
                to="#gymClasses"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
              >
                <span className="sublinhado-gradiente font-semibold">
                  Aulas
                </span>
              </Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              asChild
              variant="link"
              className="text-xl"
              aria-label="Instalações"
            >
              <Link
                to="#gymFacilities"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
              >
                <span className="sublinhado-gradiente font-semibold">
                  Instalações
                </span>
              </Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              asChild
              variant="link"
              className="text-xl"
              aria-label="Depoimentos"
            >
              <Link
                to="#gymDepositions"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
              >
                <span className="sublinhado-gradiente font-semibold">
                  Depoimentos
                </span>
              </Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              asChild
              variant="link"
              className="text-xl"
              aria-label="Planos"
            >
              <Link
                to="#gymPrices"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
              >
                <span className="sublinhado-gradiente font-semibold">
                  Planos
                </span>
              </Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button asChild variant="gym" aria-label="Comece agora">
              <Link
                to="#contactSection"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="text-black ml-10"
              >
                Comece agora!
              </Link>
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
