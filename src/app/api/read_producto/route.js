import db from "@/libs/db";
import next from "next";
import { NextResponse } from "next/server";

export async function GET() {
  try {
  const productos = await db.producto.findMany({
    include: {
        producto_informacion : true, marca:true, // Esto incluirá los detalles del producto
        },
    });

   const productosConImagenBase64 = productos.map((producto) => {
      if (producto.foto) {
        // Asumiendo que 'foto' es un Buffer; de lo contrario, ajusta según sea necesario
        const fotoBase64 = Buffer.from(producto.foto).toString('base64');
        return {
          ...producto,
          foto: `data:image/png;base64,${fotoBase64}`, // Ajusta el MIME type según corresponda
        };
      }
      return producto;
    });
    return NextResponse.json(productosConImagenBase64)
  } catch (error) {
    console.error("Error al leer los datos", error);
    return {
      status: 500,
      body: "Error al obtener los datos",
    };
  }
}
