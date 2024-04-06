const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();

    console.log(data);
    try{
        const newAsociada = await db.galeria_foto.create({
            data:{
                foto: data.foto,
                descripcion: data.descripcion,
                fk_id_categoria: parseInt(data.categoria)
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