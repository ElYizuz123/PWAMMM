
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
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
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            effect={'coverflow'}
                            loop={true}
                            spaceBetween={10}
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

                                        <div className="bg-white  h-[533px] w-[395px]  text-black rounded-3xl border-t-2 border-l-2 border-b-2 border-r-2">
                                            <div className=" bg-[#d1f6d4] flex justify-center items-center rounded-t-3xl">
                                                <Image src={`${ruta}${asociada.foto}`} width={325} height={490} alt='' className="h-64 w-11/12 rounded-t-3xl rounded-b-none mt-4 " />
                                              
                                            </div>
                                            <div className="flex flex-col justify-center items-center gap-4 p-4 ">
                                                <p className='text-xl font-extrabold '>{asociada.nombre}</p>
                                                <div className=' flex justify-center items-center '> 
                                                    <hr className="w-[175px] border-t-2 border-[#f70073] custom-shadow " />
                                                    </div>
                                               
                                                
                                                <p className='text-xs text-justify font-semibold '>{asociada.historia}</p>
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

                            <div className="slider-controler ">
                                <div className="swiper-button-prev slider-arrow">
                                    <img src="/multimedia/flechaIzquierda.png" height={200} name="arrow-back-outline" />
                                </div>
                                <div className="swiper-button-next slider-arrow">
                                    <img src="/multimedia/flechaDerecho.png" height={200} name="arrow-forward-outline" />
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </Swiper>

  )
}

export default CarruselAsociadas