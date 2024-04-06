import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { contexto } from '../UpdateProvider';
import Swal from 'sweetalert2';

const randomHexa = () => {
    const randomNumber = Math.floor(Math.random() * 65536);
    const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
    return hexadecimalValue
}

const Editar_foto = ({ isOpen, onClose, idFoto, categorias }) => {
    const { update, setUpdate } = useContext(contexto)
    const [eventoPhoto, setEventoPhoto] = useState(null)
    const [foto, setFoto] = useState(null)
    const { register, handleSubmit, reset, setValue } = useForm();
    const fileInputRef = useRef(null)
    const hexa = randomHexa()

    const setForm = (data) => {

        register('id_foto')
        register('foto')
        register('descripcion')
        register('categoria')

        setValue('id_foto', idFoto)
        setValue('foto', data[0].foto)
        setValue('descripcion', data[0].descripcion)
        setValue('categoria', data[0].fk_id_categoria)
    }


    useEffect(() => {
        register('foto');
    }, [register]);



    useEffect(() => {
        readData()
    }, [])


    const readData = async () => {
        const res = await fetch('/api/galeria/read_foto',{
            method: 'POST',
            body: idFoto
        })
        const resJSON = await res.json()
        setFoto(JSON.parse(resJSON))
        setForm(JSON.parse(resJSON))
    }

    const handleOnSubmit = async (data) => {
        console.log(data)
        if (eventoPhoto) {
            const form = new FormData()
            form.set('file', eventoPhoto)
            form.set('source', "galeria")
            form.set('nombre', foto[0].foto)
            form.set('modifier', data.hexa)
            //Registrar foto en el servidor
            const fotoRes = await fetch('/api/update_image', {
                method: 'POST',
                body: form
            })
            const fotoResJSON = await fotoRes.json()
            console.log(fotoResJSON)

            //Registrar producto en la DB
            if (fotoResJSON == "Archivo subido correctamente") {
                const res = await fetch('/api/galeria/update_foto', {
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
                        title: "Foto modificada!",
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
                        readData()
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
        else{
            const res = await fetch('/api/galeria/update_foto', {
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
                    title: "Foto modificada!",
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
                    readData()
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
    }

    const handleFileButton = () => {
        fileInputRef.current.click();
    }

    const opcionDefault = () => {
        if (foto) {
            console.log(foto[0].fk_id_categoria)
            document.getElementById("categoria").value = foto[0].fk_id_categoria;
        }

    }


    if (!isOpen) return null;
    return (
        <div className='h-full'>
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
                        {!eventoPhoto && (<Image layout='restrictive' width={400} height={400} src={`/galeria/${foto ? foto[0].foto : ""}`} alt='Preview' className='w-64' />)}
                        {!eventoPhoto && (
                            <p className='text-sm'>{foto ? foto[0].foto : ""}</p>
                        )}
                        <button
                            className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'
                            onClick={handleFileButton}
                        >Seleccionar Archivo</button>
                       
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
                                        defaultValue={foto ? foto[0].descripcion : ""}
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
                                        {opcionDefault()}
                                        <option></option>
                                        {categorias && categorias.map((categoria) => (
                                            <option key={categoria.id_categoria} value={categoria.id_categoria}>
                                                {categoria.categoria}
                                            </option>
                                        ))}
                                        
                                    </select>
                                    
                                    <div className='w-full flex justify-end items-end'>
                                        <button
                                            type='submit'
                                            className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-[50%]'
                                        >Editar
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

export default Editar_foto