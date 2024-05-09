const { NextResponse } = require("next/server")
import db from '@/libs/db'
import { decrypt } from '@/libs/decrypt';

export const revalidate = 0;
export async function Read_ventas(){
    try{
        const ventas = await db.venta_total.findMany();
        
        const dataReversed = ventas.reverse();

        dataReversed.forEach(element => {
            element.nombre_cliente = decrypt({data:element.nombre_cliente, iv:element.iv_nombre_cliente})
            element.apellidos_cliente = decrypt({data:element.apellidos_cliente, iv:element.iv_apellidos_cliente})
            element.telefono = decrypt({data:element.telefono, iv:element.iv_telefono})
            element.email = decrypt({data:element.email, iv:element.iv_email})
            element.telefono = decrypt({data:element.cp, iv:element.iv_cp})
            element.calle = decrypt({data:element.calle, iv:element.iv_calle})
            element.num_ext = decrypt({data:element.num_ext, iv:element.iv_num_ext})
            element.num_int = decrypt({data:element.num_int, iv:element.iv_num_int})
            element.colonia = decrypt({data:element.colonia, iv:element.iv_colonia})
            element.poblacion = decrypt({data:element.poblacion, iv:element.iv_poblacion})
            element.region = decrypt({data:element.region, iv:element.iv_region})
            element.cp = decrypt({data:element.cp, iv:element.iv_cp})
        });
        return NextResponse.json(JSON.stringify(dataReversed));

    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
