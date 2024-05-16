import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Swal from 'sweetalert2';

const Editar_pregunta = ({ onClose, isOpen, idPregunta }) => {
    const { register, handleSubmit, setValue } = useForm()
    const [pregunta, setPregunta] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    //Ingresar la información por defecto
    const setForm = (data) => {

        register('id_pregunta_frecuente'),
            register('pregunta'),
            register('respuesta'),

            setValue('id_pregunta_frecuente', idPregunta),
            setValue('pregunta', data[0].pregunta),
            setValue('respuesta', data[0].respuesta)
    }

    //Actualizar la pregunta
    const handleOnSubmit = async (data) => {

        setIsLoading(true)
        const res = await fetch('/api/administrador/preguntas/update_pregunta', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const resJSON = await res.json()
        if (resJSON == "Registrada") {
            let timerInterval;
            Swal.fire({
                title: "Pregunta actualizada!",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                confirmButtonText: "Ok",
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then(() => {
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

    //Leer las preguntas de la base de datos
    const readData = async () => {
        const res = await fetch('/api/administrador/preguntas/read_pregunta', {
            method: 'POST',
            body: JSON.stringify(idPregunta)
        })
        const resJSON = await res.json()
        setPregunta(JSON.parse(resJSON))
        setForm(JSON.parse(resJSON))
    }


    //Inicializar lecturas 
    useEffect(() => {
        readData()
    }, [])
    return (
        <div className='flex justify-center items-center'>
            <div className='w-full bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[300px] h-[200px] max-w-[600px]'>
                <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                    <p className='font-bold pl-5'>Pregunta</p>
                    <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
                </div>
                <div className='w-full h-full flex justify-center'>
                    <div className='h-full w-full flex justify-between ml-5 mr-5'>
                        <div className='flex flex-col items-start gap-y-6 mt-4 mr-4'>
                            <p id='label_nombre' className='text-xl'>Pregunta</p>
                            <p className='text-xl'>Respuesta</p>
                        </div>
                        <div>
                            <div className='h-full flex flex-col items-start mt-5 mr-2'>
                                <form onSubmit={handleSubmit(handleOnSubmit)}>
                                    <input
                                        type='text'
                                        name='pregunta'
                                        id='campo_nombre'
                                        maxLength={255}
                                        required={true}
                                        defaultValue={pregunta ? pregunta.pregunta : ""}
                                        {...register('pregunta', {
                                            required: true,
                                            maxLength: 255
                                        })}
                                        className='w-full h-7 border-2 border-black rounded-lg pl-1'
                                        placeholder='Pregunta frecuente'
                                    />
                                    <input
                                        type='text'
                                        name='respuesta'
                                        id='campo_nombre'
                                        maxLength={255}
                                        required={true}
                                        defaultValue={pregunta ? pregunta.respuesta : ""}
                                        {...register('respuesta', {
                                            required: true,
                                            maxLength: 255
                                        })}
                                        className='w-full h-7 border-2 border-black rounded-lg pl-1 mt-5'
                                        placeholder='Respuesta'
                                    />
                                    <div className='w-full flex justify-end items-end'>
                                        <button
                                            disabled={isLoading}
                                            type='submit'
                                            className='bg-[#98E47D] w-48 h-10 text-2xl font-bold rounded-xl mr-3 mt-5 mb-5'
                                        >
                                            {!isLoading &&
                                                "Guardar cambios"
                                            }
                                            {
                                                isLoading &&
                                                <div className='flex justify-center'>
                                                    <AiOutlineLoading3Quarters className='animate-spin' />
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
        </div>

    )
}

export default Editar_pregunta