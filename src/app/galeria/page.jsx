import CarruselGaleria from '@/components/CarruselGaleria/CarruselGaleria';
import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import React from 'react';

// Página de galería
function page() {

    return (
        <LayoutPrincipal>
            <div className="bg-[#F5F5F5] h-max relative w-full overflow-x-hidden">

                <br></br>
                <br></br>
                <br></br>
                <br></br>
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


                <div className="items-center justify-center">

                    <div className="mb-14">
                        <CarruselGaleria></CarruselGaleria>
                    </div>
                    
                </div>

                <div>

                    <div className="mb-14">
                        <CarruselGaleria></CarruselGaleria>
                    </div>
                    
                </div>

            </div>
        </LayoutPrincipal>
        // </div>
    )
}

export default page