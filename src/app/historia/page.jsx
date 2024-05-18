import React from "react";
import ProcesoMezcal from '@/components/Historia/ProcesoMezcal/ProcesoMezcal'
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

    
        <div className="w-11/12 m-auto fondo-nosotras">
          <div className="relative overflow-hidden bg-[#f1f1f1] shadow-2xl mt-40">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
              <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                  <div className={berkshire.className} >
                    <h2 className="text-4xl mx-8 sm:mx-8 md:mx-16 lg:mx-8  xl:mx-8   2xl:mx-8 md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl text-black text-delinead ">Historia </h2>
                    <h2 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl text-[#C1D128] text-delineado ml-5 sm:ml-28 md:ml-28 lg:ml-28">del mezcal</h2>
                  </div>
                  <p className="md:text-base mx-8 mt-10 sm:mx-8 sm:mt-10 md:mx-16 md:mt-10 lg:mx-8 lg:mt-10 xl:mx-8 xl:mt-10 2xl:mx-8 2xl:mt-10 lg:text-xl xl:text-xl text-justify ">
                    Para el pueblo purépecha, Curicaueri nació en el oriente y tomaba la forma del sol,
                    dios del fuego que recorría la bóveda celeste como un halcón. El aire, el agua,
                    la tierra y el fuego son los cuatro elementos a los que rendían reverencia, y Curicaueri era {'"el gran dios del fuego"'}.
                    Estos mismos elementos son indispensables para la
                    elaboración del elixir de la vida, el Mezcal. Curicaueri,{'"el gran dios del fuego"'}, y Xaratanga, {'"diosa de la luna"'},
                    son los principales dioses en la mitología purépecha; de la unión de ellos nació la armonía y la felicidad, y con ello,
                    todo lo que conocemos en la tierra.</p>
                </div>
                <div>
                  <div className="mt-10">

                    <div className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                      <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-3 sm:space-3 md:space-x-3 lg:space-x-6 xl:space-x-6 2xl:space-x-6">

                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"> {/*Aqui van las primeras dos imágenes, la distribucion de las imágenes son 2-3-2*/}

                            <div className="h-34 w-24 sm:h-34 sm:w-24 md:h-34 md:w-24 lg:h-60 lg:w-35 xl:h-60 xl:w-35 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 border border-gray-300  md:translate-y-36 lg:translate-y-0 xl:-translate-x-0 2xl:translate-y-0 ">
                           
                              <Image src="/multimedia/historia.jpg" alt="Mujeres Mezcaleras de Michoacán 1" width={300} height={600} style={{width: '100%',height: '100%', objectFit: 'cover',  objectPosition: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}/>
                            </div>
                           {/* <div className="h-64 w-44 overflow-hidden rounded-lg md:translate-y-10">
                             
                              <Image src="/multimedia/fondo-historia.jpeg" alt="Mujeres Mezcaleras de Michoacán 2" width={300} height={600} style={{width: '100%',height: '100%', objectFit: 'cover',  objectPosition: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                            </div>*/}
                          </div>


                          <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8"> {/*Aqui van las imágenes centrales , la distribucion de las imágenes son 2-3-2*/}
                            
                            <div className="h-34 w-24 sm:h-34 sm:w-24 md:h-34 md:w-24 lg:h-60 lg:w-35 xl:h-64 xl:w-44 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg md:translate-y-36 lg:translate-y-0 xl:-translate-x-0 2xl:translate-y-0 ">
                             
                              <Image src="/multimedia/fondo-agave.jpeg" alt="Mujeres Mezcaleras de Michoacán 4" width={300} height={600} style={{width: '100%',height: '100%', objectFit: 'cover',  objectPosition: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}  />
                            </div>
                            <div className=" h-34 w-24 sm:h-34 sm:w-24 md:h-34 md:w-24 lg:h-60 lg:w-35 xl:h-64 xl:w-44 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg md:block hidden md:translate-y-36 lg:translate-y-0 xl:-translate-x-0 2xl:translate-y-0">
                              
                              <Image src="/multimedia/fondoHorno.jpg" alt="Mujeres Mezcaleras de Michoacán 5" width={300} height={600} style={{width: '100%',height: '100%', objectFit: 'cover',  objectPosition: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                            </div>
                          </div>


                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"> {/*Aqui van las ultimas dos imágenes, la distribucion de las imágenes son 2-3-2*/}
                            
                            <div className="h-34 w-24 sm:h-34 sm:w-24 md:h-34 md:w-24 lg:h-60 lg:w-35 xl:h-64 xl:w-44 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg  md:translate-y-32 lg:translate-y-0 xl:-translate-x-0 2xl:translate-y-0  ">
                             
                              <Image src="/multimedia/historia6.jpg" alt="Mujeres Mezcaleras de Michoacán 7" width={300} height={600} style={{width: '100%',height: '100%', objectFit: 'cover',  objectPosition: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
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

          <div className="mt-24 p-10 mb-10 bg-[#f1f1f1] relative shadow-2xl  min-h-max rounded-lg border border-white ">
          
          <ProcesoMezcal /> 
          
            
          </div>

        </div>

     

    </LayoutPrincipal>

  )
}

export default page