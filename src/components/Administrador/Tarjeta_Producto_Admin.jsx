import Link from 'next/link'
import React from 'react'

const Tarjeta_Producto_Admin = ({id_producto, nombre, ml, marca, precio, foto}) => {
    return (
        <div className="relative rounded-5 overflow-hidden card-reduced">
            <button className="absolute top-0 right-0 m-2 p-2 text-pink-600 rounded eye-icon">
                <img src="\emoticons\editar.png" alt="Icono" width="32" height="32" />
            </button>
            <button className="absolute top-10 right-0 m-2 p-2 text-pink-600 rounded eye-icon">
                <img src="\emoticons\eliminar.png" alt="Icono" width="32" height="32" />
            </button>
            <figure>
                <img
                    className="object-cover"
                    src="\botellas\bottle_don_mateo.jpg"
                    alt="t-shirt"
                />
            </figure>
            <div className='w-full flex justify-center'>
                <div className="min-details text-center">
                    <h1 className="text-xl font-semibold">
                        {nombre} {ml} ml <span className="text-">({marca})</span>
                    </h1>
                    <h1 className="price font-semibold">${precio}</h1>
                </div>
            </div>

        </div>
    )
}

export default Tarjeta_Producto_Admin