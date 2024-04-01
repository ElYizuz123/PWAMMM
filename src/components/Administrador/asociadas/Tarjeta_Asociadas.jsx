import React from 'react'

const Tarjeta_Asociadas = () => {
    return (
        <div className="relative rounded-5 overflow-hidden card-reduced-as rounded-t-[120px]">
            <figure>
                <img
                    className="object-cover rounded-t-[100px]"
                    src="\Doña Delia_1.png"
                    alt="t-shirt"
                />
            </figure>
            <div className='w-full flex justify-center'>
                <div className="min-details text-center">
                    <h1 className="text-xl font-semibold">
                        Don Mateo 750ml <span className="text-">Don Mateo</span>
                    </h1>
                    <button className="absolute bottom-0 right-48 m-2 p-2 text-pink-600 rounded eye-icon">
                        <img src="\emoticons\editar.png" alt="Icono" width="32" height="32" />
                    </button>
                    <button className="absolute bottom-0 right-24 m-2 p-2 text-pink-600 rounded eye-icon">
                        <img src="\emoticons\eliminar.png" alt="Icono" width="32" height="32" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Tarjeta_Asociadas