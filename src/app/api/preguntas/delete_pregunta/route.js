const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();
    console.log(data)
    try{
        const user = await db.pregunta_frecuente.delete({
            where:{
                id_pregunta_frencuente: data
            }
        }) 
        console.log("Pregunta eliminada con éxito")
        return NextResponse.json("Pregunta eliminada con éxito");
    } catch(e){
        console.error("Error al eliminar la Pregunta: ", e);
        return NextResponse.json("Error al eliminar la Pregunta");
    }
    
    
    
}