import React from 'react'
import { useForm } from 'react-hook-form';

const Crear_marca = ({ isOpen, onClose, asociadas }) => {
    const { register, handleSubmit, reset} = useForm();

    const handleOnSubmit = async (data) =>{
        const res = await fetch('/api/marcas/create_marca',{
            method: 'POST',
            body: JSON.stringify(data)
        })
        const resJSON = await res.json()
        console.log(resJSON)
        if(resJSON=="Marca registrada"){
            reset()
        }
    }

    

    if (!isOpen) return null;
    return (
        <div className='w-full h-full bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073]'>
            <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                <p className='font-bold pl-5'>Producto</p>
                <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
            </div>
            <div className='w-full h-full flex justify-center'>
                <div className='h-full w-full flex justify-between ml-5 mr-5'>
                    <div className='flex flex-col items-start gap-y-6 mt-4 mr-4'>
                        <p className='text-xl'>Nombre</p>
                        <p className='text-xl'>Tipo</p>
                        <p className='text-xl'>Asociada</p>
                    </div>
                    <div>
                        <div className='h-full flex flex-col items-start mt-5 mr-2'>
                            <form onSubmit={handleSubmit(handleOnSubmit)}>
                                <input
                                    type='text'
                                    name='nombre'
                                    id='campo_nombre'
                                    {...register('nombre', {
                                        required: true,
                                        maxLength: 45
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                    placeholder='Nombre de la marca'
                                />
                                <select 
                                    name='tipo'
                                    {...register('tipo', {
                                        required: true
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-5'
                                    >
                                    <option></option>
                                    <option value={0}>Mezcal</option>
                                    <option value={1}>Acompañamiento</option>
                                </select>
                                    
                                <select
                                    name='asociada'
                                    {...register('asociada', {
                                        required: true
                                    })}
                                    className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-6'
                                >
                                    <option></option>
                                    {asociadas && asociadas.map((asociada) => (<option value={asociada.id_asociada} key={asociada.id_asociada}>
                                        {asociada.nombre}
                                    </option>))}

                                </select>
                                <div className='w-full flex justify-end items-end'>
                                    <button
                                        type='submit'
                                        className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-5 mb-5'
                                    >Agregar
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