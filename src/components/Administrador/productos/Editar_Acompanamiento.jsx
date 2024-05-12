"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { contexto } from '../UpdateProvider';
import Image from 'next/image';

const randomHexa = () => {
    const randomNumber = Math.floor(Math.random() * 65536);
    const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
    return hexadecimalValue
}

const Editar_Acompanamiento = ({ isOpen, onClose, marcas, nProductos, idProducto }) => {
    const [productPhoto, setProductPhoto] = useState(null)
    const [defaultData, setDefaultData] = useState(false)
    const [producto, setProducto] = useState(null)
    const { register, handleSubmit, setValue } = useForm();
    const fileInputRef = useRef(null)
    const {update, setUpdate} = useContext(contexto)
    const hexa = randomHexa()

    //Default data
    const setForm = (data) => {
        console.log(data)
        register('nombre')
        register('gr')
        register('precio')
        register('marca')
        register('cantidad')
        register('mercado_lib')
        register('descripcion')
        register('id_producto')
        register('foto')
        register('hexa')
        register('id_acompanamiento')

        setValue('foto', data.fotoId)
        setValue('id_acompanamiento', data.acompanamiento[0].id_acompanamiento)
        setValue('id_producto', idProducto)
        setValue('nombre', data.nombre)
        setValue('gr', data.acompanamiento[0].gr)
        setValue('precio', data.precio)
        setValue('marca', data.marca.id_marca)
        setValue('cantidad', data.cantidad)
        setValue('mercado_lib', data.mercadoLibre)
        setValue('descripcion', data.descripcion)
    }


    //Set default data
    const opcionDefault = () => {
        if (producto) {
            document.getElementById("select_marca").value = producto.marca.id_marca;
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
        const res = await fetch('/api/producto/read_acompanamiento', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
        const resJSON = await res.json()
        setProducto(resJSON)
        setForm(resJSON)

    })


    //Realizar cambio 
    const handleOnSubmit = (async (data) => {
        //Cambio la fotografía
        if (productPhoto) {
            const form = new FormData()
            form.set('file', productPhoto)
            form.set('source', "productos")
            form.set('nombre', producto.fotoId)
            form.set('modifier', data.hexa)
            //Registrar foto en el servidor
            const fotoRes = await fetch('/api/update_image', {
                method: 'POST',
                body: form
            })
            const fotoResJSON = await fotoRes.json()
            console.log(fotoResJSON)

            //Registrar producto en la DB
            if (fotoResJSON != "Error") {
                data["foto"] = fotoResJSON.picUri
                data["fotoId"] = fotoResJSON.picId
                const res = await fetch('/api/producto/update_acompanamiento', {
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
            const res = await fetch('/api/producto/update_acompanamiento', {
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
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salió mal!",
                });
            }
        }
    })

    //Cerrado de la ventana y actualización 
    const handleClose = () => {
        onClose()
    }

    return (
        <div className='w-full h-[690px] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[550px]'>
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
                    {/* Imagen por default */}
                    {!productPhoto && (<Image height={400} width={400} src={producto ? producto.fotoUri : ""} alt='Preview' className='object-contain w-48 h-56' />)}
                    {!productPhoto && (
                        <p className='text-sm'>{producto ? producto.fotoId : ""}</p>
                    )}
                    <button
                        className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'
                        onClick={handleFileButton}
                    >Seleccionar Archivo</button>
                </div>
                <div className='h-full w-[60%] flex justify-between'>
                    <div className='flex flex-col items-start gap-y-6 mt-4 mr-2 w-[700px]'>
                        <p className='text-xl'>Nombre</p>
                        <p className='text-xl'>GR</p>
                        <p className='text-xl'>Precio</p>
                        <p className='text-xl'>Marca</p>
                        <p className='text-xl pt-3'>Cantidad</p>
                        <p className='text-xl'>Mercado libre</p>
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
                                    defaultValue={producto ? producto.nombre : ""}
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
                                    name='gr'
                                    defaultValue={producto ? producto.gr : ""}
                                    required={true}
                                    max={5000}
                                    min={0}
                                    {...register('gr', {
                                        required: true,
                                        maxLength: 10
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-5'
                                    placeholder='Gramos'
                                />
                                <input
                                    type='number'
                                    name='precio'
                                    required={true}
                                    max={5000}
                                    min={0}
                                    defaultValue={producto ? producto.precio : ""}
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
                                {producto ? console.log(producto.marca) : ""}
                                <input
                                    type='number'
                                    name='cantidad'
                                    placeholder='Cantidad de producto'
                                    required={true}
                                    max={5000}
                                    min={0}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
                                    defaultValue={producto ? producto.cantidad : ""}
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
                                    defaultValue={producto ? producto.mercadoLibre : ""}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-7'
                                    placeholder='Link a mercado libre'
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
                                    defaultValue={producto ? producto.descripcion : ""}
                                    className='w-full h-60 border-2 border-black rounded-lg pl-1 mt-8 pt-1'
                                />
                                <div className='w-full flex justify-end items-end'>
                                    <button
                                        type='submit'
                                        className='bg-[#98E47D] w-48 h-10 text-2xl font-bold rounded-xl mr-3 mt-[1%]'
                                    >Guardar cambios
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

export default Editar_Acompanamiento