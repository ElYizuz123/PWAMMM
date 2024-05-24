"use client"
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ContactoForm = () => {

  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false)
  const [isError, setIsError] = useState(false)

  const sendEmail = async (data) => {
    try {
      const res = await fetch('/api/contacto/sendEmail', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Error al enviar el correo');
      }

      const responseData = await res.json();
      console.log(responseData);
      setIsOpen(true); //en caso de enviarse, abrir cuadro confirm
    } catch (error) {
      console.error('Error:', error);
      setIsError(true); //en caso de error, abrir cuadro error
    }
  };

  return (
    <div className="w-full">

      {/* form de contacto, usa react-hook-form */}
      <div className="w-full lg:ml-20 lg:mr-20 lg:mb-2 mb-1">
        <p className="lg:text-6xl md:text-4xl text-3xl mb-2">
          Contáctanos</p>
        <p className="lg:text-2xl md:text-xl text-md mb-2 lg:mr-20">
          Si tienes alguna duda o algún problema con el uso de la página, llena el siguiente formulario y nos pondremos en contacto</p>
      </div>
      <div className="flex justify-center items-start w-full">
        <div className="bg-[#F3E8E8] bg-opacity-60 backdrop-blur-sm lg:ml-20 lg:mr-20 w-full h-auto rounded-2xl shadow-lg">
          <form className="ml-10 mr-10 mb-10 mt-5" onSubmit={handleSubmit(sendEmail)}>
            <div className="flex justify-center items-center">
              <input type="text" id="motivo" name="motivo" required {...register("motivo")}
                className="lg:h-16 md:h-10 sm:h-10 p-2 mb-6 w-full lg:text-2xl md:text-xl text-lg
              appearance-none bg-transparent border-0 border-b-2"
                placeholder="Motivo*" />
            </div>

            <div className="grid grid-flow-row sm:grid-flow-col lg:gap-16 md:gap-16 sm:gap-16 w-full">
              <input type="text" id="nombre" name="nombre" required {...register("nombre", {
                required: true,
              })}
                className="lg:h-16 md:h-10 sm:h-10 p-2 mb-6 w-full lg:text-2xl md:text-xl text-lg
              appearance-none bg-transparent border-0 border-b-2"
                placeholder="Nombre*" />
              <input type="text" id="apellidos" name="apellidos" required {...register("apellidos", {
                required: true,
              })}
                className="lg:h-16 md:h-10 sm:h-10 p-2 mb-6 w-full lg:text-2xl md:text-xl text-lg
              appearance-none bg-transparent border-0 border-b-2"
                placeholder="Apellidos*" />
            </div>

            <div className="grid grid-flow-row sm:grid-flow-col lg:gap-16 md:gap-16 sm:gap-16 w-full">
              <input type="email" id="correo" name="correo" required {...register("correo", {
                required: true,
                pattern: '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}'
              })}
                className="lg:h-16 md:h-10 sm:h-10 p-2 mb-6 w-full lg:text-2xl md:text-xl text-lg
              appearance-none bg-transparent border-0 border-b-2"
                placeholder="Correo*" />
              <input type="text" id="telefono" name="telefono" required {...register("telefono", {
                required: true,
              })}
                className="lg:h-16 md:h-10 sm:h-10 p-2 mb-6 w-full lg:text-2xl md:text-xl text-lg
              appearance-none bg-transparent border-0 border-b-2"
                placeholder="Teléfono*" />
            </div>

            <div className="flex w-full">
              <textarea id="comentarios" name="comentarios" {...register("comentarios")}
                className="p-2 mb-6 w-full lg:h-16 md:h-16 sm:h-20 h-20 resize-none text-left lg:text-2xl md:text-xl text-lg
              appearance-none bg-transparent border-0 border-b-2 flex items-end justify-end"
                placeholder="Comentarios extra (opcional)" />
            </div>

            <div className="flex justify-center items-center">
              <button type='submit' className="btnCookies hover:bg-[#d60064c9] lg:w-1/4 md:w-1/4 w-2/4 lg:h-16 md:h-14 sm:h-12 h-12 lg:rounded-3xl sm:rounded-2xl rounded-md">
                <p className="font-semibold text-white text-center lg:text-2xl md:text-xl text-lg">
                  Enviar
                </p>
              </button>
            </div>
          </form>
        </div>

        {/* cuadro de confirmación */}
        {
          isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center p-2 animate-fade-in">
              <div className="bg-[#F3E8E8] sm:w-11/12 md:w-11/12 lg:w-auto w-auto border-2 border-[#D60064] p-5 rounded-lg flex flex-col justify-center items-center gap-5">
                <div className="content-modal lg:ml-5 lg:mr-5 lg:mt-2 lg:mb-2 md:ml-5 md:mr-5 md:mt-2 md:mb-2 ml-1 mr-1 mt-2 mb-2">
                  <p className="lg:text-3xl md:lg:text-3xl text-xl font-bold">Se ha enviado un correo con tus datos a la asociación</p>
                  <p>*Nos comprometemos a mantener privada la información proporcionada y utilizarla únicamente de manera profesional*</p>
                  <div className='flex justify-center items-center mt-2'>
                    <button onClick={() => setIsOpen(false)}
                      className='w-1/4 btnCookies bg-[#D60064] hover:bg-[#d60064c9] h-auto rounded-lg p-2 shadow-md'>
                      <p className="text-white">Cerrar</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* cuadro de error */}
        {
          isError && (
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center p-2 animate-fade-in">
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
    </div>

  )
}

export default ContactoForm