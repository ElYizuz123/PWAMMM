"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { contexto } from '../UpdateProvider'
import Image from 'next/image'
import Swal from 'sweetalert2'
import Modal from 'react-modal'


const randomHexa = () => {
    const randomNumber = Math.floor(Math.random() * 65536);
    const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
    return hexadecimalValue
}

const Crear_foto = () => {
    const { update, setUpdate } = useContext(contexto)
    const [cFotoIsOpen, setCFotoIsOpen] = useState(false)
    const [eventoPhoto, setEventoPhoto] = useState(null)
    const { register, handleSubmit, reset, setValue } = useForm()
    const fileInputRef = useRef(null)
    const hexa = randomHexa()

    //Configuración del modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '50%',
            bottom: '50%',
            marginRight: '-50%',
            marginBottom: '-50%',
            height: '65%',
            transform: 'translate(-40%, -50%)',
            backgroundColor: '#00000000',
            border: 'none',
            boxShadow: 'none',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        },
    };

    //Añadir el campo foto al form
    useEffect(() => {
        register('foto');
    }, [register]);

    //Cerrar el popup
    const onClose = () => {
        setCFotoIsOpen(false)
    }

    //Abrir el popup
    const isOpen = () => {
        setCFotoIsOpen(true)
    }


    //Manejar la creación de una foto
    const handleOnSubmit = async (data) => {
        if (eventoPhoto) {
            const form = new FormData()
            form.set('file', eventoPhoto)
            form.set('source', "galeria")
            form.set('modifier', data.hexa)
            //Registrar foto en el servidor
            const fotoRes = await fetch('/api/upload_image', {
                method: 'POST',
                body: form
            })
            const fotoResJSON = await fotoRes.json()
            console.log(fotoResJSON)

            //Registrar producto en la DB
            if (fotoResJSON == "Archivo subido correctamente") {
                const res = await fetch('/api/galeria/create_foto', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'aplication/json'
                    }
                })
                const resJSON = await res.json()
                if (resJSON == "Registrado") {
                    let timerInterval;
                    Swal.fire({
                        title: "Foto añadida!",
                        icon: "success",
                        timer: 2000,
                        timerProgressBar: true,
                        confirmButtonText: "Ok",
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then(() => {
                        setEventoPhoto()
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
        }
    }

    const handleFileButton = () => {
        fileInputRef.current.click();
    }

    return (
        <div className='h-full'>
            <button onClick={isOpen} className='bg-[#98E47D] w-44 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-4'>Agregar foto</p>
            </button>
            <Modal
                isOpen={cFotoIsOpen}
                onRequestClose={onClose}
                style={customStyles}
            >
                <div className='w-[80%] h-full bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[500px] max-h-[450px]'>
                    <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between max-h-[450px]'>
                        <p className='font-bold pl-5'>Foto</p>
                        <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
                    </div>
                    <div className='w-full h-full flex justify-between'>
                        <div className='w-full flex flex-col justify-center items-center'>
                            {/* Visualizador de fotografía */}
                            {eventoPhoto && (
                                <Image width={400} height={400} src={URL.createObjectURL(eventoPhoto)} alt='Preview' className='object-contain w-48 h-56' />
                            )}
                            {eventoPhoto && (
                                <p className='text-sm'>{eventoPhoto.name}</p>
                            )}
                            <button
                                className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'
                                onClick={handleFileButton}
                            >Seleccionar Archivo</button>
                            {!eventoPhoto && (
                                <p className='text-sm mt-1 text-red-700'>Es necesario agregar una foto</p>
                            )}


                        </div>
                        <form onSubmit={handleSubmit(handleOnSubmit)} className='w-full h-full'>
                            <input
                                type='file'
                                name='foto'
                                id='fotoSelecter'
                                className='hidden'
                                ref={fileInputRef}
                                onChange={(e) => {
                                    setEventoPhoto(e.target.files[0])
                                    setValue('foto', e.target.files[0] ? e.target.files[0].name.split(".")[0] + hexa + "." + e.target.files[0].name.split(".")[1] : "")
                                    setValue('hexa', hexa)
                                }}
                            />
                            <div className='w-full h-full flex justify-end items-end'>
                                <button
                                    type='submit'
                                    className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mb-11'
                                >Agregar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>




        </div>


    )
}

export default Crear_foto