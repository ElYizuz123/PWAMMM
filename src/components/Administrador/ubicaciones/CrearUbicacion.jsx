"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { contexto } from '../UpdateProvider'
import Modal from 'react-modal'

const randomHexa = () => {
  const randomNumber = Math.floor(Math.random() * 65536);
  const hexadecimalValue = randomNumber.toString(16).toUpperCase().padStart(5, '0');
  return hexadecimalValue
}

const CrearUbicacion = () => {
  const { update, setUpdate } = useContext(contexto)
  const [cUbicacionesIsOpen, setCUbicacionesIsOpen] = useState(false)
  const [marcas, setMarcas] = useState(null)
  const { register, handleSubmit, reset, setValue } = useForm();
  const fileInputRef = useRef(null)
  const hexa = randomHexa()


  //Configuración de los modales
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: '60%',
      bottom: '50%',
      marginRight: '-50%',
      marginBottom: '-50%',
      height: '70%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#00000000',
      border: 'none',
      boxShadow: 'none',
      overflow: 'auto',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    },
  };

  //Leer las marcas
  const readMarcas = async () => {
    const res = await fetch('/api/ubicaciones/read_marcas')
    const resJSON = await res.json()
    setMarcas(resJSON)
  }


  //Establecer los campos de foto y hexadecimal en el form
  useEffect(() => {
    register('qrImagen');
    register('hexa')
  }, [register]);

  //Inicializar lectura de marcas
  useEffect(() => {
    readMarcas()
  }, [])

  //Cerrar la ventana modal
  const onClose = () => {
    setCUbicacionesIsOpen(false)
  }

  //Abrir la ventana modal
  const isOpen = () => {
    setCUbicacionesIsOpen(true)
  }



  //Manejar la creación de una nueva asociada
  const handleOnSubmit = async (data) => {
    const res = await fetch('/api/ubicaciones/create_ubicacion', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'aplication/json'
      }
    })
    const resJSON = await res.json()
    console.log(resJSON)
    if (resJSON == "Registrado") {
      let timerInterval;
      Swal.fire({
        title: "Ubicación añadida!",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        confirmButtonText: "Ok",
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then(() => {

        const up = !update
        setUpdate(up)
        reset();
      });
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
      });
    }

  }

  //Manejar el input de la foto 
  const handleFileButton = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='h-full'>
      <button onClick={isOpen} className='bg-[#98E47D] w-48 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
        <Image alt="mas" layout='intrinsic' width={40} height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
        <p className='mr-3'>Agregar ubicación</p>
      </button>
      <Modal
        isOpen={cUbicacionesIsOpen}
        onRequestClose={onClose}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className='h-[430px] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[400px]'>
          <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
            <p className='font-bold pl-5'>Ubicación</p>
            <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
          </div>
          <div className='w-full h-full flex justify-center ml-5'>
            <div className='h-full w-[60%] flex justify-between '>
              <div className='flex flex-col items-start gap-y-6 mt-4 mr-2'>
                <p className='text-xl mt-2'>Página</p>
                <p className='text-xl mt-2'>Marca</p>
                <p className='text-xl mt-3'>Mapa</p>
                <p className='text-xl mt-2'>Ubicación</p>
                <p className='text-xl mt-2'>Teléfono</p>
              </div>
              <div>
                <div className='h-full flex flex-col items-start mt-5 mr-2'>
                  <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <input
                      type='text'
                      name='pagina'
                      ref={fileInputRef}
                      required={true}
                      maxLength={300}
                      placeholder='Página'
                      className='w-full border-2 border-black rounded-lg pl-1'
                      {...register('pagina', {
                        required: true,
                        maxLength: 300
                      })}
                    />
                    <select
                      name='marca'
                      className='w-full border-2 border-black rounded-lg pl-1 mt-5'
                      id="select_marca"
                      required={true}
                      {...register('marca', {
                        required: true
                      })}
                    >
                      <option></option>
                      {marcas && (
                        marcas.map((marca) => (
                          <option value={marca.nombre} key={marca.id_marca}>{marca.nombre}</option>
                        ))
                      )}
                    </select>
                    <input
                      type='text'
                      name='mapa'
                      required={true}
                      maxLength={500}
                      {...register('mapa', {
                        required: true,
                        maxLength: 500
                      })}
                      className='w-full h-10 border-2 border-black rounded-lg pl-1 mt-5'
                      placeholder='Link del mapa'
                    />
                    <input
                      type='text'
                      name='ubicacion'
                      required={true}
                      maxLength={45}
                      {...register('ubicacion', {
                        required: true,
                        maxLength: 300
                      })}
                      className='w-full h-10 border-2 border-black rounded-lg pl-1 mt-5'
                      placeholder='Ubicación'
                    />
                    <input
                      type='text'
                      name='telefono'
                      required={true}
                      maxLength={10}
                      {...register('telefono', {
                        required: true,
                        maxLength: 10
                      })}
                      className='w-full h-10 border-2 border-black rounded-lg pl-1 mt-5'
                      placeholder='Teléfono'
                    />
                    <div className='w-full flex justify-end items-end'>
                      <button
                        type='submit'
                        className='bg-[#98E47D] w-32 h-10 text-2xl font-bold rounded-xl mr-3 mt-6'
                      >Agregar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Modal>




    </div>


  )
}

export default CrearUbicacion