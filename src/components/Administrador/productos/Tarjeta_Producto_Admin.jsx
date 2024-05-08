import Image from 'next/image'
import Link from 'next/link'
import Swal from 'sweetalert2'


const Tarjeta_Producto_Admin = ({ id_producto, nombre, ml, marca, precio, foto, updatePage, editProduct, isAcompanamiento}) => {

    //Data para el formulario
    const data = {
        "id_producto": id_producto,
        "foto": foto,
        "source": "productos"
    }


    //Abre el editor de producto
    const handleEdit = () => {
        editProduct(id_producto)
    }

    //Elimina el producto
    const deleteProduct = (async () => {
        const deletedImage = await fetch('/api/delete_image', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        const resDeletedImageJSON = await deletedImage.json()
        if (resDeletedImageJSON == 'Arhivo eliminado correctamente') {
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
                Swal.fire({
                    title: "Eliminado!",
                    text: "El producto fue eliminado con éxito",
                    icon: "success"
                });
                updatePage()
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salió mal!",
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal!",
            });
        }
    })

    //Alerta para evitar borrado accidental 
    const handleDelete = () => {
        Swal.fire({
            title: "Eliminar producto",
            text: "Esta acción no puede ser revertida!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Si, borrar!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct()
            }
        });
    }

    return (
        <div className="relative rounded-5 overflow-hidden card-reduced">
            <button onClick={handleEdit} className="absolute top-0 right-0 m-2 p-2 text-pink-600 rounded eye-icon">
                <Image src="/emoticons/editar.png" alt="Icono" width={32} height={32} />
            </button>
            <button onClick={handleDelete} className="absolute top-10 right-0 m-2 p-2 text-pink-600 rounded eye-icon">
                <Image src="/emoticons/eliminar.png" alt="Icono" width={32} height={32} />
            </button>
            <figure className='flex justify-center'>
                <Image
                    className="object-cover w-48 h-72"
                    height={400}
                    width={400}
                    id='foto_botella'
                    src={"/productos/" + foto}
                    alt="botella"
                />
            </figure>
            <div className='absolute bottom-5 w-full flex justify-center'>
                <div className="min-details text-center">
                    {isAcompanamiento && 
                    <h1 className="text-xl font-semibold">
                    {nombre} {ml} Gr <span className="text-">({marca})</span>
                    </h1>}
                    {!isAcompanamiento && <h1 className="text-xl font-semibold">
                        {nombre} {ml} ml <span className="text-">({marca})</span>
                    </h1>}
                    <h1 className="price font-semibold">${precio}</h1>
                </div>
            </div>

        </div>
    )
}

export default Tarjeta_Producto_Admin