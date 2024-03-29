import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import ContactoForm from '@/components/contactoForm/ContactoForm';
import Ubicaciones from '@/components/maps/ubicaciones';
import PreguntasFrecuentes from '@/components/preguntasFrecuentes/PreguntasFrecuentes';
import React from 'react';
// Página de contacto

function page() {
  return (
    <LayoutPrincipal>

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
        <div className="bg-cover bg-center bg-opacity-60 w-full h-max" style={{ backgroundImage: "url('/backgroundImage.png')" }}>


          <div>
            <ContactoForm></ContactoForm>
          </div>

          <div className="mb-20">
            <p className="text-6xl mb-8 ml-20">Preguntas Frecuentes</p>
            <br></br>

            <div class="ml-20 mb-10 items-center bg-[#FFFFFF] border border-black w-11/12 rounded-lg">
                <div class="ml-5 mt-3 mr-5 flex flex-col">
                    <p class="text-4xl font-bold">1.- ¿Cuánto tiempo tardas en llegar los productos?</p>
                    <p class="text-4xl">R- Depende del lugar, normalmente de 3 a 5 días hábiles.</p>
                </div>
            </div>

            <div class="ml-20 mb-10 items-center bg-[#FFFFFF] border border-black w-11/12 rounded-lg">
                <div class="ml-5 mt-3 mr-5 flex flex-col">
                    <p class="text-4xl font-bold">2.- ¿Los métodos de pago son seguros?</p>
                    <p class="text-4xl">R- Si, son 100% seguros, actualmente puedes realizar el pago por transferencia y PayPal.</p>
                </div>
            </div>

            <div class="ml-20 mb-10 items-center bg-[#FFFFFF] border border-black w-11/12 rounded-lg">
                <div class="ml-5 mt-3 mr-5 flex flex-col">
                    <p class="text-4xl font-bold">3.- ¿Cómo puedo formar parte de las mujeres Mezcaleras?</p>
                    <p class="text-4xl">R- Comunícate con nosotros en el formulario de la parte superior de la página,
                    nos comunicaremos contigo en máximo un día </p>
                </div>
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