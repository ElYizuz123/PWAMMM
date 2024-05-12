import { useEffect } from 'react'
import Link from 'next/link'
import MayorEdadCSS from '/src/components/MayorEdad/MayorEdad.css'

const MayorEdad = () => {

    useEffect(() => {
        const botonMayorEdad = document.getElementById('btn-mayor');
        const mayorEdad = document.getElementById('mayor-edad');

        if (!localStorage.getItem('mayor-aceptado')) {
            mayorEdad.classList.add('activo');
        }

        botonMayorEdad.addEventListener('click', () => {
            mayorEdad.classList.remove('activo');

            localStorage.setItem('mayor-aceptado', 'true');
        });
    }, []);

    return (
        <div>
            <div id="mayor-edad" >
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-2 z-50">
                    <div className="bg-[#F3E8E8] sm:w-11/12 md:w-11/12 lg:w-auto w-auto border-2 border-[#D60064] p-5 rounded-lg flex flex-col justify-center items-center gap-5">
                        <div className="content-modal lg:ml-5 lg:mr-5 lg:mt-2 lg:mb-2 md:ml-5 md:mr-5 md:mt-2 md:mb-2 ml-1 mr-1 mt-2 mb-2">
                            <p className="lg:text-3xl md:lg:text-3xl text-xl font-bold">Verificación de edad</p>
                            <p>¿Eres mayor de edad?</p>
                            <div className='flex justify-center items-center mt-2'>
                                <button id="btn-mayor" className="w-1/4 m-2 bg-[#D60064] border-2 border-black hover:bg-[#d60064c9] h-auto rounded-lg p-2 shadow-md">
                                    <p className="text-white">Si</p>
                                </button>
                                <Link href={"https://www.google.com/"} className="w-1/4">
                                    <button
                                        className="w-full m-2 bg-[#D60064] border-2 border-black hover:bg-[#d60064c9] h-auto rounded-lg p-2 shadow-md">
                                        <p className="text-white">No</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MayorEdad;