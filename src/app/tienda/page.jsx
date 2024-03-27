import React from "react";
import Navbar from "@/app/components/Navbar";
import Tarjeta from "@/app/components/Tarjeta";
import { K2D } from "next/font/google";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className={k2d.className}>
      <div className="relative bg-[#F5F5F5FD] min-h-screen ">
        <div className="flex justify-center absolute w-[300px] h-screen bg-white text-black ml-9 mt-[264px] pt-8">
          <div className="border border-b[#F70073]">Nuestras marcas</div>
        </div>

        <div>
          <Navbar />
        </div>
        <form>
          <div className="flex justify-center items-center">
            <input
              className="bg-white w-screen h-[55px] mt-8 mx-36 px-7 border-2 border-gray-300 text-black outline-none rounded-full"
              placeholder="Buscar productos..."
              type="search"
              name="search"
              id="search"
            />
            <button
              className="absolute p-3 text-sm h-[55px] w-20 mt-8 ml-[1150px] border-2 border-gray-300 text-white bg-[#F70073] rounded-e-full  hover:opacity-75"
              type="submit"
            >
              <img className="w-5 h-5 ml-3" src="\emoticons\lupa.png"></img>
            </button>
          </div>
        </form>

        <div className="flex flex-wrap gap-8 pl-[370px] pt-8">
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
        </div>
      </div>
    </div>
  );
};

export default page;
