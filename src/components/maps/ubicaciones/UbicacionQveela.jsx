import React from 'react'
import IconoUbicacion from '../iconoUbicacion'
import IconoTelefono from '../iconoTelefono'
import Image from 'next/image'

const UbicacionMezcalQveela = () => {
  
  return (
    <div>
      {/* mapa */}
      <div className="flex">
        <div className="border-2 border-black">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469.5637050631848!2d-101.17452976773575!3d19.690914973081252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0df8a232cf1f%3A0x6d7ea21f1cf37cfb!2sMantra!5e0!3m2!1ses!2smx!4v1711421238899!5m2!1ses!2smx"
            width="800" height="650" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <div className="ml-4 mr-24 bg-white bg-opacity-70 rounded-lg h-[170px]">
          <div className="flex mb-8">
            {IconoUbicacion}
            <p className="ml-2 text-3xl">Gob. Aristeo Mercado 161-local 4, Col del Empleado, 58020 Morelia, Mich., México</p>
          </div>
          <div className="flex">
            {IconoTelefono}
            <p className="ml-2 text-3xl">+52 436 150 1911</p>
          </div>
          <div className="mt-8 border-2 border-black w-[380px]">
            <Image src={"/qrUbicaciones/qveelamezcal.png"} width={380} height={380}></Image>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UbicacionMezcalQveela