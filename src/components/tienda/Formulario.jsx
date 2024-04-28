"use client";
import { Berkshire_Swash } from "next/font/google";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import { useForm } from "react-hook-form";
import ProductosPago from "./ProductosPago";
import FormaPago from "./FormaPago";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { useState } from "react";

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
  const { productos } = useContext(ProductContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/tienda/create_venta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Si necesitas autenticación, como un token, también deberías incluirlo aquí.
          // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Lanza un error si la respuesta no es satisfactoria
      }

      const result = await response.json(); // Espera y convierte la respuesta del servidor en JSON
      console.log(result); // Muestra el resultado en la consola para depuración

      alert("Datos enviados correctamente!"); // Notifica al usuario del éxito
      // Aquí podrías hacer más acciones dependiendo del resultado, como redireccionar o actualizar el estado de la UI
    } catch (error) {
      console.error("Error al enviar los datos:", error); // Maneja cualquier error que ocurra durante el fetch
      alert("Error al enviar datos: " + error.message); // Notifica al usuario del error
    }
  };

  const [isFormVisiblePersonales, setIsFormVisiblePersonales] = useState(true);
  const [isFormVisibleDireccion, setIsFormVisibleDireccion] = useState(false);

  const toggleFormPersonales = () => {
    setIsFormVisiblePersonales(!isFormVisiblePersonales);
  };
  const toggleFormDireccion = () => {
    setIsFormVisibleDireccion(!isFormVisibleDireccion);
  };

  return (
    <div className="relative my-[150px]">
      {/* Sección del título */}

      <div className="border-b-8 border-[#F70073] py-8">
        <div className={berkshire_swash.className}>
          <h1 className="text-5xl font-bold text-center">Finalizar Compra</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-2xl shadow-[#F70073] py-4 px-[43px] flex flex-col mt-4 mx-16 rounded-2xl">
          {/* Botón para desplegar el formulario */}
          <div
            className="cursor-pointer p-4 flex justify-between items-center"
            onClick={toggleFormPersonales}
          >
            <h2 className="text-3xl font-semibold">DATOS PERSONALES</h2>
            {isFormVisiblePersonales ? (
              <ChevronUpIcon className="h-8 w-8 text-pink-700" />
            ) : (
              <ChevronDownIcon className="h-8 w-8 text-pink-700" />
            )}
          </div>

          <div className="px-4">
            {isFormVisiblePersonales && (
              <div>
                {/* DATOS PERSONALES NOMBRE APELLIDOS */}
                <div className="grid md:grid-cols-2 md:gap-[100px]">
                  <div class="relative z-0 mb-5 mt-4 group">
                    <input
                      {...register("nombre", {
                        required: "El nombre es requerido",
                      })}
                      type="text"
                      name="nombre"
                      id="nombre"
                      class="block py-3 mt-2 px-0 w-full text-lg  text-[#F70073] bg-transparent border-0 border-b-[3px]
                  border-[#C1D128] appearance-none  dark:text-black
                  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#C1D128] peer"
                      placeholder=" "
                    />
                    <label
                      for="nombre"
                      class="flex peer-focus:font-medium absolute text-xl font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Nombre
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {errors.nombre && <p className="text-red-600">{errors.nombre.message}</p >}
                  </div>

                  <div class="relative z-0 mb-5 mt-4 group">
                    <input
                      {...register("apellidos", {
                        required: "Los apellidos son requerido",
                      })}
                      type="text"
                      name="apellidos"
                      id="apellidos"
                      class="block py-3 mt-2 px-0 w-full  text-lg text-[#F70073] bg-transparent border-0 border-b-[3px]
                    border-[#C1D128] appearance-none dark:text-black dark:border-[#C1D128]  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_last_name"
                      class="flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                    origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Apellidos
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {errors.apellidos && <p className="text-red-600">{errors.apellidos.message}</p>}
                  </div>
                </div>
                {/* DATOS PERSONALES EMPRESA */}

                <div class=" flex relative z-0 mb-5 mt-4 group ">
                  <input
                    {...register("empresa")}
                    type="text"
                    name="empresa"
                    id="empresa"
                    class="block  mt-2  px-0 w-full text-lg text-[#F70073] bg-transparent
               border-0 border-b-[3px] border-[#C1D128] appearance-none dark:text-black dark:border-[#C1D128]  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                    placeholder=" "
                  />

                  <label
                    for="empresa"
                    class="flex peer-focus:font-medium absolute text-xl text-gray-500 font-semibold dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 space-x-2"
                  >
                    Nombre de la empresa
                    <p className=" text-xl px-0 text-[#f7a3ca] ml-2">
                      (Opcional)
                    </p>
                  </label>
                </div>
                {/* DATOS PERSONALES telefono correo */}

                <div class="grid md:grid-cols-2 md:gap-[100px]">
                  <div class="relative z-0 w-full mb-5 mt-4 group">
                    <input
                      {...register("telefono", {
                        required: "El teléfono es requerido",
                      })}
                      type="tel"
                      pattern="[0-9]{10}"
                      name="telefono"
                      id="telefono"
                      class="block py-3 mt-2 px-0 w-full  text-lg text-[#F70073] bg-transparent border-0 border-b-[3px]
                  border-[#C1D128] appearance-none dark:text-black dark:border-[#C1D128] 
                  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                      placeholder=" "
                    />

                    <label
                      for="telefono"
                      class="flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Teléfono
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {errors.telefono && <p className="text-red-600">{errors.telefono.message}</p>}
                  </div>

                  <div class="relative z-0 w-full mb-5 mt-4 group">
                    <input
                      {...register("email", {
                        required: "El correo es requerido",
                      })}
                      type="email"
                      name="email"
                      id="email"
                      class="block py-3 mt-2 px-0 w-full text-lg text-[#F70073] bg-transparent
                   border-0 border-b-[3px]  border-[#C1D128] appearance-none dark:text-black dark:border-[#C1D128]  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                      placeholder=" "
                    />

                    <label
                      for="email"
                      class="flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Correo
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SEGUNDO FORMULARIO */}

        <div className="bg-white shadow-2xl shadow-[#F70073] py-4 px-[43px] flex flex-col mt-4 mx-16 rounded-2xl">
          {/* Botón para desplegar el formulario */}
          <div
            className="cursor-pointer p-4 flex justify-between items-center"
            onClick={toggleFormDireccion}
          >
            <h2 className="text-3xl font-semibold">DIRECCION</h2>
            {isFormVisibleDireccion ? (
              <ChevronUpIcon className="h-8 w-8 text-pink-700" />
            ) : (
              <ChevronDownIcon className="h-8 w-8 text-pink-700" />
            )}
          </div>

          {/* Formulario de datos personales */}
          <div className="px-4">
            {isFormVisibleDireccion && (
              <div>
                <div class="grid md:grid-cols-3 md:gap-[100px]">
                  <div class="relative z-0 mb-5 mt-4 group">
                    <input
                      //pinche
                      //quee mona
                      {...register("calle", {
                        required: "La calle es requerida",
                      })}
                      type="text"
                      name="calle"
                      id="calle"
                      class="block py-3 mt-2 px-0 w-full text-lg  text-[#F70073] bg-transparent border-0 border-b-[3px]
                  border-[#C1D128] appearance-none  dark:text-black
                  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#C1D128] peer"
                      placeholder=" "
                    />
                    <label
                      for="calle"
                      class="flex peer-focus:font-medium absolute text-xl font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Calle
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {errors.calle && <p className="text-red-600">{errors.calle.message}</p>}
                  </div>

                  <div class="relative z-0 mb-5 mt-4 group">
                    <input
                      {...register("colonia", {
                        required: "La colonia es requerida",
                      })}
                      type="text"
                      name="colonia"
                      id="colonia"
                      class="block py-3 mt-2 px-0 w-full  text-lg 
                      text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      border-[#C1D128] appearance-none dark:text-black dark:border-[#C1D128]  dark:focus:border-[#F70073] 
                       focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                      placeholder=""
                    />
                    <label
                      for="colonia"
                      class="flex px-0 peer-focus:font-medium absolute font-semibold text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Colonia
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {errors.colonia && <p className="text-red-600">{errors.colonia.message}</p>}
                  </div>

                  <div class="relative z-0 mb-5 mt-4 group">
                    <input
                      {...register("ciudad", {
                        required: "La ciudad es requerida",
                      })}
                      type="text"
                      name="ciudad"
                      id="ciudad"
                      class="block py-3 mt-2 px-0 w-full text-lg 
                      text-[#F70073] bg-transparent border-0 border-b-[3px] 
                       border-[#C1D128] appearance-none dark:text-black dark:border-[#C1D128]  dark:focus:border-[#F70073] 
                       focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                      placeholder=" "
                    />
                    <label
                      for="ciudad"
                      class="flex px-0 peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                             origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Ciudad
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {errors.ciudad && <p className="text-red-600">{errors.ciudad.message}</p>}
                  </div>
                </div>

                <div class="grid md:grid-cols-3 md:gap-[100px]">
                  <div class="relative z-0 mb-5 mt-4 group">
                    <input
                      {...register("cp", {
                        required: "El codigo postal es requerido",
                      })}
                      type="text"
                      name="cp"
                      id="cp"
                      class="block py-3 mt-4 px-0 w-full  text-lg 
                      text-[#F70073] bg-transparent border-0 border-b-[3px] 
                     border-[#C1D128] appearance-none dark:text-black dark:border-[#C1D128] 
                       focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                      placeholder=" "
                    />
                    <label
                      for="cp"
                      class="flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                             origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Código postal
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {errors.cp && <p className="text-red-600">{errors.cp.message}</p>}
                  </div>
                  <div class="relative z-0 mb-5 mt-4 group">
                    <input
                      {...register("num_ext", {
                        required: "El número exterior es requerido",
                      })}
                      type="text"
                      name="num_ext"
                      id="num_ext"
                      class="block py-3 mt-4 px-0 w-full  text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                  border-[#C1D128] appearance-none dark:text-black dark:border-[#C1D128] 
                  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                      placeholder=" "
                    />
                    <label
                      for="num_ext"
                      class="flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                   origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Núm.Exterior
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {errors.num_ext && <p className="text-red-600">{errors.num_ext.message}</p>}
                  </div>

                  <div class="relative z-0 mb-5 mt-4 group">
                    <input
                      {...register("num_int")}
                      type="text"
                      name="num_int"
                      id="num_int"
                      class="block py-3 mt-4 px-0 w-full  text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                   border-[#C1D128] appearance-none dark:text-black dark:border-[#C1D128] 
                  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                      placeholder=" "
                    />
                    <label
                      for="num_int"
                      class="flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Núm.Interior
                      <p className=" text-xl px-0 text-[#f7a3ca] ml-2">
                        (Opcional)
                      </p>
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-1">
                  <div class="relative z-0 mb-5 mt-4 group">
                    <select
                      type="region"
                      defaultValue="Michoacán"
                      class="block py-3 mt-4 px-0 w-full font-semibold text-gray-500 text-lg  bg-transparent border-0 border-b-[3px]
                    border-[#C1D128] appearance-none dark:text-black dark:border-[#C1D128]  focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                    >
                      {estados.map((estado, index) => (
                        <option key={index} value={estado}>
                          {estado}
                        </option>
                      ))}
                    </select>
                    <label
                      for="estado"
                      class="flex     peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                   origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Region/Provincia
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                  </div>
                </div>

                {/* DATOS PAÍS*/}
                <div class=" grid md:grid-cols-1 md:gap-[100px]">
                  <div class=" relative z-0 mb-5 mt-4 group">
                    <input
                      type="text"
                      name="pais"
                      id="pais"
                      class="block py-3 mt-4 px-0 w-full font-semibold text-gray-500 text-lg  bg-transparent border-0 border-b-[3px]
                    border-[#C1D128] appearance-none dark:text-black dark:border-[#C1D128]  focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                      placeholder=" "
                      defaultValue="México"
                      readOnly
                      required
                    />
                    <label
                      for="floating_pais"
                      class="flex     peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      País
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white shadow-2xl shadow-[#F70073] py-4 px-[43px] flex flex-col mt-4 mx-16 rounded-2xl justify-between items-center">
          {/* Botón para desplegar el formulario */}
          <div className="p-4 ">
            <h2 className="text-3xl font-semibold ">DETALLES DE PAGO</h2>
          </div>
          <div>
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Columna de productos */}
                <div>
                  <p className="font-bold text-[#F70073] text-2xl text-center">
                    FORMA DE PAGO
                  </p>
                  {/* Columna de forma de pago */}
                  <div className="px-[17px]">
                    <FormaPago triggerSubmit={handleSubmit(onSubmit)} />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-[#F70073] text-2xl text-center">
                    PRODUCTOS
                  </p>
                  <div className="px-[17px]">
                    {productos.map((producto) => (
                      <ProductosPago
                        key={producto.id_producto}
                        id_producto={producto.id_producto}
                        imagen={producto.imagen}
                        nombre={producto.nombre}
                        marca={producto.marca}
                        precio={producto.precio}
                        ml={producto.ml}
                        cantidad={producto.cantidad}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
