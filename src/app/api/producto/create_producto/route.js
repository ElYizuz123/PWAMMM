const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();

    console.log(data);
    try{
        const newProducto = await db.producto.create({
            data:{
                nombre: data.nombre.toUpperCase(),
                precio: Number(data.precio),
                descripcion: data.descripcion,
                foto: data.foto, 
                marca_id_marca: parseInt(data.marca),
                mercadoLibre: data.mercado_lib,
                cantidad: parseInt(data.cantidad),
            }
        })
        const newBotella = await db.botella.create({
            data:{
                id_producto: newProducto.id_producto,
                tipo_agave: data.tipo_agave,
                cantidad_alcohol: parseInt(data.cantidad_alcohol),
                ml: Number(data.ml),
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