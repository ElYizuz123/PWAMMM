"use client"
import React, { useEffect, useState } from 'react';

const PreguntasFrecuentes = () => {

    const [preguntas, setPreguntas] = useState(null);
    const readData = async () => {
        const res = await fetch('/api/read_preguntasFrecuentes');
        const resJSON = await res.json();
        setPreguntas(JSON.parse(resJSON));
        console.log(resJSON);
    };

    useEffect(() => {
        readData();
    }, []);

    return (
        <div className="mb-10 ml-20 mr-20 flex justify-center items-start">

            <div className="w-full h-full">
                {preguntas &&
                    preguntas.map((pregunta_frecuente) => (
                        <div key={pregunta_frecuente.id_pregunta_frecuente}
                            className="bg-[#FFFFFF] border border-black rounded-lg mb-5 flex">
                            <div class="ml-5 mt-3 mb-5 mr-5 flex flex-col">
                                <p className="text-3xl font-bold">-{pregunta_frecuente.pregunta}-</p>
                                    <br/>
                                <p className="text-2xl">R-{pregunta_frecuente.respuesta}</p>
                            </div>
                        </div>
                    ))}

            </div>

        </div>
    )
}

export default PreguntasFrecuentes