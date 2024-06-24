import type { Metadata } from "next";
import { GymNavbar } from "@/app/academia/_components/GymNavbar";
import "../gym.css";
import { Exo } from "next/font/google";

const exo = Exo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Academia",
  description: "Página de Academia",
};

export default function GymLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={exo.className}>
      <div className="flex items-center justify-center bg-neutral-900">
        <GymNavbar />
        {children}
      </div>
    </div>
  );
}
