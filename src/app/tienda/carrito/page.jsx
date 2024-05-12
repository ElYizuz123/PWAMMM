import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Image from "next/image";
import MostrarItemsCarrito from "@/components/tienda/MostrarItemsCarrito";
import { K2D } from "next/font/google";
import Link from "next/link";
import IrFormulario from "@/components/tienda/IrFormulario";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Page = () => {
  return (
    <LayoutPrincipal>
      <div className={k2d.className}>
        <div className="  w-full relative ">
          <div className=" h-full w-full z-0 opacity-60  ">
            <Image
              src="/backgroundImage.jpg"
              layout="fill"
              quality={100}
              alt="Fondo"
            />
          </div>

          <div className="  flex justify-center items-center ">
            <div className="absolute  w-[1250px]  ">
              <Link href="/tienda">
                <button class="enter-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 27"
                    class="arrow"
                  >
                    <line
                      stroke-width="2"
                      stroke="white"
                      y2="14"
                      x2="40"
                      y1="14"
                      x1="1"
                    ></line>
                    <line
                      stroke-width="2"
                      stroke="white"
                      y2="1.41537"
                      x2="10.4324"
                      y1="14.2433"
                      x1="1.18869"
                    ></line>
                    <line
                      stroke-width="2"
                      stroke="white"
                      y2="13.6007"
                      x2="1.20055"
                      y1="26.2411"
                      x1="10.699"
                    ></line>
                    <line
                      stroke="white"
                      y2="14.3133"
                      x2="1.07325"
                      y1="13.6334"
                      x1="0.33996"
                    ></line>
                    <line
                      stroke-width="2"
                      stroke="white"
                      y2="13"
                      x2="39"
                      y1="8"
                      x1="39"
                    ></line>
                  </svg>
                  <p className="font-semibold ">REGRESAR</p>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative w-full py-48 ">
            <div class="container mx-auto p-6">
              <div class="flex flex-col md:flex-row justify-between gap-6 ">
                <div className="container mx-auto p-6  ">
                  {/* Title */}
                  <div className=" flex mb-4">
                    <Image
                      src="/emoticons/carrito2.png"
                      width={40}
                      height={40}
                      quality={100}
                      alt="Fondo"
                    ></Image>
                    <h1 className="ml-4 text-3xl font-bold text-gray-700">
                      BOLSA DE COMPRAS
                    </h1>
                    <hr className="my-2" />
                  </div>

                  {/* Column headers */}
                  <div className="flex text-gray-600 font-bold text-sm py-2 rounded-t-lg ">
                    <h3 className="">PRODUCTO</h3>
                    <h3 className="ml-[320px]">PRECIO</h3>
                    <h3 className="ml-[140px]">CANTIDAD</h3>
                    <h3 className="ml-[158px]">TOTAL</h3>
                  </div>

                  <div className="my-4"></div>
                  <hr />

                  {/* Product row */}
                  <MostrarItemsCarrito />
                </div>
                <IrFormulario/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default Page;
