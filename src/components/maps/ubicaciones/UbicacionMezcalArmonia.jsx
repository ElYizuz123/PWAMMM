import React from 'react'
import IconoUbicacion from '../iconoUbicacion'
import IconoTelefono from '../iconoTelefono'

const UbicacionMezcalArmonia = () => {

  return (
    <div>
      {/* mapa */}
      <div className="flex">
        <div className="border-1 border-black">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15026.224849793161!2d-101.17869!3d19.68893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0e761f9cdce5%3A0xdaa0169c68492caa!2sMezcal%20Armonia!5e0!3m2!1ses-419!2sus!4v1712200255239!5m2!1ses-419!2sus"
            width="800" height="650" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <div className="ml-4 mt-14 mr-24 bg-white bg-opacity-70 rounded-lg h-[170px]">
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

export default UbicacionMezcalArmonia