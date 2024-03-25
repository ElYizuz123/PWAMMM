"use client"
import { League_Gothic } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"

const league_gothic = League_Gothic({ subsets: ['latin'] })

const buttonMapBG={
    "/administrador/ventas":"#00000000",
    "/administrador/productos":"#00000000",
    "/administrador/asociadas":"#00000000",
    "/administrador/eventos":"#00000000",
    "/administrador/galeria":"#00000000",
}
const buttonMapTC={
    "/administrador/ventas":"text-black",
    "/administrador/productos":"text-black",
    "/administrador/asociadas":"text-black",
    "/administrador/eventos":"text-black",
    "/administrador/galeria":"text-black",
}
const changeColor = () =>{
    for (const key in buttonMapBG) {
        buttonMapBG[key] = '#00000000';
        buttonMapTC[key] = 'text-black';
    }
    const pathName = usePathname();
    buttonMapBG[pathName] = '#F70073';
    buttonMapTC[pathName] = 'text-white';
}

const Barra_Lateral = () => {
    changeColor()
    return (
        <div className="h-screen w-52 bg-[#FF533A] bg-opacity-25 rounded-tl-3xl rounded-br-3xl flex flex-col">
            <div className={league_gothic.className}>
                <h1 className="text-center text-black opacity text-xl mt-3">MUJERES MEZCALERAS DE MICHOACÁN</h1>
            </div>
            <div className="flex justify-center mt-5">
                <img src="/mezcaleras_logo.png" className="w-12" />
            </div>
            <div className="w-full flex flex-col justify-end items-end pt-8">
                <Link href="/administrador/ventas" className={`w-11/12 ${buttonMapTC["/administrador/ventas"]} bg-[${buttonMapBG["/administrador/ventas"]}] hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full`}>
                    <p className="font-bold text-xl pr-3 pt-1 pb-1">VENTAS</p>
                </Link>
                <Link href="/administrador/productos" className={`w-11/12 ${buttonMapTC["/administrador/productos"]} bg-[${buttonMapBG["/administrador/productos"]}] hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5`}>
                    <p className="font-bold text-xl pr-3 pt-1 pb-1">PRODUCTOS</p>
                </Link>
                <Link href="/administrador/asociadas" className={`w-11/12 ${buttonMapTC["/administrador/asociadas"]} bg-[${buttonMapBG["/administrador/asociadas"]}] hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5`}>
                    <p className="font-bold text-xl  pr-3 pt-1 pb-1">ASOCIADAS</p>
                </Link>
                <Link href="/administrador/eventos" className={`w-11/12 ${buttonMapTC["/administrador/eventos"]} bg-[${buttonMapBG["/administrador/eventos"]}] hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5`}>
                    <p className="font-bold text-xl pr-3 pt-1 pb-1">EVENTOS</p>
                </Link>
                <Link href="/administrador/galeria" className={`w-11/12 ${buttonMapTC["/administrador/galeria"]} bg-[${buttonMapBG["/administrador/galeria"]}] hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5`}>
                    <p className="font-bold text-xl pr-3 pt-1 pb-1">GALERÍA</p>
                </Link>
                <button className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5">
                    <p className="font-bold text-xl pr-3 pt-1 pb-1">AYUDA</p>
                </button>
            </div>

        </div>
    )
}

export default Barra_Lateral