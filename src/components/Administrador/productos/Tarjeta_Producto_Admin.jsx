import Link from 'next/link'
import React from 'react'

const Tarjeta_Producto_Admin = ({id_producto, nombre, ml, marca, precio, foto, updatePage, editProduct}) => {

    const data = {
        "id_producto": id_producto,
        "foto" : foto,
        "source" : "botellas"
    }

    const handleEdit = () => {
        editProduct(id_producto)
    }
    const deleteProduct = (async () => {
        const deletedImage = await fetch('/api/delete_image', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        const resDeletedImageJSON = await deletedImage.json()
        if(resDeletedImageJSON=='Arhivo eliminado correctamente'){
            const res = await fetch('/api/producto/delete_producto', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'aplication/json'
                }
            })
            const resJSON = await res.json()
            console.log(resJSON)
            if (resJSON == "Producto eliminado con éxito") {
                updatePage()
            }
        }
    })

    return (
        <div className="relative rounded-5 overflow-hidden card-reduced">
            <button onClick={handleEdit} className="absolute top-0 right-0 m-2 p-2 text-pink-600 rounded eye-icon">
                <img src="\emoticons\editar.png" alt="Icono" width="32" height="32" />
            </button>
            <button onClick={deleteProduct} className="absolute top-10 right-0 m-2 p-2 text-pink-600 rounded eye-icon">
                <img src="\emoticons\eliminar.png" alt="Icono" width="32" height="32" />
            </button>
            <figure>
                <img
                    className="object-contain"
                    src={"\\botellas\\"+foto}
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