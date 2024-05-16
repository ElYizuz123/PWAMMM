"use client"
import React, { useContext, useEffect, useState } from 'react'
import TarjetaUbicacion from './TarjetaUbicacion'
import { contexto } from '../UpdateProvider'
import UpdateUbicacion from './UpdateUbicacion'
import Modal from 'react-modal'

const LeerUbicaciones = () => {
  const [ubicaciones, setUbicaciones] = useState(null)
  const [updateUbicacion, setUpdateUbicacion] = useState(null)
  const [isUbicacionesUpdateOpen, setIsUbicacionesUpdateOpen] = useState(null)
  const [marcas, setMarcas] = useState(null)
  const { update } = useContext(contexto)
   

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

  const readData = async () => {
    const res = await fetch('/api/administrador/ubicaciones/read_ubicaciones')
    const resJSON = await res.json()
    setUbicaciones(resJSON)
  }

  const readMarcas = async () =>{
    const res = await fetch('/api/administrador/ubicaciones/read_marcas')
    const resJSON = await res.json()
    setMarcas(resJSON)
  }

  useEffect(() =>{
    readMarcas()
  }, [])

  useEffect(() => {
    readData()
  }, [update])

  const openEdit = (idUbicacion) => {
    setUpdateUbicacion(idUbicacion)
    setIsUbicacionesUpdateOpen(true)
  }

  const onClose = () =>{
    setIsUbicacionesUpdateOpen(false)
  }
 

  return (
    <div>
      <Modal
        isOpen={isUbicacionesUpdateOpen}
        onRequestClose={onClose}
        style={customStyles}
        ariaHideApp={false}
      >
        <UpdateUbicacion
          onClose={onClose}
          idUbicacion={updateUbicacion}
          marcas={marcas}
        />
      </Modal>
      <div className='w-full flex flex-wrap gap-20 pl-44 pt-6 pb-36'>
        {ubicaciones &&
          ubicaciones.map((ubicacion) => (<TarjetaUbicacion key={ubicacion.id_ubicacion}
            idUbicacion={ubicacion.id_ubicacion}
            mapa={JSON.parse(ubicacion.json_marca).mapa}
            marca={JSON.parse(ubicacion.json_marca).marca}
            foto={JSON.parse(ubicacion.json_marca).qrImagen}
            openEdit={openEdit}
          />))
        }
      </div>
    </div>
  )
}

export default LeerUbicaciones