import React from 'react'
import { Berkshire_Swash } from "next/font/google";

const berkshire = Berkshire_Swash({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],

});

const Historia = () => {
    return (

        <div className='relative z-10 flex items-center justify-center  '>
            <div className=" inset-0  bg-cover bg-center  " >
                <div className='bg-black bg-opacity-50 text-white rounded-lg mt-4 p-6 h-[570px]'>

                    <br></br>

                    <div className={berkshire.className} >
                        <p className='text-4xl ml-2 sm:text-6xl md:text-7xl  text-white sm:ml-10 md:ml-10 lg:ml-24 text-delineado '> Historia </p>
                        <p className='text-5xl ml-20  sm:text-7xl md:text-8xl text-[#C1D128] sm:ml-52 md:ml-64 lg:ml-64 xl:ml-80 text-delineado  '> del Mezcal  </p>

                    </div>
                    <br></br>

                    <p className='mt-5 text-justify text-[10px] leading-relaxed  text-white ml-8 mr-8 flex justify-center  sm:text-2xl sm:ml-10 sm:mr-10 md:text-3xl md:leading-normal  lg:leading-relaxed  xl:leading-relaxed  2xl:leading-relaxed'> El pueblo purépecha Curicaueri nació en el oriente y tomaba la forma del sol, dios del fuego que recorría la bóveda celeste como un halcón. El aire, el agua, la tierra y el fuego son los cuatro elementos a los que les rendían reverencia y era Curicaueri 'el gran dios del fuego', y son estos mismos elementos los indispensables para la elaboración del elixir de la vida, el mezcal. Curicaueri 'el gran dios del fuego' y Xaratanga 'diosa de la luna' son los dioses principales en la mitología purépecha; de la unión de ellos, nació la armonía y la felicidad, y con ello, todo lo que conocemos en la tierra.

                    </p>

                </div>
            </div>
        </div>


    )
}

export default Historia