import React, { Suspense } from "react";
import Historia from "@/components/Historia/Historia";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Main from "@/components/Inicio/Video/Main";
import Promociones from "@/components/Inicio/Promociones/Promociones";

//import CarruselInicio from "@/components/CarruselInicio/CarruselInicio";
//import NuestrasMarcas from "@/components/NuestrasMarcas/NuestrasMarcas";


const CarruselInicio = React.lazy(() => import("@/components/Inicio/CarruselInicio/CarruselInicio"));
//const Historia = React.lazy(() => import("@/components/Historia/Historia"));
const NuestrasMarcas = React.lazy(() => import("@/components/Inicio/NuestrasMarcas/NuestrasMarcas"));

export default function Home() {
  return (
    <LayoutPrincipal>
      <Main />                                                                                   {/*Componente Video*/}
      <div className=" w-full h-auto fondo-nosotras overflow-x-hidden  " >

        <div className="md:mb-10">
          <Promociones />
        </div>
        {/*fondo-nosotras es el fondo principal*/}
        <div className="bg-transparent  mt-96 sm:mt-96 md:mt-56 lg:mt-10 xl:mt-20 2xl:mt-1  mb-5">                                            {/*Se aplica un efecto de desvanecido de la sección del video */}

          <Suspense fallback={<div>Cargando...</div>} >
            <CarruselInicio />
          </Suspense>                                                                                     {/*al carrusel de eventos */}
        </div>
        <div className="mt-24 ">
          <Historia />
        </div>



        <div className="mt-10 sm:mt-10 md:mt-60 lg:mt-0 xl:mt-24 bg-gradient-to-t from-black to-transparent"> {/*Se aplica el efecto desvanecido en color negro,  */}
          {/*para que se fusione con el footer   */}
          <Suspense fallback={<div>Cargando...</div>} >
            <NuestrasMarcas />
          </Suspense>
        </div>
      </div>

    </LayoutPrincipal>



  );
}

