"use client"

import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'
import VerVentas from './VerVentas'
import DetallesCliente from './DetallesCliente'
import Swal from 'sweetalert2'
import { contexto } from '../UpdateProvider'

const Leer_ventas = () => {
    const [orden, setOrden] = useState("reciente")
    const [ventasOr, setVentasOr] = useState(null)
    const [detallesIsOpen, setDetallesIsOpen] = useState(false)
    const [detallesCliente, setDetallesCliente] = useState(false)
    const [idVenta, setIdVenta] = useState(null)
    const [clientData, setClientData] = useState(null)

    //Configuraciones del modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '50%',
            bottom: '50%',
            marginRight: '-50%',
            marginBottom: '-50%',
            height: '65%',
            transform: 'translate(-40%, -50%)',
            backgroundColor: '#00000000',
            border: 'none',
            boxShadow: 'none',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        },
    };

    const readData = async (ord) =>{
        const res = await fetch('/api/administrador/ventas/read_ventas')
        const resJSOn = await res.json()
        if(ord){
            setVentasOr(resJSOn)
        }
        else{
            setVentasOr(resJSOn.reverse())
        }
    }

    useEffect(()=>{
        if(orden == "reciente"){
            readData(true)
        }else{
            readData(false)
        }
        
    },[orden])

    //Cerrar modal de detalles
    const onClose = () => {
        setDetallesIsOpen(false)
    }

    //Abrir modal de detalles
    const isOpen = (venta) => {
        setIdVenta(venta)
        setDetallesIsOpen(true)
    }

    //Cerrar modal de datos del cliente
    const onClienteClose = () => {
        setDetallesCliente(false)
    }

    //Abrir modal de datos del cliente
    const isClienteOpen = (cliente) => {
        setClientData(cliente)
        setDetallesCliente(true)
    }

    //Cambiar orden de visualización de ventas
    const handleChange = (e) => {
        if (e.target.value == "antiguo") {
            setOrden("antiguo");
        }
        else {
            setOrden("reciente");
        }
    }

    const changeStatus = async (stat, idVenta) => {
        let data = {
            statusA: stat == "Pendiente" ? "Atendida":"Pendiente",
            id: idVenta
        }
        const res = await fetch('/api/administrador/ventas/change_status', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const resJSON = await res.json()
        if (resJSON == "Exito") {
            let timerInterval;
            Swal.fire({
                title: "Status cambiado!",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                confirmButtonText: "Ok",
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then(() => {
                if(orden == "reciente"){
                    readData(true)
                }else{
                    readData(false)
                }
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

    return (
        <div className='flex justify-center overflow-y-auto w-10/12'>

            <Modal
                isOpen={detallesIsOpen}
                onRequestClose={onClose}
                style={customStyles}
                ariaHideApp={false}
            >
                <VerVentas onClose={onClose} idVenta={idVenta} />
            </Modal>
            <Modal
                isOpen={detallesCliente}
                onRequestClose={onClienteClose}
                style={customStyles}
                ariaHideApp={false}
            >
                <DetallesCliente onClose={onClienteClose} cliente={clientData} />
            </Modal>
            <select id="orden" className='absolute right-32 top-14 border border-[#F70073]' onChange={handleChange}>
                <option value="reciente">Mas reciente</option>
                <option value="antiguo">Mas antiguo</option>
            </select>
            <div className='w-full flex justify-center'>
                <table className='table-auto font-bold w-full'>
                    <thead>
                        <tr>
                            <th colSpan="7">
                                <hr className=' border border-black w-full' />
                            </th>
                        </tr>
                        <tr>
                            <th className='px-4 py-2 text-left'>N° de venta</th>
                            <th className='px-4 py-2 text-left'>Fecha de venta</th>
                            <th className='px-4 py-2 text-left'>Total</th>
                            <th className='px-4 py-2 text-left'>Detalles</th>
                            <th className='px-4 py-2 text-left'>Cliente</th>
                            <th className='px-4 py-2 text-left'>Status</th>
                            <th className='px-4 py-2 text-left'>Revisada</th>
                        </tr>
                        <tr>
                            <th colSpan="7">
                                <hr className=' border border-[#F70073] w-full' />
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {ventasOr &&
                            ventasOr.map((venta) => (
                                <tr key={venta.id_venta}>
                                    <td className='px-4 py-2 border-b border-gray-500'>{venta.id_venta}</td>
                                    <td className='px-4 py-2 border-b border-gray-500'>{venta.fecha_venta.slice(0, 10) + " " + venta.fecha_venta.slice(11, 16)}</td>
                                    <td className='px-4 py-2 border-b border-gray-500'>{"$ " + venta.total}</td>
                                    <td className='px-4 py-2 border-b border-gray-500'>
                                        <button onClick={() => isOpen(venta.id_venta)} className='w-12 h-6 mr-8 font-bold flex justify-center items-center bg-white text-[#F70073] border border-black hover:border-[#F70073] py-2 px-4 rounded'>Ver</button>
                                    </td>
                                    <td className='px-4 py-2 border-b border-gray-500'>
                                        <button onClick={() => isClienteOpen(venta)} className='w-12 h-6 mr-20 font-bold flex justify-center items-center bg-white text-[#F70073] border border-black hover:border-[#F70073] py-2 px-4 rounded'>Ver</button>
                                    </td>

                                    <td className='px-4 py-2 border-b border-gray-500'>{venta.status}</td>
                                    <td className='px-4 py-2 border-b border-gray-500'>
                                        <div className='flex justify-center'>
                                            <input type='checkbox' defaultChecked={venta.status == "Pendiente" ? false:true} className='w-5 h-5 border-b border-gray-500 flex' onClick={() => changeStatus(venta.status, venta.id_venta)} />
                                        </div>
                                    </td>

                                </tr>


                            ))}

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Leer_ventas