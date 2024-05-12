import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { contexto } from '../UpdateProvider'
import Swal from 'sweetalert2'

const randomHexa = () => {
    const randomNumber = Math.floor(Math.random() * 65536);
    const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
    return hexadecimalValue
}

const UpdateUbicacion = ({ onClose, idUbicacion, marcas }) => {

    const { update, setUpdate } = useContext(contexto)
    const [qrImagen, setQrImagen] = useState(null)
    const [ubicacion, setUbicacion] = useState(null)
    const [defaultData, setDefaultData] = useState(false)
    const { register, handleSubmit, setValue } = useForm()
    const fileInputRef = useRef(null)
    const hexa = randomHexa()

    //Datos por default en la ventana de edición
    const setForm = (data) => {
        console.log(data)
        register('id_ubicacion')
        register('marca')
        register('mapa')
        register('ubicacion')
        register('telefono')
        register('qrImagen')
        register('hexa')


        setValue('id_ubicacion', data.id_ubicacion)
        setValue('marca', JSON.parse(data.json_marca).marca)
        setValue('mapa', JSON.parse(data.json_marca).mapa)
        setValue('ubicacion', JSON.parse(data.json_marca).ubicacion)
        setValue('telefono', JSON.parse(data.json_marca).telefono)
        setValue('qrImagen', JSON.parse(data.json_marca).qrImagen)
    }

    //Ingresar la qrImagen al input del form
    const handleFileButton = () => {
        fileInputRef.current.click();
    }

    //Ingresar ubicación
    const opcionDefault = () => {
        if (producto) {
            document.getElementById("select_marca").value = ubicacion.id_marca;
            setDefaultData(true)
        }

    }

    //Modificar imagen
    const handleOnSubmit = async (data) => {
        if (qrImagen) {
            const form = new FormData()
            form.set('file', qrImagen)
            form.set('source', "qrUbicaciones")
            form.set('nombre', ubicacion.qrImagen)
            form.set('modifier', data.hexa)
            //Registrar qrImagen en el servidor
            const qrImagenRes = await fetch('/api/update_image', {
                method: 'POST',
                body: form
            })
            const qrImagenResJSON = await qrImagenRes.json()
            console.log("La imagen si cambia")
            console.log(data)
            //Registrar producto en la DB
            if (qrImagenResJSON == "Archivo subido correctamente") {
                const res = await fetch('/api/ubicaciones/update_ubicacion', {
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
                        title: "ubicacion actualizado!",
                        icon: "success",
                        timer: 2000,
                        timerProgressBar: true,
                        confirmButtonText: "Ok",
                    })
                    const up = !update
                    setUpdate(up)
                }
                else {
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
        //No se cambio la qrImagengrafía
        else {
            console.log("La imagen no cambia")
            console.log(data)
            const res = await fetch('/api/ubicaciones/update_ubicacion', {
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
                    title: "ubicacion actualizado!",
                    icon: "success",
                    timer: 2000,
                    timerProgressBar: true,
                    confirmButtonText: "Ok",
                })
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salió mal!",
                });
            }
        }
    }



    //Leer datos de las ubicaciones
    const readData = async () => {
        const res = await fetch('/api/ubicaciones/read_ubicacion', {
            method: 'POST',
            body: idUbicacion
        })
        const resJSON = await res.json()
        setUbicacion(JSON.parse(resJSON.json_marca))
        setForm(resJSON)
    }

    //Inicializar lectura de datos
    useEffect(() => {
        readData()
    }, [])



    return (
        <div className='w-full h-[350px] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[400px]'>
            <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                <p className='font-bold pl-5'>ubicacion</p>
                <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
            </div>
            <div className='w-full h-full flex justify-between'>
                <div className='h-[90%] w-[40%] flex flex-col justify-center items-center'>
                    {/* Visualizador de imagen */}
                    {qrImagen && (
                        <Image width={400} height={400} src={URL.createObjectURL(qrImagen)} alt='Preview' className='object-contain w-48 h-56' />
                    )}
                    {qrImagen && (
                        <p className='text-sm'>{qrImagen.name}</p>
                    )}
                    {/* Visualizador de imagen por defecto */}
                    {!qrImagen && (<Image width={400} height={400} src={`/qrUbicaciones/${ubicacion ? ubicacion.qrImagen : ""}`} alt='Preview' className='object-contain w-48 h-56' />)}
                    {!qrImagen && (
                        <p className='text-sm'>{ubicacion ? ubicacion.qrImagen : ""}</p>
                    )}
                    <button
                        className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'
                        onClick={handleFileButton}
                    >Seleccionar Archivo</button>
                </div>
                <div className='h-full w-[60%] flex justify-between'>
                    <div className='flex flex-col items-start gap-y-6 mt-4 mr-2'>
                        <p className='text-xl mt-2'>Marca</p>
                        <p className='text-xl mt-3'>Mapa</p>
                        <p className='text-xl mt-2'>Ubicación</p>
                        <p className='text-xl mt-2'>Teléfono</p>
                    </div>
                    <div>
                        <div className='h-full flex flex-col items-start mt-5 mr-2'>
                            <form onSubmit={handleSubmit(handleOnSubmit)}>
                                <input
                                    type='file'
                                    name='qrImagen'
                                    id='fotoSelecter'
                                    className='hidden'
                                    ref={fileInputRef}
                                    onChange={(e) => {
                                        setQrImagen(e.target.files[0])
                                        setValue('qrImagen', e.target.files[0] ? e.target.files[0].name.split(".")[0] + hexa + "." + e.target.files[0].name.split(".")[1] : "")
                                        setValue('hexa', hexa)
                                    }}
                                />
                                <select
                                    name='marca'
                                    className='w-full border-2 border-black rounded-lg pl-1'
                                    id="select_marca"
                                    required={true}
                                    
                                    {...register('marca', {
                                        required: true
                                    })}
                                >   {defaultData ? opcionDefault() : ""}
                                    <option></option>
                                    {marcas && (
                                        marcas.map((marca) => (
                                            <option value={marca.nombre} key={marca.id_marca}>{marca.nombre}</option>
                                        ))
                                    )}
                                </select>
                                <input
                                    type='text'
                                    name='mapa'
                                    required={true}
                                    maxLength={500}
                                    {...register('mapa', {
                                        required: true,
                                        maxLength: 500
                                    })}
                                    className='w-full h-10 border-2 border-black rounded-lg pl-1 mt-5'
                                    placeholder='Link del mapa'
                                />
                                <input
                                    type='text'
                                    name='ubicacion'
                                    required={true}
                                    maxLength={45}
                                    {...register('ubicacion', {
                                        required: true,
                                        maxLength: 300
                                    })}
                                    className='w-full h-10 border-2 border-black rounded-lg pl-1 mt-5'
                                    placeholder='Ubicación'
                                />
                                <input
                                    type='text'
                                    name='telefono'
                                    required={true}
                                    maxLength={10}
                                    {...register('telefono', {
                                        required: true,
                                        maxLength: 10
                                    })}
                                    className='w-full h-10 border-2 border-black rounded-lg pl-1 mt-5'
                                    placeholder='Teléfono'
                                />
                                <div className='w-full flex justify-end items-end'>
                                    <button
                                        type='submit'
                                        className='bg-[#98E47D] w-56 h-10 text-2xl font-bold rounded-xl mr-3 mt-6'
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

export default UpdateUbicacion