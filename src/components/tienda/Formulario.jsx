import React from 'react'
import Image from 'next/image';

function Formulario() {

  return (
    
      <div className="min-h-screen py-5 items-center relative">
        {/*imagen fondo*/}
        <div className="fixed z-0 inset-0 opacity-20">
          <Image
            src="/backgroundImage.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Fondo"
          />
        </div>
      </div>
   
  );
}

export default Formulario
