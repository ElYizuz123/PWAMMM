"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { ProductContext } from "@/context/ProductContext";
import { IoClose } from "react-icons/io5";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

//en esta funcion recibo el trigger
function FormaPago({ transferencia, setTransferencia, paypal, setPaypal }) {
  const { productos, setIsEnvio, setMetodoPago, enviarDataApi } = useContext(ProductContext);

  const [shippingMethod, setShippingMethod] = useState("envio");
  const [paymentMethod, setPaymentMethod] = useState("transferencia");
  const [confirmMethod, setConfirmMethod] = useState([]);

  const envio = 199;
  const totalVenta = productos.reduce(
    (total, producto) => total + producto.cantidad * producto.precio,
    0
  );

  const pagoTotal =
    shippingMethod === "recogerTienda" ? totalVenta : totalVenta + envio;

  const handleClosePopup = () => {
    setPaypal(false);
    setTransferencia(false);
  };
  const handleShippingChange = (event) => {
    setIsEnvio(event.target.value === "recogerTienda" ? 0 : 1);
    setShippingMethod(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setMetodoPago(event.target.value === "payPal" ? 1 : 0);
    setPaymentMethod(event.target.value);
  };
  const handleConfirmChange = (event) => {
    const value = event.target.value;
    setConfirmMethod((prevMethods) =>
      prevMethods.includes(value)
        ? prevMethods.filter((method) => method !== value)
        : [...prevMethods, value]
    );
  };

  return (
    <div className=" px-4 items-center space-x-4 mt-4">
      <div className="">
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-2 items-center
            text-xs sm:text-xs md:text-xs
            lg:text-bsm xl:text-sm 2xl:text-sm
            ">
            <h3 className="text-black font-semibold">SUB-TOTAL:</h3>
            <p className="text-green-700 font-bold justify-self-end">
              ${totalVenta}
            </p>
          </div>
        </div>
        {/*ENVÍO*/}
        <div className="grid grid-cols-1 gap-4 my-4">
          {/* <h3 className="text-black font-semibold text-xl">ENVÍO</h3> */}
          <div className="grid grid-cols-1 gap-2">
            <label className="text-xs sm:text-xs md:text-xs
              lg:text-sm xl:text-sm 2xl:text-sm">
              <input
                type="radio"
                value="envio"
                checked={shippingMethod === "envio"}
                onChange={handleShippingChange}
                className="form-radio text-[#F70073]
                w-[13px] sm:w-[13px] md:w-[13px] lg:w-4 xl:text-w-4 2xl:w-4
                h-[13px] sm:h-[13px] md:h-[13px] lg:h-4 xl:text-h-4 2xl:h-4"
              />
              <span className="ml-2">Envío (Todo México) : $199.00</span>
            </label>
            <label className="text-xs sm:text-xs md:text-xs
              lg:text-sm xl:text-sm 2xl:text-sm">
              <input
                type="radio"
                value="recogerTienda"
                checked={shippingMethod === "recogerTienda"}
                onChange={handleShippingChange}
                className="form-radio text-[#F70073]
                w-[13px] sm:w-[13px] md:w-[13px] lg:w-4 xl:text-w-4 2xl:w-4
                h-[13px] sm:h-[13px] md:h-[13px] lg:h-4 xl:text-h-4 2xl:h-4"
              />
              <span className="ml-2">Recoger en tienda (Morelia, Mich.)</span>
            </label>
          </div>
        </div>
        {/*subtotal + btnradio*/}
        <div className="grid grid-cols-2 items-center">
          <h3 className="text-black font-semibold
          text-lg sm:text-lg md:text-lg
          lg:text-xl xl:text-xl 2xl:text-xl
          ">ORDEN-TOTAL:</h3>
          <p className="text-green-700 font-bold justify-self-end
           text-lg sm:text-lg md:text-lg
           lg:text-xl xl:text-xl 2xl:text-xl">
            $ {pagoTotal}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 my-4">
          {/* <h3 className="text-black font-semibold text-xl">ENVÍO</h3> */}
          <div className="grid grid-cols-1 gap-2">
            <label className="text-xs sm:text-xs md:text-xs
              lg:text-sm xl:text-sm 2xl:text-sm">
              <input
                type="radio"
                value="transferencia"
                name="Transferencia bancaria"
                checked={paymentMethod === "transferencia"}
                onChange={handlePaymentChange}
                className="form-radio text-[#F70073]
                w-[13px] sm:w-[13px] md:w-[13px] lg:w-4 xl:text-w-4 2xl:w-4
                h-[13px] sm:h-[13px] md:h-[13px] lg:h-4 xl:text-h-4 2xl:h-4"
              />
              <span className="ml-2">
                Transferencia bancaria BANAMEX/OXXO
              </span>
            </label>

            <label className="text-xs sm:text-xs md:text-xs
              lg:text-sm xl:text-sm 2xl:text-sm">
              <input
                type="radio"
                value="payPal"
                checked={paymentMethod === "payPal"}
                onChange={handlePaymentChange}
                className="form-radio text-[#F70073]
                w-[13px] sm:w-[13px] md:w-[13px] lg:w-4 xl:text-w-4 2xl:w-4
                h-[13px] sm:h-[13px] md:h-[13px] lg:h-4 xl:text-h-4 2xl:h-4"
              />
              <span className="ml-2 ">PAYPAL</span>
            </label>
          </div>
        </div>

        <div className="bg-gray-100 grid grid-cols-1 gap-4 my-4">
          {/* <h3 className="text-black font-semibold text-xl">ENVÍO</h3> */}
          <div className="grid grid-cols-1 gap-2">
            <p className="text-black text-justify 
            text-[10px] sm:text-[10px] md:text-[10px]
            lg:text-xs xl:text-xs 2xl:text-xs p-1">
              Realiza tu pago directamente en nuestra cuenta bancaria de Banamex
              o a traves de PayPal. Por favor usa la referencia del pedido como
              referencia de pago. Tu pedido no será enviado hasta que el importe
              haya sido recibido en nuestra cuenta. Enviar comprobante de pago a
              asociaciondemujeres@gmail.com o Whatsapp (443) 1-86-16-94 o (443)
              1-16-08-00
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 my-4">
          {/* <h3 className="text-black font-semibold text-xl">ENVÍO</h3> */}
          <div className="grid grid-cols-1 gap-2">
            <p className="text-black text-justify font-semibold 
              text-xs sm:text-xs md:text-xs
              lg:text-sm xl:text-sm 2xl:text-sm">
              Tus datos personales se utilizarán para procesar tu pedido,
              mejorar tu experiencia en esta web y otros propósitos descritos en
              nuestra
              <span className="text-[#F70073] 
                font-semibold ml-2">
                <Link href={"/"}>política de privacidad</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 my-4">
          {/* <h3 className="text-black font-semibold text-xl">ENVÍO</h3> */}
          <div className="grid grid-cols-1 gap-2">
            <label className="text-xs sm:text-xs md:text-xs
              lg:text-sm xl:text-sm 2xl:text-sm">
              <input
                type="checkbox"
                value="delivery"
                checked={confirmMethod.includes("delivery")}
                onChange={handleConfirmChange}
                className="form-checkbox text-green-600
                w-[13px] sm:w-[13px] md:w-[13px] lg:w-4 xl:text-w-4 2xl:w-4
                h-[13px] sm:h-[13px] md:h-[13px] lg:h-4 xl:text-h-4 2xl:h-4"
              />
              <span className="ml-2 text-xs">
                Acepto los términos de uso y condiciones
              </span>
            </label>
            <label className="text-xs sm:text-xs md:text-xs
              lg:text-sm xl:text-sm 2xl:text-sm">
              <input
                type="checkbox"
                value="pickup"
                checked={confirmMethod.includes("pickup")}
                onChange={handleConfirmChange}
                className="form-checkbox text-green-600
                w-[13px] sm:w-[13px] md:w-[13px] lg:w-4 xl:text-w-4 2xl:w-4
                h-[13px] sm:h-[13px] md:h-[13px] lg:h-4 xl:text-h-4 2xl:h-4"
              />
              <span className="ml-2 text-xs">
                Confirmo el uso de mis datos personales
              </span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 my-4">
          <div className="grid grid-cols-1">
            <button
              type="submit"
              className="Btn py-2 w-full
              text-xs sm:text-xs md:text-xs
              lg:text-sm xl:text-sm 2xl:text-sm"
              disabled={
                !(
                  confirmMethod.includes("delivery") &&
                  confirmMethod.includes("pickup")
                )
              }
            >
              <p>Pagar</p>

              <svg viewBox="0 0 576 512" class="svgIcon">
                <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
              </svg>
            </button>
            {!confirmMethod.includes("delivery") && (
              <span className="text-red-500 pt-2
              text-[10px] sm:text-[10px] md:text-[10px]
              lg:text-xs xl:text-xs 2xl:text-xs">
                Aún no has aceptado los términos de uso y condiciones
              </span>
            )}

            {!confirmMethod.includes("pickup") && (
              <span className="text-red-500 
              text-[10px] sm:text-[10px] md:text-[10px]
              lg:text-xs xl:text-xs 2xl:text-xs">
                Aún no has confirmado el uso de tus datos personales
              </span>
            )}
          </div>
          {/* </button> */}
        </div>
        {paypal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white mt-40">
              <button
                className="absolute top-0 right-0 m-3"
                onClick={handleClosePopup}
              >
                <IoClose className="h-6 w-6 cursor-pointer transition duration-300 ease-in-out hover:text-red-500 hover:rotate-180" />
              </button>
              <div className="mt-3 text-center">
                <div className=" flex items-center justify-center  ">
                  <img src="/emoticons/comprobado.png" alt="PayPal Logo" />
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Completa tu pago
                </h3>
                <div className="mt-2 px-7 py-3">
                  <p className="text-sm text-gray-500">
                    Revisa tu pedido y da click en el botón PayPal para realizar
                    el pago.
                  </p>
                </div>
                <div className="flex flex-col px-7 py-3 space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalVenta}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Envío</span>$
                    {shippingMethod === "recogerTienda" ? 0 : envio}
                  </div>

                  <div className="flex justify-between font-bold ">
                    <span>Total</span>${pagoTotal}
                  </div>
                </div>
                {/*PAYPAL  CUENTA*/}
                <PayPalScriptProvider
                  options={{
                    clientId:
                      "AWIpFlQyOiGrgDk6kZbFbU2GNEBStOsMAJsnS6IrgeeoRlLSZtpFDP54h9II6vB0StAcv_7H9KFyvSH8",
                  }}
                >
                  {/* BOTÓN PAYPAL */}
                  <PayPalButtons
                    style={{ layout: "horizontal" }}
                    //PAGO (TOTAL)
                    createOrder={async (data, actions) => {
                      const res = await fetch("/api/payPal", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ pagoTotal }),
                      });
                      const order = await res.json();
                      return order.id;
                    }}
                    //El SDK de PayPal proporciona automáticamente los parámetros data y actions
                    //data:  monto a pagar, la moneda utilizada
                    //actions:métodos para capturar el pago, actualizar la orden, mostrar mensajes al usuario

                    // CANCELAR PAGO/COMPRA
                    onCancel={(data) => {
                      //AQUI DEBE DE MANDAR ALGO PARA NO ACEPTAR COMPRA
                    }}
                    //APROBAR COMPRA
                    onApprove={(data, actions) => {
                      actions.order.capture().then((details) => {
                        console.log("Pago aprobado:", details);
                        enviarDataApi()
                        
                      }); 
                      // setPaypal(false);
                      //AQUI DEBE DE MANDAR ALGO PARA ACEPTAR COMPRAR Y SUBIR A BD -- DESCONTAR STOCK
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        )}
        {transferencia && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white mt-40">
              <button
                className="absolute top-0 right-0 m-3"
                onClick={handleClosePopup}
              >
                <IoClose className="h-6 w-6 cursor-pointer transition duration-300 ease-in-out hover:text-red-500 hover:rotate-180" />
              </button>
              <div className="mt-3 text-center">
                <div className=" flex items-center justify-center  ">
                  <img src="/emoticons/comprobado.png" alt="PayPal Logo" />
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Transferencia bancaria
                </h3>
                <div className="mt-2 px-7 py-3">
                  <p className="text-sm text-gray-600">
                    En breve un asesor se comunicará contigo
                  </p>
                  <p className="text-sm text-[#F70073]">
                    GRACIAS POR TU COMPRA
                  </p>
                </div>
                <div className="flex flex-col px-7 py-3 space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalVenta}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Envío</span>$
                    {shippingMethod === "recogerTienda" ? 0 : envio}
                  </div>

                  <div className="flex justify-between font-bold ">
                    <span>Total</span>$
                    {shippingMethod === "recogerTienda"
                      ? totalVenta
                      : totalVenta + envio}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormaPago;
