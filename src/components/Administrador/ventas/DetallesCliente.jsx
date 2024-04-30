import React from 'react'


const DetallesCliente = ({ onClose, data }) => {
    return (
        <div className='w-[80%] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[600px] overflow-x-hidden'>
            <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                <p className='font-bold pl-5'>Detalles de cliente</p>
                <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
            </div>
            <table className="table-auto w-full font-bold overflow-x-auto">
                <thead>
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
                        <td className="border py-2 text-center">Nombre y apellidos</td>
                        <td colSpan="2" className="text-center border px-4 py-2">{data.nombre_cliente+" "+data.apellidos_cliente}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center">Envío</td>
                        <td colSpan="2" className="border px-4 py-2 text-center">{data.envio==0 ? "Domicilio":"Tienda"}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center">Empresa</td>
                        <td colSpan="2" className="border px-4 py-2 text-center">{data.empresa ? data.empresa:"No aplica"}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center">Teléfono</td>
                        <td colSpan="2" className="border px-4 py-2 text-center">{data.telefono}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center">Email</td>
                        <td colSpan="2" className="border px-4 py-2 text-center">{data.email}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center">Código postal</td>
                        <td colSpan="2" className="border px-4 py-2 text-center">{data.cp}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center">Calle</td>
                        <td colSpan="2" className="border px-4 py-2 text-center">{data.calle}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center">Número exterior</td>
                        <td colSpan="2" className="border px-4 py-2 text-center">{data.num_ext}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center">Número interior</td>
                        <td colSpan="2" className="border px-4 py-2 text-center">{data.num_int? data.num_int:"No aplica"}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center">Colonia</td>
                        <td colSpan="2" className="border px-4 py-2 text-center">{data.colonia}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center">Población</td>
                        <td colSpan="2" className="border px-4 py-2 text-center">{data.poblacion}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <hr className=' border border-gray-400 w-full' />
                        </th>
                    </tr>
                    <tr>
                        <td className="border py-2 text-center">Región</td>
                        <td colSpan="2" className="border px-4 py-2 text-center">{data.region}</td>
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