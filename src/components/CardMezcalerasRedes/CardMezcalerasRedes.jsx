import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CardMezcalerasRedes = ({nombre,foto}) => {
  return (
    <Link href="/nosotras">
    <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[340px] ">
    <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-pink-200  shadow-lg bg-clip-border rounded-xl h-80">
      <Image  src={foto} layout="fill" alt="profile-picture" className=' object-cover ' />
    </div>
    <div class="p-6 text-center">
      <h4 class="block mb-2  text-2xl  font-semibold leading-snug  text-blue-gray-900">
       {nombre}
      </h4>
     
    </div>
    
  </div>
  </Link>
  )
}

export default CardMezcalerasRedes