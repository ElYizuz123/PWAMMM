"use client"
import React, { useState, useEffect } from 'react'

const ContactoForm = () => {
  const [motivo, setMotivo] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [comentarios, setComentarios] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        motivo,
        nombre,
        apellidos,
        correo,
        telefono,
        comentarios
      })
    })
    console.log(await response.json())

  }

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

      <div className="bg-[#F3E8E8] w-8/12 h-[800px] rounded-3xl shadow-2xl">
        <div className="bg-[#D60064] w-full h-40 rounded-t-3xl mb-10 flex justify-center items-center shadow-2xl">

          <p className="font-semibold text-white text-center text-5xl">
            Nuestro equipo se pondrá en contacto contigo
          </p>
        </div>
        <form className="m-20 mt-0" onSubmit={sendEmail}>
          <div className="flex justify-center items-center">
            <input type="text" id="motivo" name="motivo" required value={motivo}
              onChange={(e) => {
                setMotivo(e.target.value);
              }}
              className="border-gray-300 h-16 p-4 mb-4 w-full text-3xl rounded-lg shadow-md"
              placeholder="*Motivo*"></input>
          </div>

          <div className="grid grid-flow-row sm:grid-flow-col gap-16 w-full">
            <input type="text" id="nombre" name="nombre" required value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              className="border-gray-300 h-16 p-4 mb-4 w-full text-3xl rounded-lg shadow-md"
              placeholder="*Nombre*"></input>
            <input type="text" id="apellido" name="apellido" required value={apellidos}
              onChange={(e) => {
                setApellidos(e.target.value);
              }}
              className="border-gray-300 h-16 p-4 mb-4 w-full text-3xl rounded-lg shadow-md"
              placeholder="*Apellidos*"></input>
          </div>

          <div className="grid grid-flow-row sm:grid-flow-col gap-16 w-full">
            <input type="email" id="correo" name="correo" required value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
              }}
              className="border-gray-300 h-16 p-4 mb-4 w-full text-3xl rounded-lg shadow-md"
              placeholder="*Correo*"></input>
            <input type="text" id="telefono" name="telefono" required value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
              className="border-gray-300 h-16 p-4 mb-4 w-full text-3xl rounded-lg shadow-md"
              placeholder="*Teléfono*"></input>
          </div>

          <div className="flex w-full">
            <textarea id="comentario" name="comentario" value={comentarios}
              onChange={(e) => {
                setComentarios(e.target.value);
              }}
              className="border-gray-300 p-4 mb-4 w-full h-60 text-3xl resize-none text-left rounded-lg shadow-md"
              placeholder="*Comentarios extra*">
            </textarea>
          </div>

          <div className="flex justify-center items-center">
            <button id="btn-abrir-modal" type='submit' className="bg-[#D60064] hover:bg-[#d60064c9] w-1/4 h-16 rounded-3xl">
              <span className="font-semibold text-white text-center text-4xl">
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