import React from 'react'
import IconoUbicacion from '../iconoUbicacion'
import IconoTelefono from '../iconoTelefono'
import Image from 'next/image'

const UbicacionMezcalArmonia = () => {

  return (
    <div>
      {/* mapa */}
      <div className="flex">
        <div className="border-2 border-black rounded-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.2180306675223!2d-101.18636629999999!3d19.703339499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0e72efa45b51%3A0xd73b0d993e7e8ae7!2sServi-Med%20Laboratorios%20Cl%C3%ADnicos!5e0!3m2!1ses!2smx!4v1714874005989!5m2!1ses!2smx"
            className="rounded-lg" width="800" height="650" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <div className="ml-4">
          <div className="bg-white bg-opacity-70 rounded-lg mr-36">
          <div className="flex mb-8">
            <div>{IconoUbicacion}</div>
            <p className="ml-2 text-3xl">Gob. Aristeo Mercado 161-local 4, Col del Empleado, 58020 Morelia, Mich., México</p>
          </div>
          <div className="flex">
            <div>{IconoTelefono}</div>
            <p className="ml-2 text-3xl">+52 443 186 1694</p>
          </div>
          </div>
          <div className="mt-8 border-2 border-black w-[380px]">
            <Image src={"/qrUbicaciones/mezcalArmonia.png"} width={380} height={380}></Image>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UbicacionMezcalArmonia