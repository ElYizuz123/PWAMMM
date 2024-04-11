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
          <p className="cardd_description  text-black font-light mb-2">{desc}</p>
        </div>
      </article>
    );
  };
  



const ProcesoMezcal = () => {
    
    const cards = [
        { imageUrl: "/multimedia/CorteJimado.jpg", titulo: "Corte y Jimado del Agave", desc: "La recolección implica la tala de las plantas de agave de la variedad Cupreata, las cuales prosperan ya sea en los valles o en las montañas en el caso de las especies silvestres, o en los campos de cultivo si se trata de agaves cultivados." },
        { imageUrl: "/multimedia/Cocción.jpg", titulo: "Cocción", desc: "Esta etapa es decisiva para el aprovechamiento del maguey, para transformar los polisacáridos (incomibles) y disminuir el pH (acidez) y por lo tanto, el cocimiento es definitorio de los sabores y aromas del mezcal." },
        { imageUrl: "/multimedia/Molienda.jpg", titulo: "Molienda", desc: "La molienda del agave cocido es otra etapa necesaria para liberar los azúcares fermentables contenidos en las fibras del agave. También existen varios métodos para llevar a cabo la molienda o 'machucada" },
        { imageUrl: "/multimedia/Fermentacion.jpg", titulo: "Fermentación", desc: "La fermentación consiste en la transformación de los azúcares de agave y ocurre en dos etapas: la reproducción de levaduras y su consumo de azúcares, transformándolos en alcohol" },
        { imageUrl:"/multimedia/Destilacion.jpg" , titulo: "Destilación", desc: "La destilación consiste en separar, por vaporización, una mezcla líquida de sustancias mezclables y volátiles en componentes individuales o, en algunos casos, en grupos de compuestos. " },
        { imageUrl: "/multimedia/alcohol.jpg", titulo: "Ajuste Alcohólico", desc: " utilizando el 'cuerpo' como componente principal del mezcal y utilizando pequeñas porciones de las 'puntas' y 'colas' para definir el producto final; esta es la etapa final en la elaboración del mezcal y se conoce como Ajuste Alcohólico." }
      ];
    
      return (
        <div className="  min-h-screen p-6 flex flex-wrap justify-center items-center">
            <div className={berkshire.className}>
                <p className="text-7xl text-center text-delinead"> "El arte de hacer Mezcal"</p>
                
            </div>
          <div className="justify-center max-w-6xl flex flex-wrap mx-auto gap-5">
            {cards.map((card, index) => (
              <NewsCard key={index} imageUrl={card.imageUrl} titulo={card.titulo} desc={card.desc} />
            ))}
          </div>
        </div>
       

      );
};

export default ProcesoMezcal