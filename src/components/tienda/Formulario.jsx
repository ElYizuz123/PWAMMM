import Image from "next/image";
import { K2D } from "next/font/google";
import { Berkshire_Swash } from "next/font/google";
import DetallesPago from "./DetallesPago";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const berkshire_swash = Berkshire_Swash({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const estados = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

function Formulario() {
  return (
    <div className={k2d.className}>
      <div className="relative ">
        <div className={berkshire_swash.className}>
          <div className=" w-full py-48 absolute  ">
            <div className="   border-b-8 border-[#F70073] ">
              <p className="ml-20 text-5xl font-bold mb-2"> Finalizar Compra</p>
            </div>
          </div>
        </div>

        <form>
          <div className="ml-7 py-72">
            <p className="font-bold text-3xl">DATOS PERSONALES</p>
          </div>
          {/* DATOS PERSONALES NOMBRE APELLIDOS */}
          <div className="flex">
            <div class="relative z-0 w-full mb-5 ml-7 -mt-60 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class="block py-3 mt-2 px-0 w-[700px]  text-lg text-[#F70073] bg-transparent border-0 border-b-2 
                  border-[#F70073] appearance-none dark:text-black dark:border-[#F70073] 
                  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="flex peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nombre
                <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
              </label>
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-5 ml-7 -mt-60 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  class="block py-3 mt-2 px-0 w-[700px]  text-lg text-[#F70073] bg-transparent border-0 border-b-2 border-[#F70073] appearance-none dark:text-black dark:border-[#F70073] dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_last_name"
                  class="flex peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Apellidos
                  <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                </label>
              </div>
            </div>
          </div>
          {/* DATOS PERSONALES EMPRESA */}

          <div class=" flex relative z-0 -mt-40  group ml-7  ">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              class="block  mt-2  px-0 w-[1650px] text-lg text-[#F70073] bg-transparent border-0 border-b-2 border-[#F70073] appearance-none dark:text-black dark:border-[#F70073] dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_company"
              class="flex peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre de la empresa
              <p className=" text-xl px-0 text-[#f7a3ca] ml-2 ">(Opcional)</p>
            </label>
          </div>
          {/* DATOS PERSONALES telefono correo */}

          <div className="flex">
            <div class="relative z-0 w-full mb-5 ml-7 mt-4 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                class="block py-3 mt-2 px-0 w-[700px]  text-lg text-[#F70073] bg-transparent border-0 border-b-2 
                  border-[#F70073] appearance-none dark:text-black dark:border-[#F70073] 
                  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                class="flex peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Teléfono
                <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
              </label>
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 ml-7 mt-4 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-3 mt-2 px-0 w-[700px]  text-lg text-[#F70073] bg-transparent border-0 border-b-2 border-[#F70073] appearance-none dark:text-black dark:border-[#F70073] dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="flex peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Correo
                  <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                </label>
              </div>
            </div>
          </div>
        </form>
        {/* DATOS DIRECCIÓN*/}

        <form>
          <div>
            <div className="ml-7 mt-6">
              <p className="font-bold text-3xl">DIRECCIÓN</p>
            </div>
            {/* DATOS DIRECCIÓN CP CALLE NUMERO*/}

            <div className="flex">
              <div class=" grid md:grid-cols-2 md:gap-6">
                <div class="relative flex  z-0 w-full mb-5 ml-7 mt-4 group">
                  <input
                    type="text"
                    name="floating_cp"
                    id="floating_cp"
                    class="block py-3  px-0 w-[200px]  text-lg text-[#F70073] bg-transparent border-0 border-b-2 
                  border-[#F70073] appearance-none dark:text-black dark:border-[#F70073] 
                  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_cp"
                    class="flex px-0 peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Código postal
                    <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                  </label>
                </div>

                <div class="relative z-0 w-full ml-[150px] mb-5 mt-4 group">
                  <input
                    type="text"
                    name="floating_calle"
                    id="floating_calle"
                    class="block py-3 mt-2 px-0 w-[200px]  text-lg 
                      text-[#F70073] bg-transparent border-0 border-b-2 
                      border-[#F70073] appearance-none dark:text-black
                       dark:border-[#F70073] dark:focus:border-[#F70073] 
                       focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_calle"
                    class="flex px-0 peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Calle
                    <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                  </label>
                </div>
              </div>
              <div class=" grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full ml-[255px]  mb-5 mt-4 group">
                  <input
                    type="text"
                    name="floating_numExt"
                    id="floating_numExt"
                    class="block py-3 mt-2 px-0 w-[200px]  text-lg 
                      text-[#F70073] bg-transparent border-0 border-b-2 
                      border-[#F70073] appearance-none dark:text-black
                       dark:border-[#F70073] dark:focus:border-[#F70073] 
                       focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_numExt"
                    class="flex px-0 peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                             origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Num.Exterior
                    <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 mt-4 ml-[265px]  group">
                  <input
                    type="text"
                    name="floating_numInt"
                    id="floating_numInt"
                    class="block py-3 mt-2 px-0 w-[200px]  text-lg 
                      text-[#F70073] bg-transparent border-0 border-b-2 
                      border-[#F70073] appearance-none dark:text-black
                       dark:border-[#F70073] dark:focus:border-[#F70073] 
                       focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_numInt"
                    class="flex peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                             origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Num.Interior
                    <p className=" text-xl px-0 text-[#f7a3ca]  ">(Opcional)</p>
                  </label>
                </div>
              </div>
            </div>
            {/* DATOS DIRECCIÓN Colonia*/}
            {/* DATOS PERSONALES EMPRESA */}

            <div class=" flex relative z-0 mt-4  group ml-7  ">
              <input
                type="text"
                name="floating_col"
                id="floating_col"
                class="block  mt-2  px-0 w-[1650px] text-lg text-[#F70073] bg-transparent border-0 border-b-2 border-[#F70073] appearance-none dark:text-black dark:border-[#F70073] dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                placeholder=" "
                required
              />
              <label
                for="floating_col"
                class="flex peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Colonia
                <p className=" text-xl px-0 text-[#f7a3ca] ml-2 ">*</p>
              </label>
            </div>
            {/* DATOS DIRECCIÓN CIUDAD REGION*/}
            <div className="flex">
              <div class="relative z-0 w-full mb-5 ml-7 mt-4 group">
                <input
                  type="text"
                  name="floating_pais"
                  id="floating_ciudad"
                  class="block py-3 mt-4 px-0 w-[700px]  text-lg text-[#F70073] bg-transparent border-0 border-b-2 
                  border-[#F70073] appearance-none dark:text-black dark:border-[#F70073] 
                  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_ciudad"
                  class="flex     peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Ciudad
                  <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                </label>
              </div>

              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 ml-7 mt-6 group">
                  <select
                    type="region"
                    name="floating_region"
                    id="floating_region"
                    class="block py-3 mt-2 px-0 w-[700px]  text-lg text-[#F70073] bg-transparent border-0 border-b-2 border-[#F70073] appearance-none dark:text-black dark:border-[#F70073] dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                    placeholder=" Morelia"
                    required
                  >
                    {estados.map((estado, index) => (
                      <option key={index} value={estado}>
                        {estado}
                      </option>
                    ))}
                  </select>

                  <label
                    for="floating_region"
                    class="flex peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                  
                  </label>
                </div>
              </div>
            </div>

            {/* DATOS PAÍS*/}

            <div class="  relative z-0 mt-9  ml-7  ">
              <p className=" w-[1650px]  border-0 border-b-2 border-[#F70073] font-semibold  text-2xl text-black">
                MÉXICO
              </p>
            </div>
          </div>
        </form>

        <div>
          <div className="flex justify-center items-center  mt-10">
            <p className="font-bold text-3xl">DETALLES DE PAGO</p>
          </div>
          <div className="pb-16">
            <DetallesPago></DetallesPago>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
