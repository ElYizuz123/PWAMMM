const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();
    try{
        const user = await db.producto.delete({
            where:{
                id_producto: parseInt(data.id_producto),
            },
        })
        console.log("Producto eliminado con éxito")
        return NextResponse.json("Producto eliminado con éxito");
    } catch(e){
        console.error("Error al eliminar el producto: ", e);
        return NextResponse.json("Error al eliminar el producto");
    }
    
    
    
}