import type { Metadata } from "next";
import { GymNavbar } from "@/app/academia/_components/GymNavbar";
import "../gym.css";

export const metadata: Metadata = {
  title: "Academia",
  description: "Página de Academia",
};

export default function GymLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center bg-neutral-900 w-full">
      <GymNavbar />
      {children}
    </div>
  );
}
