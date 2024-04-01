"use client"
import { Berkshire_Swash } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"

const berkshire_swash = Berkshire_Swash({ subsets: ['latin'], weight: '400' })

const buttonMap = {
    "/administrador/ventas": "text-black bg-[#0000000]",
    "/administrador/marcas": "text-black bg-[#0000000]",
    "/administrador/productos": "text-black bg-[#0000000]",
    "/administrador/asociadas": "text-black bg-[#0000000]",
    "/administrador/eventos": "text-black bg-[#0000000]",
    "/administrador/galeria": "text-black bg-[#0000000]",
    "/administrador/preguntas": "text-black bg-[#0000000]",
}
const changeColor = () => {
    for (const key in buttonMap) {
        buttonMap[key] = 'text-black bg-[#0000000]';
    }
    const pathName = usePathname();
    buttonMap[pathName] = 'text-white bg-[#F70073]';
}

const Barra_Lateral = () => {
    changeColor()
    return (
        <div className="h-auto w-80 bg-[#FF533A] bg-opacity-25 rounded-tl-3xl rounded-br-3xl flex flex-col">
            <div className={berkshire_swash.className}>
                <div className="w-full flex justify-center">
                    <div className="w-52">
                        <h1 className="text-center text-black opacity text-2xl mt-3">Mujeres Mezcaleras de Michoacán</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <img src="/mezcaleras_logo.png" className="w-20" />
            </div>
            <div className="w-full flex flex-col justify-end items-end pt-8">
                <Link href="/administrador/ventas" className={`w-11/12 ${buttonMap["/administrador/ventas"]} hover:bg-[#f7007365] hover:text-white flex justify-end rounded-l-full`}>
                    <p className="font-bold text-2xl pr-3 pt-1 pb-1">VENTAS</p>
                </Link>
                <Link href="/administrador/marcas" className={`w-11/12 ${buttonMap["/administrador/marcas"]} hover:bg-[#f7007365] hover:text-white flex justify-end rounded-l-full mt-8`}>
                    <p className="font-bold text-2xl pr-3 pt-1 pb-1">MARCAS</p>
                </Link>
                <Link href="/administrador/productos" className={`w-11/12 ${buttonMap["/administrador/productos"]} hover:bg-[#f7007365] hover:text-white flex justify-end rounded-l-full mt-8`}>
                    <p className="font-bold text-2xl pr-3 pt-1 pb-1">PRODUCTOS</p>
                </Link>
                <Link href="/administrador/preguntas" className={`w-11/12 ${buttonMap["/administrador/preguntas"]} hover:bg-[#f7007365] hover:text-white flex justify-end rounded-l-full mt-8`}>
                    <p className="font-bold text-2xl pr-3 pt-1 pb-1">PREGUNTAS</p>
                </Link>
                <Link href="/administrador/asociadas" className={`w-11/12 ${buttonMap["/administrador/asociadas"]} hover:bg-[#f7007365] hover:text-white flex justify-end rounded-l-full mt-8`}>
                    <p className="font-bold text-2xl  pr-3 pt-1 pb-1">ASOCIADAS</p>
                </Link>
                <Link href="/administrador/eventos" className={`w-11/12 ${buttonMap["/administrador/eventos"]} hover:bg-[#f7007365] hover:text-white flex justify-end rounded-l-full mt-8`}>
                    <p className="font-bold text-2xl pr-3 pt-1 pb-1">EVENTOS</p>
                </Link>
                <Link href="/administrador/galeria" className={`w-11/12 ${buttonMap["/administrador/galeria"]} hover:bg-[#f7007365] hover:text-white flex justify-end rounded-l-full mt-8`}>
                    <p className="font-bold text-2xl pr-3 pt-1 pb-1">GALERÍA</p>
                </Link>
                
                <button className="w-11/12 hover:bg-[#f7007365] hover:text-white flex justify-end rounded-l-full mt-8">
                    <p className="font-bold text-2xl pr-3 pt-1 pb-1">AYUDA</p>
                </button>
            </div>

        </div>
    )
}

export default Barra_Lateral