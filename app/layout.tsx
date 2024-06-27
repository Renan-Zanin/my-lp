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
