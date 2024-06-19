import type { Metadata } from "next";
import ProfileNavbar from "./_components/ProfileNavbar";
import "../profile.css";

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
    <div className="flex items-center justify-center bg-stone-50 ">
      <ProfileNavbar />
      {children}
    </div>
  );
}
