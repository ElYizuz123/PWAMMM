"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { contexto } from '../UpdateProvider'
import Modal from 'react-modal'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const randomHexa = () => {
    const randomNumber = Math.floor(Math.random() * 65536);
    const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
    return hexadecimalValue
}

const Crear_Asociada = () => {
    const { update, setUpdate } = useContext(contexto)
    const [cAsociadasIsOpen, setCAsociadasIsOpen] = useState(false)
    const [asociadaPhoto, setAsociadaPhoto] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, reset, setValue } = useForm();
    const fileInputRef = useRef(null)
    const hexa = randomHexa()


    //Configuración de los modales
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '60%',
            bottom: '50%',
            marginRight: '-50%',
            marginBottom: '-50%',
            height: '70%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#00000000',
            border: 'none',
            boxShadow: 'none',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        },
    };


    //Establecer los campos de foto y hexadecimal en el form
    useEffect(() => {
        register('foto');
        register('hexa')
    }, [register]);

    //Cerrar la ventana modal
    const onClose = () => {
        setCAsociadasIsOpen(false)
    }

    //Abrir la ventana modal
    const isOpen = () => {
        setCAsociadasIsOpen(true)
    }



    //Manejar la creación de una nueva asociada
    const handleOnSubmit = async (data) => {
        if (asociadaPhoto) {
            setIsLoading(true)
            const form = new FormData()
            form.set('file', asociadaPhoto)
            form.set('source', "mezcaleras")
            form.set('modifier', data.hexa)
            //Registrar foto en el servidor
            const fotoRes = await fetch('/api/administrador/upload_image', {
                method: 'POST',
                body: form
            })
            const fotoResJSON = await fotoRes.json()
            console.log(fotoResJSON)

            //Registrar producto en la DB
            if (fotoResJSON != "Error") {
                data["foto"] = fotoResJSON.picUri
                data["fotoId"] = fotoResJSON.picId
                const res = await fetch('/api/administrador/asociadas/create_asociada', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'aplication/json'
                    }
                })
                const resJSON = await res.json()
                console.log(resJSON)
                if (resJSON == "Registrado") {
                    let timerInterval;
                    Swal.fire({
                        title: "Asociada añadida!",
                        icon: "success",
                        timer: 2000,
                        timerProgressBar: true,
                        confirmButtonText: "Ok",
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then(() => {
                        setAsociadaPhoto()
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
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salió mal!",
                });
            }
            setIsLoading(false)
        }
    }

    //Manejar el input de la foto 
    const handleFileButton = () => {
        fileInputRef.current.click();
    }

    return (
        <div className='h-full'>
            <button onClick={isOpen} className='bg-[#98E47D] w-48 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-3'>Agregar asociada</p>
            </button>
            <Modal
                isOpen={cAsociadasIsOpen}
                onRequestClose={onClose}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className='w-full h-[430px] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[400px]'>
                    <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                        <p className='font-bold pl-5'>Asociada</p>
                        <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
                    </div>
                    <div className='w-full h-full flex justify-between'>
                        <div className='h-[90%] w-[40%] flex flex-col justify-center items-center'>
                            {/* Previsualización de la imagen */}
                            {asociadaPhoto && (
                                <Image height={400} width={400} src={URL.createObjectURL(asociadaPhoto)} alt='Preview' className='object-contain w-48 h-56' />
                            )}
                            {asociadaPhoto && (
                                <p className='text-sm'>{asociadaPhoto.name}</p>
                            )}
                            <button
                                className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'
                                onClick={handleFileButton}
                            >Seleccionar Archivo</button>
                            {!asociadaPhoto && (
                                <p className='text-sm mt-1 text-red-700'>Es necesario agregar una foto</p>
                            )}
                        </div>
                        <div className='h-full w-[60%] flex justify-between'>
                            <div className='flex flex-col items-start gap-y-6 mt-4 mr-2'>
                                <p className='text-xl'>Nombre</p>
                                <p className='text-xl'>Historia</p>
                            </div>
                            <div>
                                <div className='h-full flex flex-col items-start mt-5 mr-2'>
                                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                                        <input
                                            type='file'
                                            name='foto'
                                            id='fotoSelecter'
                                            className='hidden'
                                            ref={fileInputRef}
                                            onChange={(e) => {
                                                setAsociadaPhoto(e.target.files[0])
                                                setValue('foto', e.target.files[0] ? e.target.files[0].name.split(".")[0] + hexa + "." + e.target.files[0].name.split(".")[1] : "")
                                                setValue('hexa', hexa)
                                            }}
                                        />
                                        <input
                                            type='text'
                                            name='nombre'
                                            id='campo_nombre'
                                            required={true}
                                            maxLength={30}
                                            {...register('nombre', {
                                                required: true,
                                                maxLength: 30,
                                            })}
                                            className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                            placeholder='Nombre'
                                        />
                                        <textarea
                                            type='text'
                                            name='historia'
                                            required={true}
                                            maxLength={500}
                                            {...register('historia', {
                                                required: true,
                                                maxLength: 500
                                            })}
                                            className='w-full h-60 border-2 border-black rounded-lg pl-1 mt-5'
                                            placeholder='Descripción'
                                        />
                                        <div className='w-full flex justify-end items-end'>
                                            <button
                                                disabled={isLoading}
                                                type='submit'
                                                className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-[3%] hover:bg-[#a6cc97]'
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

            </Modal>




        </div>


    )
}

export default Crear_Asociada