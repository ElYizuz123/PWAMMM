import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { contexto } from '../UpdateProvider'
import Image from 'next/image'
import Swal from 'sweetalert2'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'


const randomHexa = () => {
    const randomNumber = Math.floor(Math.random() * 65536);
    const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
    return hexadecimalValue
}

const Editar_evento = ({ idEvento, isOpen, onClose }) => {
    const { update, setUpdate } = useContext(contexto)
    const [eventoPhoto, setEventoPhoto] = useState(null)
    const [evento, setEvento] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, reset, setValue } = useForm();
    const fileInputRef = useRef(null)
    const hexa = randomHexa()

    //Inicialización de datos en el form
    const setForm = (data) => {
        console.log(data)
        register('id_evento')
            register('foto')
            register('fecha_fin')
            register('nombre')
            register('descripcion')
            register('fotoId')

            setValue('id_evento', idEvento)
            setValue('nombre', data[0].nombre)
            setValue('descripcion', data[0].descripcion)
            setValue('foto', data[0].fotoUri? data[0].fotoUri:null)
            setValue('fotoId', data[0].fotoId ?  data[0].fotoId:null)
            setValue('fecha_fin', data[0].fecha_fin.split(".")[0].slice(0, -3))
    }

    //Lectura de eventos 
    const readData = async () => {
        const res = await fetch('/api/eventos/read_evento', {
            method: 'POST',
            body: idEvento
        })
        const resJSON = await res.json()
        setEvento(JSON.parse(resJSON))
        console.log(evento)
        setForm(JSON.parse(resJSON))
    }

    //Inicialización de lectura de datos
    useEffect(() => {
        readData()
    }, [])

    //Ingreso de campos de foto y hexadecimal en el form
    useEffect(() => {
        register('foto')
        register('hexa')
    }, [register]);


    //Manejo de actualización de datos 
    const handleOnSubmit = async (data) => {
        setIsLoading(true)
        //Manejo de la fecha para la DB
        data.fecha_fin = data.fecha_fin + ":00.000Z"
        console.log(data)
        if (eventoPhoto) {
            const form = new FormData()
            form.set('file', eventoPhoto)
            form.set('source', "eventos")
            form.set('nombre', evento[0].fotoId)
            form.set('modifier', data.hexa)
            //Registrar foto en el servidor
            const fotoRes = await fetch('/api/update_image', {
                method: 'POST',
                body: form
            })
            const fotoResJSON = await fotoRes.json()
            console.log(fotoResJSON)

            //Registrar evento en la DB
            if (fotoResJSON != "Error") {
                data["foto"] = fotoResJSON.picUri
                data["fotoId"] = fotoResJSON.picId
                const res = await fetch('/api/eventos/update_evento', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'aplication/json'
                    }
                })
                const resJSON = await res.json()
                console.log(resJSON)
                if (resJSON == "Registrada") {
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
                        const up = !update
                        setUpdate(up)
                        onClose()
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
        } else {
            //Modificación sin fotografía
            const res = await fetch('/api/eventos/update_evento', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'aplication/json'
                }
            })
            const resJSON = await res.json()
            console.log(resJSON)
            if (resJSON == "Registrada") {
                let timerInterval;
                Swal.fire({
                    title: "Evento modificado!",
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
                    onClose()
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
        setIsLoading(false)
    }

    //Ingreso de foto en el input del form
    const handleFileButton = () => {
        fileInputRef.current.click();
    }


    return (
        <div className='h-full'>
            <div className='w-[80%] h-[400px] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[600px]'>
                <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                    <p className='font-bold pl-5'>Evento</p>
                    <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
                </div>
                <div className='w-full h-full flex justify-between'>
                    <div className='h-[90%] w-[40%] flex flex-col justify-center items-center'>
                        {/* Visualizador de la imagen */}
                        {eventoPhoto && (
                            <Image width={400} height={400} src={URL.createObjectURL(eventoPhoto)} alt='Preview' className='object-contain w-44 h-56' />
                        )}
                        {eventoPhoto && (
                            <p className='text-sm'>{eventoPhoto.name}</p>
                        )}
                        {/* Visualizador por defecto de la imagen */}
                        {!eventoPhoto && (<Image width={400} height={400} src={evento ? evento[0].fotoUri ? evento[0].fotoUri: "" : ""} alt='Preview' className={`object-contain w-44 h-56 
                        ${evento? evento[0].fotoUri ? "show":"hidden" :"hidden"}`} />)}
                        {!eventoPhoto && (
                            <p className='text-sm'>{evento ? evento[0].fotoId : ""}</p>
                        )}
                        <button
                            className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'
                            onClick={handleFileButton}
                        >Seleccionar Archivo</button>

                    </div>
                    <div className='h-[1000px] w-[60%] flex justify-end'>
                        <div className='flex flex-col justify-start gap-y-6 mr-1 mt-[100px]'>
                            <p className='text-xl'>Fecha fin</p>
                            <p className='text-xl'>Nombre</p>
                            <p className='text-xl'>Descripción</p>
                        </div>
                        <div>
                            <div >
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
                                        defaultValue={evento ? evento[0].fecha_fin.split(".")[0] : ""}
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
                                            disabled={isLoading}
                                            type='submit'
                                            className='bg-[#98E47D] w-56 h-10 text-2xl font-bold rounded-xl mr-3 mt-[10%]'
                                        >
                                            {!isLoading &&
                                            "Guardar cambios"
                                        }
                                        {
                                            isLoading &&
                                            <div className='flex justify-center'>
                                                <AiOutlineLoading3Quarters className='animate-spin'/>
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

    )
}

export default Editar_evento