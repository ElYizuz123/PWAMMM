"use client"
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ContactoForm = () => {

  const { register, handleSubmit } = useForm();

  //cambiar por resend
  const sendEmail = async (data) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Error al enviar el correo');
      }

      const responseData = await response.json();
      console.log(responseData);
      setIsOpen(true) ////AGREGAR A LA FUNCIÓN DE MANDAR EL CORREO
    } catch (error) {
      console.error('Error:', error);
      setIsError(true) ////AGREGAR A LA FUNCIÓN DE MANDAR EL CORREO
    }
  };

  const [isOpen, setIsOpen] = useState(false)
  const [isError, setIsError] = useState(false)

  return (
    <div className="flex justify-center items-start w-full">

      <div className="bg-[#F3E8E8] lg:w-8/12 md:w-10/12 w-full h-auto rounded-3xl shadow-lg">
        <div className="bg-[#D60064] w-full lg:h-40 md:h-40 h-32 lg:rounded-t-3xl md:rounded-t-3xl rounded-t-xl flex justify-center items-center shadow-lg">

          <p className="m-2 font-semibold text-white text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            Nuestro equipo se pondrá en contacto contigo
          </p>
        </div>
        <form className="ml-10 mr-10 mt-10 mb-10" onSubmit={handleSubmit(sendEmail)}>
          <div className="flex justify-center items-center">
            <input type="text" id="motivo" name="motivo" required {...register("motivo")}
              className="border-gray-300 lg:h-16 md:h-10 sm:h-10 p-2 mb-4 w-full rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Motivo*" />
          </div>

          <div className="grid grid-flow-row sm:grid-flow-col lg:gap-16 md:gap-16 sm:gap-16 w-full">
            <input type="text" id="nombre" name="nombre" required {...register("nombre", {
              required: true,
            })}
              className="border-gray-300 lg:h-16 md:h-10 sm:h-10 p-2 mb-4 w-full rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Nombre*" />
            <input type="text" id="apellidos" name="apellidos" required {...register("apellidos", {
              required: true,
            })}
              className="border-gray-300 lg:h-16 md:h-10 sm:h-10 p-2 mb-4 w-full rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Apellidos*" />
          </div>

          <div className="grid grid-flow-row sm:grid-flow-col lg:gap-16 md:gap-16 sm:gap-16 w-full">
            <input type="email" id="correo" name="correo" required {...register("correo", {
              required: true,
              pattern: '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}'
            })}
              className="border-gray-300 lg:h-16 md:h-10 sm:h-10 p-2 mb-4 w-full rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Correo*" />
            <input type="text" id="telefono" name="telefono" required {...register("telefono", {
              required: true,
            })}
              className="border-gray-300 lg:h-16 md:h-10 sm:h-10 p-2 mb-4 w-full rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Teléfono*" />
          </div>

          <div className="flex w-full">
            <textarea id="comentarios" name="comentarios" {...register("comentarios")}
              className="border-gray-300 p-2 mb-4 w-full lg:h-60 md:h-44 sm:h-28 h-28 resize-none text-left rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Comentarios extra*" />
          </div>

          <div className="flex justify-center items-center">
            <button type='submit' className="bg-[#D60064] border-2 border-black hover:bg-[#d60064c9] lg:w-1/4 md:w-1/4 w-2/4 lg:h-16 md:h-14 sm:h-12 lg:rounded-3xl sm:rounded-2xl rounded-md">
              <p className="font-semibold text-white text-center lg:text-4xl md:text-3xl sm:text-2xl text-lg">
                Enviar
              </p>
            </button>
          </div>
        </form>
      </div>

      {/* cuadro de confirmación */}
      {
        isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-2 animate-fade-in">
            <div className="bg-[#F3E8E8] sm:w-11/12 md:w-11/12 lg:w-auto w-auto border-2 border-[#D60064] p-5 rounded-lg flex flex-col justify-center items-center gap-5">
              <div className="content-modal lg:ml-5 lg:mr-5 lg:mt-2 lg:mb-2 md:ml-5 md:mr-5 md:mt-2 md:mb-2 ml-1 mr-1 mt-2 mb-2">
                <p className="lg:text-3xl md:lg:text-3xl text-xl font-bold">Se ha enviado un correo con tus datos a la asociación</p>
                <p>*Nos comprometemos a mantener privada la información proporcionada y utilizarla únicamente de manera profesional*</p>
                <div className='flex justify-center items-center mt-2'>
                  <button onClick={() => setIsOpen(false)}
                    className='w-1/4 bg-[#D60064] border-2 border-black hover:bg-[#d60064c9] h-auto rounded-lg p-2 shadow-md'>
                    <p className="text-white">Cerrar</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      {
        isError && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-2 animate-fade-in">
            <div className="bg-[#F3E8E8] sm:w-11/12 md:w-11/12 lg:w-auto w-auto border-2 border-[#D60064] p-5 rounded-lg flex flex-col justify-center items-center gap-5">
              <div className="content-modal lg:ml-5 lg:mr-5 lg:mt-2 lg:mb-2 md:ml-5 md:mr-5 md:mt-2 md:mb-2 ml-1 mr-1 mt-2 mb-2">
                <p className="lg:text-3xl md:lg:text-3xl text-xl font-bold">Ha ocurrido un error</p>
                <p>*Ha ocurrido un error en el envío, inténtelo de nuevo*</p>
                <div className='flex justify-center items-center mt-2'>
                  <button onClick={() => setIsError(false)}
                    className='w-1/4 bg-[#D60064] border-2 border-black hover:bg-[#d60064c9] h-auto rounded-lg p-2 shadow-md'>
                    <p className="text-white">Cerrar</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

    </div>

  )
}

export default ContactoForm