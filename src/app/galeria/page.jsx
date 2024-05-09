import Galeria from '@/components/Galeria/Galeria';
import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import { Berkshire_Swash } from "next/font/google";
import React from 'react';

const berkshire = Berkshire_Swash({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],
  });

// Página de galería
function Page() {

    return (
        <LayoutPrincipal>
            <div className="bg-cover bg-center w-full h-auto p-10" style={{ backgroundImage: "url('/backgroundImage.jpg')" }}>
            <div className="mt-40 h-max relative w-full overflow-x-hidden">

            <div className={berkshire.className}>
                <p className="text-6xl pb-6 -tracking-tighter text-center" >Galería</p>
            </div>

                <Galeria/>

            </div>
            </div>

        </LayoutPrincipal>
    )
}

export default Page