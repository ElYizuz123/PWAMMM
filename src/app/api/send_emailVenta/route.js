import { Resend } from "resend";

const resend = new Resend("re_g8h7iK1P_B4mJ6DE87iJ86au9R8yR724w");

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      productos,
      metodoEnvio,
      total,
      metodoPago,
      nombreCliente,
      apellidoCliente,
      telefono,
      correo,
      numInterior,
      nombreEmpresa,
      pais,
      ciudad,
      colonia,
      cp,
      calle,
      numExterior,
    } = data;

    const productosHTML = productos
      .map(
        (producto) => `
     
      
        <li>
        <strong>Marca:</strong> ${producto.marca} <br>
        <strong>Producto:</strong> ${producto.nombre} ${producto.ml}ml <br>
        <strong>Precio:</strong> $${producto.precio} <br>
        <strong>Cantidad:</strong> x${producto.cantidad} <br>
         </li>
    
     
    `
      )
      .join("");

    const emailResponse = await resend.emails.send({
      from: "PAGINA MUJERES MEZCALERAS <onboarding@resend.dev>",
      to: "aguimtz.2003@gmail.com",
      subject: "NUEVA VENTA",

      html: `
        <h2 style="color: #F70073;">Detalles del Pedido</h2>
        <ul>
          ${productosHTML}

          <li><strong>Método envío:</strong> ${metodoEnvio}</li>
          <li><strong>Total:</strong> $${total}</li>
          <li><strong>Método de pago:</strong> ${metodoPago}</li>
        </ul>
       <h3 style="color: #F70073;">Datos del Cliente</h3>
        <ul>
          <li><strong>Nombre:</strong> ${nombreCliente} ${apellidoCliente}</li>
          <li><strong>Teléfono:</strong> ${telefono}</li>
          <li><strong>Correo:</strong> ${correo}</li>
          ${
            numInterior === " "
              ? `<li><strong>Nombre empresa:</strong> ${nombreEmpresa}</li>`
              : ""
          }
        </ul>
       <h3 style="color:#F70073;">Datos de Dirección</h3>
        <ul>
          
          <li><strong>País:</strong>${pais}</li>
          <li><strong>Ciudad:</strong>  ${ciudad}</li>
          <li><strong>Colonia:</strong> ${colonia}</li>
          <li><strong>CP:</strong> ${cp}</li>
          <li><strong>Calle:</strong> ${calle}</li>
          <li><strong>Numero:</strong>  #${numExterior}</li>
        ${
          numInterior === null
            ? " "
            : `<li><strong>Numero interior:</strong> #${numInterior}</li>`
        }
        </ul>
      `,
    });

    return new Response(JSON.stringify({ message: "Email enviado" }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    // Si ocurrió un error, devuelve una respuesta de error
    return new Response(JSON.stringify({ error: "Error en email" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
