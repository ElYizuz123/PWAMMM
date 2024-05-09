import React from 'react'
import { SlPhone } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import Image from 'next/image'

const UbicacionMezcalQveela = () => {

  return (
    <div className="w-full">
      {/* mapa */}
      <div className="flex flex-wrap">
        <div className="rounded-lg lg:w-2/5 w-full h-auto mb-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469.5637050631848!2d-101.17452976773575!3d19.690914973081252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0df8a232cf1f%3A0x6d7ea21f1cf37cfb!2sMantra!5e0!3m2!1ses!2smx!4v1711421238899!5m2!1ses!2smx"
            className="rounded-lg w-full lg:h-[600px] md:h-[450px] h-[400px]" width="800" height="650" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="w-full lg:w-1/2 lg:mr-20 ml-2">
          <div className="bg-white bg-opacity-70 rounded-lg">
            <div className="flex mb-8">
              <div> <SlLocationPin className="lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[32px] h-[32px]" />  </div>
              <p className="ml-2 lg:text-3xl md:text-3xl sm:text-xl text-xl">Gob. Aristeo Mercado 161-local 4, Col del Empleado, 58020 Morelia, Mich., México</p>
            </div>
            <div className="flex">
              <div> <SlPhone className="lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[32px] h-[32px]" /> </div>
              <p className="ml-2 lg:text-3xl md:text-3xl sm:text-xl text-xl">+52 443 186 1694</p>
            </div>
          </div>
          <div className="mt-8">
            <Image src={"/qrUbicaciones/mezcalArmonia.png"} width={380} height={380} className="rounded-md"></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UbicacionMezcalQveela