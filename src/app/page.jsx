import Historia from "@/components/Historia/Historia";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Main from "@/components/Video/Main";
import Carrusel from "@/components/carrusel/Carrusel";
import CarruselInicio from "@/components/CarruselInicio/CarruselInicio";
import Carru from "@/components/Carru/Carru";

export default function Home() {
  return (
    <LayoutPrincipal>
      
        <Main />
        <CarruselInicio />  
        <Historia /> 
        
      </LayoutPrincipal>
    
   
  
  );
}

