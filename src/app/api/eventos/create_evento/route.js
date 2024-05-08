const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();

    console.log(data);
    try{
        const newAsociada = await db.evento.create({
            data:{
                fecha_fin: data.fecha_fin,
                foto: data.foto,
                nombre: data.nombre, 
                descripcion: data.descripcion
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