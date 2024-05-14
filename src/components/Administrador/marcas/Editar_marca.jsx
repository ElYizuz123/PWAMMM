import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { contexto } from '../UpdateProvider';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Editar_marca = ({ isOpen, onClose, asociadas, idMarca }) => {
    const { register, handleSubmit, setValue } = useForm();
    const [marca, setMarca] = useState(null)
    const {update, setUpdate} = useContext(contexto)
    const [updated, setUpdated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    //Ingresar datos por default a la ventana de edición 
    const setForm = (data) =>{
        console.log(data)
        register('nombre'),
        register('asociada'),
        register('tipo'),
        register('id_marca'),

        setValue('id_marca', idMarca),
        setValue('nombre', data[0].nombre),
        setValue('asociada', data[0].asociada.id_asociada),
        setValue('tipo', data[0].tipo)
    }

    //Seleccionar por default el tipo de marca
    const opcionDefault = () => {
        if(marca&&!updated){
            document.getElementById("select_tipo").value = marca[0].tipo;
            document.getElementById("select_asociada").value = marca[0].asociada.id_asociada;
        }
        
    }

    //Actualizar los datos de la marca
    const handleOnSubmit = async (data) => {
        setIsLoading(true)
        const res = await fetch('/api/marcas/update_marca', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const resJSON = await res.json()
        console.log(resJSON)
        if (resJSON == "Actualizado") {
            let timerInterval;
            Swal.fire({
                title: "Marca actualizada!",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                confirmButtonText: "Ok",
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then(() => {
                const up= !update
                setUpdate(up)
                setUpdated(true)
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
        setIsLoading(false)
    }

    //Leer los datos especificos de la marca seleccionada
    const readData = async () =>{
        const res = await fetch('/api/marcas/read_marca', {
            method: 'POST',
            body: JSON.stringify(idMarca)
        })
        const resJSON = await res.json()
        setMarca(JSON.parse(resJSON))
        setForm(JSON.parse(resJSON))
        console.log(resJSON)
    }

    //Inicializar la lectura de los datos
    useEffect(() =>{
        readData()
    }, [])


    return (
        <div className='w-full h-full bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[350px]'>
            <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                <p className='font-bold pl-5'>Marca</p>
                <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
            </div>
            <div className='w-full h-full flex justify-center'>
                <div className='h-full w-full flex justify-between ml-5 mr-5'>
                    <div className='flex flex-col items-start gap-y-6 mt-4 mr-4'>
                        <p id='label_nombre' className='text-xl'>Nombre</p>
                        <p className='text-xl pt-2'>Tipo</p>
                        <p className='text-xl pt-5'>Asociada</p>
                    </div>
                    <div>
                        <div className='h-full flex flex-col items-start mt-5 mr-2'>
                            <form onSubmit={handleSubmit(handleOnSubmit)}>
                                <input
                                    type='text'
                                    name='nombre'
                                    id='campo_nombre'
                                    maxLength={30}
                                    required={true}
                                    defaultValue={marca ? marca[0].nombre:""}
                                    {...register('nombre', {
                                        required: true,
                                        maxLength: 30
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                    placeholder='Nombre de la marca'
                                />
                                <select
                                    name='tipo'
                                    id='select_tipo'
                                    required={true}
                                    {...register('tipo', {
                                        required: true
                                    })}
                                    className='w-full border-2 border-black rounded-lg pl-1 mt-5'
                                >
                                    <option></option>
                                    <option value={1}>Mezcal</option>
                                    <option value={2}>Acompañamiento</option>
                                </select>

                                <select
                                    name='asociada'
                                    required={true}
                                    id='select_asociada'
                                    {...register('asociada', {
                                        required: true
                                    })}
                                    className='w-full border-2 border-black rounded-lg pl-1 mt-6'
                                >
                                    {opcionDefault()}
                                    <option></option>
                                    {asociadas && asociadas.map((asociada) => (<option value={asociada.id_asociada} key={asociada.id_asociada}>
                                        {asociada.nombre}
                                    </option>))}

                                </select>
                                <div className='w-full flex justify-end items-end'>
                                    <button
                                        disabled={isLoading}
                                        type='submit'
                                        className='bg-[#98E47D] w-56 h-10 text-2xl font-bold rounded-xl mr-3 mt-5 mb-5'
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
    )
}

export default Editar_marca