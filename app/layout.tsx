import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css/animate.compat.css";
import { ToasterProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renan Zanin Oliveira | Desenvolvedor Web",
  description: "Página pessoal de freelancer",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://rzanindev.com.br"),
  keywords: [
    "renan",
    "desenvolvedor",
    "rzanin",
    "freelancer",
    "novo site",
    "ecommerce",
    "desenvolvedor web são josé dos campos",
    "react",
    "freelancer são josé dos campos",
    "dev sjc",
    "Renan Desenvolvedor Web São José dos Campos",
    "Soluções Web Personalizadas São José dos Campos",
    "Landing Pages de Alto Impacto São José dos Campos",
    "Desenvolvimento Web React Renan",
    "Renan Soluções Web São José dos Campos",
    "Desenvolvimento de Landing Pages em São José dos Campos",
    "Desenvolvedor de Sites Responsivos São José dos Campos",
    "React Developer São José dos Campos Renan",
    "Serviços de Desenvolvimento Web Renan São José dos Campos",
    "Especialista em React São José dos Campos",
    "Desenvolvedor de Soluções Web Renan São José dos Campos",
    "Renan Desenvolvimento de Sites São José dos Campos",
    "Desenvolvedor Web Renan em São José dos Campos",
    "Criação de Páginas de Destino São José dos Campos",
  ],
  openGraph: {
    description:
      "Renan, desenvolvedor web especialista em React de São José dos Campos, oferece soluções web personalizadas e landing pages de alto impacto. Transforme sua presença online com sites responsivos e suporte contínuo. Descubra como elevar seu negócio digital.",
    images: ["https://rzanindev.com.br/emailLogo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ToasterProvider />

        <div className="flex flex-col items-center">{children}</div>
      </body>
    </html>
  );
}
