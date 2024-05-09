import React from 'react'
import Image from "next/image";
const CardCarruselnicio = ({ nombre, descripcion, foto,alte }) => {
  const nombreMay = nombre.toUpperCase();
  return (

    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg">
      {foto !== '/eventos/' ? (

        <div className="relative w-full h-96">


          <Image
            className="object-cover w-full h-full"
            src={foto}
            alt={"Eventos Asociacion"+alte}
            layout="fill"
          />
        </div>
           
       


      ) : (
        <div className="flex items-center justify-center relative w-full h-96">
          <Image
            className="object-cover w-full h-full"
            src="/multimedia/cardEvento2.png"
            alt="Eventos "
            layout="fill"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="font-bold text-center text-2xl mb-2">{nombreMay}</div>
        <hr className="w-1/2 border-gray-300 my-2" />
        <p className="text-gray-700 text-base">
          {descripcion}
        </p>
      </div>
    </div>





      )
      }

      
    </div >
  );
}

export default CardCarruselnicio