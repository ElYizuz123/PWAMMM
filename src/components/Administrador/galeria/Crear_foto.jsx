"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { contexto } from '../UpdateProvider'
import Image from 'next/image'
import Swal from 'sweetalert2'


const randomHexa = () => {
    const randomNumber = Math.floor(Math.random() * 65536);
    const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
    return hexadecimalValue
}

const Crear_foto = () => {
    const { update, setUpdate } = useContext(contexto)
    const [cFotoIsOpen, setCFotoIsOpen] = useState(false)
    const [eventoPhoto, setEventoPhoto] = useState(null)
    const [categorias, setCategorias] = useState(null)
    const { register, handleSubmit, reset, setValue } = useForm()
    const fileInputRef = useRef(null)
    const hexa = randomHexa()

    useEffect(() => {
        register('foto');
    }, [register]);

    const onClose = () => {
        setCFotoIsOpen(false)
    }

    const isOpen = () => {
        setCFotoIsOpen(true)
    }

    useEffect(() => {
        if (cFotoIsOpen) {
            window.scrollTo({ top: 230, behavior: 'smooth' });
        }
    }, [cFotoIsOpen]);

    useEffect (() =>{
        readData()
    })


    const readData = async () => {
        const res = await fetch('/api/galeria/read_only_categorias')
        const resJSON = await res.json()
        setCategorias(JSON.parse(resJSON))
    }

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
            <div hidden={!cFotoIsOpen} className={`absolute top-[10%] left-[25%] z-10 w-6/12 h-[1200px] ${cFotoIsOpen ? "" : "pointer-events-none"}`}>
                <div className='w-[80%] h-2/6 bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073]'>
                    <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                        <p className='font-bold pl-5'>Producto</p>
                        <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
                    </div>
                    <div className='w-full h-full flex justify-between'>
                        <div className='h-[90%] w-[40%] flex flex-col justify-center items-center'>
                            {eventoPhoto && (
                                <img src={URL.createObjectURL(eventoPhoto)} alt='Preview' className='w-48' />
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
                        <div className='h-full w-[60%] flex justify-end'>
                            <div className='flex flex-col items-start gap-y-6 mt-28 mr-2'>
                                <p className='text-xl'>Descripción</p>
                                <p className='text-xl'>Categoría</p>
                            </div>
                            <div>
                                <div className='h-full flex flex-col items-start mt-28 mr-2'>
                                    <form onSubmit={handleSubmit(handleOnSubmit)}>
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
                                            type='text'
                                            name='descripcion'
                                            id='descripcion'
                                            required={true}
                                            maxLength={45}
                                            {...register('descripcion', {
                                                required: true,
                                                maxLength: 45,
                                            })}
                                            className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                            placeholder='Descripción de la foto'
                                        />
                                        <select
                                            name='categoria'
                                            id='categoria'
                                            required={true}
                                            {...register('categoria', {
                                                required: true
                                            })}
                                            className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
                                        >
                                            <option></option>
                                            {categorias && categorias.map((categoria) =>(
                                                <option key={categoria.id_categoria} value={categoria.id_categoria}>
                                                    {categoria.categoria}
                                                </option>
                                            ))}
                                        </select>
                                        <div className='w-full flex justify-end items-end'>
                                            <button
                                                type='submit'
                                                className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-[50%]'
                                            >Agregar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Crear_foto