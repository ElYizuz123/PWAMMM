"use client"
import React, { useState, useEffect } from 'react'

const ContactoForm = () => {

  const [formData, setformData] = useState(null)

  const onChange = ({ target: { name, value } }) => {
    setformData({ ...formData, [name]: value })
    // {motivo: valor, nombre:valor}
  }
  // const [motivo, setMotivo] = useState('');
  // const [nombre, setNombre] = useState('');
  // const [apellidos, setApellidos] = useState('');
  // const [correo, setCorreo] = useState('');
  // const [telefono, setTelefono] = useState('');
  // const [comentarios, setComentarios] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(onChange)
    })
    console.log(await response.json())
  }

  // const [sendForm, setSendForm] = useState(null); para abrir y cerrar el cuadro modal sin js

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
    <div className="flex justify-center items-start mb-32">

      <div className="bg-[#F3E8E8] w-8/12 h-[780px] rounded-3xl shadow-2xl">
        <div className="bg-[#D60064] w-full h-40 rounded-t-3xl mb-10 flex justify-center items-center shadow-2xl">

          <p className="font-semibold text-white text-center lg:text-5xl sm:text-4xl">
            Nuestro equipo se pondrá en contacto contigo
          </p>
        </div>
        <form className="m-20 mt-0" onSubmit={sendEmail}>
          <div className="flex justify-center items-center">
            <input type="text" id="motivo" name="motivo" required
              onChange={() => {
                setformData();
              }}
              className="border-gray-300 lg:h-16 sm:h-8 p-2 mb-4 w-full rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Motivo*"></input>
          </div>

          <div className="grid grid-flow-row sm:grid-flow-col gap-16 w-full">
            <input type="text" id="nombre" name="nombre" required 
              onChange={() => {
                setformData();
              }}
              className="border-gray-300 lg:h-16 sm:h-8 p-2 mb-4 w-full rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Nombre*"></input>
            <input type="text" id="apellidos" name="apellidos" required 
              onChange={() => {
                setformData();
              }}
              className="border-gray-300 lg:h-16 sm:h-8 p-2 mb-4 w-full rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Apellidos*"></input>
          </div>

          <div className="grid grid-flow-row sm:grid-flow-col gap-16 w-full">
            <input type="email" id="correo" name="correo" required
              onChange={() => {
                setformData();
              }}
              className="border-gray-300 lg:h-16 sm:h-8 p-2 mb-4 w-full rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Correo*"></input>
            <input type="text" id="telefono" name="telefono" required
              onChange={() => {
                setformData();
              }}
              className="border-gray-300 lg:h-16 sm:h-8 p-2 mb-4 w-full rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Teléfono*"></input>
          </div>

          <div className="flex w-full">
            <textarea id="comentarios" name="comentarios"
              onChange={() => {
                setformData();
              }}
              className="border-gray-300 p-2 mb-4 w-full h-60 resize-none text-left rounded-lg shadow-md lg:text-3xl md:text-2xl"
              placeholder="*Comentarios extra*">
            </textarea>
          </div>

          <div className="flex justify-center items-center">
            <button id="btn-abrir-modal" type='submit' 
              className="bg-[#D60064] border-2 border-black hover:bg-[#d60064c9] lg:w-1/4 sm:w-2/4 lg:h-16 sm:h-10 lg:rounded-3xl sm:rounded-2xl">
              <span className="font-semibold text-white text-center lg:text-4xl sm:text-2xl">
                Enviar
              </span>
            </button>
          </div>

        </form>

      </div>
      {/* width: 50%;
  height: auto;
  position: fixed;
  background-color: #f5f5f5e2;
  z-index: 100;
  justify-content: center;
  align-items: center;
  display: none; */}

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