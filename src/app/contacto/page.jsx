import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import ContactoForm from '@/components/contactoForm/ContactoForm';
import ListaUbicaciones from '@/components/maps/ListaUbicaciones';
import PreguntasFrecuentes from '@/components/preguntasFrecuentes/PreguntasFrecuentes';
import React from 'react';
// Página de contacto

function page() {
  return (
    <LayoutPrincipal>

<div className="bg-[#F5F5F5] mt-40 h-max relative w-full overflow-x-hidden">

      <div className="bg-cover bg-center w-full h-auto p-10" style={{ backgroundImage: "url('/backgroundImage.jpg')" }}>


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