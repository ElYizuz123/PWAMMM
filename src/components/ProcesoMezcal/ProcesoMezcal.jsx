import React,{Suspense} from "react";
import { Berkshire_Swash } from "next/font/google";

import CardProcesoMezcal from "../CardProcesoMezcal/CardProcesoMezcal";



const berkshire = Berkshire_Swash({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],

});



const ProcesoMezcal = () => {
   
    const cards = [
        { id:1,imageUrl: "/multimedia/CorteJimado.jpg", titulo: "Corte y Jimado del Agave", desc: "Se elimina cuidadosamente la parte exterior de las hojas y las raíces del maguey, dejando expuesto el centro de la planta, conocido comúnmente como piña. Este proceso se lleva a cabo utilizando un machete y una herramienta llamada coa, que es un utensilio semicircular con un filo de metal afilado y un mango de madera para sujetarlo.",alt:"proceso 1" },
        { id:2,imageUrl: "/multimedia/Cocción.jpg", titulo: "Cocción", desc: "Este proceso durante la producción del mezcal implica la extracción de los azúcares del agave, los cuales se logran aumentando la temperatura de la planta. Esta elevación de temperatura se realiza típicamente utilizando hornos de forma cónica hechos de piedra y enterrados bajo tierra, los cuales se calientan con leña de gran tamaño. ",alt:"proceso 1" },
        { id:3,imageUrl: "/multimedia/Molienda.jpg", titulo: "Molienda", desc: "Después de cocer las piñas, se fragmentan en trozos más pequeños para triturarlas. Generalmente, se emplea una molienda circular de piedra o cemento, donde una piedra de alrededor de 500 kilos gira, siendo arrastrada por un animal de carga." ,alt:"proceso 2"},
        { id:4,imageUrl: "/multimedia/Fermentacion.jpg", titulo: "Fermentación", desc: "Una vez que el agave ha sido molido, se coloca en contenedores para iniciar el proceso de fermentación, el cual puede durar varios días. Sin embargo, la fermentación comienza verdaderamente una vez que la cocción del agave ha finalizado",alt:"proceso 3" },
        { id:5,imageUrl:"/multimedia/Destilacion.jpg" , titulo: "Destilación", desc:"La destilación se lleva a cabo utilizando un alambique y diversos equipos hechos de cobre, ollas de barro, carrizo o quiote.La mezcla se calienta en el alambique, se evapora y luego se condensa lentamente a través de un serpentín que deposita el líquido resultante en un recipiente.",alt:"proceso 4"}  ,
        { id:6,imageUrl: "/multimedia/alcohol.jpg", titulo: "Ajuste Alcohólico", desc: "El ajuste alcohólico en la elaboración del mezcal es el proceso mediante el cual se ajusta el contenido de alcohol en la bebida para alcanzar el nivel deseado. Los mezcaleros ajustan el contenido de alcohol según lo establecido por la NOM, que especifica que debe oscilar entre el 36% y el 55%.",alt:"proceso 5" }
      ];
    
      return (
        <div id="historia-Mezcal">
        <div className="  min-h-screen p-6 flex flex-wrap justify-center items-center" >
            <div className={berkshire.className}>
                <p className="text-4xl mx-1 md:text-6xl lg:text-6xl xl:text-7xl text-black text-delinead text-left"> {'"El arte'} </p>
                <p className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl text-[#C1D128] text-delineado ml-10 sm:ml-28 md:ml-28 lg:ml-28 text-left " > {'de hacer Mezcal"'}</p>
                <br></br>
                {/*<hr className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-7/8 2xl:w-9/10 border-b-4 border-[#F70073] my-4 mx-auto sm:my-2 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10 2xl:ml-10" />*/} 
            </div>
          <div className="justify-center max-w-6xl flex flex-wrap mx-auto gap-5">
            {cards.map((card, id) => (
          
              <CardProcesoMezcal key={id}  imageUrl={card.imageUrl} titulo={card.titulo} desc={card.desc} alt={card.alt} />
             
            ))}
          </div>
        </div>
       
        </div>
      );
    
    
};

export default ProcesoMezcal