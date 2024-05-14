import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { contexto } from '../UpdateProvider';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Crear_marca = ({ isOpen, onClose, asociadas }) => {
    const { register, handleSubmit, reset } = useForm();
    const {update, setUpdate} = useContext(contexto)
    const [isLoading, setIsLoading] = useState(false)

    //Crear una nueva marca
    const handleOnSubmit = async (data) => {
        setIsLoading(true)
        const res = await fetch('/api/marcas/create_marca', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const resJSON = await res.json()
        console.log(resJSON)
        if (resJSON == "Marca registrada") {
            let timerInterval;
            Swal.fire({
                title: "Marca añadida!",
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
                reset()

            }); 
        }
        else if(resJSON == "Marca ya existente"){
            Swal.fire({
                icon: "warning",
                title: "Marca ya registrada",
                text: "La marca que esta intentando registrar ya existe, intente con otra",
              })
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal!",
              })
        }
        setIsLoading(false)
    }


    return (
        <div className='w-full bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-64'>
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
                                    {...register('nombre', {
                                        required: true,
                                        maxLength: 30
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                    placeholder='Nombre de la marca'
                                />
                                <select
                                    name='tipo'
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
                                    {...register('asociada', {
                                        required: true
                                    })}
                                    className='w-full border-2 border-black rounded-lg pl-1 mt-6'
                                >
                                    <option></option>
                                    {asociadas && asociadas.map((asociada) => (<option value={asociada.id_asociada} key={asociada.id_asociada}>
                                        {asociada.nombre}
                                    </option>))}

                                </select>
                                <div className='w-full flex justify-end items-end'>
                                    <button
                                        disabled={isLoading}
                                        type='submit'
                                        className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-5 mb-5'
                                    >
                                        {!isLoading &&
                                            "Agregar"
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

export default Crear_marca