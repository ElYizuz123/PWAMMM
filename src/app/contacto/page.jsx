import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import ContactoForm from '@/components/contactoForm/ContactoForm';
import Ubicaciones from '@/components/maps/ubicaciones';
import PreguntasFrecuentes from '@/components/preguntasFrecuentes/PreguntasFrecuentes';
import React from 'react';
// Página de contacto

function page() {
  return (
    <LayoutPrincipal>

      <div className="h-max relative z-10 mt-10 w-full">

        {/* el fondo bueno, nomas que no jala bien */}
        {/* <div className="absolute bottom-0 z-0 inset-0">
        <img
          className="w-full h-full object-cover bg-opacity-60"
          src="\backgroundImage.png"
          alt="Background"/>
        </div> */}
        
        <div className="bg-cover bg-center bg-opacity-60 w-full h-max" style={{ backgroundImage: "url('/backgroundImage.png')" }}>


        <div>
          <ContactoForm></ContactoForm>
        </div>

         <div>
            <p className="text-6xl mb-2 ml-20">Preguntas Frecuentes</p>
            <br/>
            <div className="flex items-center align-middle object-center">
              <PreguntasFrecuentes></PreguntasFrecuentes>
            </div>
         </div>


          <div>
            <p className="text-6xl mb-8 ml-20">Tiendas Físicas</p>
            <Ubicaciones></Ubicaciones>
          </div>

          <br></br>
          <br></br>

        </div>
        </div>
    </LayoutPrincipal>

  )
}

export default page