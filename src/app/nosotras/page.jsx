"use client"
import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '@/components/Layouts/LayoutPrincipal';
import { Berkshire_Swash } from "next/font/google";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import Image from 'next/image';

import Link from "next/link";
import CarruselAsociadas from '@/components/CarruselAsociadas/CarruselAsociadas';
import ProcesoMezcal from '@/components/ProcesoMezcal/ProcesoMezcal';




const ruta = "/mezcaleras/";
const tienda = "/tienda/";

const berkshire = Berkshire_Swash({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],

});

const images = [
    '/multimedia/15.jpeg',
    '/multimedia/agave 2.jpeg'
];

const imagesVision = [
    '/multimedia/7.jpeg',
    '/multimedia/fondoAsociadas.jpeg',
    '/multimedia/2.jpeg'
];

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

    const [cambiarImagen, setCambiarImagen] = useState(0);
    const [cambiarFoto, setCambiarFoto] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCambiarImagen(prevIndex => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setCambiarFoto(prevIndex => (prevIndex + 1) % images.length);
        }, 9000);

        return () => clearInterval(interval);
    }, []);
    return (
        <LayoutPrincipal>

            {/* Carrusel de la seccion NOSOTRAS, inicia automáticamente y cada 4 segundos cambia*/}
            <div className='bg-cover bg-center w-full h-auto  p-10 ' style={{ backgroundImage: "url('/multimedia/pictogramas2.png')" }}>
                <div className="w-11/12 m-auto ">
                    <CarruselAsociadas />
                </div>
            </div>
            <div className="  bg-cover bg-center w-full h-auto p-12 " style={{ backgroundImage: "url('/backgroundImagev2.png')" }}>
                <div className="w-11/12 m-auto ">





                    <div className="text-center p-8">


                        <div className="flex flex-wrap items-center mt-28 text-center p-6 bg-white rounded-lg shadow-lg ">
                            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                                <img src={images[cambiarImagen]} alt="Mujeres Mezcaleras de Michoacán" className=" w-11/12 inline-block rounded shadow-lg border border-merino-400" />
                            </div>

                            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                                <div className={berkshire.className} >
                                    <p className="text-7xl ml-8 mt-8 md:mt-0 mr-8 sm:text-2x">Misión</p>
                                </div>

                                <hr className=" border-b-4  border-[#F70073] my-4 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10 2xl:ml-10" />

                                <p className="sm:text-lg mt-6 ml-8 mr-8 text-justify">
                                    "Proteger, regular y promover la Denominación de Origen Mezcal dentro de los municipios comprendidos en el estado de Michoacán de Ocampo.
                                    Asimismo, vigilar y observar las especificaciones contenidas en la Norma Oficial Mexicana NOM-070 y sus actualizaciones, evaluando y promoviendo
                                    la incorporación de sistemas para asegurar la sustentabilidad y la calidad en todos los procesos productivos del mezcal. También fomentaremos las
                                    formas tradicionales de producción, resguardando su identidad regional, con el objetivo de conservar y consolidar al Mezcal Michoacano como parte
                                    de nuestra cultura líquida de México."
                                </p>
                            </div>
    




                        </div>


                        <div className="flex flex-wrap items-center mt-28 text-center p-6 bg-white rounded-lg shadow-lg">
                            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                                <img src={imagesVision[cambiarFoto]} alt="Mujeres Mezcaleras de Michoacán" className=" w-11/12 inline-block rounded shadow-lg border border-merino-400" />
                            </div>
                            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                                <div className={berkshire.className} >
                                    <p className="text-7xl *:font-bold mt-8 ml-8 md:mt-0 sm:text-2x ">Visión</p>
                                </div>
                                <hr className=" border-b-4  border-[#F70073] my-4 ml-10 mr-14 sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:mr-4 lg:ml-4 xl:ml-8 xl:mr-8 2xl:mr-10 2xl:ml-10" />

                                <p className="sm:text-lg mt-6 ml-8 mr-8 text-justify">
                                    "Brindar a las asociadas servicios, herramientas, orientación, apoyo técnico y científico que les facilite su desempeño; buscando con ello lograr un mayor desarrollo profesional
                                    y empresarial. Asimismo, vigilar, cuidar, organizar, capacitar y promover entre sus asociadas el cumplimiento de las especificaciones sobre materias primas, el proceso de producción,
                                    reposo, maduración, envasado y comercialización del mezcal para asegurar la sustentabilidad y la calidad en todos los procesos productivos del mezcal, generando empleos directos y economía
                                    en sus regiones."
                                </p>
                            </div>
                        </div>





                    </div>


                </div>

            </div>



        </LayoutPrincipal >
    );
}


export default Page;
