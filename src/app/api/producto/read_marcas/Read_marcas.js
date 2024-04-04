const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function Read_marcas(){
    try{
        const data = await db.marca.findMany({
            include: {
                asociada:true
            }
        });
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
