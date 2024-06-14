"use client";

import React from "react";

export default function Card() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="relative group flex items-center justify-center h-[400px] w-[300px] bg-cover bg-[url('/card-1.jpg')] overflow-hidden rounded-2xl cursor-pointer hover:scale-[1.025] transition duration-300 ease-in-out ">
        <div className=" absolute z-20 h-[800px] w-[600px] bg-gradient-to-tr from-black to-black group-hover:from-black group-hover:to-gray-900 rounded-full filter blur-[80px] opacity-60"></div>
        <span className="z-[25] text-3xl text-white uppercase font-semibold">
          Instalações
        </span>
      </div>
      <div className="relative group flex items-center justify-center h-[400px] w-[300px] bg-cover bg-[url('/card-1.jpg')] overflow-hidden rounded-2xl cursor-pointer hover:scale-[1.025] transition duration-300 ease-in-out ">
        <div className=" absolute z-20 h-[800px] w-[600px] bg-gradient-to-tr from-black to-black group-hover:from-black group-hover:to-gray-900 rounded-full filter blur-[80px] opacity-60"></div>
        <span className="z-[25] text-3xl text-white uppercase font-semibold">
          Horários
        </span>
      </div>
      <div className="relative group flex items-center justify-center h-[400px] w-[300px] bg-cover bg-[url('/card-1.jpg')] overflow-hidden rounded-2xl cursor-pointer hover:scale-[1.025] transition duration-300 ease-in-out ">
        <div className=" absolute z-20 h-[800px] w-[600px] bg-gradient-to-tr from-black to-black group-hover:from-black group-hover:to-gray-900 rounded-full filter blur-[80px] opacity-60"></div>
        <span className="z-[25] text-3xl text-white uppercase font-semibold">
          Loja
        </span>
      </div>
    </div>
  );
}
