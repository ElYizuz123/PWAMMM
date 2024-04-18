"use client"
import { createContext, useState } from "react";

export const contexto = createContext()

export function UpdateProvider({children}){
    const [update, setUpdate] = useState(false)
    const [page, setPage] = useState(null)
    const [totalPages, setTotalPages] = useState(null)
    return(
        <contexto.Provider value={{update, setUpdate, page, setPage, totalPages, setTotalPages}}>
            {children}
        </contexto.Provider>
    )
}