import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import StarsCanvas from "@/components/starBackground";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Renan Zanin Oliveira | Desenvolvedor Web",
  description: "Página pessoal de freelancer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <Navbar />
        <StarsCanvas />
        {children}
        <Footer />
      </div>
    </>
  );
}
