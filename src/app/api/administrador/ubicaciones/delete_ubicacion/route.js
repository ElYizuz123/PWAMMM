const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();
    console.log(data)
    try{
        const ubicacion = await db.ubicacion.delete({
            where:{
                id_ubicacion: data
            }
        }) 
        console.log("Ubicación eliminada con éxito")
        return NextResponse.json("Ubicación eliminada con éxito");
    } catch(e){
        console.error("Error al eliminar la ubicación: ", e);
        return NextResponse.json("Error al eliminar la ubicación");
    }
    
    
    
}