import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import ContactoForm from '@/components/contactoForm/ContactoForm';
import ListaUbicaciones from '@/components/maps/ListaUbicaciones';
import PreguntasFrecuentes from '@/components/preguntasFrecuentes/PreguntasFrecuentes';
import React from 'react';
// Página de contacto

function page() {
  return (
    <LayoutPrincipal>

      <div className="h-max absolute z-0 w-full overflow-x-hidden bg-[#F5F5F5]">
        {/* el fondo bueno, nomas que no jala bien */}
        {/* <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-60"
            src="\backgroundImage.png"
            alt="Background" />
        </div> */}


        <div className="z-0 bg-cover bg-center bg-opacity-60 w-full h-max" style={{ backgroundImage: "url('/backgroundImage.jpg')" }}>


        <div className="mt-48">
          <ContactoForm></ContactoForm>
        </div>

        <div>
          <p className="text-6xl mb-2 ml-20">Preguntas Frecuentes</p>
          <br />
          <div className="flex items-center align-middle object-center">
            <PreguntasFrecuentes></PreguntasFrecuentes>
          </div>
        </div>


        <div>
          <p className="text-6xl mb-8 ml-20">Tiendas Físicas</p>
          <ListaUbicaciones />
        </div>

        <br />

        </div>
      </div>
    </LayoutPrincipal>

  )
}

export default page