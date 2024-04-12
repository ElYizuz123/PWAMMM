"use client"
import React, { useState, useEffect } from 'react';
import { Berkshire_Swash } from "next/font/google";
import Image from 'next/image';



const berkshire = Berkshire_Swash({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],

});
const images = [
    '/multimedia/15.jpeg',
    '/multimedia/agave 2.jpeg'
  ];


const page = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 2000); // Cambia la imagen cada 5 segundos (5000 milisegundos)
  
      return () => clearInterval(interval);
    }, []);
    
    return (

    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <img className="h-full w-full object-cover" src="/Doña Delia_1.png" alt="Winding mountain road"/>
        </div>
        
    
       
        <div
            className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
           
            <div className="flex flex-col p-12 md:px-16">
                <div className={berkshire.className} >
                    <h2 className="text-2xl font-medium  text-white lg:text-4xl text-delineado">Historia </h2>
                    <h2 className="text-3xl font-medium  text-[#C1D128] lg:text-4xl text-delineado ml-20">del mezcal</h2>
                    
                    
                    </div>
                <p className="mt-4">
                El pueblo purépecha Curicaueri nació en el oriente y tomaba la forma del sol, dios del fuego que recorría la bóveda celeste como un halcón. 
                El aire, el agua, la tierra y el fuego son los cuatro elementos a los que les rendían reverencia y era Curicaueri "el gran dios del fuego", 
                y son estos mismos elementos los indispensables para la elaboración del elixir de la vida, el mezcal. Curicaueri "el gran dios del fuego" y 
                Xaratanga "diosa de la luna" son los dioses principales en la mitología purépecha; de la unión de ellos, nació la armonía y la felicidad, y 
                con ello, todo lo que conocemos en la tierra.
                </p>
              
                <div className="mt-8">
                    <a href="#"
                        className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Más</a>
                </div>
            </div>
            
        
        </div>
</div>



/*
<div className="text-center p-8 bg-gray-100">
  

    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <Image src={images[currentImageIndex]} height={300} width={600} alt="Mujeres Mezcaleras de Michoacán" className=" inline-block rounded shadow-lg border border-merino-400" />
        </div>
        
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
        <div className={berkshire.className} >
            <p className="text-7xl ml-8 mt-8 md:mt-0 mr-8 sm:text-2x">Misión</p>
        </div>

        <hr className=" border-b-4  border-[#F70073] my-4 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10 2xl:ml-10" />
        
            <p className="sm:text-lg mt-6 ml-8 mr-8 text-justify">
            "Proteger, regular y promover la Denominación de Origen MEZCAL dentro de los municipios comprendidos en el estado de Michoacán de Ocampo.
             Asimismo, vigilar y observar las especificaciones contenidas en la Norma Oficial Mexicana NOM-070 y sus actualizaciones, evaluando y promoviendo
             la incorporación de sistemas para asegurar la sustentabilidad y la calidad en todos los procesos productivos del mezcal. También fomentaremos las
             formas tradicionales de producción, resguardando su identidad regional, con el objetivo de conservar y consolidar al Mezcal Michoacano como parte 
             de nuestra cultura líquida de México."
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <Image src="/multimedia/agave 2.jpeg" height={300} width={600} alt="" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
        <div className={berkshire.className} >
                            <p className="text-7xl *:font-bold mt-8 ml-8 md:mt-0 sm:text-2x ">Visión</p>
        </div>
        <hr className=" border-b-4  border-[#F70073] my-4 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10 2xl:ml-10" />
                           
            <p className="sm:text-lg mt-6 ml-8 mr-8 text-justify">
            "Brindar a las asociadas servicios, herramientas, orientación, apoyo técnico y científico que les facilite su desempeño; buscando con ello lograr un mayor desarrollo profesional
             y empresarial. Asimismo, vigilar, cuidar, organizar, capacitar y promover entre sus asociadas el cumplimiento de las especificaciones sobre materias primas, el proceso de producción,
             reposo, maduración, envasado y comercialización del mezcal para asegurar la sustentabilidad y la calidad en todos los procesos productivos del mezcal, generando empleos directos y economía 
             en sus regiones."
            </p>
        </div>
    </div>

    

</div>

*/
  )
}

export default page