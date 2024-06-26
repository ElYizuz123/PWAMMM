import React from "react";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import CarruselAsociadas from "@/components/Nosotras/CarruselAsociadas/CarruselAsociadas";
import CardVision from "@/components/Nosotras/CardVision/CardVision";



const Page = () => {


  return (
    <LayoutPrincipal>
      {/* Carrusel de la seccion NOSOTRAS, inicia automáticamente y cada 4 segundos cambia*/}


       

    
      
      <div
        className=" w-full h-auto  p-10 fondo-pictograma-carrusel overflow-x-hidden   ">
        <div className="w-11/12 ml-auto mr-auto  mb-10  ">
          
          <CarruselAsociadas /> {/*Carrusel de Asociadas*/}
        </div>
        <div className="w-11/12 m-auto mb-10 overflow-x-hidden ">
          <CardVision />  {/*Visión y Misión*/}
        </div>
      </div>
      
   
    
    
        
    
  
      

    </LayoutPrincipal>
  );
};

export default Page;
