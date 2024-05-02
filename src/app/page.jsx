import React, { Suspense} from "react";
import Historia from "@/components/Historia/Historia";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Main from "@/components/Video/Main";
//import CarruselInicio from "@/components/CarruselInicio/CarruselInicio";
//import NuestrasMarcas from "@/components/NuestrasMarcas/NuestrasMarcas";


const CarruselInicio = React.lazy(() => import("@/components/CarruselInicio/CarruselInicio"));
//const Historia = React.lazy(() => import("@/components/Historia/Historia"));
const NuestrasMarcas = React.lazy(() => import("@/components/NuestrasMarcas/NuestrasMarcas"));

export default function Home() {
  return (
    <LayoutPrincipal>
      <Main />                                                                                          {/*Componente Video*/}
      <div className=" w-full h-auto fondo-nosotras " >                                                 {/*fondo-nosotras es el fondo principal*/}
        <div className="bg-gradient-to-b  from-green-200 to-transparent">                             {/*Se aplica un efecto de desvanecido de la sección del video */}
        <Suspense fallback={<div>Cargando...</div>} >
          <CarruselInicio />    
        </Suspense>                                                                                     {/*al carrusel de eventos */}
        </div>
        
        <Historia />                                                                                     {/*Componente de la sección de historia del mezcal */}
        
                                                                                        
        <div className="mt-10 sm:mt-10 md:mt-60 lg:mt-16 bg-gradient-to-t from-black to-transparent"> {/*Se aplica el efecto desvanecido en color negro,  */}
                                                                                                        {/*para que se fusione con el footer   */}
        
        <Suspense fallback={<div>Cargando...</div>} >  
          <NuestrasMarcas />  
         </Suspense> 
         </div>                                                                         
      </div>

    </LayoutPrincipal>



  );
}

