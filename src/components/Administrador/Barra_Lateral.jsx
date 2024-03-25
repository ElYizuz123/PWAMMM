"use client"
import { League_Gothic } from "next/font/google"
import Link from "next/link"
import { useEffect } from "react"

const league_gothic = League_Gothic({ subsets: ['latin'] })


const buttonMap = {
    "Ventas":'#00000000',
    "Productos":'#00000000',
    "Asociadas":'#00000000',
    "Eventos":'#00000000',
    "Galería":'#00000000',
}


const Barra_Lateral = ({title}) => {
    useEffect(() =>{
        for (const key in buttonMap) {
            buttonMap[key] = '#00000000';
        }
        buttonMap[title]='#F70073';
        console.log(buttonMap["Ventas"])
    });

    return (
        <div className="h-screen w-52 bg-[#FF533A] bg-opacity-25 rounded-tl-3xl rounded-br-3xl flex flex-col">
            <div className={league_gothic.className}>
                <h1 className="text-center text-black opacity text-xl mt-3">MUJERES MEZCALERAS DE MICHOACÁN</h1>
            </div>
            <div className="flex justify-center mt-5">
                <img src="/mezcaleras_logo.png" className="w-12" />
            </div>
            <div className="w-full flex flex-col justify-end items-end pt-8">
                <Link href="/administrador/ventas" className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full">
                    <p className="font-bold text-xl pr-3 pt-1 pb-1">VENTAS</p>
                </Link>
                <Link href="/administrador/productos" className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5">
                    <p className="font-bold text-xl pr-3 pt-1 pb-1">PRODUCTOS</p>
                </Link>
                <Link href="/administrador/asociadas" className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5">
                    <p className="font-bold text-xl  pr-3 pt-1 pb-1">ASOCIADAS</p>
                </Link>
                <Link href="/administrador/eventos" className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5">
                    <p className="font-bold text-xl pr-3 pt-1 pb-1">EVENTOS</p>
                </Link>
                <Link href="/administrador/galeria" className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5">
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