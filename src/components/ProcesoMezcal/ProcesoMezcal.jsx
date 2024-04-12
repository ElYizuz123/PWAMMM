import React, { useState } from "react";
import { Berkshire_Swash } from "next/font/google";
import Image from 'next/image';

const berkshire = Berkshire_Swash({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],

});

const NewsCard = ({ titulo, imageUrl, desc }) => {
    return (
        <article className="cardd ">
            <div className="temporary_text">
                 <Image src={imageUrl} alt="" width={300} height={300} className=" w-[300px] h-[300px] object-cover transition-transform duration-300 transform scale-100 hover:scale-125 "  />

            </div>
      <div className="cardd_content ">
        <span className=" cardd_title text-[#F70073] ">{titulo}</span>
        <span className="cardd_subtitle">
        Mujeres Mezcaleras de Michoacán
        </span>
          <p className="cardd_description text-justify  text-black font-light mb-2">{desc}</p>
        </div>
      </article>
    );
  };




const ProcesoMezcal = () => {
   
    const cards = [
        { imageUrl: "/multimedia/CorteJimado.jpg", titulo: "Corte y Jimado del Agave", desc: "Se elimina cuidadosamente la parte exterior de las hojas y las raíces del maguey, dejando expuesto el centro de la planta, conocido comúnmente como piña. Este proceso se lleva a cabo utilizando un machete y una herramienta llamada coa, que es un utensilio semicircular con un filo de metal afilado y un mango de madera para sujetarlo." },
        { imageUrl: "/multimedia/Cocción.jpg", titulo: "Cocción", desc: "Este proceso durante la producción del mezcal implica la extracción de los azúcares del agave, los cuales se logran aumentando la temperatura de la planta. Esta elevación de temperatura se realiza típicamente utilizando hornos de forma cónica hechos de piedra y enterrados bajo tierra, los cuales se calientan con leña de gran tamaño. " },
        { imageUrl: "/multimedia/Molienda.jpg", titulo: "Molienda", desc: "Después de cocer las piñas, se fragmentan en trozos más pequeños para triturarlas. Generalmente, se emplea una molienda circular de piedra o cemento, donde una piedra de alrededor de 500 kilos gira, siendo arrastrada por un animal de carga." },
        { imageUrl: "/multimedia/Fermentacion.jpg", titulo: "Fermentación", desc: "Una vez que el agave ha sido molido, se coloca en contenedores para iniciar el proceso de fermentación, el cual puede durar varios días. Sin embargo, la fermentación comienza verdaderamente una vez que la cocción del agave ha finalizado" },
        { imageUrl:"/multimedia/Destilacion.jpg" , titulo: "Destilación", desc:"La destilación se lleva a cabo utilizando un alambique y diversos equipos hechos de cobre, ollas de barro, carrizo o quiote.La mezcla se calienta en el alambique, se evapora y luego se condensa lentamente a través de un serpentín que deposita el líquido resultante en un recipiente."}  ,
        { imageUrl: "/multimedia/alcohol.jpg", titulo: "Ajuste Alcohólico", desc: "Los mezcaleros ajustan el contenido de alcohol según lo establecido por la NOM, que especifica que debe oscilar entre el 36% y el 55%." }
      ];
    
      return (
        <div id="historia-Mezcal">

        
        <div className="  min-h-screen p-6 flex flex-wrap justify-center items-center" >
            <div className={berkshire.className}>
                <p className="text-7xl text-left text-delinead"> " El arte </p>
                <p className="text-7xl text-right ml-56 text-delinead" > de hacer Mezcal"</p>
                <hr className=" border-b-4  border-[#F70073] my-4 ml-5 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10 2xl:ml-10" />
                
            </div>
          <div className="justify-center max-w-6xl flex flex-wrap mx-auto gap-5">
            {cards.map((card, index) => (
              <NewsCard key={index} imageUrl={card.imageUrl} titulo={card.titulo} desc={card.desc} />
            ))}
          </div>
        </div>
       
        </div>
      );
    
    
};

export default ProcesoMezcal