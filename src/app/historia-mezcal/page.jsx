"use client"
import React from 'react'
import ProcesoMezcal from '@/components/ProcesoMezcal/ProcesoMezcal'
import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import Image from 'next/image';
import { Berkshire_Swash } from "next/font/google";

const berkshire = Berkshire_Swash({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],

});

const page = () => {
  return (
    <LayoutPrincipal>


      <div className='bg-cover bg-center w-full h-auto' style={{ backgroundImage: "url('/backgroundImagev2.png')" }}>
        <div className="w-11/12 m-auto ">


          <div className="relative overflow-hidden bg-[#f1f1f1] shadow-2xl mt-40">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
              <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                  <div className={berkshire.className} >
                    <h2 className="text-6xl   text-black text-delinead">Historia </h2>
                    <h2 className="text-7xl  text-[#C1D128]  text-delineado ml-28">del mezcal</h2>


                  </div>
                  <p className="mt-12 text-xl text-black text-justify">Para el pueblo purépecha, Curicaueri nació en el oriente y tomaba la forma del sol,
                    dios del fuego que recorría la bóveda celeste como un halcón. El aire, el agua, la tierra y el fuego son los cuatro elementos
                    a los que rendían reverencia, y Curicaueri era "el gran dios del fuego". Estos mismos elementos son indispensables para la
                    elaboración del elixir de la vida, el Mezcal. Curicaueri, "el gran dios del fuego", y Xaratanga, "diosa de la luna",
                    son los principales dioses en la mitología purépecha; de la unión de ellos nació la armonía y la felicidad, y con ello,
                    todo lo que conocemos en la tierra.</p>
                </div>
                <div>
                  <div className="mt-10">

                    <div className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                      <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">

                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"> {/*Aqui van las primeras dos imágenes, la distribucion de las imágenes son 2-3-2*/}

                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                              {/* <Image  src="/multimedia/historia.jpg" height={300} width={600} alt="Mujeres Mezcaleras de Michoacán"  className="h-full w-full object-cover object-center shadow-lg "/>*/}
                              <img src="/multimedia/historia.jpg" alt="Mujeres Mezcaleras de Michoacán" className="h-full w-full object-cover object-center shadow-lg border-4 " />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              {/* <Image  src="/multimedia/fondo-historia.jpeg" height={300} width={600} alt="Mujeres Mezcaleras de Michoacán"  className="h-full w-full object-cover object-center shadow-lg "/>*/}
                              <img src="/multimedia/fondo-historia.jpeg" alt="Mujeres Mezcaleras de Michoacán" className="h-full w-full object-cover object-center shadow-lg " />
                            </div>
                          </div>


                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"> {/*Aqui van las imágenes centrales , la distribucion de las imágenes son 2-3-2*/}
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              {/* <Image  src="/multimedia/historia3.jpg" height={300} width={600} alt="Mujeres Mezcaleras de Michoacán"  className="h-full w-full object-cover object-center shadow-lg "/>*/}
                              <img src="/multimedia/historia3.jpg" alt="Mujeres Mezcaleras de Michoacán" className="h-full w-full object-cover object-center shadow-lg " />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              {/*<Image  src="/multimedia/fondo-agave.jpeg" height={300} width={600} alt="Mujeres Mezcaleras de Michoacán"  className="h-full w-full object-cover object-center shadow-lg "/>*/}
                              <img src="/multimedia/fondo-agave.jpeg" alt="Mujeres Mezcaleras de Michoacán" className="h-full w-full object-cover object-center shadow-lg " />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              {/*  <Image  src="/multimedia/fondoHorno.jpg" height={300} width={600} alt="Mujeres Mezcaleras de Michoacán"  className="h-full w-full object-cover object-center shadow-lg "/>*/}
                              <img src="/multimedia/fondoHorno.jpg" alt="Mujeres Mezcaleras de Michoacán" className="h-full w-full object-cover object-center shadow-lg " />
                            </div>
                          </div>


                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"> {/*Aqui van las ultimas dos imágenes, la distribucion de las imágenes son 2-3-2*/}
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              {/*<Image  src="/multimedia/historia4.jpg" height={300} width={600} alt="Mujeres Mezcaleras de Michoacán"  className="h-full w-full object-cover object-center shadow-lg "/>*/}
                              <img src="/multimedia/historia4.jpg" alt="Mujeres Mezcaleras de Michoacán" className="h-full w-full object-cover object-center shadow-lg " />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              {/*<Image  src="/multimedia/historia6.jpg" height={300} width={600} alt="Mujeres Mezcaleras de Michoacán"  className="h-full w-full object-cover object-center shadow-lg "/>*/}
                              <img src="/multimedia/historia6.jpg" alt="Mujeres Mezcaleras de Michoacán" className="h-full w-full object-cover object-center shadow-lg " />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 p-10 bg-[#f1f1f1]  shadow-2xl  min-h-max rounded-lg border border-white ">
            <ProcesoMezcal />
          </div>

        </div>

      </div>

    </LayoutPrincipal>


  )
}

export default page