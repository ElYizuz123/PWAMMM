"use client"
import CarruselGaleria from '@/components/CarruselGaleria/CarruselGaleria';
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
            <div className="bg-cover bg-center w-full h-auto p-10" style={{ backgroundImage: "url('/multimedia/fondo-agave.jpeg')" }}>

                {/* <div className="absolute inset-0 ">
                    <img
                        className="w-full h-full object-cover opacity-60"
                        src="\multimedia\agave 2.jpeg"
                        alt="Background"
                    />
                </div> */}


                <div className="items-center text-black justify-center mt-14 ml-6 lg:ml-24 md:ml-16 sm:ml-4">
                    {categorias &&
                        categorias.map((galeria_categoria) => (
                            <div key={galeria_categoria.id_categoria}>
                                <p className="text-5xl ml-3 text-white">{galeria_categoria.categoria}</p>
                                <div className="mb-14">
                                    <CarruselGaleria categorias={galeria_categoria.id_categoria}></CarruselGaleria>
                                </div>
                            </div>
                        ))}

                </div>

            </div>
            </div>

        </LayoutPrincipal>
    )
}

export default page