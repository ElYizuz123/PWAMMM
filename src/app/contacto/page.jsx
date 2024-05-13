import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import ContactoForm from '@/components/contactoForm/ContactoForm';
import ListaUbicaciones from '@/components/maps/ListaUbicaciones';
import PreguntasFrecuentes from '@/components/PreguntasFrecuentes/PreguntasFrecuentes';
import React from 'react';
// Página de contacto

function page() {
  return (
    <LayoutPrincipal>
      <div className="bg-cover bg-center w-full h-auto p-10" style={{ backgroundImage: "url('/backgroundImage.jpg')" }}>
        <div className="mt-40 h-max relative w-full overflow-x-hidden">


          {/* responsive hecho, a mejorar */}
          {/* REDUCIR CÓDIGO JS AL HOOK FORM */}
          <div className="w-full mb-16">
            <ContactoForm/>
          </div>

          {/* PREGUNTAS FRECUENTES ESTAS YA JALA BONITO LO RESPONSIVE CREO */}
          <div>
            <p className="lg:mb-2 mb-1
          lg:text-6xl md:text-4xl text-3xl">
              Preguntas Frecuentes</p>
            <br />
            <div className="flex items-center align-middle object-center">
              <PreguntasFrecuentes/>
            </div>
          </div>


          {/* FALTA TODA RESPONSIVIDAD */}
          <div>
          <p className="lg:mb-4 mb-2
          lg:text-6xl md:text-4xl text-3xl">Nuestras Tiendas</p>
          <ListaUbicaciones />
          </div>

          <br />

        </div>
      </div>
    </LayoutPrincipal>

  )
}

export default page