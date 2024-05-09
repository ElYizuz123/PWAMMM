"use client"
import { createContext, useState } from "react";

export const contexto = createContext()

export function UpdateProvider({children}){
    //Manejar actualizaciones entre las páginas
    const [update, setUpdate] = useState(false)
    //Establecer página actual en tiempo real
    const [page, setPage] = useState(null)
    //Establecer el máximo de páginas disponible
    const [totalPages, setTotalPages] = useState(null)
    return(
        <contexto.Provider value={{update, setUpdate, page, setPage, totalPages, setTotalPages}}>
            {children}
        </contexto.Provider>
    )
}