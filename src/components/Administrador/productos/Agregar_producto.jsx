"use client"
import React, { useEffect, useRef, useState } from 'react'
import Crear_Producto from './Crear_Producto'
import Image from 'next/image'
import Crear_Acompanamiento from './Crear_Acompanamiento'
import Modal from 'react-modal'
const Agregar_producto = ({ marcas }) => {
    const [botellaIsOpen, setBotellaIsOpen] = useState(false)
    const [acompanIsOpen, setAcompanIsOpen] = useState(false)
    const [marcasBotellas, setMarcasBotellas] = useState(null)
    const [marcasAcompanamientos, setMarcasAcompanamientos] = useState(null)

    //Leer las marcas de las botellas
    const readMarcasBotellas =async () =>{
        const res = await fetch('/api/administrador/producto/read_marcas',{
            method:'POST',
            body:JSON.stringify(1)
        })
        const resJSON = await res.json()
        setMarcasBotellas(resJSON)
    }

    //Leer las marcas de los acompañamientos
    const readMarcasAcompanamientos =async () =>{
        const res = await fetch('/api/administrador/producto/read_marcas',{
            method:'POST',
            body:JSON.stringify(2)
        })
        const resJSON = await res.json()
        setMarcasAcompanamientos(resJSON)
    }

    //Inicializar lecturas
    useEffect(() =>{
        readMarcasBotellas()
        readMarcasAcompanamientos()
    },[])

    //Función para abrir pop-up crear botellas

    function openBotella() {
        setBotellaIsOpen(true);
    }

    //Función para cerrar pop-up crear productos

    function closeBotella() {
        setBotellaIsOpen(false);
    }

    function openAcompan() {
        setAcompanIsOpen(true);
    }

    function closeAcompan() {
        setAcompanIsOpen(false);
    }

    //Configuración del modal
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: '60%',
          bottom: '50%',
          marginRight: '-50%',
          marginBottom: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#00000000',
          border: 'none',
          boxShadow: 'none',
          overflow:'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        },
      };

    return (
        <div>
            <Modal
                isOpen={botellaIsOpen}
                onRequestClose={closeBotella}
                style={customStyles}
                ariaHideApp={false}
            >
                <Crear_Producto 
                    onClose={closeBotella}
                    marcas={marcasBotellas}
                />
            </Modal>
            <Modal
                isOpen={acompanIsOpen}
                onRequestClose={closeAcompan}
                style={customStyles}
            >
                <Crear_Acompanamiento 
                    onClose={closeAcompan}
                    marcas={marcasAcompanamientos}
                />
            </Modal>
            
            <div className='flex '>
                <button onClick={openBotella} className='bg-[#98E47D] w-44 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                    <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                    <p className='mr-3'>Agregar botella</p>
                </button>
                <button onClick={openAcompan} className='bg-[#98E47D] w-64 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab] ml-5'>
                    <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                    <p className='mr-3'>Agregar acompañamiento</p>
                </button>
            </div>
        </div>
    )
}

export default Agregar_producto