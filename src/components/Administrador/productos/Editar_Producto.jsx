"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { contexto } from '../UpdateProvider';

const randomHexa = () => {
    const randomNumber = Math.floor(Math.random() * 65536);
    const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
    return hexadecimalValue
}

const Editar_Producto = ({ isOpen, onClose, marcas, nProductos, idProducto }) => {
    const [productPhoto, setProductPhoto] = useState(null)
    const [defaultData, setDefaultData] = useState(false)
    const [producto, setProducto] = useState(null)
    const { register, handleSubmit, setValue } = useForm();
    const fileInputRef = useRef(null)
    const {udpate, setUpdate} = useContext(contexto)
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

        setValue('foto', data[0].foto)
        setValue('tipo_agave', data[0].tipo_agave)
        setValue('cantidad_alcohol', data[0].cantidad_alcohol)
        setValue('id_producto', idProducto)
        setValue('nombre', data[0].nombre)
        setValue('ml', data[0].ml)
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
        const res = await fetch('/api/producto/read_producto_admin', {
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
        //Cambio la fotografía
        if (productPhoto) {
            const form = new FormData()
            form.set('file', productPhoto)
            form.set('source', "productos")
            form.set('nombre', producto[0].foto)
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
                const res = await fetch('/api/producto/update_producto', {
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
                    const up = !udpate
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
            const res = await fetch('/api/producto/update_producto', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'aplication/json'
                }
            })
            const resJSON = await res.json()
            console.log(resJSON)
            if (resJSON == "Registrado") {
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
                const up = !udpate
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

    if (!isOpen) return null;
    return (
        <div className='w-full h-[780px] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[500px]'>
            <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                <p className='font-bold pl-5'>Editar producto</p>
                <button className='mr-4 font-bold eye-icon' onClick={handleClose}>X</button>
            </div>
            <div className='w-full h-full flex justify-between'>
                <div className='h-[90%] w-[40%] flex flex-col justify-center items-center'>
                    {productPhoto && (
                        <img src={URL.createObjectURL(productPhoto)} alt='Preview' className='w-64' />
                    )}
                    {productPhoto && (
                        <p className='text-sm'>{productPhoto.name}</p>
                    )}
                    {!productPhoto && (<img src={`/productos/${producto ? producto[0].foto : ""}`} alt='Preview' className='w-64' />)}
                    {!productPhoto && (
                        <p className='text-sm'>{producto ? producto[0].foto : ""}</p>
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
                        <p className='text-xl'>Cantidad</p>
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
                                    defaultValue={producto ? producto[0].nombre : ""}
                                    required={true}
                                    maxLength={45}
                                    id='campo_nombre'
                                    {...register('nombre', {
                                        required: true,
                                        maxLength: 45
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                    placeholder='Nombre del mezcal'
                                />
                                <input
                                    type='number'
                                    name='ml'
                                    defaultValue={producto ? producto[0].ml : ""}
                                    required={true}
                                    maxLength={10}
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
                                    maxLength={10}
                                    defaultValue={producto ? producto[0].precio : ""}
                                    {...register('precio', {
                                        required: true,
                                        maxLength: 10
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
                                    placeholder='Precio'
                                />
                                <select
                                    name='marca'
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
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
                                    maxLength={10}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
                                    defaultValue={producto ? producto[0].cantidad : ""}
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
                                    defaultValue={producto ? producto[0].mercadoLibre : ""}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
                                    placeholder='Link a mercado libre'
                                />
                                <input
                                    type='text'
                                    name='tipo_agave'
                                    maxLength={255}
                                    required={true}
                                    defaultValue={producto ? producto[0].tipo_agave : ""}
                                    {...register('tipo_agave', {
                                        maxLength: 255
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
                                    placeholder='Tipo de agave'
                                />
                                <input 
                                    type='number'
                                    name='cantidad_alcohol'
                                    maxLength={255}
                                    required={true}
                                    defaultValue={producto ? producto[0].cantidad_alcohol : ""}
                                    {...register('cantidad_alcohol', {
                                        maxLength: 255
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-9'
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
                                    defaultValue={producto ? producto[0].descripcion : ""}
                                    className='w-full h-60 border-2 border-black rounded-lg pl-1 mt-6 pt-1'
                                />
                                <div className='w-full flex justify-end items-end'>
                                    <button
                                        type='submit'
                                        className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-[1%]'
                                    >Editar
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