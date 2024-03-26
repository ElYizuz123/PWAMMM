import React from 'react'

const ContactoForm = () => {
  return (

    <div className="h-screen flex justify-center items-center">
      
      <div className="bg-[#F3E8E8] w-11/12 h-[1000px] rounded-3xl">
      <div className="bg-[#D60064] w-full h-48 rounded-t-3xl justify-center items-center">
        <br></br> <br></br>
        <p className="font-semibold text-white text-center text-6xl">
          Nuestro equipo se pondrá en contacto contigo
        </p>
      </div>

      <br></br>
      <div className="flex justify-center items-center">
        <input type="text" className="border-gray-300 p-4 mb-4 w-11/12 text-3xl" placeholder="Motivo*"></input>
      </div>

      <br></br>
      <div className="flex justify-center items-center">
      <input type="text" className="border-gray-300 p-4 mb-4 w-5/12 text-3xl mr-16" placeholder="Nombre*"></input>
      <input type="text" className="border-gray-300 p-4 mb-4 w-5/12 text-3xl ml-16" placeholder="Apellido*"></input>
      </div>

      <br></br>
      <div className="flex justify-center items-center">
      <input type="text" className="border-gray-300 p-4 mb-4 w-5/12 text-3xl mr-16" placeholder="Email*"></input>
      <input type="text" className="border-gray-300 p-4 mb-4 w-5/12 text-3xl ml-16" placeholder="Teléfono*"></input>
      </div>

      <br></br>
      <div className="flex justify-center">
        <textarea 
          className="border-gray-300 p-4 mb-4 w-11/12 h-72 text-3xl resize-none text-left"
          placeholder="Comentarios*">
        </textarea>
      </div>

      <br></br>
      <div className="flex justify-center items-center">
        <button className="bg-[#D60064] w-1/4 h-20 rounded-3xl">
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