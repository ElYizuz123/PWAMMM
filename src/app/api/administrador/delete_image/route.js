const { NextResponse } = require("next/server")
import { deleteImageFile } from '@/libs/cloudinary';
import {unlink} from 'fs/promises'
import path from 'path'
const fs = require('fs');

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();
    console.log(data);
    try{
        await deleteImageFile (data.foto)
        return NextResponse.json("Arhivo eliminado correctamente");
    }catch(error){
        console.error('Archivo inexistente')
        return NextResponse.json("Arhivo eliminado correctamente");
    }
}