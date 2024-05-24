"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Editar_marca from './Editar_marca';
import Swal from 'sweetalert2';
import { contexto } from '../UpdateProvider';
import Modal from 'react-modal'

const Leer_marcas = () => {
    const [marcas, setMarcas] = useState(null)
    const [uMarcasIsOpen, setUMarcasIsOpen] = useState(false)
    const [updateMarca, setUpdateMarca] = useState(null)
    const [asociadas, setAsociadas] = useState(null)
    const { update } = useContext(contexto)
    const editarRef = useRef(null)
    //Leer marcas
    const readData = async () => {
        const res = await fetch('/api/administrador/marcas/read_marcas_admin')
        const resJSON = await res.json()
        setMarcas(JSON.parse(resJSON))
    };

    const readAsociadas = async () =>{
        const res = await fetch('/api/administrador/marcas/read_asociadas')
        const resJSON = await res.json()
        setAsociadas(resJSON)
    }

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
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        },
    };

    //Leer datos al cargar
    useEffect(() => {
        readData()
        readAsociadas()
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
        const res = await fetch('/api/administrador/marcas/delete_marca', {
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
        <div className='flex justify-center w-10/12 overflow-y-auto'>
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
            <table className='table-auto font-bold w-full'>
                <thead>
                    <tr>
                        <th colSpan="5">
                            <hr className='border border-black w-full' />
                        </th>
                    </tr>
                    <tr>
                        <th className='px-4 py-2 text-left'>Nombre</th>
                        <th className='px-4 py-2 text-left'>Asociada</th>
                        <th className='px-4 py-2 text-left'>Tipo</th>
                    </tr>
                    <tr>
                        <th colSpan="5">
                            <hr className='border border-[#F70073] w-full' />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {marcas &&
                        marcas.map((marca) => (
                            <tr key={marca.id_marca}>
                                <td className='px-4 py-2 border-b border-gray-500'>{marca.nombre}</td>
                                <td className='px-4 py-2 border-b border-gray-500'>{marca.asociada.nombre}</td>
                                <td className='px-4 py-2 border-b border-gray-500'>{marca.tipo === 1 ? "Mezcal" : "Acompañamiento"}</td>
                                <td className='px-4 py-2 border-b border-gray-500'>
                                    <button onClick={() => openUMarca(marca.id_marca)} className='w-12 h-6 font-bold bg-[#91caf8] text-black border border-black hover:border-[#F70073] rounded'>
                                        Editar
                                    </button>
                                </td>
                                <td className='px-4 py-2 border-b border-gray-500'>
                                    <button onClick={() => handleDelete(marca.id_marca)} className='w-16 h-6 font-bold bg-[#f89191] text-black border border-black hover:border-[#F70073] rounded'>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

        </div>
    )
}

export default Leer_marcas