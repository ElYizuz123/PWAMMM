"use client"
import React, { useEffect, useRef, useState } from 'react'

const Crear_Producto = ({ isOpen, onClose, marcas }) => {

    const fileInputRef = useRef(null)
    const [data, setData] = useState(null)
    const [productPhoto, setProductPhoto] = useState(null)

    const handleOnChange = ({ target: { name, value } }) => {
        setData({ ...data, [name]: value })
        console.log(data)
    }

    const handleFileButton = () => {
        fileInputRef.current.click();
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setData({ ...data, "foto": productPhoto.name })
        console.log(data);
    }



    if (!isOpen) return null;

    return (
        <div className='w-full h-full bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073]'>
            <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                <p className='font-bold pl-5'>Producto</p>
                <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
            </div>
            <div className='w-full h-full flex justify-between'>
                <form className='hidden'>
                    <input
                        type='file'
                        name='foto'
                        id='fotoSelecter'
                        ref={fileInputRef}
                        onChange={(e) => {
                            setProductPhoto(e.target.files[0])
                        }}
                    />
                </form>
                <div className='h-[90%] w-[40%] flex flex-col justify-center items-center'>
                    {productPhoto && (
                        <img src={URL.createObjectURL(productPhoto)} alt='Preview' className='w-64' />
                    )}
                    {productPhoto && (
                        <p className='text-sm'>{productPhoto.name}</p>
                    )}
                    <button
                        className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'
                        onClick={handleFileButton}
                    >Seleccionar Archivo</button>
                    {!productPhoto && (
                        <p className='text-sm mt-1'>Ningún archivo seleccionado</p>
                    )}
                </div>
                <div className='h-full w-[60%] flex justify-between'>
                    <div className='flex flex-col items-start gap-y-6 mt-4 mr-2'>
                        <p className='text-xl'>Nombre</p>
                        <p className='text-xl'>ML</p>
                        <p className='text-xl'>Precio</p>
                        <p className='text-xl'>Marca</p>
                        <p className='text-xl'>Descripción</p>
                    </div>
                    <div>
                        <div className='h-full flex flex-col items-start mt-5 mr-2'>
                            <form onSubmit={handleOnSubmit}>

                                <input
                                    type='text'
                                    name='nombre'
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                    placeholder='Nombre del mezcal'
                                    onChange={handleOnChange}
                                />
                                <input
                                    type='number'
                                    name='ml'
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-5'
                                    placeholder='Mililitros'
                                    onChange={handleOnChange}
                                />
                                <input
                                    type='number'
                                    name='precio'
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
                                    placeholder='Precio'
                                    onChange={handleOnChange}
                                /> 
                                <select
                                    name='marca'
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
                                    placeholder='Precio'
                                    onChange={handleOnChange}
                                >
                                    {marcas && (
                                        marcas.map((marca) => (
                                            <option key={marca.id_marca}>{marca.nombre}</option>
                                        ))
                                    )}
                                </select>
                                <textarea
                                    type='text'
                                    name='descripcion'
                                    className='w-full h-72 border-2 border-black rounded-lg pl-1 mt-6 pt-1'
                                    onChange={handleOnChange}
                                />
                                <div className='w-full flex justify-end items-end'>
                                    <button
                                        type='submit'
                                        className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-[10%]'
                                    >Agregar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Crear_Producto