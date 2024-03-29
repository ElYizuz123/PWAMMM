import Link from 'next/link'
import React from 'react'

const Barra_Superior = ({title}) => {
    return (
        <div className="w-full h-16 bg-[#D9D9D9] flex justify-between items-center p-10">
            <div>
                <div className="flex justify-center ml-10">
                    <p className="font-bold text-[#6D5353]">Tu perfil {'>'}</p>
                    <p className="ml-1 text-[#C71E78] font-bold">{title}</p>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="font-bold">Administrador</p>
                <div className="bg-black w-[0.2%] opacity-50 ml-4 mr-4"></div>
                <Link href="/administrador/ventas">
                    <img src="/notification.png" className="w-7 h-"></img>
                </Link>
                <div className="bg-black w-[0.2%] opacity-50 ml-4 mr-4"></div>
                <Link href="/">
                    <img src="/logout.png" className="w-7 h-7"></img>
                </Link>
            </div>
        </div>
    )
}

export default Barra_Superior