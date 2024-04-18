"use client"
import React, { useEffect, useRef, useState } from 'react'
import Crear_Producto from './Crear_Producto'
import Image from 'next/image'
import Crear_Acompanamiento from './Crear_Acompanamiento'
import Modal from 'react-modal'
const Agregar_producto = ({ marcas }) => {
    const [botellaIsOpen, setBotellaIsOpen] = useState(false)
    const [acompanIsOpen, setAcompanIsOpen] = useState(false)

    //Función para abrir pop-up crear productos

    function openBotella() {
        setBotellaIsOpen(true);
    }

    function closeBotella() {
        setBotellaIsOpen(false);
    }

    function openAcompan() {
        setAcompanIsOpen(true);
    }

    function closeAcompan() {
        setAcompanIsOpen(false);
    }

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
            >
                <Crear_Producto 
                    onClose={closeBotella}
                    marcas={marcas}
                />
            </Modal>
            <Modal
                isOpen={acompanIsOpen}
                onRequestClose={closeAcompan}
                style={customStyles}
            >
                <Crear_Acompanamiento 
                    onClose={closeAcompan}
                    marcas={marcas}
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