import db from "@/libs/db"
import { NextResponse } from "next/server"


const listProductosVentas = (productos, ventas) =>{
    
    var listProductos = []
    productos.forEach((element, index) => {
        let productoVenta = {
            id:element.id_producto,
            nombre:element.nombre,
            cantidad:0
        }
        listProductos[index] = productoVenta
    });
    ventas.forEach(element => {
        listProductos.
       //listProductos[element.producto_id_producto] += element.cantidad_producto
    });
    console.log(listProductos)
}
export async function GET(){
    try{
        const productos = await db.producto.findMany()
        const ventas = await db.venta_individual.findMany()

        const productosVentas = listProductosVentas(productos, ventas)

        

        return NextResponse.json("respuesta")
        
    }catch(error){
        console.log(error)
        return NextResponse.json("Se ha producido un error", error)
    }
}