"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Editar_marca from './Editar_marca';
import Swal from 'sweetalert2';
import { contexto } from '../UpdateProvider';
import Modal from 'react-modal'

const Leer_marcas = ({asociadas}) => {
    const [marcas, setMarcas] = useState(null)
    const [uMarcasIsOpen, setUMarcasIsOpen] = useState(false)
    const [updateMarca, setUpdateMarca] = useState(null)
    const {update} = useContext(contexto) 
    const editarRef = useRef(null)
    //Leer marcas
    const readData = async () => {
        const res = await fetch('/api/marcas/read_marcas_admin')
        const resJSON = await res.json()
        setMarcas(JSON.parse(resJSON))
    };

    //Configuración del modal
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: '60%',
          bottom: '50%',
          height: '50%',
          marginRight: '-50%',
          marginBottom: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#00000000',
          border: 'none',
          boxShadow: 'none',
          overflow:'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        },
      };

    //Leer datos al cargar
    useEffect(() => {
        readData()
    }, [update])

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
                text: "La marca fue eliminada",
                icon: "success"
            });
            readData()
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal!",
            });
        }
    }



    //Cerrar pop-up de agregar marca
    const closeUProduct = () => {
        setUMarcasIsOpen(false)
    };

    //Abrir pop-up de agregar marca
    const openUMarca = (idMarca) => {
        setUpdateMarca(idMarca)
        setUMarcasIsOpen(true)
    }


    return (
        <div>
            <Modal
                isOpen={uMarcasIsOpen}
                onRequestClose={closeUProduct}
                style={customStyles}
            >
                <Editar_marca 
                    onClose={closeUProduct}
                    asociadas={asociadas}
                    idMarca={updateMarca}
                />
            </Modal>
            {marcas && marcas.map((marca) => (
                <div key={marca.id_marca}>
                    <div className='flex justify-between w-full mt-0.5 pl-5 '>
                        <p className='font-bold w-44'>{marca.nombre}</p>
                        <p className='font-bold ml-[7%] text-left w-44'>{marca.asociada.nombre}</p>
                        <p className='font-bold w-16 text-left ml-5'>{marca.tipo == 1 ? "Mezcal" : "Acompañamiento"}</p>
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
    )
}

export default Leer_marcas