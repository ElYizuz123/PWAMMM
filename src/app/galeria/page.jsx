"use client"
import CarruselGaleria from '@/components/CarruselGaleria/CarruselGaleria';
import Galeria from '@/components/Galeria/Galeria';
import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import React, { useEffect, useState } from 'react';


// Página de galería
function page() {

    const [categorias, setCategorias] = useState(null);
    const readData = async () => {
        const res = await fetch('/api/read_categorias');
        const resJSON = await res.json();
        setCategorias(JSON.parse(resJSON));
        console.log(resJSON);
    };

    useEffect(() => {
        readData();
    }, []);

    return (
        <LayoutPrincipal>
            <div className="bg-[#F5F5F5] mt-40 h-max relative w-full overflow-x-hidden">
            <div className="bg-cover bg-center w-full h-auto p-10" style={{ backgroundImage: "url('/backgroundImage.jpg')" }}>

                {/* <div className="absolute inset-0 ">
                    <img
                        className="w-full h-full object-cover opacity-60"
                        src="\multimedia\agave 2.jpeg"
                        alt="Background"
                    />
                </div> */}

                <p className="text-5xl font-medium pb-6" style={{textAlign: 'center'}}>Galería</p>

                <Galeria/>

            </div>
            </div>

        </LayoutPrincipal>
    )
}

export default page