import React from "react";

const DireccionForm = ({ register, errors, watch }) => {
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
  return (
    <div>
      <div className="grid md:grid-cols-3 md:gap-[100px]">
        <div className="relative z-0 mb-5 mt-4 group">
          <input
            {...register("calle", {
              required: "Este campo no puede ir vacío",
              maxLength: {
                value: 45,
                message: "La calle no puede exceder los 45 caracteres", // Máxima longitud
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
          watch("calle") ? "border-[#F70073]" : "border-[#C1D128]"
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
                message: "La colonia no puede exceder los 45 caracteres", // Máxima longitud
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
          watch("colonia") ? "border-[#F70073]" : "border-[#C1D128]"
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
                message: "La ciudad no puede exceder los 45 caracteres", // Máxima longitud
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
          watch("ciudad") ? "border-[#F70073]" : "border-[#C1D128]"
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
          watch("num_ext") ? "border-[#F70073]" : "border-[#C1D128]"
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
          watch("num_int") ? "border-[#F70073]" : "border-[#C1D128]"
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
          watch("region") ? "border-[#F70073]" : "border-[#F70073]"
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
    </div>
  );
};

export default DireccionForm;
