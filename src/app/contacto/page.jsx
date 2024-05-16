import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import ContactoForm from '@/components/Contacto/contactoForm/ContactoForm';
import ListaUbicaciones from '@/components/Contacto/maps/ListaUbicaciones';
import PreguntasFrecuentes from '@/components/Contacto/preguntasFrecuentes/PreguntasFrecuentes';
import React from 'react';
// Página de contacto

function page() {
  return (
    <LayoutPrincipal>
      <div className="bg-cover bg-center w-full h-auto p-10" style={{ backgroundImage: "url('/fondos/mezcal_background.png')" }}>
        <div className="mt-40 h-max relative w-full overflow-x-hidden">


          {/* responsive hecho, a mejorar */}
          {/* FORM DE CONTACTO */}
          <div className="w-full mb-16 flex">
            <ContactoForm/>
          </div>

          {/* PREGUNTAS FRECUENTES */}
          <div>
            <div className="flex items-center align-middle object-center">
              <PreguntasFrecuentes/>
            </div>
          </div>


          {/* LISTA DESPLEGABLE CON UBICACIONES */}
          <div>
          
          <ListaUbicaciones />
          </div>

          <br />

        </div>
      </div>
    </LayoutPrincipal>

  )
}

export default page