import db from "@/libs/db";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
  try {
    const producto = await db.botella.findMany({
      include: {
        producto: {
          include: {
            marca: true
          }
        }
      }
    });

    return NextResponse.json(producto);
  } catch (error) {
    console.error("Error al leer los datos", error);
    return {
      status: 500,
      body: "Error al obtener los datos",
    };
  }
}
