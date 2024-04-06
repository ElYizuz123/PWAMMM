const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();

    console.log(data);
    try{
        const newProducto = await db.galeria_categoria.update({
            where: {
                id_categoria: data.id_categoria,
            },
            data:{
                categoria: data.categoria
            }
        })
        return NextResponse.json("Registrada");
    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }
}