import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'


const Paginacion = ({ totalPages }) => {

    const [paginas, setPaginas] = useState()
    const [colorIndex, setColorIndex] = useState()
    const pathName = usePathname()

    const handleChange = () => {
        
        
        buttonMap[pathName] = 'bg-[#F70073]';
    }

        
    useEffect(() =>{
       
    }, [colorIndex])

    
        
    useEffect(() =>{
        if(totalPages<5){
            console.log("hola")
        }
        else{
            const arr = [1,2,3,4,5]
            setPaginas(arr)
        }
    }, [totalPages])
    
    useEffect(() =>{
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
            <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                Anterior
            </button>
            {paginas && paginas.map((pagina, index) =>(<button key={pagina} className="px-3 py-1 rounded-md bg-slate-200 hover:bg-gray-300">
                {pagina}
                
            </button>))}
            <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                Siguiente
            </button>
        </div>
    )
}

export default Paginacion