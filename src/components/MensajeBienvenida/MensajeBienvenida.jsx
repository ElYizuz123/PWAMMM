"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MensajeBienvenida = () => {
    const [mostrarMensaje, setMostrarMensaje] = useState(true);

    const activo = () => {
        setMostrarMensaje(false);
        localStorage.setItem('cukis', 'true');
    };
    {/*
    useEffect(() => {
        const cukis = localStorage.getItem('cukis');

        if (!cukis) {
            setMostrarMensaje(true);
        }
    }, []);
*/}
    useEffect(() => {

        // Ocultar el desplazamiento del cuerpo cuando el modal está activo
        if (mostrarMensaje) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [mostrarMensaje]);
    return (

        <>
            {mostrarMensaje && (




            
                
                <div className="absolute inset-0  z-50 mt-10 h-[1000px]  ">
                    <div className=" bg-gray-900 opacity-50 items-center justify-center"></div>
                      <div className="bg-[#FFE5E1] p-8 rounded shadow-lg flex flex-col items-center justify-center">
                        <Image src={'/multimedia/Logo-Asociacion.png'} height={300} width={175} alt='' className='justify-center' />
                        <div className=" flex flex-col items-center justify-center" style={{ backgroundImage: "url('/cupreata.png')", opacity:'50' }}>

                            <p className="text-4xl font-bold mb-4">BIENVENIDO</p>
                            <p className="text-3xl font-bold mt-4">GRACIAS POR VISITAR NUESTRO SITIO</p>
                            <p className="text-3xl font-bold ">NECESITAMOS VERIFICAR QUE ERES MAYOR</p>
                            <p className="text-3xlfont-bold "> DE EDAD</p>
                            <p className="text-2xl mt-5 ">¿ERES MAYOR DE EDAD?</p>
                            <div className="flex justify-end">
                                <Link href="/">
                                    <button onClick={activo} className="bg-[#66C719] hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" >Sí</button>
                                </Link>
                                <Link href="https://google.com.mx">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >No</button>
                                </Link>
                            </div>

                        <p className="text-sm mt-5 ">Esta información forma parte de nuestro compromiso </p>
                        <p className="text-sm "> inquebrantable de prevenir la venta de alcohol a menores de edad. </p>

                    </div>
                </div>
                </div >
              
            )}

        </>
    );
}

export default MensajeBienvenida