import React from 'react'
import { Berkshire_Swash } from "next/font/google";

const berkshire = Berkshire_Swash({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],

});

const Historia = () => {
    return (
       
        <div className='relative z-10 '>
            <div className=" inset-0  bg-cover bg-center w-full h-[500px] " >
                <div className='bg-gray-950 mt-4 p-6 bg-opacity-60'>

                    <br></br>
                    
                    <div className={berkshire.className} >
                        <p className='text-4xl ml-2 sm:text-6xl md:text-7xl  text-white sm:ml-10 md:ml-10 lg:ml-24 text-delineado '> Historia </p>
                        <p className='text-5xl ml-20  sm:text-7xl md:text-8xl text-[#C1D128] sm:ml-52 md:ml-64 lg:ml-64 xl:ml-80 text-delineado  '> del Mezcal  </p>

                    </div>
                    <br></br>
                    <br></br>
                    <p className='text-justify text-base leading-relaxed  text-white ml-8 mr-8 flex justify-center  sm:text-2xl sm:ml-10 sm:mr-10 md:text-3xl md:leading-normal lg:text-4xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed  2xl:text-4xl 2xl:leading-relaxed'> Para que el pueblo Purépecha CURICAUERI nació en el oriente y tomaba la forma del sol, Dios del fuego que recorría la bóveda celeste como un halcón. El aire, el agua, la tierra y el fuego son los cuatro elementos a los que les hacían reverencia y era CURICAUERI “el gran dios del fuego” y son estos mismos elementos los indispensables para le elaboración del elixir de la vida, el Mezcal…. CURICAUERI “El gran dios del fuego” y XARATANGA “Diosa de la luna” son los dioses principales en la mitología purépecha; de la unión de ellos, nació la Armonía y la felicidad, y con ello, todo lo que conocemos en la tierra.

                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
       

    )
}

export default Historia