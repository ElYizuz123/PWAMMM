import React from 'react'
import Image from "next/image";




const CardProcesoMezcal = ({titulo,imageUrl,desc,alt}) => {

  return (
    <article className="cardd ">
    <div className="temporary_text w-[300px] h-[300px] object-cover transition-transform duration-300 transform scale-100 hover:scale-125">
        <img src={imageUrl} width={300} height={300} alt={alt}  /> {/*Falta cambiar a Image, por alguna extraña razón se buguea*/}
    </div>
<div className="cardd_content ">
<span className=" cardd_title text-[#F70073] ">{titulo}</span>
<span className="cardd_subtitle">
Proceso de hacer Mezcal 
</span>
  <p className="cardd_description text-justify  text-black font-light mb-2">{desc}</p>
</div>
</article>
    
  );
}

export default CardProcesoMezcal