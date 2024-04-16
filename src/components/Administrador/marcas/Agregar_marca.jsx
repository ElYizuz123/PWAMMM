"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Crear_marca from './Crear_marca'
import Image from 'next/image'

const Agregar_marca = ({asociadas}) => {
    const [cMarcasIsOpen, setCMarcasIsOpen] = useState(false)
    const createMarca = useRef(null)

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
            createMarca.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [cMarcasIsOpen]);

    return (
        <div>
            <button onClick={openCMarca} className='bg-[#98E47D] w-44 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-3'>Agregar marca</p>
            </button>
            <div ref={createMarca} className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-4/12 ${cMarcasIsOpen ? "" : "pointer-events-none"}`}>
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