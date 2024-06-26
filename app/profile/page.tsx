"use client";

import AboutProfile from "./_components/AboutProfile";
import DepositionsProfile from "./_components/DepositionsProfile";
import { FooterProfile } from "./_components/FooterProfile";
import HeroProfile from "./_components/Hero";
import ModulesProfile from "./_components/ModulesProfile";
import Numbers from "./_components/Numbers";
import PriceProfile from "./_components/PriceProfile";

export default function Profile() {
  return (
    <main className="pt-4">
      <HeroProfile />
      <AboutProfile />
      <ModulesProfile />
      <Numbers />
      <DepositionsProfile />
      <PriceProfile />
      <FooterProfile />
    </main>
  );
}
