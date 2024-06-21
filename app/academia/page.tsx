"use client";

import ClassesGym from "./_components/ClassesGym";
import DespositionsGym from "./_components/DepositionsGym";
import FacilitiesGym from "./_components/FacilitiesGym";
import PricesGym from "./_components/PricesGym";
import AboutGym from "./_components/aboutGym";
import { Footer } from "./_components/footer";
import HeroGym from "./_components/hero";

export default function Gym() {
  return (
    <main className="">
      <div className="relative">
        <HeroGym />
        {/* <div className="absolute inset-x-0 bottom-[-35vh] transform -translate-y-1/2 flex justify-center z-50">
          <Card />
          </div> */}
      </div>
      <AboutGym />
      <ClassesGym />
      <FacilitiesGym />
      <DespositionsGym />
      <PricesGym />
      <Footer />
    </main>
  );
}
