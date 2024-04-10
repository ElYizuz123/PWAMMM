import React from "react";


const page = () => {
  return (
    <div class="container mx-auto p-6">
      <div class="flex flex-col md:flex-row justify-between gap-6">
        <div className="container mx-auto p-6">
          {/* Title */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-700">
              BOLSA DE COMPRAS
            </h1>
            <hr className="my-2" />
          </div>

          {/* Column headers */}
          <div className="flex justify-between text-gray-500 text-sm">
            <h3 className="flex items-center justify-center space-x-4">PRODUCTO</h3>
            <h3 className="w-1/5 text-center">PRECIO</h3>
            <h3 className="w-1/5 flex items-center justify-center">CANTIDAD</h3>
            <h3 className="w-1/5 text-center">TOTAL</h3>
          </div>

          <div className="my-4"></div>
            <hr />
         

          {/* Product row */}
          <MostrarItemsCarrito/>
        </div>

        <div class="w-full md:w-1/3 bg-white shadow-md rounded p-4 mt-[59px]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Acompáñalo con...</h2>
            {/* Product list */}
            <div className="space-y-4 mt-4">
              {/* Product 1 */}
              <div className="flex justify-between items-center bg-white shadow rounded-lg p-4 ">
                <img
                  className="h-12 w-12 rounded"
                  src="/productos/queso.png"
                  alt="Queso"
                />
                <div className="flex-grow px-6">
                  <h3 className="font-medium">QUESO 25 gr</h3>
                  <p className="text-sm text-gray-500">$200</p>
                </div>
                <button className="text-pink-500 hover:text-pink-600">
                  <img
                    className="h-6 w-6 rounded"
                    src="/emoticons/carrito3.png"
                    alt="Queso"
                  />
                  <span className="sr-only">Agregar al carrito</span>
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-4">
            <div class="flex justify-between mt-2">
              <p class="font-semibold text-lg">Total</p>
              <p class="font-semibold text-lg">$2,099.00</p>
            </div>
            <button class="mt-4 bg-black text-white rounded py-2 px-4 hover:bg-gray-800">
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
