"use client";
import { Berkshire_Swash } from "next/font/google";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import { useForm } from "react-hook-form";
import ProductosPago from "./ProductosPago";
import FormaPago from "./FormaPago";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import { useState, useEffect } from "react";

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
  const { productos, total, isEnvio } = useContext(ProductContext);
  const [isFormVisiblePersonales, setIsFormVisiblePersonales] = useState(true);
  const [isFormVisibleDireccion, setIsFormVisibleDireccion] = useState(false);
  const [combinedData, setCombinedData] = useState({});

  const toggleFormPersonales = () => {
    setIsFormVisiblePersonales(!isFormVisiblePersonales);
  };
  const toggleFormDireccion = () => {
    setIsFormVisibleDireccion(!isFormVisibleDireccion);
  };

  const {
    register: registerPersonal,
    handleSubmit: handleSubmitPersonal,
    formState: {
      errors: personalErrors,
      isSubmitSuccessful: isPersonalSubmitSuccessful,
    },
    watch: watchPersonal,
  } = useForm();

  const {
    register: registerDireccion,
    handleSubmit: handleSubmitDireccion,
    formState: {
      errors: addressErrors,
      isSubmitSuccessful: isDireccionSubmitSuccessful,
    },
    watch: watchDireccion,
  } = useForm();

  const onSubmitPersonal = (data) => {
    setCombinedData((prev) => ({ ...prev, ...data }));
  };

  const onSubmitDireccion = (data) => {
    setCombinedData((prev) => ({ ...prev, ...data }));
  };

  const handleAcceptClick = async () => {
    await handleSubmitPersonal(onSubmitPersonal)();
    await handleSubmitDireccion(onSubmitDireccion)();
    if (isPersonalSubmitSuccessful && isDireccionSubmitSuccessful) {
      
      const product = productos.map((producto) => ({
        id_producto: producto.id_producto,
        nombre: producto.nombre,
        marca: producto.marca,
        precio: producto.precio,
        ml: producto.ml,
        cantidad: producto.cantidad,
      }));
      try {
        const response = await fetch("/api/tienda/create_venta", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Si necesitas autenticación, como un token, también deberías incluirlo aquí.
            // 'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(combinedData),
        });

        const responseData = await fetch("/api/sendEmail_Ventas", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            // nombreCliente:data.nombre
            nombreCliente: "Judith",
            apellidoCliente: "Martínez",
            telefono: "459 123 78 33",
            correo: "aguimtz.2003@gmail",
            nombreEmpresa: "NOSE",
            pais: "México",
            ciudad: "Morelia",
            colonia: "Isidro",
            calle: "huecorio",
            numExterior: "25",
            numInterior: "150",
            cp: 58934,
            marca: product.map((p) => p.marca),
          }),
        });
        console.log(productos.marca);

        if (!response.ok && !responseData.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Lanza un error si la respuesta no es satisfactoria
        }
        const responseD = await responseData.json();
        console.log(responseD);

        const result = await response.json(); // Espera y convierte la respuesta del servidor en JSON
        console.log(result); // Muestra el resultado en la consola para depuración
      } catch (error) {
        console.error("Error al enviar los datos:", error); // Maneja cualquier error que ocurra durante el fetch
      }
    }
  };

  return (
    <div className="relative my-[150px]">
      {/* Sección del título */}

      <div className="border-b-8 border-[#F70073] py-8">
        <div className={berkshire_swash.className}>
          <h1 className="text-5xl font-bold text-center">Finalizar Compra</h1>
        </div>
      </div>

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

        {Object.keys(personalErrors).length > 0 && (
          <p className="text-red-500 text-sm py-2 px-3">
            <ExclamationCircleIcon className="h-5 w-5 inline-block mr-2" />
            Falta por llenar algunos datos
          </p>
        )}

        <div className="px-4">
          <form onSubmit={handleSubmitPersonal(onSubmitPersonal)}>
            {isFormVisiblePersonales && (
              <div>
                {/* DATOS PERSONALES NOMBRE APELLIDOS */}
                <div className="grid md:grid-cols-2 md:gap-[100px]">
                  <div className="relative z-0 mb-5 mt-4 group">
                    <input
                      {...registerPersonal("nombre", {
                        required: "El nombre es requerido",
                      })}
                      Name
                      type="text"
                      name="nombre"
                      id="nombre"
                      className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchPersonal("nombre")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="nombre"
                      className={`flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchPersonal("nombre")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Nombre
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {personalErrors.nombre && (
                      <p className="text-red-600">
                        {personalErrors.nombre.message}
                      </p>
                    )}
                  </div>

                  <div className="relative z-0 mb-5 mt-4 group">
                    <input
                      {...registerPersonal("apellidos", {
                        required: "Los apellidos son requerido",
                      })}
                      type="text"
                      name="apellidos"
                      id="apellidos"
                      className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchPersonal("apellidos")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="apellidos"
                      className={`flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchPersonal("apellidos")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Apellidos
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {personalErrors.apellidos && (
                      <p className="text-red-600">
                        {personalErrors.apellidos.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* DATOS PERSONALES EMPRESA */}

                <div className=" flex relative z-0 mb-5 mt-4 group ">
                  <input
                    {...registerPersonal("empresa")}
                    type="text"
                    name="empresa"
                    id="empresa"
                    className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchPersonal("empresa")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="empresa"
                    className={`flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchPersonal("empresa")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                  >
                    Nombre de la empresa
                    <p className=" text-xl px-0 text-[#f7a3ca] ml-2">
                      (Opcional)
                    </p>
                  </label>
                </div>
                {/* DATOS PERSONALES telefono correo */}

                <div className="grid md:grid-cols-2 md:gap-[100px]">
                  <div className="relative z-0 w-full mb-5 mt-4 group">
                    <input
                      {...registerPersonal("telefono", {
                        required: "El teléfono es requerido",
                      })}
                      type="tel"
                      pattern="[0-9]{10}"
                      name="telefono"
                      id="telefono"
                      className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchPersonal("telefono")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="telefono"
                      className={`flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchPersonal("telefono")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Teléfono
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {personalErrors.telefono && (
                      <p className="text-red-600">
                        {personalErrors.telefono.message}
                      </p>
                    )}
                  </div>

                  <div className="relative z-0 w-full mb-5 mt-4 group">
                    <input
                      {...registerPersonal("email", {
                        required: "El correo es requerido",
                      })}
                      type="email"
                      name="email"
                      id="email"
                      className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchPersonal("email")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className={`flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchPersonal("email")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Correo
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {personalErrors.email && (
                      <p className="text-red-600">
                        {personalErrors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </form>
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

        {Object.keys(addressErrors).length > 0 && (
          <p className="text-red-500 text-sm py-2 px-3">
            <ExclamationCircleIcon className="h-5 w-5 inline-block mr-2" />
            Falta por llenar algunos datos
          </p>
        )}

        {/* Formulario de datos personales */}
        <div className="px-4">
          <form onSubmit={handleSubmitDireccion(onSubmitDireccion)}>
            {isFormVisibleDireccion && (
              <div>
                <div className="grid md:grid-cols-3 md:gap-[100px]">
                  <div className="relative z-0 mb-5 mt-4 group">
                    <input
                      {...registerDireccion("calle", {
                        required: "La calle es requerida",
                      })}
                      type="text"
                      name="calle"
                      id="calle"
                      className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchDireccion("calle")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="calle"
                      className={`flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchDireccion("calle")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Calle
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {addressErrors.calle && (
                      <p className="text-red-600">
                        {addressErrors.calle.message}
                      </p>
                    )}
                  </div>

                  <div className="relative z-0 mb-5 mt-4 group">
                    <input
                      {...registerDireccion("colonia", {
                        required: "La colonia es requerida",
                      })}
                      type="text"
                      name="colonia"
                      id="colonia"
                      className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchDireccion("colonia")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="colonia"
                      className={`flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchDireccion("colonia")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Colonia
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {addressErrors.colonia && (
                      <p className="text-red-600">
                        {addressErrors.colonia.message}
                      </p>
                    )}
                  </div>

                  <div className="relative z-0 mb-5 mt-4 group">
                    <input
                      {...registerDireccion("ciudad", {
                        required: "La ciudad es requerida",
                      })}
                      type="text"
                      name="ciudad"
                      id="ciudad"
                      className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchDireccion("ciudad")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="ciudad"
                      className={`flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchDireccion("ciudad")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Ciudad
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {addressErrors.ciudad && (
                      <p className="text-red-600">
                        {addressErrors.ciudad.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 md:gap-[100px]">
                  <div className="relative z-0 mb-5 mt-4 group">
                    <input
                      {...registerDireccion("cp", {
                        required: "El codigo postal es requerido",
                      })}
                      type="text"
                      name="cp"
                      id="cp"
                      className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchDireccion("cp")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="cp"
                      className={`flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchDireccion("cp")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Código postal
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {addressErrors.cp && (
                      <p className="text-red-600">{addressErrors.cp.message}</p>
                    )}
                  </div>
                  <div className="relative z-0 mb-5 mt-4 group">
                    <input
                      {...registerDireccion("num_ext", {
                        required: "El número exterior es requerido",
                      })}
                      type="text"
                      name="num_ext"
                      id="num_ext"
                      className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchDireccion("num_ext")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="num_ext"
                      className={`flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchDireccion("num_ext")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Núm.Exterior
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                    {addressErrors.num_ext && (
                      <p className="text-red-600">
                        {addressErrors.num_ext.message}
                      </p>
                    )}
                  </div>

                  <div className="relative z-0 mb-5 mt-4 group">
                    <input
                      {...registerDireccion("num_int")}
                      type="text"
                      name="num_int"
                      id="num_int"
                      className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchDireccion("num_int")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="num_Int"
                      className={`flex peer-focus:font-medium absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchDireccion("num_int")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Núm.Interior
                      <p className=" text-xl px-0 text-[#f7a3ca] ml-2">
                        (Opcional)
                      </p>
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-1">
                  <div className="relative z-0 mb-5 mt-4 group">
                    <select
                      {...registerDireccion("region")}
                      defaultValue="Michoacán"
                      className={`py-3 mt-4 px-0 w-full text-lg text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watchDireccion("region")
                          ? "border-[#F70073]"
                          : "border-[#F70073]"
                      }`}
                    >
                      {estados.map((estado, index) => (
                        <option key={index} value={estado}>
                          {estado}
                        </option>
                      ))}
                    </select>
                    <label
                      for="region"
                      className={`flex peer-focus:font-medium absolute text-xl font-semibold text-[#F70073] dark:text-[#F70073] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                        watchDireccion("region")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-[#F70073] dark:text-[#F70073]"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Region/Provincia
                      <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                    </label>
                  </div>
                </div>

                {/* DATOS PAÍS*/}
                <div className=" grid md:grid-cols-1 md:gap-[100px]">
                  <div className=" relative z-0 mb-5 mt-4 group">
                    <input
                      type="text"
                      name="pais"
                      id="pais"
                      className="block py-3 mt-4 px-0 w-full font-semibold text-#F70073 text-lg  bg-transparent border-0 border-b-[3px]
                    border-[#F70073] appearance-none dark:text-black dark:border-[#F70073]  focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                      placeholder=" "
                      defaultValue="México"
                      readOnly
                      required
                    />
                    <label
                      htmlFor="pais"
                      className="flex     peer-focus:font-medium absolute text-xl font-semibold text-[#F70073] dark:text-[#F70073] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
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
          </form>
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
                  <button onClick={handleAcceptClick}>ACEPTAR</button>
                  {/* Se llama a forma pago. Mandando el triggerSubmit y le digo que va activar */}
                  <FormaPago triggerSubmit={handleAcceptClick} />
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
    </div>
  );
}

export default Formulario;
