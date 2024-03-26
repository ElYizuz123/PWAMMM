import ContactoForm from '@/components/contactoForm/ContactoForm';
import IconoTelefono from '@/components/maps/iconoTelefono';
import IconoUbicacion from '@/components/maps/iconoUbicacion';
import PreguntasFrecuentes from '@/components/preguntasFrecuentes/PreguntasFrecuentes';
import React from 'react';
// Página de contacto
function page() {
  return(
    <div className="bg-[#F5F5F5] h-max">

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

      <ContactoForm></ContactoForm>

      <p className="text-6xl mb-8 ml-20">Preguntas Frecuentes</p>
    <br></br>
      <PreguntasFrecuentes></PreguntasFrecuentes>
      <PreguntasFrecuentes></PreguntasFrecuentes>
      <PreguntasFrecuentes></PreguntasFrecuentes>

      <p className="text-6xl mb-8 ml-20">Tiendas Físicas</p>

      {/* lista desplegable */}
      <div class="relative inline-block text-left ml-20 mb-5">
        <div>
          <button id="dropdown-btn" type="button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            Morelia
            <svg class="ml-2 h-5 w-5 transition-transform transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v10a1 1 0 01-1.707.707l-4.5-4.5a1 1 0 010-1.414l4.5-4.5A1 1 0 0110 3z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>


      {/* mapa */}
      <div className="ml-20 flex">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469.5637050631848!2d-101.17452976773575!3d19.690914973081252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0df8a232cf1f%3A0x6d7ea21f1cf37cfb!2sMantra!5e0!3m2!1ses!2smx!4v1711421238899!5m2!1ses!2smx" 
        width="800" height="650" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>

      <div>

        <div className="flex ml-14 mt-14">
          {IconoUbicacion} 
          <p className="ml-5 text-3xl">Blvd. García de León 531-B, Chapultepec Sur, 58260 Morelia, Mich.</p>
        </div>
        <div className="flex ml-14 mt-14">
          {IconoTelefono}
          <p className="ml-5 text-3xl">+52 443 148 6613</p>
        </div>
      </div>

      </div>

    

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    </div>
  )
}

export default page