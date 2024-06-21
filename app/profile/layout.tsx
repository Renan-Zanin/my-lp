import type { Metadata } from "next";
import ProfileNavbar from "./_components/ProfileNavbar";
import "../profile.css";
import { Montserrat } from "next/font/google";

const monteserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Página pesssoal",
  description: "Página de Pessoal",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={monteserrat.className}>
      <div className="flex items-center justify-center bg-stone-50 ">
        <ProfileNavbar />
        {children}
      </div>
    </div>
  );
}
