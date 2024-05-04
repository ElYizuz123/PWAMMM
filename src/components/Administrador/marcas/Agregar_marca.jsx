"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Crear_marca from './Crear_marca'
import Image from 'next/image'
import Modal from 'react-modal'

const Agregar_marca = ({asociadas}) => {
    const [cMarcasIsOpen, setCMarcasIsOpen] = useState(false)

    //Configuraciones del modal
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: '60%',
          bottom: '50%',
          height: '50%',
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


    //Abrir pop-up de agregar marca
    const openCMarca = () => {
        setCMarcasIsOpen(true)
    }
    //Cerrar pop-up de agregar marca
    const closeCProduct = () => {
        setCMarcasIsOpen(false)
    };


    return (
        <div>
            <button onClick={openCMarca} className='bg-[#98E47D] w-44 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-3'>Agregar marca</p>
            </button>
            <Modal
                isOpen={cMarcasIsOpen}
                onRequestClose={closeCProduct}
                style={customStyles}
            >
                <Crear_marca 
                    onClose={closeCProduct}
                    asociadas={asociadas}
                />
            </Modal>

        </div>
    )
}

export default Agregar_marca