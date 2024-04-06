const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();
    try{
        const res = await db.galeria_categoria.findMany({
            where:{
                id_categoria: data
            }
        });
        return NextResponse.json(JSON.stringify(res));

    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
