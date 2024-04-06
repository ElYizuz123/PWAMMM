const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();
    console.log(data)
    try{
        const user = await db.evento.delete({
            where:{
                id_evento: data
            }
        }) 
        console.log("Evento eliminada con éxito")
        return NextResponse.json("Evento eliminada con éxito");
    } catch(e){
        console.error("Error al eliminar la Evento: ", e);
        return NextResponse.json("Error al eliminar la Evento");
    }
    
    
    
}