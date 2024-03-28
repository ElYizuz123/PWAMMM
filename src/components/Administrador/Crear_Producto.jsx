"use client"
import React, { useState } from 'react'

const Crear_Producto = ({ isOpen, onClose }) => {
    const [productPhoto, setProductPhoto] = useState(null)
    if (!isOpen) return null;

    return (
      <div className='w-full h-full bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073]'>
        <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
          <p className='font-bold pl-5'>Producto</p>
          <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
        </div>
        <div className='w-full h-full flex justify-between'>
            <div className='h-[90%] w-[50%] flex flex-col justify-end items-center'>
                {productPhoto && (
                    <img src={URL.createObjectURL(file)} alt='Preview' className='w-64 h-80'/>
                )}
                <p className='text-sm'>Vista previa</p>
                <button className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'>Seleccionar Archivo</button>
                {!productPhoto &&(
                    <p className='text-sm mt-1'>Ningún archivo seleccionado</p>
                )}
            </div>
            <div className='h-full w-[50%] flex justify-between'>
                <div className='flex flex-col items-start gap-y-6'>
                    <p className='text-xl'>Nombre</p>
                    <p className='text-xl'>ML</p>
                    <p className='text-xl'>Precio</p>
                    <p className='text-xl'>Marca</p>
                    <p className='text-xl'>Descripción</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
      </div>
    );
  };

export default Crear_Producto