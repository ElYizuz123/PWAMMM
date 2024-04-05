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
      {/*<MensajeBienvenida/>*/}
         <Main />


        
      
      
      <div className="  bg-cover bg-center w-full h-auto" style={{ backgroundImage: "url('/multimedia/fondo-agave.jpeg')" }}>
        <CarruselInicio />  
       <Historia/>
     
     
       <NuestrasMarcas/>
       </div>
  
  </LayoutPrincipal>
    
   
  
  );
}

