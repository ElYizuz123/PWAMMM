const { NextResponse } = require("next/server")
import db from '@/libs/db'
import {unlink} from 'fs/promises'
import path from 'path'
const fs = require('fs')

export const revalidate = 0;
export async function POST(request) {
    const data = await request.json();
    try {
        const res = await db.galeria_foto.findMany({
            where: {
                fk_id_categoria: data
            }
        });

        const deleteImages = async (image) => {
            try {
                const filePath = path.join(process.cwd(), 'public', 'galeria', image)
                await unlink(filePath)
            } catch (error) {
                console.error('Archivo inexistente')
            }
        }

        res.forEach(element => {
            deleteImages(element.foto)
        });

        const res2 = await db.galeria_categoria.delete({
            where: {
                id_categoria: data
            }
        });

        return NextResponse.json("Categoria eliminada");

    } catch (error) {
        console.error('Error al leer los datos', error)
        return {
            status: 500,
            body: 'Error al obtener los datos'
        }
    }


}