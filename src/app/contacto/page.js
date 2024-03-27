import ContactoForm from '@/components/contactoForm/ContactoForm';
import Ubicaciones from '@/components/maps/ubicaciones';
import PreguntasFrecuentes from '@/components/preguntasFrecuentes/PreguntasFrecuentes';
import React from 'react';
// Página de contacto
function page() {
  return(
    <div className="bg-[#F5F5F5] h-max relative w-full">

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    {/* <div className="absolute inset-0">
      <img
      className="w-full h-full object-cover opacity-60"
      src="\backgroundImage.png"
      alt="Background"/>
    </div> */}
    <div className="bg-cover bg-center opacity-60 w-full h-max" style={{ backgroundImage: "url('/backgroundImage.png')" }}>


    <div>
      <ContactoForm></ContactoForm>
    </div>

    <div>
      <p className="text-6xl mb-8 ml-20">Preguntas Frecuentes</p>
    <br></br>
      <PreguntasFrecuentes></PreguntasFrecuentes>
      <PreguntasFrecuentes></PreguntasFrecuentes>
      <PreguntasFrecuentes></PreguntasFrecuentes>
    </div>

    <div>
      <p className="text-6xl mb-8 ml-20">Tiendas Físicas</p>
      <Ubicaciones></Ubicaciones>
    </div>

    <br></br>
    <br></br>
    
    </div>
    // </div>
  )
}

export default page