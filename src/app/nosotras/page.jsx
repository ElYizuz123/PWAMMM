import React from "react";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import CarruselAsociadas from "@/components/CarruselAsociadas/CarruselAsociadas";
import CardVision from "@/components/CardVision/CardVision";



const Page = () => {


  return (
    <LayoutPrincipal>
      {/* Carrusel de la seccion NOSOTRAS, inicia automáticamente y cada 4 segundos cambia*/}

      <div
        className=" w-full h-auto  p-10 fondo-pictograma-carrusel ">
        <div className="w-11/12 ml-auto mr-auto ">
          <CarruselAsociadas /> {/*Carrusel de Asociadas*/}
        </div>
      </div>

      <div
        className=" w-full h-auto  fondo-nosotras p-2 ">
        <div className="w-11/12 m-auto ">
          <CardVision />  {/*Visión y Misión*/}
        </div>
      </div>

    </LayoutPrincipal>
  );
};

export default Page;
