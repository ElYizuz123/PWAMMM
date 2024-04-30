const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function Read_ventas(){
    try{
        const data = await db.venta_total.findMany();
        
        const dataReversed = data.reverse();
        return NextResponse.json(JSON.stringify(dataReversed));

    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}