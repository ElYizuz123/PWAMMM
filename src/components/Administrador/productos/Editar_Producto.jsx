"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { contexto } from '../UpdateProvider';
import Image from 'next/image';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const randomHexa = () => {
    const randomNumber = Math.floor(Math.random() * 65536);
    const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
    return hexadecimalValue
}

const Editar_Producto = ({ onClose, marcas, idProducto }) => {
    const [productPhoto, setProductPhoto] = useState(null)
    const [defaultData, setDefaultData] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [producto, setProducto] = useState(null)
    const { register, handleSubmit, setValue } = useForm();
    const fileInputRef = useRef(null)
    const {update, setUpdate} = useContext(contexto)
    const hexa = randomHexa()

    //Default data
    const setForm = (data) => {
        console.log(data)
        register('nombre')
        register('ml')
        register('precio')
        register('marca')
        register('cantidad')
        register('mercado_lib')
        register('descripcion')
        register('id_producto')
        register('tipo_agave')
        register('cantidad_alcohol')
        register('foto')
        register('hexa')
        register('id_botella')
        register('fotoId')

        setValue('foto', data[0].fotoUri)
        setValue('fotoId', data[0].fotoId)
        setValue('id_botella', data[0].botella[0].id_botella)
        setValue('tipo_agave', data[0].botella[0].tipo_agave)
        setValue('cantidad_alcohol', data[0].botella[0].cantidad_alcohol)
        setValue('id_producto', idProducto)
        setValue('nombre', data[0].nombre)
        setValue('ml', data[0].botella[0].ml)
        setValue('precio', data[0].precio)
        setValue('marca', data[0].marca.id_marca)
        setValue('cantidad', data[0].cantidad)
        setValue('mercado_lib', data[0].mercadoLibre)
        setValue('descripcion', data[0].descripcion)
    }


    //Set default data
    const opcionDefault = () => {
        if (producto) {
            document.getElementById("select_marca").value = producto[0].marca.id_marca;
            setDefaultData(true)
        }

    }

    //Leer producto 
    useEffect(() => {
        readProduct(idProducto);
    }, []);

    //Seleccionar imagen
    const handleFileButton = () => {
        fileInputRef.current.click();
    }


    //Lectura de producto
    const readProduct = (async (data) => {
        const res = await fetch('/api/administrador/producto/read_producto_admin', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
        const resJSON = await res.json()
        setProducto(JSON.parse(resJSON))
        setForm(JSON.parse(resJSON))

    })


    //Realizar cambio 
    const handleOnSubmit = (async (data) => {
        setIsLoading(true)
        //Cambio la fotografía
        if (productPhoto) {
            const form = new FormData()
            form.set('file', productPhoto)
            form.set('source', "productos")
            form.set('nombre', producto[0].fotoId)
            form.set('modifier', data.hexa)
            //Registrar foto en el servidor
            const fotoRes = await fetch('/api/administrador/update_image', {
                method: 'POST',
                body: form
            })
            const fotoResJSON = await fotoRes.json()
            console.log(fotoResJSON)

            //Registrar producto en la DB
            if (fotoResJSON !="Error") {
                data["foto"] = fotoResJSON.picUri
                data["fotoId"] = fotoResJSON.picId
                const res = await fetch('/api/administrador/producto/update_producto', {
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
                        title: "Producto actualizado!",
                        icon: "success",
                        timer: 2000,
                        timerProgressBar: true,
                        confirmButtonText: "Ok",
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    })
                    const up = !update
                    setUpdate(up)
                    onClose()
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo salió mal!",
                    })
                }
            }
        }
        //No se cambio la fotografía
        else {
            const res = await fetch('/api/administrador/producto/update_producto', {
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
                    title: "Producto actualizado!",
                    icon: "success",
                    timer: 2000,
                    timerProgressBar: true,
                    confirmButtonText: "Ok",
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                })
                const up = !update
                setUpdate(up)
                onClose()
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salió mal!",
                });
            }
        }
        setIsLoading(false)
    })

    //Cerrado de la ventana y actualización 
    const handleClose = () => {
        onClose()
    }

    return (
        <div className='w-full h-[850px] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[550px]'>
            <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                <p className='font-bold pl-5'>Botella</p>
                <button className='mr-4 font-bold eye-icon' onClick={handleClose}>X</button>
            </div>
            <div className='w-full h-full flex justify-between'>
                <div className='h-[90%] w-[40%] flex flex-col justify-center items-center'>
                    {productPhoto && (
                        <Image height={400} width={400} src={URL.createObjectURL(productPhoto)} alt='Preview' className='object-contain w-48 h-56' />
                    )}
                    {productPhoto && (
                        <p className='text-sm'>{productPhoto.name}</p>
                    )}
                    {!productPhoto && (<Image height={400} width={400} src={producto ? producto[0].fotoUri : ""} alt='Preview' className='object-contain w-48 h-56' />)}
                    {!productPhoto && (
                        <p className='text-sm'>{producto ? producto[0].fotoId : ""}</p>
                    )}
                    <button
                        className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'
                        onClick={handleFileButton}
                    >Seleccionar Archivo</button>
                </div>
                <div className='h-full w-[60%] flex justify-between'>
                    <div className='flex flex-col items-start gap-y-6 mt-4 mr-2 w-[700px]'>
                        <p className='text-xl'>Nombre</p>
                        <p className='text-xl'>ML</p>
                        <p className='text-xl'>Precio</p>
                        <p className='text-xl'>Marca</p>
                        <p className='text-xl pt-3'>Cantidad</p>
                        <p className='text-xl'>Mercado libre</p>
                        <p className='text-xl'>Tipo de agave</p>
                        <p className='text-xl'>Cantidad de alcohol</p>
                        <p className='text-xl'>Descripción</p>
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
                                        setProductPhoto(e.target.files[0])
                                        setValue('foto', e.target.files[0] ? e.target.files[0].name.split(".")[0] + hexa + "." + e.target.files[0].name.split(".")[1] : "")
                                        setValue('hexa', hexa)
                                    }}
                                />
                                <input
                                    type='text'
                                    name='nombre'  
                                    required={true}
                                    maxLength={30}
                                    id='campo_nombre'
                                    {...register('nombre', {
                                        required: true,
                                        maxLength: 30
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                    placeholder='Nombre del mezcal'
                                />
                                <input
                                    type='number'
                                    name='ml' 
                                    required={true}
                                    max={5000}
                                    min={0}
                                    {...register('ml', {
                                        required: true,
                                        maxLength: 10
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-5'
                                    placeholder='Mililitros'
                                />
                                <input
                                    type='number'
                                    name='precio'
                                    required={true}
                                    max={5000}
                                    min={0}                                   
                                    {...register('precio', {
                                        required: true,
                                        maxLength: 10
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
                                    placeholder='Precio'
                                />
                                <select
                                    name='marca'
                                    className='w-full border-2 border-black rounded-lg pl-1 mt-6'
                                    id="select_marca"
                                    required={true}
                                    {...register('marca', {
                                        required: true
                                    })}
                                >
                                    {defaultData ? opcionDefault() : ""}
                                    {marcas && (
                                        marcas.map((marca) => (
                                            <option value={marca.id_marca} key={marca.id_marca}>{marca.nombre}</option>
                                        ))
                                    )}

                                </select>
                                {producto ? console.log(producto[0].marca) : ""}
                                <input
                                    type='number'
                                    name='cantidad'
                                    placeholder='Cantidad de producto'
                                    required={true}
                                    max={5000}
                                    min={0}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
                                    {...register('cantidad', {
                                        required: true
                                    })}
                                />
                                <input
                                    type='text'
                                    name='mercado_lib'
                                    maxLength={255}
                                    {...register('mercado_lib', {
                                        maxLength: 255
                                    })}
                                    
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-7'
                                    placeholder='Link a mercado libre'
                                />
                                <input
                                    type='text'
                                    name='tipo_agave'
                                    maxLength={20}
                                    required={true}
                                    
                                    {...register('tipo_agave', {
                                        maxLength: 20
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-14'
                                    placeholder='Tipo de agave'
                                />
                                <input 
                                    type='number'
                                    name='cantidad_alcohol'
                                    max={70}
                                    min={0}
                                    required={true}
                                    
                                    {...register('cantidad_alcohol', {
                                        maxLength: 255
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-12'
                                    placeholder='Cantidad de alcohol'
                                />
                                <textarea
                                    type='text'
                                    name='descripcion'
                                    required={true}
                                    maxLength={3000}
                                    {...register('descripcion', {
                                        required: true,
                                        maxLength: 3000
                                    })}
                                    
                                    className='w-full h-60 border-2 border-black rounded-lg pl-1 mt-8 pt-1'
                                />
                                <div className='w-full flex justify-end items-end'>
                                    <button
                                        disabled={isLoading}
                                        type='submit'
                                        className='bg-[#98E47D] w-48 h-10 text-2xl font-bold rounded-xl mr-3 mt-[1%] hover:bg-[#a6cc97]'
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
    );
}

export default Editar_Producto