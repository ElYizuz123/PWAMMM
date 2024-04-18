import Historia from "@/components/Historia/Historia";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Main from "@/components/Video/Main";
import CarruselInicio from "@/components/CarruselInicio/CarruselInicio";
import NuestrasMarcas from "@/components/NuestrasMarcas/NuestrasMarcas";
import MensajeBienvenida from "@/components/MensajeBienvenida/MensajeBienvenida";
import HistoriaMezcal from "@/components/HistoriaMezcal/HistoriaMezcal"; 


export default function Home() {
  return (
    <LayoutPrincipal>
      {/* <MensajeBienvenida/>*/}
      {/*<div className="  bg-cover bg-center w-full h-auto" style={{ backgroundImage: "url('/fondo-agave.jpeg')" }}>*/}
      
      <Main />
      <div className="bg-cover bg-center w-full h-auto " style={{ backgroundImage: "url('/backgroundImagev2.png')" }}>
          <div className="bg-gradient-to-b  from-green-200 to-transparent">
              <CarruselInicio />
          </div>
       
        
      
          <Historia />

       


        <div className="mt-60 bg-gradient-to-t  from-black to-transparent"><NuestrasMarcas /></div>
      </div>

    </LayoutPrincipal>



  );
}

