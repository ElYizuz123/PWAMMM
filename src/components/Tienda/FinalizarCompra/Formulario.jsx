"use client";
import { Berkshire_Swash } from "next/font/google";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import ProductosPago from "./ProductosPago";
import FormaPago from "./FormaPago";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExclamationCircleIcon,
  IdentificationIcon,
  LocationMarkerIcon,
  CreditCardIcon,
  CashIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const {
    productos,
    total,
    isEnvio,
    setDataFormulario,
    metodoPago,
    enviarDataApi,
  } = useContext(ProductContext);
  const [isFormVisiblePersonales, setIsFormVisiblePersonales] = useState(false);
  const [isFormVisibleDireccion, setIsFormVisibleDireccion] = useState(false);
  const [personalError, setPersonalError] = useState("");
  const [direccionError, setDireccionError] = useState("");
  const [transferencia, setTransferencia] = useState(false);
  const [paypal, setPaypal] = useState(false);
  const [isDataReadyForApi, setIsDataReadyForApi] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const toggleFormPersonales = () => {
    setIsFormVisiblePersonales(!isFormVisiblePersonales);
  };
  const toggleFormDireccion = () => {
    setIsFormVisibleDireccion(!isFormVisibleDireccion);
  };

  const validatePersonales = () => {
    const values = getValues(["nombre", "apellidos", "telefono", "email"]);

    if (!values[0] || !values[1] || !values[2] || !values[3]) {
      setPersonalError("Falta por llenar datos personales");
      return false;
    } else {
      setPersonalError("");
      return true;
    }
  };

  const validateDireccion = () => {
    const values = getValues([
      "calle",
      "colonia",
      "ciudad",
      "cp",
      "num_ext",
      "region",
    ]);

    if (
      !values[0] ||
      !values[1] ||
      !values[2] ||
      !values[3] ||
      !values[4] ||
      !values[5]
    ) {
      setDireccionError("Falta por llenar datos de dirección");
      return false;
    } else {
      setDireccionError("");
      return true;
    }
  };

  const onSubmit = (data) => {
    if (!validatePersonales()) {
      setTimeout(() => {
        const section = document.getElementById("datos-personales");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });

          // Después de desplazarse, espera un poco y luego expande la sección
          setTimeout(() => {
            setIsFormVisiblePersonales(true);
          }, 800); // Ajusta este tiempo según la duración de la animación de desplazamiento
        }
      }, 300); // Tiempo para comenzar el desplazamiento
    }

    if (!validateDireccion()) {
      setTimeout(() => {
        const section = document.getElementById("datos-personales");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });

          // Después de desplazarse, espera un poco y luego expande la sección
          setTimeout(() => {
            setIsFormVisibleDireccion(true);
          }, 800); // Ajusta este tiempo según la duración de la animación de desplazamiento
        }
      }, 300); // Tiempo para comenzar el desplazamiento
    }

    if (validatePersonales() && validateDireccion()) {
      console.log(metodoPago);

      data.envio = isEnvio;
      data.total = isEnvio === 1 ? total + 199 : total;

      setDataFormulario(data);

      if (metodoPago === 0) {
        setIsDataReadyForApi(true);
      } else {
        setPaypal(true);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isDataReadyForApi) {
        try {
          await enviarDataApi(); // Intenta ejecutar enviarDataApi y espera su finalización
          setTransferencia(true); // Solo se ejecuta si no hay errores
        } catch (error) {
          console.error("Error en enviarDataApi:", error); // Maneja el error, por ejemplo, mostrando un mensaje en consola
        }
        setIsDataReadyForApi(false);
      }
    };

    fetchData();
  }, [isDataReadyForApi]);

  return (
    <div className="relative my-[160px]">
      {/* Sección del título */}

      <div id="datos-personales" className="border-b-8 border-[#F70073] py-8">
        <div className={berkshire_swash.className}>
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-center">
            Finalizar Compra
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="datos-personales-container bg-white p-4 mt-4 rounded-lg transition-all duration-300 ease-in-out
          px-4 sm:px-4 md:px-4 lg:px-16 xl:px-16 2xl:px-16
          mx-8 sm:mx-8 md:mx-8 lg:mx-16 xl:mx-16 2xl:mx-16"
        >
          {/* Botón para desplegar el formulario */}
          <div
            className="header-container flex items-center justify-between w-full "
            onClick={toggleFormPersonales}
          >
            <div className="flex items-center space-x-2">
              <IdentificationIcon
                className="iconPersonalForm 
              w-5 sm:w-5 md:w-5 lg:w-6 xl:w-6 2xl:w-6
              h-5 sm:h-5 md:h-5 lg:h-6 xl:h-6 2xl:h-6"
              />
              <span
                className="
              font-semibold
              text-lg sm:text-lg md:text-lg 
              lg:text-xl xl:text-xl 2xl:text-xl"
              >
                DATOS PERSONALES
              </span>
            </div>
            {isFormVisiblePersonales ? (
              <ChevronUpIcon
                className="text-pink-700
              w-6 sm:w-6 md:w-6 lg:w-8 xl:text-w-8 2xl:w-8
              h-6 sm:h-6 md:h-6 lg:h-8 xl:text-h-8 2xl:h-8"
              />
            ) : (
              <ChevronDownIcon
                className="text-pink-700
              w-7 sm:w-7 md:w-7 lg:w-8 xl:text-w-8 2xl:w-8
              h-7 sm:h-7 md:h-7 lg:h-8 xl:text-h-8 2xl:h-8"
              />
            )}
          </div>

          {personalError && (
            <p className="text-error flex items-center">
              <ExclamationCircleIcon className="h-4 w-4 inline-block mr-2" />
              {personalError}
            </p>
          )}

          <div className="px-4">
            <AnimatePresence>
              {isFormVisiblePersonales && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onAnimationComplete={() =>
                    isFormVisiblePersonales ? trigger() : null
                  }
                >
                  {/* DATOS PERSONALES NOMBRE APELLIDOS */}
                  <div className="grid md:grid-cols-2 md:gap-[100px]">
                    <div className="relative z-0 mb-5 mt-4 group">
                      <input
                        {...register("nombre", {
                          required: "Este campo no puede ir vacío",
                          maxLength: {
                            value: 30,
                            message:
                              "El nombre no puede exceder los 30 caracteres", // Máxima longitud
                          },
                          pattern: {
                            value: /^[A-Za-z\sáéíóúÁÉÍÓÚñÑüÜ]+$/i,
                            message: "El nombre solo puede contener letras", // Patrón regex para solo letras
                          },
                        })}
                        type="text"
                        name="nombre"
                        id="nombre"
                        className={`py-3 mt-4 px-0 w-full ext-[#F70073] bg-transparent border-0 border-b-[3px] 
                        appearance-none dark:text-black 
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                          watch("nombre")
                            ? "border-[#F70073]"
                            : "border-[#C1D128]"
                        }`}
                        placeholder=" "
                      />

                      <label
                        htmlFor="nombre"
                        className={`flex peer-focus:font-medium absolute font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl
                        ${
                          watch("nombre")
                            ? "text-[#F70073] dark:text-[#F70073]"
                            : "text-gray-500 dark:text-gray-400"
                        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Nombre
                        <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                      </label>
                      {errors.nombre && (
                        <p
                          className="text-red-600
                        text-xs sm:text-xs md:text-xs
                        lg:text-base xl:text-base 2xl:text-base"
                        >
                          {errors.nombre.message}
                        </p>
                      )}
                    </div>

                    <div className="relative z-0 mb-5 mt-4 group">
                      <input
                        {...register("apellidos", {
                          required: "Este campo no puede ir vacío",
                          maxLength: {
                            value: 45,
                            message:
                              "El nombre no puede exceder los 45 caracteres", // Máxima longitud
                          },
                          pattern: {
                            value: /^[A-Za-z\sáéíóúÁÉÍÓÚñÑüÜ]+$/i,
                            message: "Los apellidos solo puede contener letras", // Patrón regex para solo letras
                          },
                        })}
                        type="text"
                        name="apellidos"
                        id="apellidos"
                        className={`py-3 mt-4 px-0 w-full text-[#F70073] bg-transparent border-0 border-b-[3px] 
                        appearance-none dark:text-black 
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                          watch("apellidos")
                            ? "border-[#F70073]"
                            : "border-[#C1D128]"
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="apellidos"
                        className={`flex peer-focus:font-medium absolute font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl${
                          watch("apellidos")
                            ? "text-[#F70073] dark:text-[#F70073]"
                            : "text-gray-500 dark:text-gray-400"
                        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Apellidos
                        <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                      </label>
                      {errors.apellidos && (
                        <p
                          className="text-red-600
                        text-xs sm:text-xs md:text-xs
                        lg:text-base xl:text-base 2xl:text-base"
                        >
                          {errors.apellidos.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* DATOS PERSONALES EMPRESA */}

                  <div className=" flex relative z-0 mb-5 mt-4 group ">
                    <input
                      {...register("empresa", {
                        maxLength: {
                          value: 40,
                          message:
                            "El nombre de la empresa no puede exceder los 45 caracteres", // Máxima longitud
                        },
                      })}
                      type="text"
                      name="empresa"
                      id="empresa"
                      className={`py-3 mt-4 px-0 w-full text-[#F70073] bg-transparent border-0 border-b-[3px] 
                      appearance-none dark:text-black 
                      text-sm sm:text-sm md:text-sm
                      lg:text-lg xl:text-lg 2xl:text-lg
                      focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                        watch("empresa")
                          ? "border-[#F70073]"
                          : "border-[#C1D128]"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="empresa"
                      className={`flex peer-focus:font-medium absolute font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] 
                      text-base sm:text-base md:text-base
                      lg:text-xl xl:text-xl 2xl:text-xl${
                        watch("empresa")
                          ? "text-[#F70073] dark:text-[#F70073]"
                          : "text-gray-500 dark:text-gray-400"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Empresa
                      <p
                        className="text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl px-0 text-[#f7a3ca] ml-2"
                      >
                        (Opcional)
                      </p>
                    </label>
                    {errors.empresa && (
                      <p
                        className="text-red-600
                      text-xs sm:text-xs md:text-xs
                      lg:text-base xl:text-base 2xl:text-base"
                      >
                        {errors.empresa.message}
                      </p>
                    )}
                  </div>
                  {/* DATOS PERSONALES telefono correo */}

                  <div className="grid md:grid-cols-2 md:gap-[100px]">
                    <div className="relative z-0 w-full mb-5 mt-4 group">
                      <input
                        {...register("telefono", {
                          required: "Este campo no puede ir vacío",
                          pattern: {
                            value: /^\d{10}$/, // Esta regex permite solo números y exactamente 10 dígitos
                            message: "Escribe el número en formato: 4433000000",
                          },
                        })}
                        type="tel"
                        pattern="[0-9]{10}"
                        name="telefono"
                        id="telefono"
                        className={`py-3 mt-4 px-0 w-full text-[#F70073] bg-transparent border-0 border-b-[3px] 
                        appearance-none dark:text-black 
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                          watch("telefono")
                            ? "border-[#F70073]"
                            : "border-[#C1D128]"
                        }`}
                        placeholder=""
                      />
                      <label
                        htmlFor="telefono"
                        className={`flex peer-focus:font-medium absolute font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl${
                          watch("telefono")
                            ? "text-[#F70073] dark:text-[#F70073]"
                            : "text-gray-500 dark:text-gray-400"
                        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Teléfono
                        <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                      </label>
                      {errors.telefono && (
                        <p
                          className="text-red-600
                        text-xs sm:text-xs md:text-xs
                        lg:text-base xl:text-base 2xl:text-base"
                        >
                          {errors.telefono.message}
                        </p>
                      )}
                    </div>

                    <div className="relative z-0 w-full mb-5 mt-4 group">
                      <input
                        {...register("email", {
                          required: "Este campo no puede ir vacío",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Formato de correo electrónico inválido",
                          },
                        })}
                        type="email"
                        name="email"
                        id="email"
                        className={`py-3 mt-4 px-0 w-full text-[#F70073] bg-transparent border-0 border-b-[3px] 
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        appearance-none dark:text-black 
                        focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                          watch("email")
                            ? "border-[#F70073]"
                            : "border-[#C1D128]"
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className={`flex peer-focus:font-medium absolute font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl${
                          watch("email")
                            ? "text-[#F70073] dark:text-[#F70073]"
                            : "text-gray-500 dark:text-gray-400"
                        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Correo
                        <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                      </label>
                      {errors.email && (
                        <p
                          className="text-red-600
                        text-xs sm:text-xs md:text-xs
                        lg:text-base xl:text-base 2xl:text-base"
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* SEGUNDO FORMULARIO */}

        <div
          className="datos-personales-container datos-personales-container bg-white p-4 mt-4 rounded-lg transition-all duration-300 ease-in-out
          px-4 sm:px-4 md:px-4 lg:px-16 xl:px-16 2xl:px-16
          mx-8 sm:mx-8 md:mx-8 lg:mx-16 xl:mx-16 2xl:mx-16"
        >
          {/* Botón para desplegar el formulario */}
          <div
            className="header-container flex items-center justify-between w-full"
            onClick={toggleFormDireccion}
          >
            <div className="flex items-center space-x-2">
              <LocationMarkerIcon
                className="iconDireccionForm 
              w-5 sm:w-5 md:w-5 lg:w-6 xl:w-6 2xl:w-6
              h-5 sm:h-5 md:h-5 lg:h-6 xl:h-6 2xl:h-6"
              />
              <span
                className="font-semibold
              text-lg sm:text-lg md:text-lg 
              lg:text-xl xl:text-xl 2xl:text-xl"
              >
                DIRECCION
              </span>
            </div>
            {isFormVisibleDireccion ? (
              <ChevronUpIcon
                className="text-pink-700
              w-6 sm:w-6 md:w-6 lg:w-8 xl:text-w-8 2xl:w-8
              h-6 sm:h-6 md:h-6 lg:h-8 xl:text-h-8 2xl:h-8"
              />
            ) : (
              <ChevronDownIcon
                className="text-pink-700
              w-7 sm:w-7 md:w-7 lg:w-8 xl:text-w-8 2xl:w-8
              h-7 sm:h-7 md:h-7 lg:h-8 xl:text-h-8 2xl:h-8"
              />
            )}
          </div>

          {direccionError && (
            <p className="text-error flex items-center">
              <ExclamationCircleIcon className="h-4 w-4 inline-block mr-2" />
              {direccionError}
            </p>
          )}

          {/* Formulario de datos personales */}
          <div className="px-4">
            <AnimatePresence>
              {isFormVisibleDireccion && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onAnimationComplete={() =>
                    isFormVisibleDireccion ? trigger() : null
                  }
                >
                  <div className="grid md:grid-cols-3 md:gap-[100px]">
                    <div className="relative z-0 mb-5 mt-4 group">
                      <input
                        {...register("calle", {
                          required: "Este campo no puede ir vacío",
                          maxLength: {
                            value: 45,
                            message:
                              "La calle no puede exceder los 45 caracteres", // Máxima longitud
                          },
                        })}
                        type="text"
                        name="calle"
                        id="calle"
                        className={`py-3 mt-4 px-0 w-full text-[#F70073] bg-transparent border-0 border-b-[3px] 
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        appearance-none dark:text-black 
                        focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                          watch("calle")
                            ? "border-[#F70073]"
                            : "border-[#C1D128]"
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="calle"
                        className={`flex peer-focus:font-medium absolute font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                          watch("calle")
                            ? "text-[#F70073] dark:text-[#F70073]"
                            : "text-gray-500 dark:text-gray-400"
                        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Calle
                        <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                      </label>
                      {errors.calle && (
                        <p
                          className="text-red-600
                        text-xs sm:text-xs md:text-xs
                        lg:text-base xl:text-base 2xl:text-base"
                        >
                          {errors.calle.message}
                        </p>
                      )}
                    </div>

                    <div className="relative z-0 mb-5 mt-4 group">
                      <input
                        {...register("colonia", {
                          required: "Este campo no puede ir vacío",
                          maxLength: {
                            value: 45,
                            message:
                              "La colonia no puede exceder los 45 caracteres", // Máxima longitud
                          },
                        })}
                        type="text"
                        name="colonia"
                        id="colonia"
                        className={`py-3 mt-4 px-0 w-full text-[#F70073] bg-transparent border-0 border-b-[3px] 
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        appearance-none dark:text-black 
                        focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                          watch("colonia")
                            ? "border-[#F70073]"
                            : "border-[#C1D128]"
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="colonia"
                        className={`flex peer-focus:font-medium absolute font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                          watch("colonia")
                            ? "text-[#F70073] dark:text-[#F70073]"
                            : "text-gray-500 dark:text-gray-400"
                        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Colonia
                        <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                      </label>
                      {errors.colonia && (
                        <p
                          className="text-red-600
                        text-xs sm:text-xs md:text-xs
                        lg:text-base xl:text-base 2xl:text-base"
                        >
                          {errors.colonia.message}
                        </p>
                      )}
                    </div>

                    <div className="relative z-0 mb-5 mt-4 group">
                      <input
                        {...register("ciudad", {
                          required: "Este campo no puede ir vacío",
                          maxLength: {
                            value: 45,
                            message:
                              "La ciudad no puede exceder los 45 caracteres", // Máxima longitud
                          },
                          pattern: {
                            value: /^[A-Za-z\sáéíóúÁÉÍÓÚñÑüÜ]+$/i,
                            message: "La ciudad solo puede contener letras", // Patrón regex para solo letras
                          },
                        })}
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        className={`py-3 mt-4 px-0 w-full text-[#F70073] bg-transparent border-0 border-b-[3px] 
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        appearance-none dark:text-black 
                        focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                          watch("ciudad")
                            ? "border-[#F70073]"
                            : "border-[#C1D128]"
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="ciudad"
                        className={`flex peer-focus:font-medium absolute font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                          watch("ciudad")
                            ? "text-[#F70073] dark:text-[#F70073]"
                            : "text-gray-500 dark:text-gray-400"
                        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Ciudad
                        <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                      </label>
                      {errors.ciudad && (
                        <p
                          className="text-red-600
                        text-xs sm:text-xs md:text-xs
                        lg:text-base xl:text-base 2xl:text-base"
                        >
                          {errors.ciudad.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 md:gap-[100px]">
                    <div className="relative z-0 mb-5 mt-4 group">
                      <input
                        {...register("cp", {
                          required: "Este campo no puede ir vacío",
                          pattern: {
                            value: /^\d{5}$/,
                            message:
                              "El codigo postal solo puede contener números y deben ser 5", // Patrón regex para solo letras
                          },
                        })}
                        type="text"
                        name="cp"
                        id="cp"
                        className={`py-3 mt-4 px-0 w-full text-[#F70073] bg-transparent border-0 border-b-[3px] 
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        appearance-none dark:text-black 
                        focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                          watch("cp") ? "border-[#F70073]" : "border-[#C1D128]"
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="cp"
                        className={`flex peer-focus:font-medium absolute font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                          watch("cp")
                            ? "text-[#F70073] dark:text-[#F70073]"
                            : "text-gray-500 dark:text-gray-400"
                        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Código postal
                        <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                      </label>
                      {errors.cp && (
                        <p
                          className="text-red-600
                        text-xs sm:text-xs md:text-xs
                        lg:text-base xl:text-base 2xl:text-base"
                        >
                          {errors.cp.message}
                        </p>
                      )}
                    </div>
                    <div className="relative z-0 mb-5 mt-4 group">
                      <input
                        {...register("num_ext", {
                          required: "Este campo no puede ir vacío",
                          maxLength: {
                            value: 10,
                            message:
                              "El número exterior no puede exceder los 10 caracteres", // Máxima longitud
                          },
                        })}
                        type="text"
                        name="num_ext"
                        id="num_ext"
                        className={`py-3 mt-4 px-0 w-full text-[#F70073] bg-transparent border-0 border-b-[3px] 
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        appearance-none dark:text-black 
                        focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                          watch("num_ext")
                            ? "border-[#F70073]"
                            : "border-[#C1D128]"
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="num_ext"
                        className={`flex peer-focus:font-medium absolute font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                          watch("num_ext")
                            ? "text-[#F70073] dark:text-[#F70073]"
                            : "text-gray-500 dark:text-gray-400"
                        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Núm.Exterior
                        <p className="text-xl px-0 text-[#f7a3ca]  ">*</p>
                      </label>
                      {errors.num_ext && (
                        <p
                          className="text-red-600
                        text-xs sm:text-xs md:text-xs
                        lg:text-base xl:text-base 2xl:text-base"
                        >
                          {errors.num_ext.message}
                        </p>
                      )}
                    </div>

                    <div className="relative z-0 mb-5 mt-4 group">
                      <input
                        {...register("num_int", {
                          maxLength: {
                            value: 10,
                            message:
                              "El número interior no puede exceder los 10 caracteres", // Máxima longitud
                          },
                        })}
                        type="text"
                        name="num_int"
                        id="num_int"
                        className={`py-3 mt-4 px-0 w-full text-[#F70073] bg-transparent border-0 border-b-[3px] 
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        appearance-none dark:text-black 
                        focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                          watch("num_int")
                            ? "border-[#F70073]"
                            : "border-[#C1D128]"
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="num_Int"
                        className={`flex peer-focus:font-medium absolute font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                          watch("num_int")
                            ? "text-[#F70073] dark:text-[#F70073]"
                            : "text-gray-500 dark:text-gray-400"
                        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Núm.Interior
                        <p
                          className="text-base sm:text-base md:text-base
                          lg:text-xl xl:text-xl 2xl:text-xl px-0 text-[#f7a3ca] ml-2"
                        >
                          (Opcional)
                        </p>
                      </label>
                      {errors.num_int && (
                        <p
                          className="text-red-600
                        text-xs sm:text-xs md:text-xs
                        lg:text-base xl:text-base 2xl:text-base"
                        >
                          {errors.num_int.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-1">
                    <div className="relative z-0 mb-5 mt-4 group">
                      <select
                        {...register("region")}
                        defaultValue="Michoacán"
                        className={`py-3 mt-4 px-0 w-full text-[#F70073] bg-transparent border-0 border-b-[3px] 
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        appearance-none dark:text-black 
                        focus:outline-none focus:ring-0 focus:border-[#F70073] peer ${
                          watch("region")
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
                        className={`flex peer-focus:font-medium absolute font-semibold text-[#F70073] dark:text-[#F70073] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] ${
                          watch("region")
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
                        className="block py-3 mt-4 px-0 w-full font-semibold text-#F70073 bg-transparent border-0 border-b-[3px]
                        text-sm sm:text-sm md:text-sm
                        lg:text-lg xl:text-lg 2xl:text-lg
                        border-[#F70073] appearance-none dark:text-black dark:border-[#F70073]  focus:outline-none focus:ring-0 focus:border-[#F70073] peer"
                        placeholder=" "
                        defaultValue="México"
                        readOnly
                        required
                      />
                      <label
                        htmlFor="pais"
                        className="flex peer-focus:font-medium absolute font-semibold text-[#F70073] dark:text-[#F70073] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                        text-base sm:text-base md:text-base
                        lg:text-xl xl:text-xl 2xl:text-xl
                        origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073] 
                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        País
                        <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div
          className="bg-white shadow-2xl shadow-[#F70073] py-4 flex flex-col mt-4 rounded-2xl justify-between items-center
          px-4 sm:px-4 md:px-4 lg:px-16 xl:px-16 2xl:px-16
          mx-8 sm:mx-8 md:mx-8 lg:mx-16 xl:mx-16 2xl:mx-16"
        >
          {/* Botón para desplegar el formulario */}
          <div className="flex items-center space-x-2 py-4">
            <CreditCardIcon
              className="iconDireccionForm 
              w-5 sm:w-5 md:w-5 lg:w-6 xl:w-6 2xl:w-6
              h-5 sm:h-5 md:h-5 lg:h-6 xl:h-6 2xl:h-6"
            />
            <span
              className="
              font-semibold
              text-lg sm:text-lg md:text-lg 
              lg:text-xl xl:text-xl 2xl:text-xl"
            >
              DETALLES DE PAGO
            </span>
          </div>

          <div>
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="font-bold text-[#F70073] px-4
                    text-base sm:text-base md:text-base 
                    lg:text-lg xl:text-lg 2xl:text-lg
                    text-center">
                    PRODUCTOS
                  </p>

                  <div className="px-4">
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
                {/* Columna de productos */}
                <div>
                  <p
                    className="px-4
                    font-bold text-[#F70073]
                    text-base sm:text-base md:text-base 
                    lg:text-lg xl:text-lg 2xl:text-lg
                    text-center"
                  >
                    FORMA DE PAGO
                  </p>
                  {/* Columna de forma de pago */}
                  <div>
                    {/* Se llama a forma pago. Mandando el triggerSubmit y le digo que va activar */}
                    <FormaPago
                      transferencia={transferencia}
                      setTransferencia={setTransferencia}
                      paypal={paypal}
                      setPaypal={setPaypal}
                    />
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
