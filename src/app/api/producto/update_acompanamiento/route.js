const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();

    console.log(data);
    try{
        const newProducto = await db.producto.update({
            where: {
                id_producto: data.id_producto,
            },
            data:{
                nombre: data.nombre,
                precio: Number(data.precio),
                descripcion: data.descripcion,
                marca_id_marca: parseInt(data.marca),
                mercadoLibre: data.mercado_lib,
                cantidad: parseInt(data.cantidad),
                fotoUri: data.foto,
                fotoId: data.fotoId
            }

        })
        const newAcompanamiento = await db.acompanamiento.update({
            where:{
                id_acompanamiento : data.id_acompanamiento
            },
            data:{
                gr: data.gr,
            }
        })
        return NextResponse.json("Registrado");
    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }
}