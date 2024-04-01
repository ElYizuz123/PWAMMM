import Historia from "@/components/Historia/Historia";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Main from "@/components/Video/Main";
import Carrusel from "@/components/carrusel/Carrusel";
import CarruselInicio from "@/components/CarruselInicio/CarruselInicio";


import Image from "next/image";
import Carru from "@/components/Carru/Carru";

export default function Home() {
  return (
    <LayoutPrincipal>
      <main className="w-full h-screen ">
      <Main />
      
      <Carru/>
  <CarruselInicio/>
  <Carrusel/>
     
      <Historia/>
      </main>
    </LayoutPrincipal>

  );
}

