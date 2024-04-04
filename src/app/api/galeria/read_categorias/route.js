const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function GET(){
    try{
        const res = await db.galeria_categoria.findMany({
            include:{
                galeria_foto: true
            }
        });
        console.log(res);
        return NextResponse.json(JSON.stringify(res));

    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
