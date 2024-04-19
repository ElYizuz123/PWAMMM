import React from 'react'

function TarjetaPaypal() {
  return (
    <div>
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
      >
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
              {/* Incluir el logo de PayPal */}
              <img
                src="/path-to-your-paypal-logo.svg"
                alt="PayPal Logo"
                className="h-6 w-6"
              />
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Completa tu pago
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                Revisa tu pedido y da click en el botón PayPal para realizar el
                pago.
              </p>
            </div>
            <div className="flex flex-col px-7 py-3 space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$931.00</span>
              </div>
              <div className="flex justify-between">
                <span>Envío</span>
                <span>$147.00</span>
              </div>
              <div className="flex justify-between">
                <span>Descuentos</span>
                <span className="text-red-500">$0.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$1,078.00</span>
              </div>
            </div>
            <div className="items-center px-4 py-3">
              <button className="px-4 py-2 bg-yellow-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                PayPal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarjetaPaypal
