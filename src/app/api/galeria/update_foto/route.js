const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();

    console.log(data);
    try{
        const newProducto = await db.galeria_foto.update({
            where: {
                id_foto: data.id_foto,
            },
            data:{
                foto: data.foto,
                descripcion: data.descripcion,
                fk_id_categoria: parseInt(data.categoria)
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