"use client"
import React, { useState, useEffect, useRef } from 'react';
import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import { Berkshire_Swash } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import Link from "next/link";




const ruta = "/mezcaleras/";
const tienda = "/tienda/";

const berkshire = Berkshire_Swash({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],

});

const Page = () => {

    const [asociadas, setAsociadas] = useState([]);

    useEffect(() => {
        const fetchAsociadas = async () => {
            const response = await fetch("/api/read_asociadas");
            const data = await response.json();
            setAsociadas(data);
        };

        fetchAsociadas();
    }, []);


    return (
        <LayoutPrincipal>
            <div className="bg-cover bg-center w-full h-max" style={{ backgroundImage: "url('/multimedia/RECOLECCION.jpg')" }}>
                <div className="w-5/6 m-auto">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                   
                    <div className="mt-10 "> {/* Carrusel de la seccion NOSOTRAS, inicia automáticamente y cada 4 segundos cambia*/}
                        <Swiper    
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            effect={'coverflow'}
                            loop={true}
                            spaceBetween={40}
                            slidesPerView={3}

                            centeredSlides={true}
                            grabCursor={true}
                            coverflowEffect={{
                                rotate: 0,
                                slideShadows: false,
                            }}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                            }}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}


                            className="coverflow"
                        >
                            {asociadas && asociadas.map((asociada, index) => {  {/*La informacion del carrusel como historia, nombre, etc*/}
                                return (
                                    <SwiperSlide key={asociada.id_asociada}>

                                        <div className="bg-white  h-[720px] w-[380px]  text-black rounded-2xl border-[#164a1b] border-t-2 border-l-2 border-b-2 border-r-2">
                                            <div className="rounded-t-xl  bg-white flex justify-center items-center">
                                                <img src={`${ruta}${asociada.foto}`} alt='' className="h-96 w-11/12 rounded-t-lg rounded-b-none mt-4 " />
                                            </div>
                                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                                <p className='text-xl font-semibold'>{asociada.nombre}</p>
                                                <p className='text-xs'>{asociada.historia}</p>
                                                <Link href={`${tienda}${asociada.id_asociada}`}>
                                                <button className="bg-[#f70073] hover:bg-[#e39abd]  text-white text-lg px-6 py-1 rounded -xl">Productos</button>
                                                </Link>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <br></br>
                            <br></br>

                            <div className="slider-controler">
                                <div className="swiper-button-prev slider-arrow">
                                    <img src="/multimedia/flechaIzquierda.png" height={200} name="arrow-back-outline" />
                                </div>
                                <div className="swiper-button-next slider-arrow">
                                    <img src="/multimedia/flechaDerecho.png" height={200} name="arrow-forward-outline" />
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </Swiper>



                    </div>
                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="mt-4 p-6 bg-[#F1F1F1] bg-opacity-60 text-white rounded-lg border border-white  h-[760px] ">
                        <br></br>
                        
                        <div className={berkshire.className} >
                            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-semibold text-black mb-4 ml-20 sm:ml-7 md:ml-8 lg:ml-12 xl:ml-17 2xl:ml-20">Misión</p>
                        </div>
                        <div className="relative">
                            <hr className="border-t-8 border-b-4 border-[#F70073] my-4 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10 2xl:ml-10" />
                            <hr className=" absolute inset-0 border-t-2  border-white my-0 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10  2xl:ml-10" />
                           

                        </div>
                        <p className='text-xs  md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10  2xl:ml-10 leading-normal sm:text-xl sm:leading-normal md:text-2xl md:leading-normal lg:text-3xl lg:leading-relaxed xl:text-4xl xl:leading-relaxed 2xl:text-4xl 2xl:leading-relaxed text-black  flex justify-center'> Proteger, regular y promover la Denominación de Origen MEZCAL, dentro de los Municipios comprendidos en el estado de Michoacán de Ocampo, así mismo vigilar y observar las especificaciones contenidas en la Norma Oficial Mexicana NOM-070 y sus actualizaciones, evaluando y promoviendo la incorporación de sistemas para asegurar la sustentabilidad y la calidad en todos los procesos productivos del mezcal. También Fomentaremos las formas tradicionales de producción resguardando su identidad regional, con objeto de conservar y consolidar al Mezcal Michoacano como parte de nuestra CULTURA LIQUIDA DE MEXICO.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="mt-4 p-4 bg-[#F1F1F1] bg-opacity-60 text-white rounded-xl border border-white h-[760px]">
                        <br></br>
                        <br></br>
                        <div className={berkshire.className} >
                            <p className="text-4xl text-right sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-semibold text-black mb-4 ml-20 sm:ml-7 md:ml-8 lg:ml-12 xl:ml-17 2xl:ml-20 ">Visión</p>
                        </div>
                        <div className="relative">
                            <hr className="border-t-8 border-b-4 border-[#F70073] my-4 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10 2xl:ml-10" />
                            <hr className=" absolute inset-0 border-t-2  border-white my-0 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10  2xl:ml-10 " />

                        </div>

                        <p className='text-xs  md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10  2xl:ml-10 leading-normal sm:text-xl sm:leading-normal md:text-2xl md:leading-normal lg:text-3xl lg:leading-relaxed xl:text-4xl xl:leading-relaxed 2xl:text-4xl 2xl:leading-relaxed text-black  flex justify-center'> Brindar a las asociadas servicios, herramientas, orientación, apoyo técnico y científico que les facilite su desempeño; buscando con ello lograr un mayor desarrollo profesional y empresarial así como vigilar, cuidar, organizar, capacitar y promover entre sus Asociadas, el cumplimiento de las especificaciones sobre materias primas, el proceso de producción, reposo, maduración,

                            envasamiento y comercialización del mezcal para asegurar la sustentabilidad y la calidad en todos los procesos productivos del mezcal, generando empleos directos y economía en sus regiones.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </LayoutPrincipal >
    );
}


export default Page;
