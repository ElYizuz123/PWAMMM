"use client"
import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {


    const images = [
        {
            name: 'Argentina Anzo',
            img: '/mezcaleras/ARGENTINA.png',
            review: 'Hola mi nombre es Argentina Anzo y tengo dos marcas de mezcal  '
        },
        { name: 'Delia Garcia', img: '/mezcaleras/DELIA-GARCIA.png', review: 'Hola mi nombre es Argentina Anzo snsknsfskckjnksnkvdnkvknsnkvs' },
        { name: 'Alondra', img: '/mezcaleras/ALONDRA.png', review: 'Hola mi nombre es Argentina Anzo snsknsfskckjnksnkvdnkvknsnkvs' },
        { name: 'Irma Romero', img: '/mezcaleras/IRMA-ROMERO.png', review: 'Hola mi nombre es Argentina Anzo snsknsfskckjnksnkvdnkvknsnkvs' },
        { name: 'Rocio', img: '/mezcaleras/ROCIO.png', review: 'Hola mi nombre es Argentina Anzo snsknsfskckjnksnkvdnkvknsnkvs' },




    ];
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 3000
    }

    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const interval = setInterval(() => {
            slider.slickNext();
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (

        <div className="bg-cover bg-center w-full h-max" style={{ backgroundImage: "url('/multimedia/RECOLECCION.jpg')" }}>
            <div className="w-3/4 m-auto">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className="mt-20 ">
                    <Slider ref={sliderRef} {...settings}>
                        {images.map((d) => (
                            <div className="bg-white h-[700px]  text-black rounded-2xl">
                                <div className="rounded-t-xl  bg-white flex justify-center items-center">
                                    <img src={d.img} alt='' className="h-96 w-11/12 rounded-t-lg rounded-b-none mt-4 " />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4 p-4">
                                    <p className='text-xl font-semibold'>{d.name}</p>
                                    <p className>{d.review}</p>
                                    <button className="bg-pink-700 text-white text-lg px-6 py-1 rounded -xl">Productos</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="mt-4 p-6 bg-[#F1F1F1] bg-opacity-60 text-white rounded-lg border border-white">
                    <br></br>
                    <p className="font-berkshire-swash-regular text-7xl font-semibold text-black mb-4 ml-20">Misión</p>
                    <div className="relative">
                        <hr className="border-t-8 border-b-4 border-[#F70073] my-4 ml-10 mr-14" />
                        <hr className=" absolute inset-0 border-t-2  border-white my-0 ml-10 mr-14 " />

                    </div>
                    <p className='text-4xl text-black ml-10 mr-14 leading-relaxed flex justify-center'> Proteger, regular y promover la Denominación de Origen MEZCAL, dentro de los Municipios comprendidos en el estado de Michoacán de Ocampo, así mismo vigilar y observar las especificaciones contenidas en la Norma Oficial Mexicana NOM-070 y sus actualizaciones, evaluando y promoviendo la incorporación de sistemas para asegurar la sustentabilidad y la calidad en todos los procesos productivos del mezcal. También Fomentaremos las formas tradicionales de producción resguardando su identidad regional, con objeto de conservar y consolidar al Mezcal Michoacano como parte de nuestra CULTURA LIQUIDA DE MEXICO.</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="mt-4 p-4 bg-[#F1F1F1] bg-opacity-60 text-white rounded-xl border border-white">
                    <br></br>
                    <br></br>
                    <p className="font-berkshire-swash-regular text-7xl font-semibold text-black text-right  mb-4 mr-20 ">Visión</p>
                    <div className="relative">
                        <hr className="border-t-8 border-b-4 border-[#F70073] my-4 ml-10 mr-14" />
                        <hr className=" absolute inset-0 border-t-2  border-white my-0 ml-10 mr-14 " />

                    </div>

                    <p className='text-4xl text-black  ml-10 mr-14 leading-relaxed'> Brindar a las asociadas servicios, herramientas, orientación, apoyo técnico y científico que les facilite su desempeño; buscando con ello lograr un mayor desarrollo profesional y empresarial así como vigilar, cuidar, organizar, capacitar y promover entre sus Asociadas, el cumplimiento de las especificaciones sobre materias primas, el proceso de producción, reposo, maduración,

                        envasamiento y comercialización del mezcal para asegurar la sustentabilidad y la calidad en todos los procesos productivos del mezcal, generando empleos directos y economía en sus regiones</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
            </div>




        </div>
    );
}


export default Page;
