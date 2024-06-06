"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
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

export default function Navbar() {
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
        className={`fixed top-0 w-full z-50 flex flex-row items-center justify-center py-4  ${
          isScrolled
            ? "shadow-foreground shadow-sm bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 transition-all duration-200 "
            : ""
        }`}
      >
        <div className="flex gap-x-2">
          <Button asChild variant="link" className="text-xl">
            <Link href="#heroSection">
              <span className="sublinhado-gradiente font-semibold">Home</span>
            </Link>
          </Button>
          <Button asChild variant="link" className="text-xl">
            <Link href="#solutionSection">
              <span className="sublinhado-gradiente font-semibold">
                Soluções
              </span>
            </Link>
          </Button>
          <Button asChild variant="link" className="text-xl">
            <Link href="#benefitsSection">
              <span className="sublinhado-gradiente font-semibold">
                Benefícios
              </span>
            </Link>
          </Button>
          <Button asChild variant="link" className="text-xl">
            <Link href="#portifolioSection">
              <span className="sublinhado-gradiente font-semibold">
                Portifólio
              </span>
            </Link>
          </Button>

          <Button asChild>
            <Link href="endingSection" className="text-foreground ml-10">
              Comece agora!
            </Link>
          </Button>
        </div>
      </nav>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger asChild className="fixed top-4 left-4">
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
          <Button asChild variant="link" className="text-xl">
            <Link href="#heroSection">
              <span className="sublinhado-gradiente font-semibold">Home</span>
            </Link>
          </Button>
          <Button asChild variant="link" className="text-xl">
            <Link href="#solutionSection">
              <span className="sublinhado-gradiente font-semibold">
                Soluções
              </span>
            </Link>
          </Button>
          <Button asChild variant="link" className="text-xl">
            <Link href="#benefitsSection">
              <span className="sublinhado-gradiente font-semibold">
                Benefícios
              </span>
            </Link>
          </Button>
          <Button asChild variant="link" className="text-xl">
            <Link href="#portifolioSection">
              <span className="sublinhado-gradiente font-semibold">
                Portifólio
              </span>
            </Link>
          </Button>

          <Button asChild className="mt-10">
            <Link href="endingSection" className="text-foreground ml-10">
              Comece agora!
            </Link>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
