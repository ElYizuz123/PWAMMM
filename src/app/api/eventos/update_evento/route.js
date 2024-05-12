const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();

    console.log(data);
    try{
        const newProducto = await db.evento.update({
            where: {
                id_evento: data.id_evento,
            },
            data:{
                fecha_fin: data.fecha_fin,
                fotoUri: data.foto,
                fotoId: data.fotoId,
                nombre: data.nombre,
                descripcion: data.descripcion
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