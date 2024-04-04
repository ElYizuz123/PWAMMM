const { NextResponse } = require("next/server")
import {unlink} from 'fs/promises'
import path from 'path'
const fs = require('fs');

export async function POST(request){
    const data = await request.json();
    console.log(data);
    try{
        const filePath = path.join(process.cwd(), 'public', data.source, data.foto)
        await unlink (filePath)
        return NextResponse.json("Arhivo eliminado correctamente");
    }catch(error){
        console.error('Archivo inexistente')
        return NextResponse.json("Arhivo eliminado correctamente");
    }
}