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
import DatosPersonalesForm from "./DatosPersonalesForm";
import DireccionForm from "./DireccionForm";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";

const berkshire_swash = Berkshire_Swash({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});
function Formulario() {
  const {
    productos,
    total,
    isEnvio,
    setDataFormulario,
    metodoPago,
    enviarDataApi
  } = useContext(ProductContext);
  const [isFormVisiblePersonales, setIsFormVisiblePersonales] = useState(false);
  const [isFormVisibleDireccion, setIsFormVisibleDireccion] = useState(false);
  const [personalError, setPersonalError] = useState("");
  const [direccionError, setDireccionError] = useState("");
  const [transferencia, setTransferencia] = useState(false);
  const [paypal, setPaypal] = useState(false);
  const [isDataReadyForApi, setIsDataReadyForApi] = useState(false);
  const [confirmarTransferencia, setConfirmarTransferencia] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleOpenConfirm = () => {
    setIsDataReadyForApi(true);
  };

  const handleCloseConfirm = () => {
    setConfirmarTransferencia(false);
  };

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
        setConfirmarTransferencia(true);
      } else {
        setPaypal(true);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isDataReadyForApi) {
        try {
          setIsLoading(true); // Inicia el estado de carga
          setConfirmarTransferencia(false);
          await enviarDataApi(); // Intenta ejecutar enviarDataApi y espera su finalización
          setIsLoading(false);
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
      <div>
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <div className="loading-text">Registrando pedido...</div>
        </div>
      )}
      {/* El resto de tu componente */}
    </div>
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
                  {/* DATOS PERSONALES FORMULARIO*/}
                  <DatosPersonalesForm
                    register={register}
                    errors={errors}
                    watch={watch}
                  />
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
                  {/* DIRECCION FORMULARIO */}
                  <DireccionForm
                    register={register}
                    errors={errors}
                    watch={watch}
                  />
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
                  <p
                    className="font-bold text-[#F70073] px-4
                    text-base sm:text-base md:text-base 
                    lg:text-lg xl:text-lg 2xl:text-lg
                    text-center"
                  >
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

      {confirmarTransferencia && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full transform transition-all scale-105">
            <div className="flex items-center justify-center mb-6">
              <FaShoppingCart className="text-green-500 text-4xl mr-2" />
              <h2 className="text-3xl font-bold text-green-500">
                ¿Listo para confirmar tu pedido?
              </h2>
            </div>
            <p className="mb-6 text-gray-600 text-center">
              {`Revisa los detalles de tu pedido. Si todo está correcto, haz clic
              en "Confirmar". ¡Gracias por comprar con nosotros!`}
            </p>
            <div
              className={`space-y-4 mb-6 ${
                productos.length > 2 ? "overflow-y-scroll h-56" : ""
              }`}
            >
              {productos.map((producto, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-16 h-16 rounded-lg mr-4"
                  />
                  <div className="flex flex-col justify-between flex-1">
                    <span className="font-bold text-gray-700">
                      {producto.nombre}
                    </span>
                    <span className="text-gray-500">
                      Cantidad: {producto.cantidad}
                    </span>
                  </div>
                  <div className="font-semibold text-gray-800">
                    ${producto.precio * producto.cantidad}
                  </div>
                </div>
              ))}
            </div>
            <div className="mb-6 p-4 border-t border-gray-300">
              <div className="flex justify-between items-center font-bold text-gray-900 mb-2">
                <span>Envío</span>
                <span>$199</span>
              </div>
              <div className="flex justify-between items-center font-bold text-gray-900">
                <span className="text-xl">Total</span>
                <span className="text-xl text-green-500">
                  ${isEnvio === 0 ? total : total + 199}
                </span>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseConfirm}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none"
              >
                Cancelar
              </button>
              <button
                onClick={handleOpenConfirm}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Formulario;
