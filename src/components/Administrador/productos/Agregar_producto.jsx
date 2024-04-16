"use client"
import React, { useEffect, useRef, useState } from 'react'
import Crear_Producto from './Crear_Producto'
import Image from 'next/image'

const Agregar_producto = ({marcas}) => {

    const [cProductIsOpen, setCProductIsOpen] = useState(false);
    const createRef = useRef(null)

    //Función para abrir pop-up crear productos
    const openCProduct = () => {
        setCProductIsOpen(true);
    };

    //Función para cerrar pop-up crear productos
    const closeCProduct = () => {
        setCProductIsOpen(false);
    };

    //Scroll automático a ventana emergente
    useEffect(() => {
        if (cProductIsOpen) {
            createRef.current.scrollIntoView({ behavior: 'smooth' })
        }
      }, [cProductIsOpen])


    return (
        <div>
            <div hidden={!cProductIsOpen} ref={createRef} className={`absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-6/12 h-[670px] ${cProductIsOpen ? "" : "pointer-events-none"}`}>
                {cProductIsOpen && <Crear_Producto
                    isOpen={cProductIsOpen}
                    onClose={closeCProduct}
                    marcas={marcas}
                />}
            </div>
            <button onClick={openCProduct} className='bg-[#98E47D] w-48 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-3'>Agregar producto</p>
            </button>
        </div>
    )
}

export default Agregar_producto