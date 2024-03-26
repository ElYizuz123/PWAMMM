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

    <div className="bg-cover bg-center bg-opacity-60 w-full h-max" style={{ backgroundImage: "url('/backgroundImage.png')" }}>

      <ContactoForm></ContactoForm>

      <p className="text-6xl mb-8 ml-20">Preguntas Frecuentes</p>
    <br></br>
      <PreguntasFrecuentes></PreguntasFrecuentes>
      <PreguntasFrecuentes></PreguntasFrecuentes>
      <PreguntasFrecuentes></PreguntasFrecuentes>

      <p className="text-6xl mb-8 ml-20">Tiendas Físicas</p>

    <Ubicaciones></Ubicaciones>

    <br></br>
    <br></br>
    
    </div>
    </div>
  )
}

export default page