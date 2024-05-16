const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();

    console.log(data);
    try{
        const newProducto = await db.pregunta_frecuente.update({
            where: {
                id_pregunta_frencuente: data.id_pregunta_frecuente,
            },
            data:{
                pregunta: data.pregunta,
                respuesta: data.respuesta,
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