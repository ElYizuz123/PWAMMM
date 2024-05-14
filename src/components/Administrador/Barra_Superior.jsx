"use client"
import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react'
import { IoLogOutOutline, IoNotificationsOutline } from 'react-icons/io5'

const Barra_Superior = ({title}) => {
    return (
        <div className="w-full h-16 bg-[#D9D9D9] flex justify-between items-center p-10">
            <div>
                <div className="flex justify-center ml-10">
                    <p className="font-bold text-[#6D5353]">Tu perfil {'>'}</p>
                    <p className="ml-1 text-[#C71E78] font-bold">{title}</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <p className="font-bold">Administrador</p>
                <hr className="bg-black w-[1px] h-10 opacity-50 ml-4 mr-4"></hr>
                <button onClick={() => signOut()}>
                    <IoLogOutOutline className="w-8 h-10"/>
                </button>
            </div>
        </div>
    )
}

export default Barra_Superior