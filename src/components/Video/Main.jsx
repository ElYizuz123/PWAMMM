import React from 'react'
import CarruselInicio from "@/components/CarruselInicio/CarruselInicio";
import Historia from "@/components/Historia/Historia";
import MensajeBienvenida from "@/components/MensajeBienvenida/MensajeBienvenida";




const Main = () => {


    return (
       
        <div className="mt-28 lg:mt-28"> 
        <video className="w-full h-auto lg:w-auto lg:h-full z-0" src="/multimedia/videoBg5.mp4" autoPlay loop muted /> {/* Video que ocupe todo el largo y ancho de la pantalla  */}
      </div>


    );
}

export default Main