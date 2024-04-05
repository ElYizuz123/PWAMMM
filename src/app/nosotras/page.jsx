"use client"
import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import { Berkshire_Swash } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import Link from "next/link";
import CarruselAsociadas from '@/components/CarruselAsociadas/CarruselAsociadas';




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
         
            <div className="bg-cover bg-center w-full h-auto " style={{ backgroundImage: "url('/multimedia/agave.jpeg')" }}>
                <div className="w-11/12 m-auto ">

                    <div className=""> {/* Carrusel de la seccion NOSOTRAS, inicia automáticamente y cada 4 segundos cambia*/}
                        <CarruselAsociadas />
                    </div>

                    
                        <div className="mt-24 p-6 bg-[#F1F1F1] bg-opacity-60 text-white rounded-lg border border-white  h-[550px] ">
                            <br></br>
                    
                        <div className={berkshire.className} >
                            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-semibold text-black mb-4 ml-20 sm:ml-7 md:ml-8 lg:ml-12 xl:ml-17 2xl:ml-20 text-delinead">Misión</p>
                        </div>
                        <div className="relative">
                            <hr className="border-t-8 border-b-4  border-[#F70073] my-4 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10 2xl:ml-10" />
                            <hr className=" absolute inset-0 border-t-2  border-white my-0 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10  2xl:ml-10" />


                        </div>
                        <p className='text-3xl ml-8 mr-8 text-black leading-relaxed text-justify'> Proteger, regular y promover la Denominación de Origen MEZCAL, dentro de los Municipios comprendidos en el estado de Michoacán de Ocampo, así mismo vigilar y observar las especificaciones contenidas en la Norma Oficial Mexicana NOM-070 y sus actualizaciones, evaluando y promoviendo la incorporación de sistemas para asegurar la sustentabilidad y la calidad en todos los procesos productivos del mezcal. También Fomentaremos las formas tradicionales de producción resguardando su identidad regional, con objeto de conservar y consolidar al Mezcal Michoacano como parte de nuestra CULTURA LIQUIDA DE MÉXICO.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="mt-4 p-4 bg-[#F1F1F1] bg-opacity-60 text-white rounded-xl border border-white h-[550px]">
                        <br></br>
                        <br></br>
                        <div className={berkshire.className} >
                            <p className="text-4xl text-right sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-semibold text-black mb-4 ml-20 mr-10 sm:ml-7 md:ml-8 lg:ml-8 xl:ml-17 2xl:ml-20 text-delinead">Visión</p>
                        </div>
                        <div className="relative">
                            <hr className="border-t-8 border-b-4 border-[#F70073] my-4 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10 2xl:ml-10" />
                            <hr className=" absolute inset-0 border-t-2  border-white my-0 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10  2xl:ml-10 " />

                        </div>

                        <p className='text-3xl ml-8 mr-8 text-black leading-relaxed text-justify'> Brindar a las asociadas servicios, herramientas, orientación, apoyo técnico y científico que les facilite su desempeño; buscando con ello lograr un mayor desarrollo profesional y empresarial así como vigilar, cuidar, organizar, capacitar y promover entre sus Asociadas, el cumplimiento de las especificaciones sobre materias primas, el proceso de producción, reposo, maduración,

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
