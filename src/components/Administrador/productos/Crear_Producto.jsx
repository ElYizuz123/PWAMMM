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
const Crear_Producto = ({ isOpen, onClose, marcas }) => {
    const [productPhoto, setProductPhoto] = useState(null)
    const { register, handleSubmit, reset, setValue } = useForm();
    const fileInputRef = useRef(null)
    const {update, setUpdate} = useContext(contexto)
    const hexa = randomHexa()

    //Crear registro de foto
    useEffect(() => {
        register('foto')
        register('hexa')
    }, [register]);


    //Establece la foto en el input del file 
    const handleFileButton = () => {
        fileInputRef.current.click();
    }


    //Guarda el producto
    const handleOnSubmit = (async (data) => {
        console.log(data.hexa)
        if (productPhoto) {
            const form = new FormData()
            form.set('file', productPhoto)
            form.set('source', "productos")
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
                const res = await fetch('/api/producto/create_producto', {
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
                        title: "Producto añadido!",
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
                        setProductPhoto()
                        reset();
                    });
                }
                else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo salió mal!",
                    });
                }
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salió mal!",
                });
            }
        }
    })



    //if (!isOpen) return null;

    return (
        <div className='w-full h-[850px] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[500px]'>
            <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                <p className='font-bold pl-5'>Botella</p>
                <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
            </div>
            <div className='w-full h-full flex justify-between'>
                <div className='h-[90%] w-[40%] flex flex-col justify-center items-center'>
                    {productPhoto && (
                        <img src={URL.createObjectURL(productPhoto)} alt='Preview' className='w-48' />
                    )}
                    {productPhoto && (
                        <p className='text-sm'>{productPhoto.name}</p>
                    )}
                    <button
                        className='bg-gray-300 w-36 rounded-lg border-[1px] border-black text-sm mt-3'
                        onClick={handleFileButton}
                    >Seleccionar Archivo</button>
                    {!productPhoto && (
                        <p className='text-sm mt-1 text-red-700'>Es necesario agregar una foto</p>
                    )}
                </div>
                <div className='h-full w-[60%] flex justify-between'>
                    <div className='flex flex-col items-start gap-y-6 mt-4 mr-2'>
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
                                        setValue('foto', e.target.files[0].name.split(".")[0] + hexa + "." + e.target.files[0].name.split(".")[1])
                                        setValue('hexa', hexa)
                                    }}
                                />
                                <input
                                    type='text'
                                    name='nombre'
                                    id='campo_nombre'
                                    required={true}
                                    maxLength={30}
                                    {...register('nombre', {
                                        required: true,
                                        maxLength: 30,
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
                                    <option></option>
                                    {marcas && (
                                        marcas.map((marca) => (
                                            <option value={marca.id_marca} key={marca.id_marca}>{marca.nombre}</option>
                                        ))
                                    )}
                                </select>
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
                                    {...register('cantidad_alcohol', {
                                        maxLength: 5
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
                                    className='w-full h-60 border-2 border-black rounded-lg pl-1 mt-9 pt-1'
                                />
                                <div className='w-full flex justify-end items-end'>
                                    <button
                                        type='submit'
                                        className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-[1%]'
                                    >Agregar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Crear_Producto