const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();

    console.log(data);
    try{
        const newProducto = await db.marca.update({
            where: {
                id_marca: data.id_marca,
            },
            data:{
                nombre: data.nombre,
                Asociada_id_asociada: Number(data.asociada),
                tipo: Number(data.tipo)
            }

        })
        return NextResponse.json("Actualizado");
    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }
}