import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import UsoCookiesCSS from '/src/components/Inicio/UsoCookies/UsoCookies.css'

const UsoCookies = () => {

    useEffect(() => {
        const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
        const avisoCookies = document.getElementById('aviso-cookies');

        if (!localStorage.getItem('cookies-aceptadas')) {
            avisoCookies.classList.add('activo');
        }

        botonAceptarCookies.addEventListener('click', () => {
            avisoCookies.classList.remove('activo')

            localStorage.setItem('cookies-aceptadas', 'true');
        });
    });

    return (
        <div>
            <div className="relative w-auto h-auto" id="aviso-cookies">
                <div className="fixed bottom-4 left-4 right-4 flex items-center justify-center bg-[#f3e8e8] rounded-lg z-40 shadow-md
                                lg:w-[500px] md:w-[450px] sm:w-[300px] w-[300px] h-auto">
                    <div className="flex p-2">
                        <Image alt="FondoMezcalerasLogoCookies" src={"/fondos/mezcaleras_logo.png"} width={500} height={500} className="lg:w-20 md:w-20 mr-4 sm:w-0 w-0" />
                        <div>
                            <p className="font-bold flex items-center justify-center">COOKIES</p>
                            <p className="items-center justify-center mb-2">Utilizamos cookies propias y de terceros para mejorar nuestros servicios.</p>
                            <div className="flex justify-center items-end">
                                <button
                                    className="btnCookies p-2 bg-[#D60064] hover:bg-[#ce3d819b] text-white rounded-lg mr-2 mt-auto
                                    w-auto lg:h-14 md:h-12 sm:h-10 h-10"
                                    id="btn-aceptar-cookies">
                                    <p>De acuerdo</p>
                                </button>
                                <Link href={"/avisoCookies"} >
                                    <button className="btnCookies p-2 bg-[#ce3d81] hover:bg-[#ce3d819b] text-white rounded-lg ml-2 mt-auto 
                                    w-auto lg:h-14 md:h-12 sm:h-10 h-10">
                                        <p>Avisos de Cookies</p>
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

export default UsoCookies