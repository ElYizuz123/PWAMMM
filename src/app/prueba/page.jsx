"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";

const page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Contenedor principal para el formulario y los pasos */}
      <div className="lg:col-span-2 space-y-6">
        {/* Bloque de Identificación */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-500 mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 mr-3 flex items-center justify-center">
              1
            </span>
            Identificación
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Correo</label>
              <input
                className="  border rounded"
                type="email"
                placeholder="alexanguie5@gmail.com"
              />
            </div>

            <div class=" relative mb-6 group">
              <input
                {...register("nombre", { required: "Nombre es requerido" })}
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class=" block text-lg py-3 px-0 text-[#F70073] bg-transparent border-0 border-b-[3px]
                  border-[#C1D128] appearance-none  dark:text-black
                  dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#C1D128] peer"
                placeholder=" "
                required
              />
              {errors.nombre && <p>{errors.nombre.message}</p>}
              <label
                for="floating_first_name"
                class=" flex py-0 peer-focus:font-medium  text-xl font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10
                   origin-[0]  peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073]
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nombre
                <p className=" text-xl  text-[#f7a3ca]  ">*</p>
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Apellidos</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                placeholder="Gutierrez"
              />
            </div>

            {/* ...resto de tu formulario */}

            <button className="w-full bg-orange-500 text-white p-3 rounded mt-4">
              IR PARA LA ENTREGA
            </button>
          </form>
        </div>

        {/* Bloque de Envío */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-500 mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 mr-3 flex items-center justify-center">
              2
            </span>
            Envío
          </h2>
          {/* ...Contenido del formulario de Envío... */}
        </div>

        {/* Bloque de Pago */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-500 mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 mr-3 flex items-center justify-center">
              3
            </span>
            Pago
          </h2>
          {/*FORMULARIO*/}
        </div>
      </div>

      {/* Columna para el resumen de la compra */}
      <div className="bg-white shadow rounded-lg p-6 sticky top-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Resumen de la compra</h2>
        </div>

        <div className="border-b pb-4 mb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <span className="text-sm font-bold bg-red-100 text-red-500 rounded-full mr-2 px-2 py-1">
                1
              </span>
              <div>
                <p className="font-bold text-sm">
                  Combo: Mezcal Unión Joven + 4 sales gour...
                </p>
                <p className="text-gray-500 text-xs">Hasta 1 día hábil</p>
              </div>
            </div>
            <p className="font-bold">$840</p>
          </div>
        </div>

        <div className="text-sm mb-6">
          <div className="flex justify-between my-2">
            <span>Subtotal</span>
            <span>$840</span>
          </div>
          <div className="flex justify-between my-2">
            <span>Gastos del envío</span>
            <span>$147</span>
          </div>
        </div>

        <div className="flex justify-between items-center font-bold text-lg">
          <span>Total</span>
          <span>$987</span>
        </div>
      </div>
    </div>

    // <div className="container mx-auto p-6">
    //   <div className="md:flex-row gap-10">
    //     {/* Columna de identificación */}
    //     <div className="flex-1 bg-white p-6 shadow rounded ">
    //       <div className="flex justify-between items-center mb-2">
    //         <h2 className="text-xl font-semibold mb-4">Identificación</h2>

    //         <button onClick={() => setIsEditing(!isEditing)}>
    //           <FiEdit className="text-orange-500 h-5 w-5 hover:text-orange-700" />
    //         </button>
    //       </div>

    //       {isEditing ? (
    // <form>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Correo</label>
    //     <input
    //       className="  border rounded"
    //       type="email"
    //       placeholder="alexanguie5@gmail.com"
    //     />
    //   </div>

    //   <div class=" mb-6 group">
    //     <input
    //       {...register("nombre", { required: "Nombre es requerido" })}
    //       type="text"
    //       name="floating_first_name"
    //       id="floating_first_name"
    //       class=" block text-lg px-0 text-[#F70073] bg-transparent border-0 border-b-[3px]
    //       border-[#C1D128] appearance-none  dark:text-black
    //       dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#C1D128] peer"
    //       placeholder=" "
    //       required
    //     />
    //     {errors.nombre && <p>{errors.nombre.message}</p>}
    //     <label
    //       for="floating_first_name"
    //       class=" flex peer-focus:font-medium  text-xl font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10
    //        origin-[0]  peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073]
    //       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //     >
    //       Nombre
    //       <p className=" text-xl  text-[#f7a3ca]  ">*</p>
    //     </label>
    //   </div>

    //   <div className="mb-4">
    //     <label className="block text-gray-700">Apellidos</label>
    //     <input
    //       className="w-full p-2 border rounded"
    //       type="text"
    //       placeholder="Gutierrez"
    //     />
    //   </div>

    //   {/* ...resto de tu formulario */}

    //   <button className="w-full bg-orange-500 text-white p-3 rounded mt-4">
    //     IR PARA LA ENTREGA
    //   </button>
    // </form>
    //       ) : (
    //         // La vista "comprimida" de la información
    //         <div>
    //           <p>alexyangui5@gmail.com</p>
    //           <p>Alejandro Gutierrez</p>
    //           <p>(443) 126 1199</p>
    //         </div>
    //       )}
    //     </div>

    //     <div className="flex flex-wrap md:flex-nowrap gap-10 mt-4">
    //       {/* Columna de identificación */}
    //       <div className="flex-1 bg-white p-6 shadow rounded">
    //         <div className="flex justify-between items-center mb-2">
    //           <h2 className="text-xl font-semibold mb-4">Envio</h2>

    //           <button onClick={() => setIsEditing(!isEditing)}>
    //             <FiEdit className="text-orange-500 h-5 w-5 hover:text-orange-700" />
    //           </button>
    //         </div>

    //         {isEditing ? (
    //           <form>
    //             <div className="mb-4">
    //               <label className="block text-gray-700">Correo</label>
    //               <input
    //                 className="w-full p-2 border rounded"
    //                 type="email"
    //                 placeholder="alexanguie5@gmail.com"
    //               />
    //             </div>

    //             <div className="mb-4">
    //               <label
    //                 for="floating_first_name"
    //                 class="flex peer-focus:font-medium absolute text-xl font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10
    //               origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F70073] peer-focus:dark:text-[#F70073]
    //               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //               >
    //                 Nombre
    //                 <p className=" text-xl px-0 text-[#f7a3ca]  ">*</p>
    //               </label>
    //               <input
    //                 type="text"
    //                 name="floating_first_name"
    //                 id="floating_first_name"
    //                 class="block py-3 mt-2 px-0 w-[700px]  text-lg  text-[#F70073] bg-transparent border-0 border-b-[3px]
    //               border-[#C1D128] appearance-none  dark:text-black
    //               dark:focus:border-[#F70073] focus:outline-none focus:ring-0 focus:border-[#C1D128] peer"
    //                 placeholder=" "
    //                 required
    //               />
    //             </div>

    //             <div className="mb-4">
    //               <label className="block text-gray-700">Apellidos</label>
    //               <input
    //                 className="w-full p-2 border rounded"
    //                 type="text"
    //                 placeholder="Gutierrez"
    //               />
    //             </div>

    //             {/* ...resto de tu formulario */}

    //             <button className="w-full bg-orange-500 text-white p-3 rounded mt-4">
    //               IR PARA LA ENTREGA
    //             </button>
    //           </form>
    //         ) : (
    //           // La vista "comprimida" de la información
    //           <div>
    //             <p>alexyangui5@gmail.com</p>
    //             <p>Alejandro Gutierrez</p>
    //             <p>(443) 126 1199</p>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex-1 bg-white p-6 shadow rounded">
    //     <div className="flex justify-between items-center mb-4">
    //       <h2 className="text-xl font-semibold">Resumen de la compra</h2>
    //       <a
    //         href="/carrito"
    //         className="text-sm text-blue-500 hover:text-blue-700"
    //       >
    //         Volver a carrito
    //       </a>
    //     </div>

    //     <div className="border-b pb-4 mb-4">
    //       <div className="flex items-start justify-between">
    //         <div className="flex items-center">
    //           <span className="text-sm font-bold bg-red-100 text-red-500 rounded-full mr-2 px-2 py-1">
    //             1
    //           </span>
    //           <div>
    //             <p className="font-bold text-sm">
    //               Combo: Mezcal Unión Joven + 4 sales gour...
    //             </p>
    //             <p className="text-gray-500 text-xs">Hasta 1 día hábil</p>
    //           </div>
    //         </div>
    //         <p className="font-bold">$840</p>
    //       </div>
    //     </div>

    //     <div className="text-sm mb-6">
    //       <div className="flex justify-between my-2">
    //         <span>Subtotal</span>
    //         <span>$840</span>
    //       </div>
    //       <div className="flex justify-between my-2">
    //         <span>Gastos del envío</span>
    //         <span>$147</span>
    //       </div>
    //     </div>

    //     <div className="flex justify-between items-center font-bold text-lg">
    //       <span>Total</span>
    //       <span>$987</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default page;
