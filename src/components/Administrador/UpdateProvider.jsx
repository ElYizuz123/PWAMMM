"use client"
import { createContext, useState } from "react";

export const contexto = createContext()

export function UpdateProvider({children}){
    const [update, setUpdate] = useState(false)
    return(
        <contexto.Provider value={{update, setUpdate}}>
            {children}
        </contexto.Provider>
    )
}