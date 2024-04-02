import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Formulario from "@/components/tienda/Formulario";
import React from "react";
import Image from "next/image";

const finalizar_compra = () => {
  return (
    <LayoutPrincipal>
      <div className="w-full relative ">
        {/* imagen fondo */}
        <div className=" h-full w-full z-0 opacity-60 ">
          <Image
            src="/backgroundImage.jpg"
            layout="fill"
            quality={100}
            alt="Fondo"
          />
        </div>
        <Formulario></Formulario>
      </div>
    </LayoutPrincipal>
  );
};

export default finalizar_compra;
