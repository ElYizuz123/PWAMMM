"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { contexto } from '../UpdateProvider';
import Image from 'next/image';
import Modal from 'react-modal'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Crear_pregunta = () => {
    const [cPreguntaIsOpen, setCPreguntaIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const createRef = useRef(null)
    const { update, setUpdate } = useContext(contexto)

    //Abrir el pop up para crear pregunta
    const openCPregunta = () => {
        setCPreguntaIsOpen(true)
    }

    //Cerrar el pop up 
    const onClose = () => {
        setCPreguntaIsOpen(false)
    }

    //Configuración de los modales
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '60%',
            bottom: '50%',
            marginRight: '-50%',
            marginBottom: '-50%',
            height: '40%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#00000000',
            border: 'none',
            boxShadow: 'none',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        },
    };


    //Escribir pregunta en la DB
    const handleOnSubmit = async (data) => {
        setIsLoading(true)
        const res = await fetch('/api/preguntas/create_pregunta', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const resJSON = await res.json()
        if (resJSON == "Creado con éxito") {
            let timerInterval;
            Swal.fire({
                title: "Pregunta añadida!",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                confirmButtonText: "Ok",
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then(() => {
                const val = !update
                setUpdate(val)
                reset()
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal!",
            });
        }
        setIsLoading(false)
    }

    return (
        <div>
            <Modal
                isOpen={cPreguntaIsOpen}
                onRequestClose={onClose}
                style={customStyles}
            >
                <div className='flex justify-center items-center'>
                    <div className='w-full h-[200px] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[300px] max-w-[600px]'>
                        <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                            <p className='font-bold pl-5'>Pregunta</p>
                            <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
                        </div>
                        <div className='w-full h-full flex justify-center'>
                            <div className='h-full w-full flex justify-between ml-5 mr-5'>
                                <div className='flex flex-col items-start gap-y-6 mt-4 mr-4'>
                                    <p id='label_nombre' className='text-xl'>Pregunta</p>
                                    <p className='text-xl'>Respuesta</p>
                                </div>
                                <div>
                                    <div className='h-full flex flex-col items-start mt-5 mr-2'>
                                        <form onSubmit={handleSubmit(handleOnSubmit)}>
                                            <input
                                                type='text'
                                                name='pregunta'
                                                id='campo_nombre'
                                                maxLength={255}
                                                required={true}
                                                {...register('pregunta', {
                                                    required: true,
                                                    maxLength: 255
                                                })}
                                                className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                                placeholder='Pregunta frecuente'
                                            />
                                            <input
                                                type='text'
                                                name='respuesta'
                                                id='campo_nombre'
                                                maxLength={255}
                                                required={true}
                                                {...register('respuesta', {
                                                    required: true,
                                                    maxLength: 255
                                                })}
                                                className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-5'
                                                placeholder='Respuesta'
                                            />
                                            <div className='w-full flex justify-end items-end'>
                                                <button
                                                    disabled={isLoading}
                                                    type='submit'
                                                    className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-5 mb-5'
                                                >
                                                    {!isLoading &&
                                                        "Agregar"
                                                    }
                                                    {
                                                        isLoading &&
                                                        <div className='flex justify-center'>
                                                            <AiOutlineLoading3Quarters className='animate-spin' />
                                                        </div>
                                                    }
                                                    
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
            <button onClick={openCPregunta} className='bg-[#98E47D] w-48 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-3'>Agregar pregunta</p>
            </button>
        </div>
    )
}

export default Crear_pregunta