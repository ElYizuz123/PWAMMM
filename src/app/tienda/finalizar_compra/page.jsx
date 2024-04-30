import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Formulario from "@/components/tienda/Formulario";
import React from "react";
import Image from "next/image";

const finalizar_compra = () => {
  return (
 
      <div className="relative ">
              <div className="  absolute bottom-0 z-0">
                  <Image
                    src="/mezcal_background.png"
                    alt="Imagen de fondo"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    className="  w-full  opacity-60 "
                  />
                </div>
                
                 
                 <div className=" absolute z-50">
                  <Formulario/> 
                  <LayoutPrincipal/>
                 </div>
                 
            </div>
       
  
     
      
      
  );
};

export default finalizar_compra;
