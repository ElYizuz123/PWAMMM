"use client"
import Crear_marca from '@/components/Administrador/marcas/Crear_marca'
import Editar_marca from '@/components/Administrador/marcas/Editar_marca'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const Page = () => {

  const [marcas, setMarcas] = useState(null)
  const [asociadas, setAsociadas] = useState(null)
  const [cMarcasIsOpen, setCMarcasIsOpen] = useState(false)
  const [uMarcasIsOpen, setUMarcasIsOpen] = useState(false)
  const [updateMarca, setUpdateMarca] = useState(null)

  //Eliminar una marca
  const deleteProduct = async (data) => {
    const res = await fetch('/api/marcas/delete_marca', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'aplication/json'
      }
    })
    const resJSON = await res.json()
    console.log(resJSON)
    if (resJSON == "Marca eliminada con éxito") {
      Swal.fire({
        title: "Eliminado!",
        text: "La marca fué eliminada",
        icon: "success"
      });
      readData()
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
      });
    }
  }

  //Alerta de borrado
  const handleDelete = async (data) => {
    Swal.fire({
      title: "Eliminar marca",
      text: "Todos los productos asociados a esta marca serán eliminados y no hay forma de revertir la acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, borrar!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(data)
      }
    });
  }

  //Abrir pop-up de agregar marca
  const openCMarca = () => {
    setCMarcasIsOpen(true)
  }
  //Cerrar pop-up de agregar marca
  const closeCProduct = () => {
    setCMarcasIsOpen(false)
    readData()
  };

  //Cerrar pop-up de agregar marca
  const closeUProduct = () => {
    setUMarcasIsOpen(false)
    readData()
  };

  //Abrir pop-up de agregar marca
  const openUMarca = (idMarca) => {
    setUpdateMarca(idMarca)
    setUMarcasIsOpen(true)
  }

  //Leer marcas
  const readData = async () => {
    const res = await fetch('/api/marcas/read_marcas_admin')
    const resJSON = await res.json()
    setMarcas(JSON.parse(resJSON))
  };

  //Leer asociadas
  const readAsociadas = async () => {
    const res = await fetch('/api/asociadas/read_asociadas')
    const resJSON = await res.json()
    setAsociadas(JSON.parse(resJSON))
  };

  //Leer datos al cargar
  useEffect(() => {
    readData()
    readAsociadas()
  }, [])

  //Animación de scroll
  useEffect(() => {
    if (cMarcasIsOpen) {
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  }, [cMarcasIsOpen]);

  useEffect(() => {
    if (uMarcasIsOpen) {
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  }, [uMarcasIsOpen]);


  return (
    <LayoutCRUD title="Marcas">
      <div className={`absolute top-1/2 left-[45%] z-10 w-4/12 ${cMarcasIsOpen ? "" : "pointer-events-none"}`}>
        {cMarcasIsOpen && <Crear_marca
          isOpen={cMarcasIsOpen}
          onClose={closeCProduct}
          asociadas={asociadas}
        />}
      </div>
      <div className={`absolute top-1/2 left-[45%] z-10 w-4/12 ${uMarcasIsOpen ? "" : "pointer-events-none"}`}>
        {uMarcasIsOpen && <Editar_marca
          isOpen={uMarcasIsOpen}
          onClose={closeUProduct}
          asociadas={asociadas}
          idMarca={updateMarca}
        />}
      </div>
      <main className='flex flex-col items-center justify-between w-full h-full'>
        <div className='relative w-full h-[1000px] overflow-hidden'>
          <div className='absolute bottom-0 w-full z-0'>
            <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} className='w-full opacity-50' />
          </div>
          <div className='relative w-full h-screen'>
            <div className='w-full flex justify-center'>
              <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
              <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Marcas</p>
            </div>
            <div className='w-full flex justify-center mt-4'>
              <div className='w-10/12 flex justify-begin'>
                <button onClick={openCMarca} className='bg-[#98E47D] w-44 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <Image alt="mas" layout='intrinsic' width={40}  height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                  <p className='mr-3'>Agregar marca</p>
                </button>
              </div>
            </div>
            <div className='w-full h-full flex flex-col items-center'>
              <div className='w-10/12 flex flex-col items-begin h-full'>
                <div className='w-full h-[0.3%] bg-black mt-6' />
                <div className='flex justify-between w-8/12'>
                  <p className='ml-5 font-bold'>Nombre</p>
                  <p className='font-bold ml-[7%]'>Asociada</p>
                  <p className='font-bold mr-[3%]'>Tipo</p>
                </div>
                <div className='w-full h-[0.3%] bg-[#F70073] ' />
                <div className='w-full overflow-y-visible'>
                  {marcas && marcas.map((marca) => (
                    <div key={marca.id_marca}>
                      <div className='flex justify-between w-full mt-0.5 pl-5 '>
                        <p className='font-bold w-44'>{marca.nombre}</p>
                        <p className='font-bold ml-[7%] text-left w-44'>{marca.asociada.nombre}</p>
                        <p className='font-bold w-16 text-left ml-5'>{marca.tipo == 0 ? "Mezcal" : "Acompañamiento"}</p>
                        <button className='w-12 h-6 font-bold flex justify-center items-center bg-[#91caf8]  text-black border border-black hover:border-[#F70073] py-2 px-4 rounded'
                          onClick={() => openUMarca(marca.id_marca)}
                        >Editar</button>
                        <button className='w-16 h-6 font-bold flex justify-center items-center bg-[#f89191]  text-black border border-black hover:border-[#F70073] py-2 px-4 rounded'
                          onClick={() => handleDelete(marca.id_marca)}
                        >Eliminar</button>
                      </div>
                      <div className='w-full h-0.5 bg-[#B1A8A8] mt-0.5' />
                    </div>

                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default Page