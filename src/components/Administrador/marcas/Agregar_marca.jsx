"use client"
import React, { useEffect, useState } from 'react'
import Crear_marca from './Crear_marca'
import Image from 'next/image'

const Agregar_marca = ({asociadas}) => {
    const [cMarcasIsOpen, setCMarcasIsOpen] = useState(false)

    //Abrir pop-up de agregar marca
    const openCMarca = () => {
        setCMarcasIsOpen(true)
    }
    //Cerrar pop-up de agregar marca
    const closeCProduct = () => {
        setCMarcasIsOpen(false)
    };

    //Animación de scroll
    useEffect(() => {
        if (cMarcasIsOpen) {
            window.scrollTo({ top: 180, behavior: 'smooth' });
        }
    }, [cMarcasIsOpen]);

    return (
        <div>
            <button onClick={openCMarca} className='bg-[#98E47D] w-44 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-3'>Agregar marca</p>
            </button>
            <div className={`absolute top-1/3 left-[35%] z-10 w-4/12 ${cMarcasIsOpen ? "" : "pointer-events-none"}`}>
                {cMarcasIsOpen && <Crear_marca
                    isOpen={cMarcasIsOpen}
                    onClose={closeCProduct}
                    asociadas={asociadas}
                />}
            </div>

        </div>
    )
}

export default Agregar_marca