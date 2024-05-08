import React from 'react'


const DetallesCliente = ({ onClose, cliente }) => {
    return (
        <div className='w-[80%] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[600px] overflow-x-hidden'>
            <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                <p className='font-bold pl-5'>Detalles de cliente</p>
                <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
            </div>
            <table className="table-auto w-full font-bold overflow-x-auto">
                <thead className='text-xl'>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-black w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="px-4 text-center text-black">Datos</td>
                        <td colSpan="2" className="px-4 text-center text-black">Información</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className='mt-1 border border-[#F70073] w-full' />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Nombre y apellidos</td>
                        <td colSpan="2" className="text-center border px-4 py-2 bg-pink-100">{cliente.nombre_cliente +" "+cliente.apellidos_cliente}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Envío</td>
                        <td colSpan="2" className="border px-4 py-2 text-center bg-pink-100">{cliente.envio==0 ? "Domicilio":"Tienda"}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Empresa</td>
                        <td colSpan="2" className="border px-4 py-2 text-center bg-pink-100">{cliente.empresa ? cliente.empresa:"No aplica"}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Teléfono</td>
                        <td colSpan="2" className="border px-4 py-2 text-center bg-pink-100">{cliente.telefono}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Email</td>
                        <td colSpan="2" className="border px-4 py-2 text-center bg-pink-100">{cliente.email}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Código postal</td>
                        <td colSpan="2" className="border px-4 py-2 text-center bg-pink-100">{cliente.cp}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Calle</td>
                        <td colSpan="2" className="border px-4 py-2 text-center bg-pink-100">{cliente.calle}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Número exterior</td>
                        <td colSpan="2" className="border px-4 py-2 text-center bg-pink-100">{cliente.num_ext}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Número interior</td>
                        <td colSpan="2" className="border px-4 py-2 text-center bg-pink-100">{cliente.num_int? cliente.num_int:"No aplica"}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Colonia</td>
                        <td colSpan="2" className="border px-4 py-2 text-center bg-pink-100">{cliente.colonia}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Población</td>
                        <td colSpan="2" className="border px-4 py-2 text-center bg-pink-100">{cliente.poblacion}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center bg-pink-200">Región</td>
                        <td colSpan="2" className="border px-4 py-2 text-center bg-pink-100">{cliente.region}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetallesCliente