"use client";
import React, { useContext, useState } from "react";
import { K2D } from "next/font/google";
import Link from "next/link";
import { ProductContext } from "@/context/ProductContext";
import TarjetaPaypal from "./TarjetaPaypal";
import { IoClose } from 'react-icons/io5'; 

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

function FormaPago() {
  const { productos } = useContext(ProductContext);

  const [shippingMethod, setShippingMethod] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("delivery2");
  const [confirmMethod, setConfirmMethod] = useState([]);
  const [payPal, setPaypal] = useState(false);

  const envio = 199;
  const totalVenta = productos.reduce(
    (total, producto) => total + producto.cantidad * producto.precio,
    0
  );

  const handleOpenPopup = () => {
    if (paymentMethod == "pickup2") {
      setPaypal(true);
    }
  };
  const handleClosePopup = () => {
    setPaypal(false);
  };
  const handleShippingChange = (event) => {
    setShippingMethod(event.target.value);
  };
  const handlePaymentChange = (event) => {
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
    <div className={k2d.className}>
      <div className=" w-[500px] h-auto  p-6   py-4 ">
        <p className="font-bold text-[#F70073] text-2xl">FORMA DE PAGO</p>
        <div className=" flex ml-4 mt-10">
          <h3 className="text-black font-semibold text-xl">SUB-TOTAL:</h3>
          <p className="text-green-700 font-bold text-xl ml-16  ">
            {/*total*/}$ {totalVenta}
          </p>
        </div>
        {/*ENVÍO*/}
        <div className="mt-4 flex ml-4">
          <h3 className="text-black font-semibold text-xl">ENVÍO</h3>
          <div className="flex flex-col px-9">
            <label>
              <input
                type="radio"
                value="delivery"
                checked={shippingMethod === "delivery"}
                onChange={handleShippingChange}
                className="form-radio text-[#F70073]"
              />
              <span className="ml-2">Envío (Todo México) : $199.00</span>
            </label>
            <label>
              <input
                type="radio"
                value="pickup"
                checked={shippingMethod === "pickup"}
                onChange={handleShippingChange}
                className="form-radio text-[#F70073]"
              />
              <span className="ml-2">Recoger en tienda (Morelia, Mich.)</span>
            </label>
          </div>
        </div>
        {/*subtotal + btnradio*/}
        <div className=" flex mt-10 ml-4 ">
          <h3 className="text-black font-semibold text-xl">ORDEN-TOTAL:</h3>
          <p className="text-green-700 font-bold text-xl ml-12 ">
            ${shippingMethod === "pickup" ? totalVenta : totalVenta + envio}
          </p>
        </div>
        <div className="flex flex-col mt-10 ml-4">
          <label>
            <input
              type="checkbox"
              value="delivery2"
              checked={paymentMethod === "delivery2"}
              onChange={handlePaymentChange}
              className="form-checkbox text-[#F70073]"
            />
            <span className="ml-2">
              Transferencia bancaria directa BANAMEX/OXXO
            </span>
          </label>

          <label>
            <input
              type="checkbox"
              value="pickup2"
              checked={paymentMethod === "pickup2"}
              onChange={handlePaymentChange}
              className="form-checkbox text-[#F70073]"
            />
            <span className="ml-2 ">PAYPAL</span>
          </label>
        </div>

        <div className="bg-gray-100 opacity-80  -mr-6 ml-4 mt-10">
          <p className="text-black text-justify text-xs">
            Realiza tu pago directamente en nuestra cuenta bancaria de Banamex o
            a traves de PayPal. Por favor usa la referencia del pedido como
            referencia de pago. Tu pedido no será enviado hasta que el importe
            haya sido recibido en nuestra cuenta. Enviar comprobante de pago a
            asociaciondemujeres@gmail.com o Whatsapp (443) 1-86-16-94 o (443)
            1-16-08-00
          </p>
        </div>
        <div className=" ml-4 mt-10 -mr-6 ">
          <p className="text-black text-justify font-semibold ">
            Tus datos personales se utilizarán para procesar tu pedido, mejorar
            tu experiencia en esta web y otros propósitos descritos en nuestra
            <span className="text-[#F70073] font-semibold ml-2">
              <Link href={"/"}>política de privacidad</Link>
            </span>
          </p>
        </div>
        <div className=" flex flex-col mt-8 ml-4">
          <label>
            <input
              type="checkbox"
              value="delivery"
              checked={confirmMethod.includes("delivery")}
              onChange={handleConfirmChange}
              className="form-checkbox text-green-600"
            />
            <span className="ml-2 text-xs">
              Acepto los términos de uso y condiciones
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              value="pickup"
              checked={confirmMethod.includes("pickup")}
              onChange={handleConfirmChange}
              className="form-checkbox text-green-600"
            />
            <span className="ml-2 text-xs">
              Confirmo el uso de mis datos personales
            </span>
          </label>
        </div>
        <div className=" mt-6 flex justify-center  ">
          {/* <button
            className="bg-[#F70073] ml-20 text-white font-bold rounded-xl py-2  w-64 h-10"
            onClick={handleOpenPopup}
          > */}

          <button class="Btn ml-20 py-2  " onClick={handleOpenPopup}>
            <p>Pagar</p>

            <svg viewBox="0 0 576 512" class="svgIcon">
              <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
            </svg>
          </button>

          {/* </button> */}
        </div>
        {payPal && (
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
                    <span>Envío</span>${shippingMethod === "pickup" ? 0 : envio}
                  </div>

                  <div className="flex justify-between font-bold ">
                    <span>Total</span>$
                    {shippingMethod === "pickup"
                      ? totalVenta
                      : totalVenta + envio}
                  </div>
                </div>
                <button
                  type="button"
                  class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
                >
                  <svg
                    class="w-4 h-4 me-2 -ms-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="paypal"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
                    ></path>
                  </svg>
                  Pagar con PayPal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormaPago;
