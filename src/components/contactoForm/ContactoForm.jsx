"use client"
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ContactoForm = () => {

  const { register, handleSubmit } = useForm();

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
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    //cerrar ventana modal
    const btnCerrarModal = document.getElementById('btn-cerrar-modal');
    function cerrarModal() {
      const modal = document.querySelector('.container-modal');
      modal.style.display = 'none';
    }
    if (btnCerrarModal) {
      btnCerrarModal.addEventListener('click', cerrarModal);
    }

    //abrir ventana modal
    const btnAbrirModal = document.getElementById('btn-abrir-modal');
    function abrirModal() {
      // Verifica si el formulario está lleno y si el correo tiene un formato válido
      const inputs = document.querySelectorAll('input[required]');
      const emailInput = document.querySelector('input[type="email"]');
      const emailValue = emailInput.value.trim();
      const formIsFilled = Array.from(inputs).every(input => input.value.trim() !== '');
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

      // Muestra el modal si todo está correcto y validado
      if (formIsFilled && isEmailValid) {
        const modal = document.querySelector('.container-modal');
        modal.style.display = 'flex';
      }
    }
    if (btnAbrirModal) {
      btnAbrirModal.addEventListener('click', abrirModal);
    }

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      if (btnCerrarModal) {
        btnCerrarModal.removeEventListener('click', cerrarModal);
      }
      if (btnAbrirModal) {
        btnAbrirModal.removeEventListener('click', abrirModal);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-start mb-16">

      <div className="bg-[#F3E8E8] lg:w-8/12 md:w-9/12 w-10/12 lg:h-[780px] md:h-[630px] sm:h-[560px] rounded-3xl shadow-2xl">
        <div className="bg-[#D60064] w-full h-40 rounded-t-3xl flex justify-center items-center shadow-2xl">

          <p className="font-semibold text-white text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            Nuestro equipo se pondrá en contacto contigo
          </p>
        </div>
        <form className="m-10" onSubmit={handleSubmit(sendEmail)}>
          <div className="flex justify-center items-center">
            <input type="text" id="motivo" name="motivo" required {...register("motivo")}
              className="border-gray-300 lg:h-16 md:h-10 sm:h-10 p-2 mb-4 w-full rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Motivo*" />
          </div>

          <div className="grid grid-flow-row sm:grid-flow-col gap-16 w-full">
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

          <div className="grid grid-flow-row sm:grid-flow-col gap-16 w-full">
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
              className="border-gray-300 p-2 mb-4 w-full lg:h-60 md:h-44 sm:h-28 resize-none text-left rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Comentarios extra*" />
          </div>

          <div className="flex justify-center items-center">
            <button id="btn-abrir-modal" type='submit'
              className="bg-[#D60064] border-2 border-black hover:bg-[#d60064c9] lg:w-1/4 md:w-1/4 sm:w-2/4 lg:h-16 md:h-14 sm:h-12 lg:rounded-3xl sm:rounded-2xl">
              <span className="font-semibold text-white text-center lg:text-4xl md:text-3xl sm:text-2xl">
                Enviar
              </span>
            </button>
          </div>

        </form>

      </div>

      {/* cuadro de confirmación */}
      <div className="container-modal rounded-lg border-2 border-[#D60064] shadow-lg">
        <div className="content-modal ml-5 mr-5 mt-2 mb-2">
          <p className="text-3xl">Se ha enviado un correo con tus datos a la asociación</p>
          <p>*Nos comprometemos a mantener privada la información proporcionada y utilizarla únicamente de manera profesional*</p>
          <div className='flex justify-center items-center'>
            <button id="btn-cerrar-modal" className='w-1/4 bg-[#D60064] rounded-lg p-2 shadow-md'>
              Cerrar</button></div>
        </div>
      </div>

    </div>

  )
}

export default ContactoForm