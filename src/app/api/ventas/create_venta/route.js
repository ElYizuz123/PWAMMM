const { NextResponse } = require("next/server");
import db from "@/libs/db"; // Asegúrate de que la importación es correcta
import { encrypt } from "@/libs/encrypt";

export async function POST(request) {
  const { data, productos } = await request.json();
  console.log(productos)

  const encryptedNombre = encrypt(data.nombre);
  const encryptedApellidos = encrypt(data.apellidos);
  const encryptedTelefono = encrypt(data.telefono);
  const encryptedEmail = encrypt(data.email);
  const encryptedCP = encrypt(data.cp);
  const encryptedCalle = encrypt(data.calle);
  const encryptedNumExt = encrypt(data.num_ext);
  const encryptedNumInt = encrypt(data.num_int);
  const encryptedColonia = encrypt(data.colonia);
  const encryptedPoblacion = encrypt(data.ciudad);
  const encryptedRegion = encrypt(data.region);

  try {
    const newVenta = await db.venta_total.create({
      data: {
        total: parseFloat(data.total).toFixed(2),
        envio: data.envio,
        nombre_cliente: encryptedNombre.data,
        apellidos_cliente: encryptedApellidos.data,
        empresa: data.empresa,
        telefono: encryptedTelefono.data,
        email: encryptedEmail.data,
        cp: encryptedCP.data,
        calle: encryptedCalle.data,
        num_ext: encryptedNumExt.data,
        num_int: encryptedNumInt.data,
        colonia: encryptedColonia.data,
        poblacion: encryptedPoblacion.data,
        region: encryptedRegion.data,
        iv_nombre_cliente: encryptedNombre.iv,
        iv_apellidos_cliente: encryptedApellidos.iv,
        iv_telefono: encryptedTelefono.iv,
        iv_email: encryptedEmail.iv,
        iv_cp: encryptedCP.iv,
        iv_calle: encryptedCalle.iv,
        iv_num_ext: encryptedNumExt.iv,
        iv_num_int: encryptedNumInt.iv,
        iv_colonia: encryptedColonia.iv,
        iv_poblacion: encryptedPoblacion.iv,
        iv_region: encryptedRegion.iv,
      },
    });

    const ventasIndividuales = productos.map((producto) =>
      db.venta_individual.create({
        data: {
          venta_total_id_venta: newVenta.id_venta, 
          producto_id_producto: producto.id_producto,
          cantidad_producto: producto.cantidad,
          subtotal: parseFloat(producto.precio * producto.cantidad).toFixed(2),
        }
      })
    );
    
    await Promise.all(ventasIndividuales);

    return NextResponse.json({ message: "Registrado" });
  } catch (error) {
    console.error("Error al registrar la venta", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
