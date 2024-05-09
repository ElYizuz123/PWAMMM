import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

// CLIENTID Y CLIENTSECRET DESDE LA CUENTA DE PAYPAL
const clientId =
  "AWIpFlQyOiGrgDk6kZbFbU2GNEBStOsMAJsnS6IrgeeoRlLSZtpFDP54h9II6vB0StAcv_7H9KFyvSH8";
const clientSecret =
  "EN8E8tN1G84zdFe5Qg4v3-zyjBBSEpstAONSG6pCHPoOS_2WePkvOGQeXQzaeJ1pdX5Ig9M3ua-S-bdd";

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req) {
  const { pagoTotal } = await req.json();

  const request = new paypal.orders.OrdersCreateRequest();

  // EN ESTA PARTE MANDAMOS A PAYPAL LO QUE VA COBRAR
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          //aquí tengo que mandar total
          value: pagoTotal,
        },
        
      },
    ],
  });

  const response = await client.execute(request);

  return NextResponse.json({
    id: response.result.id,
  });
}
