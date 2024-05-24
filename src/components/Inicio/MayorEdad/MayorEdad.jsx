import { useEffect } from 'react'
import Link from 'next/link'
import MayorEdadCSS from '/src/components/Inicio/MayorEdad/MayorEdad.css'
import Image from 'next/image';

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
                    <div className="bg-[#F3E8E8BF] w-svw h-svh p-5 rounded-lg flex flex-col md:flex-row items-center justify-center sm:pb-32 gap-5">
                        <div className="flex justify-center md:order-2">
                            <div className="flex">
                                <Image src={"/mezcaleras_logo.png"} width={500} height={500} className="lg:w-[320px] md:w-[320px] sm:w-36 w-36 md:p-4" />
                            </div>
                        </div>
                        <div className="content-modal lg:w-2/4 lg:ml-5 lg:mr-5 lg:mb-2 md:ml-5 md:mr-5 md:mb-2 ml-1 mr-1 mb-2 md:order-1">
                            <p className="lg:text-4xl md:lg:text-3xl text-2xl font-bold text-center">Verificación de edad</p>
                            <p className="lg:text-3xl md:lg:text-2xl text-xl text-center mb-4">Nuestra prioridad son nuestros clientes, por lo que es importante verificar que seas mayor de edad</p>
                            <p className="lg:text-4xl md:lg:text-3xl text-2xl text-center">¿Eres mayor de edad?</p>
                            <div className='flex justify-center items-center mt-2'>
                                <button id="btn-mayor" className="w-1/4 m-2 btnMayor">
                                    <p className="text-white">Si</p>
                                </button>
                                <Link href={"https://www.google.com/"} className="w-1/4">
                                    <button className="w-full m-2 btnMayor">
                                        <p className="text-white">No</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="absolute bottom-4 inset-x-0">
                            <div className="flex justify-center items-center">
                                <Link href={""} className="mr-4 text-center">
                                    <p className="hover:underline hover:cursor-pointer lg:text-lg md:text-lg sm:text-md text-md">Política de Privacidad</p>
                                </Link>
                                <p className="lg:pl-4 lg:pr-4 md:pl-4 md:pr-4 sm:pl-2 sm:pr-2 pl-2 pr-2 lg:text-lg md:text-lg sm:text-md text-md">|</p>
                                <Link href={""} className="ml-4 text-center">
                                    <p className="hover:underline hover:cursor-pointer lg:text-lg md:text-lg sm:text-md text-md">Términos y Condiciones</p>
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