import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const producto = await db.producto.findMany({
      include: {
        marca: true,
      },
    });

    console.log(producto);
    return NextResponse.json(producto);
  } catch (error) {
    console.error("Error al leer los datos", error);
    return {
      status: 500,
      body: "Error al obtener los datos",
    };
  }
}
