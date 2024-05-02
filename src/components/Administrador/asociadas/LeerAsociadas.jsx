"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { contexto } from '../UpdateProvider'
import Tarjeta_Asociadas from './Tarjeta_Asociadas'
import Update_Asociada from './Update_Asociada'
import Paginacion from '../productos/Paginacion'
import { useSearchParams } from 'next/navigation'
import Modal from 'react-modal'

const LeerAsociadas = () => {
    const { update, page, setTotalPages} = useContext(contexto)
    const [asociadas, setAsociadas] = useState(null)
    const [uAsociadasIsOpen, setUAsociadasIsOpen] = useState(false)
    const [updateAsociada, setUpdateAsociada] = useState(null)
    const searchParams = useSearchParams()
    const editRef = useRef(null)

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: '60%',
          bottom: '50%',
          marginRight: '-50%',
          marginBottom: '-50%',
          height:'70%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#00000000',
          border: 'none',
          boxShadow: 'none',
          overflow:'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        },
      };

    const readData = async () => {
        var search = ""
        if(!page){
            search = searchParams.get('pages')
        }
        else{
            search = page
        }
        const res = await fetch('/api/asociadas/read_asociadas',{
            method: 'POST',
            body : JSON.stringify(search)
        })
        const resJSON = await res.json()
        setAsociadas(JSON.parse(resJSON))
    }

    const countData = async () =>{
        const res = await fetch('/api/asociadas/cont_asociadas')
        const resJSON = await res.json()
        setTotalPages(Math.ceil((resJSON)/12))
    }

    const onClose = () => {
        setUAsociadasIsOpen(false)
    }

    const isOpen = (data) => {
        setUpdateAsociada(data)
        setUAsociadasIsOpen(true)
    }


    useEffect(() => {
        readData()
        countData()
    }, [update])

    return (
        <div>
            <Modal
                isOpen={uAsociadasIsOpen}
                onRequestClose={onClose}
                style={customStyles}
                ariaHideApp={false}
            >
                <Update_Asociada 
                    onClose={onClose}
                    idAsociada={updateAsociada}
                />
            </Modal>
            <div>
                <div className='w-full flex flex-wrap gap-20 pl-44 pt-8 pb-36'>
                    {asociadas && asociadas.map((asociada) => (
                        <Tarjeta_Asociadas key={asociada.id_asociada}
                            id_asociada={asociada.id_asociada}
                            nombre={asociada.nombre}
                            foto={asociada.foto}
                            openEdit={isOpen}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default LeerAsociadas