import Historia from "@/components/Historia/Historia";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Main from "@/components/Video/Main";
import Carrusel from "@/components/carrusel/Carrusel";
import CarruselInicio from "@/components/CarruselInicio/CarruselInicio";
import Carru from "@/components/Carru/Carru";
import NuestrasMarcas from "@/components/NuestrasMarcas/NuestrasMarcas";
import MensajeBienvenida from "@/components/MensajeBienvenida/MensajeBienvenida";


export default function Home() {
  return (
    <LayoutPrincipal>
      {/* <MensajeBienvenida/>*/}
      {/*<div className="  bg-cover bg-center w-full h-auto" style={{ backgroundImage: "url('/fondo-agave.jpeg')" }}>*/}
      
      <Main />
      <div className="bg-cover bg-center w-full h-auto " style={{ backgroundImage: "url('/backgroundImage.jpg')" }}>
          <div className="bg-gradient-to-b  from-green-200 to-transparent">
              <CarruselInicio />
          </div>
     
        
      
          <Historia />
       


        <div className="mt-60"><NuestrasMarcas /></div>
      </div>

    </LayoutPrincipal>



  );
}

