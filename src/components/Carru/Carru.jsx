"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';




const images = [
 '/eventos/1.jpg','/eventos/2.jpg','/eventos/3.jpg','/eventos/4.jpg','/eventos/5.jpg','/eventos/6.jpg','/eventos/7.jpg',
 
];





const Carru =()=>{   
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
    return (
      <div className=" z-10 container mx-auto w-96 h-96 relative bg-gray-100 shadow-md">
      <div className="flex justify-between absolute bottom-4 left-0 right-0">
        <button
          className="w-12 h-12 rounded-full border border-gray-500 transition duration-500 hover:bg-green-500 hover:text-white"
          onClick={goToPrevSlide}
        >
          Atras
        </button>
        <button
          className="w-12 h-12 rounded-full border border-gray-500 transition duration-500 hover:bg-green-500 hover:text-white"
          onClick={goToNextSlide}
        >
         Adelante
        </button>
      </div>
      <div className="w-max mt-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500 absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="content bg-gray-800 bg-opacity-50 absolute top-1/2 left-10 transform -translate-y-1/2 p-4 rounded-lg">
              <div className="text-white text-lg font-bold mb-2">LUNDEV</div>
              <div className="text-white mb-2">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat
                tieu
              </div>
              <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600">
                See more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  }
  



export default Carru