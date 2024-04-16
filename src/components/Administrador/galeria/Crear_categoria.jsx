"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { contexto } from '../UpdateProvider'

const Crear_categoria = () => {

    const { register, handleSubmit, reset, setValue } = useForm()
    const [cCategoria, setCCategoria] = useState(false)
    const {update, setUpdate} = useContext(contexto)
    const createRef = useRef(null)

    const isOpen = () => {
        setCCategoria(true)
    }

    const onClose = () => {
        setCCategoria(false)
    }

    useEffect(() => {
        if (cCategoria) {
            createRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [cCategoria]);

    const handleOnSubmit = async (data) => {
        const res = await fetch('/api/galeria/create_categoria', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
        const resJSON = await res.json()
        if (resJSON == "Registrada") {
            let timerInterval;
            Swal.fire({
                title: "Categoría añadida!",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                confirmButtonText: "Ok",
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then(() => {
                const up = !update
                setUpdate(up)
                reset();
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal!",
            });
        }
    }

    return (
        <div className='h-full'>
            <button onClick={isOpen} className='bg-[#98E47D] w-52 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab] ml-5'>
                <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-4'>Agregar categoría</p>
            </button>
            <div ref={createRef} hidden={!cCategoria} className={`absolute top-[15%] left-[40%] z-10 w-6/12 h-[1200px] ${cCategoria ? "" : "pointer-events-none"}`}>
                <div className='w-[40%] h-1/6 bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[300px]'>
                    <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                        <p className='font-bold pl-5'>Producto</p>
                        <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
                    </div>
                    <div className='h-full w-full flex justify-center'>
                        <div className='flex flex-col items-center gap-y-6 mt-3 mr-2'>
                            <p className='text-xl'>Nombre</p>
                        </div>
                        <div>
                            <div className='h-full flex flex-col items-start mt-3 mr-2'>
                                <form onSubmit={handleSubmit(handleOnSubmit)}>
                                    <input
                                        type='text'
                                        name='categoria'
                                        id='categoria'
                                        required={true}
                                        maxLength={20}
                                        {...register('categoria', {
                                            required: true,
                                            maxLength: 20,
                                        })}
                                        className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                        placeholder='Nombre de categoría'
                                    />
                                    <div className='w-full flex justify-end items-end'>
                                        <button
                                            type='submit'
                                            className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-14'
                                        >Crear
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default Crear_categoria