"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { signIn } from "next-auth/react"


const Login = () => {

    const { register, handleSubmit } = useForm();
    const router = useRouter()
    const [error, setError] = useState(null)

    const handleOnSubmit = async (data) => {
        const res = await signIn('credentials', {
            user: data.user,
            password: data.password,
            redirect: false
        })

        if (res.error) {
            setError(res.error)
        }
        else {
            router.push('/administrador/ventas')
        }
    }

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">
                Usuario
            </label>
            <input
                type="text"
                id="user"
                required={true}
                maxLength={45}
                {...register('user', {
                    required: true,
                    maxLength: 45,
                })}
                className="w-full border border-pink-300 px-4 py-2 rounded-md focus:border-pink-500"
            />
            <label for="password" className="block mt-4 mb-2 text-sm font-medium text-gray-900">
                Contraseña
            </label>
            <input
                type="password"
                id="password"
                required={true}
                maxLength={30}
                {...register('password', {
                    required: true,
                    maxLength: 45,
                })}
                className="w-full border border-pink-300 px-4 py-2 rounded-md focus:border-pink-500"
            />
            <button
                type="submit"
                className="w-full mt-6 py-2 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-md"
            >
                Iniciar sesión
            </button>
            {error && <p className='text-red-700 text-xs pt-4 w-full text-center'>{error}</p>}

        </form>
    )
}

export default Login