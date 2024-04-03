import Image from 'next/image'
import React from 'react'

const Tarjeta_Asociadas = ({id_asociada, nombre, foto}) => {
    return (
        <div className="relative rounded-5 overflow-hidden card-reduced-as rounded-t-[120px]">
            <figure className='flex justify-center items-center'>
                <Image
                    layout='restrict'
                    width={400}
                    height={400}
                    className="object-top object-cover rounded-t-[100px] w-full h-64"
                    src={"/mezcaleras/" + foto}
                    alt="t-shirt"
                />
            </figure>
            <div className='w-full flex justify-center'>
                <div className="min-details text-center">
                    <h1 className="text-xl font-semibold">
                        {nombre}
                    </h1>
                    <button className="absolute bottom-0 right-48 m-2 p-2 text-pink-600 rounded eye-icon">
                        <Image layout='intrinsic' width={40} height={40} src="/emoticons/editar.png" alt="Icono" className='w-8 h-8'  />
                    </button>
                    <button className="absolute bottom-0 right-24 m-2 p-2 text-pink-600 rounded eye-icon">
                        <Image layout='intrinsic' width={40} height={40} src="/emoticons/eliminar.png" alt="Icono" className='w-8 h-8'  />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Tarjeta_Asociadas