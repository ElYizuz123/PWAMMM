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
        const productoEncontrado = listProductos.find(producto => producto.id === element.producto_id_producto)
        if(productoEncontrado){
            productoEncontrado.cantidad+=element.cantidad_producto
        }
    });
    listProductos.sort((a,b) => b.cantidad - a.cantidad)
    return listProductos
}
export async function GET(){
    try{
        const productos = await db.producto.findMany()
        const ventas = await db.venta_individual.findMany()
        var productosVentas = null
        if(ventas){
            productosVentas = listProductosVentas(productos, ventas)
        }
        return NextResponse.json(productosVentas)
        
    }catch(error){
        console.log(error)
        return NextResponse.json("Se ha producido un error", error)
    }
}