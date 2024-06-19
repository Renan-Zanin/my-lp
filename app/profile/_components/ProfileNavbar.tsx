"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Menu, X } from "lucide-react";

export default function ProfileNavbar() {
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
        className={`absolute top-0 w-full z-50 flex flex-row items-center justify-end py-4 px-[15vw]  ${
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
              <span className="hover:border-b-[1px] hover:border-orange-900 cursor-pointer transition-all font-bold text-orange-900">
                Home
              </span>
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
              <span className="hover:border-b-[1px] hover:border-orange-900 cursor-pointer transition-all font-bold text-orange-900">
                Sobre
              </span>
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
              <span className="hover:border-b-[1px] hover:border-orange-900 cursor-pointer transition-all font-bold text-orange-900">
                Benefícios
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
              <span className="hover:border-b-[1px] hover:border-orange-900 cursor-pointer transition-all font-bold text-orange-900">
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
              <span className="hover:border-b-[1px] hover:border-orange-900 cursor-pointer transition-all font-bold text-orange-900">
                Portifólio
              </span>
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
                <span className="hover:border-b-[1px] hover:border-orange-900 cursor-pointer transition-all font-bold text-orange-900">
                  Home
                </span>
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
                className="hover:border-b-[1px] hover:border-orange-900 cursor-pointer transition-all font-bold text-orange-900"
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
                <span className="hover:border-b-[1px] hover:border-orange-900 cursor-pointer transition-all font-bold text-orange-900">
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
                <span className="hover:border-b-[1px] hover:border-orange-900 cursor-pointer transition-all font-bold text-orange-900">
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
                <span className="hover:border-b-[1px] hover:border-orange-900 cursor-pointer transition-all font-bold text-orange-900">
                  Portifólio
                </span>
              </Link>
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
