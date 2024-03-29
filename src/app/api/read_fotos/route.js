const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function GET(){
    try{
        const data = await db.galeria_fotos.findMany();
        const dataReversed = data.reverse();
        console.log(dataReversed);
        return NextResponse.json(JSON.stringify(dataReversed));

    }catch(err){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
