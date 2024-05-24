const { NextResponse } = require("next/server")
import { deleteImageFile } from '@/libs/cloudinary';
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();
    console.log(data)
    try{
        const marcas = await db.marca.findMany({
            where:{
                Asociada_id_asociada:data
            }
        })
        if(marcas){
            marcas.map(async marca=>{
                const productos = await db.producto.findMany({
                    where:{
                        marca_id_marca:marca.id_marca
                    }
                })
                if(productos){
                    await productos.map(producto =>{
                        deleteImageFile(producto.fotoId)
                    })
                }
            })
        }

        const user = await db.asociada.delete({
            where:{
                id_asociada: data
            }
        }) 
        console.log("Asociada eliminada con éxito")
        return NextResponse.json("Asociada eliminada con éxito");
    } catch(e){
        console.error("Error al eliminar la Asociada: ", e);
        return NextResponse.json("Error al eliminar la Asociada");
    }
    
    
    
}