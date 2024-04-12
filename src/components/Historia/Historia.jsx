import React from 'react'
import Link from "next/link";
import { Berkshire_Swash } from "next/font/google";
import Image from 'next/image';


const berkshire = Berkshire_Swash({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],

});



const Historia = () => {
    return (
       
    
/*
        <div className='relative z-10 flex items-center justify-center  '>
            <div className=" inset-0  bg-cover bg-center  " >
                <div className='bg-black bg-opacity-70 text-white rounded-lg  p-6 h-[590px]'>

                    <br></br>

                    <div className={berkshire.className} >
                        <p className='text-4xl ml-2 sm:text-6xl md:text-7xl  text-white sm:ml-10 md:ml-10 lg:ml-24 text-delineado '> Historia </p>
                        <p className='text-5xl ml-20  sm:text-7xl md:text-8xl text-[#C1D128] sm:ml-52 md:ml-64 lg:ml-64 xl:ml-80 text-delineado  '> del Mezcal  </p>

                    </div>
                    <br></br>

                    <p className='mt-5 text-justify text-xs leading-relaxed  text-white ml-8 mr-8 flex justify-center  sm:text-2xl sm:ml-10 sm:mr-10 md:text-3xl md:leading-normal  lg:leading-relaxed  xl:leading-relaxed  2xl:leading-relaxed'> El pueblo purépecha Curicaueri nació en el oriente y tomaba la forma del sol, dios del fuego que recorría la bóveda celeste como un halcón. El aire, el agua, la tierra y el fuego son los cuatro elementos a los que les rendían reverencia y era Curicaueri "el gran dios del fuego", y son estos mismos elementos los indispensables para la elaboración del elixir de la vida, el mezcal. Curicaueri "el gran dios del fuego" y Xaratanga "diosa de la luna" son los dioses principales en la mitología purépecha; de la unión de ellos, nació la armonía y la felicidad, y con ello, todo lo que conocemos en la tierra.

                    </p>

                </div>
            </div>
        </div>
        
    */ 
   
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <Image  src="/multimedia/fondo-historia.jpeg" height={300} width={600} alt="Mujeres Mezcaleras de Michoacán"  className="h-full w-full object-cover shadow-lg border-[#f70073] border-t-4 border-r-4 border-l-4 border-b-4 "/>
        </div>
        
    
       
        <div 
            className="max-w-lg bg-[#f1f1f1] shadow-2xl md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
           
            <div className="flex flex-col p-12 md:px-16">
                <div className={berkshire.className} >
                    <h2 className="text-7xl   text-black text-delinead">Historia </h2>
                    <h2 className="text-8xl  text-[#C1D128]  text-delineado ml-28">del mezcal</h2>
                    
                    
                    </div>
                <p className="mt-4 text-xl">
                El pueblo purépecha Curicaueri nació en el oriente y tomaba la forma del sol, dios del fuego que recorría la bóveda celeste como un halcón. 
                El aire, el agua, la tierra y el fuego son los cuatro elementos a los que les rendían reverencia y era Curicaueri "el gran dios del fuego", 
                y son estos mismos elementos los indispensables para la elaboración del elixir de la vida, el mezcal. 
                </p>
              
                <div className="mt-8">
                    <a href="#"
                       className="mx-auto block w-full text-center text-lg font-medium text-gray-100 bg-[#f70073] hover:bg-[#e39abd] hover:scale-105 hover:shadow-lg md:w-48 py-3 px-6 rounded-full">Ver más</a>
                </div>
            </div>
            
        
        </div>
</div>



    );
}

export default Historia