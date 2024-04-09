
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { contexto } from '../UpdateProvider'
import Swal from 'sweetalert2'

const Editar_categoria = ({isOpen, onClose, idCategoria}) => {
    const { register, handleSubmit, setValue } = useForm()
    const [categoria, setCategoria] = useState(null)
    const {update, setUpdate} = useContext(contexto)

    const setForm = (data) => {

        register('id_categoria')
        register('categoria')

        setValue('id_categoria', idCategoria)
        setValue('categoria', data[0].categoria)
    }

    const readData = async () =>{
        const res = await fetch('/api/galeria/read_categoria',{
            method: 'POST',
            body: idCategoria
        })
        const resJSON = await res.json()
        setCategoria(JSON.parse(resJSON))
        setForm(JSON.parse(resJSON))
    }

    useEffect(() =>{
        readData()
    }, [])

    const handleOnSubmit = async (data) =>{
        const res = await fetch('/api/galeria/update_categoria', {
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
                title: "Categoría modificada!",
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

    if (!isOpen) return null
    return (
        <div className='h-full'>
                <div className='w-[40%] h-1/6 bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[300px]'>
                    <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                        <p className='font-bold pl-5'>Producto</p>
                        <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
                    </div>
                    <div className='h-full w-full flex justify-center'>
                        <div className='flex flex-col items-center gap-y-6 mt-3 mr-2'>
                            <p className='text-xl'>Nombre</p>
                        </div>
                        <div>
                            <div className='h-full flex flex-col items-start mt-3 mr-2'>
                                <form onSubmit={handleSubmit(handleOnSubmit)}>
                                    <input
                                        type='text'
                                        name='categoria'
                                        id='categoria'
                                        required={true}
                                        maxLength={45}
                                        defaultValue={categoria ? categoria[0].categoria:""}
                                        {...register('categoria', {
                                            required: true,
                                            maxLength: 45,
                                        })}
                                        className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                        placeholder='Nombre de categoría'
                                    />
                                    <div className='w-full flex justify-end items-end'>
                                        <button
                                            type='submit'
                                            className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-14'
                                        >Editar
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

export default Editar_categoria