"use client"
import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { contexto } from '../UpdateProvider';
import Modal from 'react-modal'


const randomHexa = () => {
    const randomNumber = Math.floor(Math.random() * 65536);
    const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
    return hexadecimalValue
}


const Crear_evento = () => {
    const { update, setUpdate } = useContext(contexto)
    const [cEventosIsOpen, setCEventosIsOpen] = useState(false)
    const [eventoPhoto, setEventoPhoto] = useState(null)
    const { register, handleSubmit, reset, setValue } = useForm();
    const fileInputRef = useRef(null)
    const hexa = randomHexa()

    //Registrar el campo de foto en el formulario
    useEffect(() => {
        register('foto');
    }, [register]);

    //Configuración de los modales 
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '60%',
            bottom: '50%',
            marginRight: '-50%',
            marginBottom: '-50%',
            height: '65%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#00000000',
            border: 'none',
            boxShadow: 'none',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        },
    };

    //Cerrar el popup de eventos
    const onClose = () => {
        setCEventosIsOpen(false)
    }

    //Abrir el popup de eventos
    const isOpen = () => {
        setCEventosIsOpen(true)
    }


    //Manejar el ingreso de un evento
    const handleOnSubmit = async (data) => {
        //Manejar la fecha para su ingreso a la base de datos 
        data.fecha_fin = data.fecha_fin + ":00.000Z"
        var fotoResJSON = null
        if (eventoPhoto) {
            //Form para enviar a la base de datos 
            const form = new FormData()
            form.set('file', eventoPhoto)
            form.set('source', "eventos")
            form.set('modifier', data.hexa)
            //Registrar foto en el servidor
            const fotoRes = await fetch('/api/upload_image', {
                method: 'POST',
                body: form
            })
            fotoResJSON = await fotoRes.json()
            console.log(fotoResJSON)
        }
        else {
            fotoResJSON = "Archivo subido correctamente"
        }
        //Registrar producto en la DB
        if (fotoResJSON != "Error") {
            data["foto"] = fotoResJSON.picUri
            data["fotoId"] = fotoResJSON.picId
            const res = await fetch('/api/eventos/create_evento', {
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
                    title: "Evento añadido!",
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

    //Ingresar la fotografía en el input del form
    const handleFileButton = () => {
        fileInputRef.current.click();
    }

    return (
        <div className='h-full'>
            <button onClick={isOpen} className='bg-[#98E47D] w-44 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-4'>Agregar evento</p>
            </button>
            <Modal
                isOpen={cEventosIsOpen}
                onRequestClose={onClose}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className='flex justify-center items-center'>
                    <div className='w-[80%] h-[400px] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[600px]'>
                        <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                            <p className='font-bold pl-5'>Evento</p>
                            <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
                        </div>
                        <div className='w-full h-full flex justify-between'>
                            <div className='h-[90%] w-[40%] flex flex-col justify-center items-center'>
                                {/* Visualizador de imagen */}
                                {eventoPhoto && (
                                    <Image width={400} height={400} src={URL.createObjectURL(eventoPhoto)} alt='Preview' className='object-contain w-44 h-56' />
                                )}
                                {eventoPhoto && (
                                    <p className='text-sm'>{eventoPhoto.name}</p>
                                )}
                                <button
                                    className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'
                                    onClick={handleFileButton}
                                >Seleccionar Archivo</button>
                            </div>
                            <div className='h-full w-[60%] flex justify-end'>
                                <div className='flex flex-col justify-start gap-y-6 mr-2 mt-[100px]'>
                                    <p className='text-xl'>Fecha fin</p>
                                    <p className='text-xl'>Nombre</p>
                                    <p className='text-xl'>Descripción</p>
                                </div>

                                <div>
                                    <form onSubmit={handleSubmit(handleOnSubmit)} className='h-full flex flex-col items-start mr-2 gap-y-6 mt-[100px]'>
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
                                        <input
                                            type='datetime-local'
                                            name='fecha_fin'
                                            id='fecha_fin'
                                            required={true}
                                            maxLength={45}
                                            {...register('fecha_fin', {
                                                required: true,
                                                maxLength: 45,
                                            })}
                                            className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                            placeholder='Fecha fin'
                                        />
                                        <input
                                            type='text'
                                            name='nombre'
                                            id='nombre'
                                            required={true}
                                            maxLength={30}
                                            {...register('nombre', {
                                                required: true,
                                                maxLength: 30,
                                            })}
                                            className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                            placeholder='Nombre'
                                        />
                                        <input
                                            type='text'
                                            name='descripcion'
                                            id='descripcion'
                                            required={true}
                                            maxLength={50}
                                            {...register('descripcion', {
                                                required: true,
                                                maxLength: 50,
                                            })}
                                            className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                            placeholder='Descripción'
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
            </Modal>




        </div>


    )
}

export default Crear_evento