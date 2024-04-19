import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { contexto } from '../UpdateProvider'
import Swal from 'sweetalert2'

const randomHexa = () =>{
    const randomNumber = Math.floor(Math.random() * 65536);
    const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
    return hexadecimalValue
}

const Update_Asociada = ({onClose, isOpen, idAsociada}) => {
    
    const {update,setUpdate} = useContext(contexto)
    const [asociadaPhoto, setAsociadaPhoto] = useState(null)
    const [asociada, setAsociada] = useState(null)
    const { register, handleSubmit, setValue } = useForm()
    const fileInputRef = useRef(null)
    const hexa = randomHexa()

    const setForm = (data) => {
        console.log(data)
            register('id_asociada')
            register('nombre')
            register('historia')
            register('foto')
            register('hexa')

            setValue('foto', data[0].foto)
            setValue('id_asociada', idAsociada)
            setValue('nombre', data[0].nombre)
            setValue('historia', data[0].historia)
    }

    const handleFileButton = () => {
        fileInputRef.current.click();
    }

    const handleOnSubmit = async (data) =>{
        if (asociadaPhoto) {
            const form = new FormData()
            form.set('file', asociadaPhoto)
            form.set('source', "mezcaleras")
            form.set('nombre', asociada[0].foto)
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
                const res = await fetch('/api/asociadas/update_asociada', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'aplication/json'
                    }
                })
                const resJSON = await res.json()
                console.log(resJSON)
                if (resJSON == "Registrada") {
                    Swal.fire({
                        title: "Asociada actualizado!",
                        icon: "success",
                        timer: 2000,
                        timerProgressBar: true,
                        confirmButtonText: "Ok",
                    })
                    const up = !update
                    setUpdate(up)
                }
                else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo salió mal!",
                    })
                    const up = !update
                    setUpdate(up)
                }
            }
        }
        //No se cambio la fotografía
        else {
            const res = await fetch('/api/asociadas/update_asociada', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'aplication/json'
                }
            })
            const resJSON = await res.json()
            console.log(resJSON)
            if (resJSON == "Registrada") {
                const up = !update
                setUpdate(up)
                Swal.fire({
                    title: "Asociada actualizado!",
                    icon: "success",
                    timer: 2000,
                    timerProgressBar: true,
                    confirmButtonText: "Ok",
                })
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salió mal!",
                });
            }
        }
    }

    

    const readData = async () =>{
        const res = await fetch('/api/asociadas/read_asociada',{
            method:'POST',
            body:idAsociada
        })
        const resJSON = await res.json()
        setAsociada(JSON.parse(resJSON))
        setForm(JSON.parse(resJSON))
    }

    useEffect(() => {
        readData()
    }, [])



    return (
        <div className='w-full h-[430px] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[400px]'>
            <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                <p className='font-bold pl-5'>Asociada</p>
                <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
            </div>
            <div className='w-full h-full flex justify-between'>
                <div className='h-[90%] w-[40%] flex flex-col justify-center items-center'>
                    {asociadaPhoto && (
                        <Image width={400} height={400} src={URL.createObjectURL(asociadaPhoto)} alt='Preview' className='w-64' />
                    )}
                    {asociadaPhoto && (
                        <p className='text-sm'>{asociadaPhoto.name}</p>
                    )}
                    {!asociadaPhoto && (<Image layout='restrictive' width={400} height={400} src={`/mezcaleras/${asociada ? asociada[0].foto : ""}`} alt='Preview' className='w-64' />)}
                    {!asociadaPhoto && (
                        <p className='text-sm'>{asociada ? asociada[0].foto : ""}</p>
                    )}
                    <button
                        className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'
                        onClick={handleFileButton}
                    >Seleccionar Archivo</button>
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
                                    defaultValue={asociada ? asociada[0].nombre:""}
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
                                    maxLength={300}
                                    defaultValue={asociada ? asociada[0].historia:""}
                                    {...register('historia', {
                                        required: true,
                                        maxLength: 300
                                    })}
                                    className='w-full h-60 border-2 border-black rounded-lg pl-1 mt-5'
                                    placeholder='Descripción'
                                />
                                <div className='w-full flex justify-end items-end'>
                                    <button
                                        type='submit'
                                        className='bg-[#98E47D] w-48 h-10 text-2xl font-bold rounded-xl mr-3 mt-[3%]'
                                    >Guardar cambios
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Update_Asociada