"use client"
import CarruselGaleria from '@/components/CarruselGaleria/CarruselGaleria';
import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import React, { useEffect, useState } from 'react';


// Página de galería
function page() {

    const [fotos, setFotos] = useState(null);
    const readData = async () => {
      const res = await fetch('/api/read_fotos');
      const resJSON = await res.json();
      setFotos(JSON.parse(resJSON));
      console.log(resJSON);
    };
  
    useEffect(() => {
      readData();
    }, []);


    return (
        <LayoutPrincipal>
            <div className="bg-[#F5F5F5] h-max relative w-full overflow-x-hidden">

                <div className="absolute inset-0 ">
                    <img
                        className="w-full h-full object-cover opacity-60"
                        src="\backgroundImage.png"
                        alt="Background"
                    />
                </div>

                <div className="items-center justify-center">
                    <div className="mb-14">
                        <CarruselGaleria fotos={fotos}></CarruselGaleria>
                    </div>
                </div>

            </div>

        </LayoutPrincipal>
    )
}

export default page