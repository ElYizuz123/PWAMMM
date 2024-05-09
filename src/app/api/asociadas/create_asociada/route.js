const { NextResponse } = require("next/server")
import db from '@/libs/db'


export const revalidate = 0;
export async function POST(request){
    const data = await request.json();

    console.log(data);
    try{
        const newAsociada = await db.asociada.create({
            data:{
                nombre: data.nombre,
                historia: data.historia,
                foto: data.foto
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