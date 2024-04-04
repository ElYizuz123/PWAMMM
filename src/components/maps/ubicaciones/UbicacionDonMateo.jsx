import React from 'react'
import IconoUbicacion from '../iconoUbicacion'
import IconoTelefono from '../iconoTelefono'

const UbicacionDonMateo = () => {
  return (
    <div>
      {/* mapa */}
      <div className="flex">
        <div className="border-1 border-black">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7513.28433260974!2d-101.201758!3d19.685266!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0dd1619a301d%3A0x7c21e719a4ef0889!2sMezcal%20Don%20Mateo!5e0!3m2!1ses-419!2smx!4v1712207521959!5m2!1ses-419!2smx"
            width="800" height="650" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <div className="ml-4 mt-14 mr-20">
          <div className="flex mb-8">
            {IconoUbicacion}
            <p className="ml-2 text-3xl">Gob. Aristeo Mercado 161-local 4, Col del Empleado, 58020 Morelia, Mich., México</p>
          </div>
          <div className="flex">
            {IconoTelefono}
            <p className="ml-2 text-3xl">+52 443 186 1694</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UbicacionDonMateo