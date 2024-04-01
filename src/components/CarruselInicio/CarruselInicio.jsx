"use client"
import React, { useState, useEffect } from 'react';
import './style.css';





const carruselInicio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = ['/eventos/1.jpeg', '/eventos/2.jpeg', '/eventos/3.jpeg', '/eventos/4.jpeg','/eventos/5.jpeg','/eventos/6.jpeg','/eventos/7.jpeg'];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 3000); 
  
      return () => clearInterval(interval);
    }, []);
  
    const handlePrevClick = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };
  
    const handleNextClick = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };
  return (
    <div className='contenedor'>
      <div className='slide'>
        {images.map((image, index) => (
          <div key={index} className={`item ${index === currentSlide ? 'active' : ''}`} style={{ backgroundImage: `url(${image})` }}>
            <div className='content'>
              <div className='name'>Image {index + 1}</div>
              <div className='des'>Lorem ipsum dolor,sit ame</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className='button'>
        <button className='prev' onClick={handlePrevClick}>
          ATRAS
        </button>
        <button className='next' onClick={handleNextClick}>
          Adelante
        </button>
      </div>
    </div>
  );

}

export default carruselInicio