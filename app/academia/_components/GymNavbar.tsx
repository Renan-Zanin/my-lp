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
  const isDesktop = useMediaQuery("(min-width: 768px)");

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
      <nav
        className={`absolute top-0 w-[80vw] z-50 flex flex-row items-center justify-center py-4 bg-neutral-800 rounded-full mt-4 ${
          isScrolled
            ? "shadow-foreground shadow-sm bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 transition-all duration-200 "
            : ""
        }`}
      >
        <div className="flex gap-x-2">
          <Button asChild variant="link" className="text-xl">
            <Link
              to="#heroSection"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <span className="sublinhado-gradiente font-semibold">Home</span>
            </Link>
          </Button>
          <Button asChild variant="link" className="text-xl">
            <Link
              to="#aboutSection"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <span className="sublinhado-gradiente font-semibold">Sobre</span>
            </Link>
          </Button>
          <Button asChild variant="link" className="text-xl">
            <Link
              to="#benefitsSection"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <span className="sublinhado-gradiente font-semibold">
                Instalação
              </span>
            </Link>
          </Button>
          <Button asChild variant="link" className="text-xl">
            <Link
              to="#depositionsSection"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <span className="sublinhado-gradiente font-semibold">Aulas</span>
            </Link>
          </Button>
          <Button asChild variant="link" className="text-xl">
            <Link
              to="#depositionsSection"
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
          <Button asChild variant="link" className="text-xl">
            <Link
              to="#portifolioSection"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <span className="sublinhado-gradiente font-semibold">Planos</span>
            </Link>
          </Button>

          <Button asChild variant="gym" className="cursor-pointer">
            <Link
              to="#contactSection"
              spy={true}
              smooth={true}
              offset={-110}
              duration={700}
              className="text-foreground ml-10"
            >
              Comece agora!
            </Link>
          </Button>
        </div>
      </nav>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger asChild className="fixed top-4 left-4 z-50">
        <Button variant="ghost">
          <Menu size={32} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col rounded-r-[10px] h-full w-[70vw] fixed bottom-0 left-0 justify-center">
        <DrawerHeader>
          <DrawerClose asChild>
            <Button variant="ghost" className="fixed top-4 right-2">
              <X size={32} />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className="flex flex-col items-start gap-y-8">
          <DrawerClose asChild>
            <Button asChild variant="link" className="text-xl">
              <Link
                to="#heroSection"
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
            <Button asChild variant="link" className="text-xl">
              <Link
                to="#aboutSection"
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
            <Button asChild variant="link" className="text-xl">
              <Link
                to="#benefitsSection"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
              >
                <span className="sublinhado-gradiente font-semibold">
                  Benefícios
                </span>
              </Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button asChild variant="link" className="text-xl">
              <Link
                to="#depositionsSection"
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
            <Button asChild variant="link" className="text-xl">
              <Link
                to="#portifolioSection"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
              >
                <span className="sublinhado-gradiente font-semibold">
                  Portifólio
                </span>
              </Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button asChild>
              <Link
                to="#contactSection"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="text-foreground ml-10"
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