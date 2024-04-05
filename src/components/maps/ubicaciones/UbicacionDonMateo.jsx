import React from 'react'
import IconoUbicacion from '../iconoUbicacion'
import IconoTelefono from '../iconoTelefono'
import Image from 'next/image'

const UbicacionDonMateo = () => {

  return (
    <div>
      {/* mapa */}
      <div className="flex">
        <div className="border-2 border-black">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7513.28433260974!2d-101.201758!3d19.685266!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0dd1619a301d%3A0x7c21e719a4ef0889!2sMezcal%20Don%20Mateo!5e0!3m2!1ses-419!2smx!4v1712207521959!5m2!1ses-419!2smx"
            width="800" height="650" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <div className="ml-4 mr-24 bg-white bg-opacity-70 rounded-lg h-[170px]">
          <div className="flex mb-8">
            {IconoUbicacion}
            <p className="ml-2 text-3xl">58060, Avenida Universidad 1146, Villa Universidad, 58060 Morelia, Mich.</p>
          </div>
          <div className="flex">
            {IconoTelefono}
            <p className="ml-2 text-3xl">+52 443 316 8585</p>
          </div>
          <div className="mt-8 border-2 border-black w-[380px]">
            <Image src={"/qrUbicaciones/donmateo.png"} width={380} height={380}></Image>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UbicacionDonMateo