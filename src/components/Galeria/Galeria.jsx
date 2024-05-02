"use client"
import Image from 'next/image'
import galeria from '/src/components/Galeria/galeria.css'
import { VscChromeClose } from "react-icons/vsc";
import React, { useEffect, useState } from 'react';

const Galeria = () => {

    //jalar img de la bd
    const [foto, setFoto] = useState(null);
    const readData = async () => {
        const res = await fetch('/api/read_fotos');
        const resJSON = await res.json();
        setFoto(JSON.parse(resJSON));
        console.log(resJSON);
    };

    useEffect(() => {
        readData();
    }, []);

    //para abrir las img
    const [model, setModel] = useState(false);
    const [tempImgSrc, settempImgSrc] = useState('')
    const getImg = (imgSrc) => {
        settempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div>
            <div className={model ? "model open" : "model"}>
                <Image src={tempImgSrc} width={1000} height={1000} />
                <VscChromeClose onClick={() => setModel(false)} />
            </div>


            <div className="gallery">

                {foto &&
                    foto.map((foto, index) => {
                        return (
                            <div className="pics" key={index} onClick={() => getImg("/galeria/" + foto.foto)}>
                                <Image className="animate-fade-in rounded-lg cursor-pointer" loading="lazy"
                                src={"/galeria/" + foto.foto} width={1000} height={1000} style={{ width: '100%' }}></Image>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Galeria