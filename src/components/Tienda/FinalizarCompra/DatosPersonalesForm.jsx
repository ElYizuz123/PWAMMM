import React from "react";

const DatosPersonalesForm = ({ register, errors, watch }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-[100px]">
        <div className="relative z-0 mb-5 mt-4 group">
          <input
            {...register("nombre", {
              required: "Este campo no puede ir vacío",
              maxLength: {
                value: 30,
                message: "El nombre no puede exceder los 30 caracteres", // Máxima longitud
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
          watch("nombre") ? "border-[#F70073]" : "border-[#C1D128]"
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
                message: "El nombre no puede exceder los 45 caracteres", // Máxima longitud
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
        watch("apellidos") ? "border-[#F70073]" : "border-[#C1D128]"
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
        watch("empresa") ? "border-[#F70073]" : "border-[#C1D128]"
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
    </div>
  );
};

export default DatosPersonalesForm;
