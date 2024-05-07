import Galeria from '@/components/Galeria/Galeria';
import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import React from 'react';


// Página de galería
function page() {

    return (
        <LayoutPrincipal>
            <div className="bg-cover bg-center w-full h-auto p-10" style={{ backgroundImage: "url('/backgroundImage.jpg')" }}>
            <div className="mt-40 h-max relative w-full overflow-x-hidden">

                <p className="text-5xl font-medium pb-6" style={{textAlign: 'center'}}>Galería</p>

                <Galeria/>

            </div>
            </div>

        </LayoutPrincipal>
    )
}

export default page