import React from "react";
import { K2D } from "next/font/google";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

function ProductosPago() {
  return (
    <div className={k2d.className}>
      <div className="relative flex mt-2 ">
        {/*tarjeta*/}
        <div className=" w-[500px] h-auto mt-4 ">
          <div className="border-b-2 border-opacity-20 w-[600px] border-[#F70073]  ">
            <img
              className="  w-[150px] h-[200px] ml-5 rounded-md"
              src="\productos\armonia_1.jpg"
              alt="Botellas"
            />

            {/*información */}
            <div className="absolute top-8 left-[160px] ml-10">
              <p className="text-black text-2xl font-bold">
                MEZCAL PRIDE 750ML{" "}
              </p>
              <p className="mt-2 text-black text-xl">Marca: ARMONIA</p>
            </div>
            <div className="absolute top-44 left-[180px] flex ml-10">
              <p className="text-[#F70073] text-xl font-semibold ">
                {/*cantidad de productos*/} x1
              </p>
              <p className=" text-green-700 font-bold text-xl ml-48">
                {/*precio productos*/} $399
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductosPago;
