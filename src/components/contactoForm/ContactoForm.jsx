"use client"
import { POST } from '@/app/api/send/route'
import React from 'react'

const ContactoForm = () => {
  return (

    <div className="flex justify-center items-start mb-32">
      
      
      <div className="bg-[#F3E8E8] w-9/12 h-[1000px] rounded-3xl">
      <div className="bg-[#D60064] w-full h-48 rounded-t-3xl rounded mb-10 flex justify-center items-center">
        
        <p className="font-semibold text-white text-center text-5xl">
          Nuestro equipo se pondrá en contacto contigo
        </p>
      </div>

      <div className="flex justify-center items-center">
        <input type="text" className="border-gray-300 p-5 mb-10 w-11/12 text-3xl" placeholder="Motivo*"></input>
      </div>

      <div className="flex justify-center items-center">
        <input type="text" className="border-gray-300 p-5 mb-10 w-5/12 text-3xl mr-24" placeholder="Nombre*"></input>
        <input type="text" className="border-gray-300 p-5 mb-10 w-5/12 text-3xl" placeholder="Apellido*"></input>
      </div>

      <div className="flex justify-center items-center">
      <input type="text" className="border-gray-300 p-5 mb-10 w-5/12 text-3xl mr-24" placeholder="Email*"></input>
      <input type="text" className="border-gray-300 p-5 mb-10 w-5/12 text-3xl" placeholder="Teléfono*"></input>
      </div>

      <div className="flex justify-center">
        <textarea 
          className="border-gray-300 p-5 mb-7 w-11/12 h-72 text-3xl resize-none text-left"
          placeholder="Comentarios*">
        </textarea>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-[#D60064] w-1/4 h-20 rounded-3xl"
        onClick={async() => {
          const res = await fetch("/api/send", {
            method: 'POST', 
          })
          const data = await res.json()
          console.log(res)
        }}>
          <p className="font-semibold text-white text-center text-5xl">
            Enviar
          </p>
        </button>
      </div>

      </div>
    </div>
    
  )
}

export default ContactoForm