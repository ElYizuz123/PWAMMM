const { NextResponse } = require("next/server");
const crypto = require('crypto');
import db from '@/libs/db'; // Asegúrate de que la importación es correcta

export const revalidate = 0;
function encryptData(data) {
  const algorithm = 'aes-256-cbc';
  const secretKey = process.env.ENCRYPTION_KEY; // Asegúrate de que esta clave está segura y configurada en las variables de entorno
  const iv = crypto.randomBytes(16); // Genera un IV nuevo para cada cifrado

  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return {
    iv: iv.toString('hex'),
    data: encrypted
  };
}

export async function POST(request) {
    const data = await request.json();

    const encryptedNombre = encryptData(data.nombre_cliente);
    const encryptedApellidos = encryptData(data.apellidos_cliente);

    try {
        const newVenta = await db.venta_total.create({
            data: {
                total: Number(data.total),
                status: data.status || "Pendiente",
                envio: parseInt(data.envio),
                nombre_cliente: encryptedNombre.data,
                nombre_cliente_iv: encryptedNombre.iv,
                apellidos_cliente: encryptedApellidos.data,
                apellidos_cliente_iv: encryptedApellidos.iv,
                empresa: data.empresa,
                telefono: data.telefono,
                email: data.email,
                cp: data.cp,
                calle: data.calle,
                num_ext: data.num_ext,
                num_int: data.num_int || null,
                colonia: data.colonia,
                poblacion: data.poblacion,
                region: data.region
            }
        });
        return NextResponse.json({ message: "Registrado", id: newVenta.id_venta });
    } catch (error) {
        console.error('Error al registrar la venta', error);
        return new Response('Error al obtener los datos', { status: 500 });
    }
}
