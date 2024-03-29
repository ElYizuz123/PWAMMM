import React from 'react'
import { Berkshire_Swash } from "next/font/google";

const berkshire = Berkshire_Swash({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],

});
const Historia = () => {
    return (
        <div className='relative '>
            <div className="absolute inset-0  bg-cover bg-center w-full h-max " style={{ backgroundImage: "url('/multimedia/FondoHorno.jpg')" }}>
                <div className='bg-gray-950 mt-4 p-6 bg-opacity-40'>

                    <br></br>
                    <br></br>

                    <div className={berkshire.className} >
                        <p className='text-8xl text-white ml-10 text-delineado '> Historia </p>

                        <p className='text-9xl text-[#C1D128] ml-80 text-delineado '> del Mezcal  </p>

                    </div>
                    <br></br>
                    <br></br>
                    <p className='text-4xl text-white ml-10 mr-14 leading-relaxed flex justify-center'> Para que el pueblo Purépecha CURICAUERI nació en el oriente y tomaba la forma del sol, Dios del fuego que recorría la bóveda celeste como un halcón. El aire, el agua, la tierra y el fuego son los cuatro elementos a los que les hacían reverencia y era CURICAUERI “el gran dios del fuego” y son estos mismos elementos los indispensables para le elaboración del elixir de la vida, el Mezcal…. CURICAUERI “El gran dios del fuego” y XARATANGA “Diosa de la luna” son los dioses principales en la mitología purépecha; de la unión de ellos, nació la Armonía y la felicidad, y con ello, todo lo que conocemos en la tierra.

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