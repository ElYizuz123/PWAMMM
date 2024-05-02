

  import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
   const { total, metodoPago, metodoEnvio, 
    nombreCliente, apellidoCliente, nombreEmpresa, telefono, correo, 
    calle, colonia, ciudad, cp, numExterior, numInterior, pais,productos} = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "aguimtz.2003@gmail.com",
        pass: "dwgt bnzs xygg bqpm",
      },
    });
    
    const productosHTML =  productos.map((producto) => `
     
      
        <li>
        <strong>Marca:</strong> ${producto.marca} <br>
        <strong>Producto:</strong> ${producto.nombre} ${producto.ml}ml <br>
        <strong>Precio:</strong> $${producto.precio} <br>
        <strong>Cantidad:</strong> x${producto.cantidad} <br>
         </li>
    
     
    `).join('') ;

    // Construir el HTML completo para el correo electrónico
    const mailOption = {
      from: "Pagína web <aguimtz.2003@gmail.com>",
      to: "aguimtz.2003@gmail.com",
      subject: "NUEVA VENTA ",
      //hace un mapeo peroooo ya vi, no esta igualando los productos con la información osea no se de donde los saca
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
          ${numInterior === " " ? `<li><strong>Nombre empresa:</strong> ${nombreEmpresa}</li>`: ""}
        </ul>
       <h3 style="color:#F70073;">Datos de Dirección</h3>
        <ul>
          
          <li><strong>País:</strong>${pais}</li>
          <li><strong>Ciudad:</strong>  ${ciudad}</li>
          <li><strong>Colonia:</strong> ${colonia}</li>
          <li><strong>CP:</strong> ${cp}</li>
          <li><strong>Calle:</strong> ${calle}</li>
          <li><strong>Numero:</strong>  #${numExterior}</li>
        ${numInterior === null ? " " :  `<li><strong>Numero interior:</strong> #${numInterior}</li>`}
        </ul>
      `
    };

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Se han guardado sus datos." }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Ha ocurrido un error al enviar el correo." }, { status: 500 })
  }
}