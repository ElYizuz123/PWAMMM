"use client"
import React, { useContext, useEffect, useState } from 'react'
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { contexto } from '../UpdateProvider'


const Paginacion = () => {


    const [paginas, setPaginas] = useState()
    const { setPage, update, setUpdate, page, totalPages } = useContext(contexto)
    const pathName = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleChange = (newPage) => {
        if (newPage <= totalPages) {
            router.push('?pages=' + newPage)
            setPage(newPage)
            const up = !update
            setUpdate(up)
        }
    }






    useEffect(() => {
        console.log(totalPages)
        var search = 0
        if (!page) {
            search = parseInt(searchParams.get('pages'))
        }
        else {
            search = page
        }
        if (search) {
            if (totalPages < 5) {
                var arr = []
                for (var i = 0; i < totalPages; i++) {
                    arr[i] = i + 1
                }
                setPaginas(arr)
            }
            else {
                if (search > 4) {

                    if((search+1)<=totalPages){
                        var arr = []
                        var it = 0
                        for (var i = search - 4; i < search; i++) {
                            arr[it] = i + 1
                            console.log(i + 1)
                            it++
                        }
                        arr[it] = search + 1
                        setPaginas(arr)
                    }
                }
                else {
                    const arr = [1, 2, 3, 4, 5]
                    setPaginas(arr)
                }

            }
        }
        else {
            if (totalPages < 5) {
                const arr = []
                for (var i = 0; i < totalPages; i++) {
                    arr[i] = i + 1
                }
                setPaginas(arr)
            }
            else {
                const arr = [1, 2, 3, 4, 5]
                setPaginas(arr)
            }
        }
    }, [totalPages])

    const handleNext = () => {
        var search = 0
        if (!page) {
            search = parseInt(searchParams.get('pages'))
        }
        else {
            search = parseInt(page)
        }
        if (search) {
            if ((search + 1) <= totalPages) {
                router.push('?pages=' + (search + 1))
                setPage(search + 1)
                const up = !update
                setUpdate(up)
            }
        } else {
            if ((search + 1) <= totalPages) {
                router.push('?pages=' + 1)
                setPage(1)
                const up = !update
                setUpdate(up)
            }
        }
    }
    const handlePrev = () => {
        var search = 0
        if (!page) {
            search = parseInt(searchParams.get('pages'))
        }
        else {
            search = page
        }
        if (search && search != 1) {
            router.push('?pages=' + (search - 1))
            setPage(search - 1)
            const up = !update
            setUpdate(up)
        }
    }

    useEffect(() => {
        // if(paginas[paginas.lenght()-1]==totalPages-1){

        // }
        // else{
        //     var arr = []
        //     for(var i =0; i<totalPages-paginas[paginas.lenght()-1]; i++){
        //         arr.push(paginas[paginas.lenght()-1]+i)
        //     }
        //     setPaginas(arr)
        // }
    }, [paginas, totalPages])
    return (
        <div className="flex items-center justify-end space-x-1 mr-24">
            <button onClick={handlePrev} className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                Anterior
            </button>
            {paginas && paginas.map((pagina, index) => (<button key={pagina} onClick={() => handleChange(pagina)} className="px-3 py-1 rounded-md bg-slate-200 hover:bg-gray-300">
                {pagina}

            </button>))}
            <button onClick={handleNext} className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                Siguiente
            </button>
        </div>
    )
}

export default Paginacion