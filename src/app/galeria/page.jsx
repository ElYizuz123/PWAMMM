import CarruselGaleria from '@/components/CarruselGaleria/CarruselGaleria';
import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import React from 'react';

// Página de galería
function page() {

    return (
        <LayoutPrincipal>
            <div className="bg-[#F5F5F5] h-max relative w-full">

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>


                <div className="absolute inset-0 ">
                    <img
                        className="w-full h-full object-cover opacity-60"
                        src="\backgroundImage.png"
                        alt="Background"
                    />
                </div>
                {/* <div className="bg-cover bg-center bg-opacity-60 w-full h-max" style={{ backgroundImage: "url('/backgroundImage.png')" }}> */}

                <br></br>
                <br></br>

                <div>
                    <div>
                        <p className="text-5xl ml-28 mb-6">Categoría</p>
                    </div>

                    <div className="ml-28 mb-14">
                        <CarruselGaleria></CarruselGaleria>
                    </div>

                </div>

                <div>
                    <div>
                        <p className="text-5xl ml-28 mb-6">Categoría</p>
                    </div>

                    <div className="ml-28">
                        <CarruselGaleria></CarruselGaleria>
                    </div>

                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>


            </div>
        </LayoutPrincipal>

        // </div>

    )
}

export default page