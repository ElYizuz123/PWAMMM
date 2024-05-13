import React from 'react'
import { SlPhone } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import QRCode from "react-qr-code";

const DatosUbicacion = ({ mapaUrl, ubi, telefono, qrImagen }) => {

  // console.log("map:"+mapaUrl);
  // console.log("ubi:"+ubi);
  // console.log("cel:"+telefono);
  // console.log("qr:"+qrImagen);

  return (
    <div className="w-full">
      {/* mapa */}

      <div className="flex flex-wrap">
            <div className="rounded-lg lg:w-2/5 w-full h-auto mb-8">
              <iframe src={ mapaUrl }
                className="rounded-lg w-full lg:h-[600px] md:h-[450px] h-[400px]" width="800" height="650" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        <div className="w-full lg:w-1/2 lg:mr-20 ml-2">
          <div className="bg-white bg-opacity-70 rounded-lg">
            <div className="flex mb-8 p-2">
              <div> <SlLocationPin className=" lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[32px] h-[32px]" />  </div>
              <p className="ml-2 lg:text-3xl md:text-3xl sm:text-xl text-xl">{ ubi }</p>
            </div>
            <div className="flex mb-2 p-2">
              <div> <SlPhone className="lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[32px] h-[32px]" /> </div>
              <p className="ml-2 lg:text-3xl md:text-3xl sm:text-xl text-xl">+52 { telefono }</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <div className="bg-white flex justify-center items-center rounded-lg
                         lg:w-[370px] lg:h-[370px] md:w-[370px] md:h-[370px] sm:w-[310px] sm:h-[310px] w-[260px] h-[260px]">
              <QRCode value={ qrImagen }
                className="lg:w-[350px] lg:h-[350px] md:w-[350px] md:h-[350px] sm:w-[290px] sm:h-[290px] w-[250px] h-[250px]" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DatosUbicacion

