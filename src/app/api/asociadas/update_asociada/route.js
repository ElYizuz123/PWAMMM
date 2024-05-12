const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();

    console.log(data);
    try{
        const newProducto = await db.asociada.update({
            where: {
                id_asociada: data.id_asociada,
            },
            data:{
                nombre: data.nombre,
                historia: data.historia,
                fotoUri: data.foto,
                fotoId: data.fotoId
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