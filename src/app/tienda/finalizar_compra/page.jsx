import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Formulario from "@/components/tienda/Formulario";
import React from "react";
import Image from "next/image";

const finalizar_compra = () => {
  return (
 
      <div className="realtive h-screen">
              <div className="  absolute flex items-end  ">
                  <Image
                    src="/mezcal_background.png"
                    alt="Imagen de fondo"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    className="  w-full  opacity-60"
                  />
                </div>
                 <Formulario/> 
                <div className="">
                     
                   <LayoutPrincipal/>
                </div>
                 
            </div>
       
  
     
      
      
  );
};

export default finalizar_compra;
