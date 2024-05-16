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
                <div className="fixed bottom-4 left-4 flex items-center justify-center bg-[#f3e8e8] rounded-lg z-40 shadow-md
                                w-[500px] h-auto">
                    <div className="flex p-2">
                        <Image src={"/navbar/logo.png"} width={500} height={500} className="w-32" />
                        <div>
                            <p className="font-bold flex items-center justify-center">COOKIES</p>
                            <p className="items-center justify-center mb-2">Utilizamos cookies propias y de terceros para mejorar nuestros servicios.</p>
                            <div className="flex justify-center items-end">
                                <button
                                    className="p-2 bg-[#D60064] hover:bg-[#ce3d819b] text-white rounded-lg mr-2 mt-auto w-auto h-auto"
                                    id="btn-aceptar-cookies">
                                    De acuerdo
                                </button>
                                <Link href={"/avisoCookies"}
                                    className="bg-[#ce3d81] hover:bg-[#ce3d819b] text-white rounded-lg ml-2 mt-auto w-auto h-auto">
                                    <button className="p-2">
                                        Avisos de Cookies
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