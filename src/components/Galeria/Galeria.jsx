"use client"
import Image from 'next/image'
import galeria from '@/components/Galeria/galeria.css'
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


            <div className="columns-1 gap-1 lg:columns-3 lg:gap-3 md:columns-2 md:gap-2 sm:columns-1 sm:gap-1">
                {foto &&
                    foto.map((foto, index) => {
                        return (
                            <div
                                className="w-full transition-all hover:brightness-125 mb-3 hover:cursor-pointer animate-fade-in"
                                key={index}
                                onClick={() => getImg(foto.fotoUri)}
                            >
                                <img
                                    className="w-full rounded-xl"
                                    src={foto.fotoUri}
                                    style={{ width: "100%" }}
                                ></img>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Galeria