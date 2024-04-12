
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss';

import Link from "next/link";
import Image from 'next/image';

const ruta = "/mezcaleras/";
const tienda = "/tienda/";

const CarruselAsociadas = () => {

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
        
                                        <Swiper
                                            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
                                            navigation
                                            pagination={{ clickable: true }}
                                            effect="coverflow"
                                            coverflowEffect={{
                                                rotate: 0,
                                                slideShadows: false,



                                            }}
                                            
                                            spaceBetween={20}
                                            slidesPerView={3}
                                            centeredSlides={true}
                                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                                            

                                        >
            {asociadas && asociadas.map((asociada, index) => {
                {/*La informacion del carrusel como historia, nombre, etc*/ }
                return (
                    <SwiperSlide key={asociada.id_asociada}>

                        <div className="bg-white mt-56  border-[#f70073] h-[533px] w-[395px]  text-black rounded-3xl border-t-2 border-l-2 border-b-2 border-r-2">
                            <div className=" bg-white flex justify-center items-center rounded-t-3xl">
                                <img src={`${ruta}${asociada.foto}`}  alt='' className="h-64 w-11/12 rounded-t-3xl rounded-b-none mt-4 object-cover " />

                            </div>
                            <div className="flex flex-col justify-center items-center gap-4 p-4 ">
                                <p className='text-xl font-extrabold '>{asociada.nombre}</p>
                                <div className=' flex justify-center items-center '>
                                    <hr className="w-[175px] border-t-2 border-[#f70073] custom-shadow " />
                                </div>


                                <p className='text-xs text-justify font-semibold '>{asociada.historia}</p>
                                <Link href={`${tienda}${asociada.id_asociada}`}>
                                    <button className="bg-[#f70073] hover:bg-[#e39abd] hover:scale-105 hover:shadow-lg hover:font-bold text-white text-lg px-6 py-1 rounded -xl">Productos</button>
                                </Link>
                            </div>

                        </div>
                    </SwiperSlide>
                );
            })}
            
          

         
        </Swiper>
       
    )
}

export default CarruselAsociadas