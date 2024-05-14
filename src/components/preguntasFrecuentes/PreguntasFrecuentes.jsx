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
        <div className="mb-10 w-full lg:ml-20">
            <p className="lg:mb-2 mb-1
          lg:text-6xl md:text-4xl text-3xl">
                Preguntas Frecuentes</p>
            <br />

            <div className="w-full h-full">
                {preguntas &&
                    preguntas.map((pregunta_frecuente) => (
                        <div key={pregunta_frecuente.id_pregunta_frecuente}
                            className="bg-[#FFFFFF] border border-black rounded-lg mb-5 flex shadow-lg w-11/12">
                            <div class="ml-5 mt-3 mb-5 mr-5 flex flex-col">
                                <p className="lg:text-3xl md:text-2xl text-xl font-bold">-{pregunta_frecuente.pregunta}</p>
                                <br />
                                <p className="lg:text-2xl md:text-xl text-lg">R-{pregunta_frecuente.respuesta}</p>
                            </div>
                        </div>
                    ))}

            </div>

        </div>
    )
}

export default PreguntasFrecuentes