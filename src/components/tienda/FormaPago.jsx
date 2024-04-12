"use client";
import React, { useState } from "react";
import { K2D } from "next/font/google";
import Link from "next/link";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

function FormaPago() {
  const [shippingMethod, setShippingMethod] = useState("delivery");

  const handleShippingChange = (event) => {
    setShippingMethod(event.target.value);
  };
  const [paymentMethod, setPaymentMethod] = useState("delivery");

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const [confirmMethod, setConfirmMethod] = useState([]);

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
            {/*total*/} $1900
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
            {/*total*/} $1900
          </p>
        </div>
        <div className="flex flex-col mt-10 ml-4">
          <label>
            <input
              type="checkbox"
              value="delivery"
              checked={paymentMethod === "delivery"}
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
              value="pickup"
              checked={paymentMethod === "pickup"}
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
          <button className="bg-[#F70073] ml-20 text-white font-bold rounded-xl py-2  w-64 h-10">
            Finalizar pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormaPago;
