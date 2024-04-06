const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function read_asociadas(){
    try{
        const data = await db.asociada.findMany();
        console.log(data);
        return NextResponse.json(JSON.stringify(data));

    }catch(err){
        console.error('Error al leer los datos', err)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
