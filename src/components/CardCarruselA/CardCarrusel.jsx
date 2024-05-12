import React from "react";
import Image from "next/image";

const CardCarrusel = ({ asociada,nombreA,foto,historia, handleAsociada,alt }) => {
    const ruta = "/mezcaleras/";
   
    return (
        <div className="bg-white mt-32 border-[#f70073] sm:h-[533px] sm:w-[395px]   text-black rounded-3xl border-t-2 border-l-2 border-b-2 border-r-2 ">
            <div className=" bg-white flex justify-center items-center rounded-t-3xl">
                <Image
                    src={foto}
                    alt={"Asociación de Mujeres Mezcaleras de Michoacán"+alt}
                    width={300}
                    height={350}
                    className="h-64 w-11/12 rounded-t-3xl rounded-b-none mt-4 object-cover "
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4 ">
                <p className=" text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-extrabold ">{nombreA}</p>
                <div className=" flex justify-center items-center ">
                    <hr className="w-[175px] border-t-2 border-[#f70073] custom-shadow " />
                </div>

                <p className=" text-[10px] sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-justify font-semibold ">
                    {historia}
                </p>

                <button
                    className="bg-[#f70073] hover:bg-[#e39abd] hover:scale-105 hover:shadow-lg hover:font-bold text-white text-lg px-6 py-1 rounded -xl"
                    onClick={() => handleAsociada(asociada.nombre,asociada.id_asociada)
                        

                       
                    }
                >
                    Productos
                </button>
            </div>
        </div>
    )
}

export default CardCarrusel;