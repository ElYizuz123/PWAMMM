import React from 'react'
import { Berkshire_Swash } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';

const berkshire = Berkshire_Swash({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],

});


const NuestrasMarcas = () => {
    return (
        <div className={berkshire.className} >

       <p className='text-white text-7xl ml-44 text-delineado  '> Nuestras  </p>
       <p className='text-[#f70073]  text-8xl ml-96 text-delineado'> Marcas </p>
        <div className='w-[90%] max-w-[1200px] m-auto p-10 '>{/*Este es el contenedor principal*/}
            <div className=' flex flex-wrap gap-4 items-center justify-center'> {/*Este es el contenedor de las marcas*/}

            <div className='card-logo  '>
                <Link href="https://www.facebook.com/profile.php?id=100093951884648">
                    <Image src={'/logos/Logo-MataVerde.png'} width={100} height={100} alt='' className='imagen-componente'/>
                </Link>
            </div>

            <div className='card-logo'>
                <Link href="https://www.facebook.com/mezcaldonmateo?locale=es_LA">
                     <Image src={'/logos/Logo-DonMateo.jpeg'} width={70} height={70} alt='' className='imagen-componente'/> 
                </Link>   
            </div>

            <div className='card-logo'>
                <Link href="https://www.facebook.com/mezcalarmonia?locale=es_LA">
                     <Image src={'/logos/Logo-MezcalArmoniaBla.png'} width={100} height={100} alt='' className='imagen-componente'/>   
                 </Link> 
            </div>

            <div className='card-logo'>
                <Link href="https://www.facebook.com/rocio.vega.12979?mibextid=ZbWKwL">
                    <Image src={'/logos/Logo-RocioVega.jpg'} width={90} height={90} alt='' className='imagen-componente'/>   
                 </Link> 
            </div>

            <div className='card-logo  '>
                <Link href="https://www.facebook.com/profile.php?id=100093951884648">
                     <Image src={'/logos/Logo-MataVerde.png'} width={100} height={100} alt='' className='imagen-componente'/>
                </Link>
            </div>

            <div className='card-logo  '>
                <Link href="https://www.facebook.com/mezcalcielonocturno">
                     <Image src={'/logos/Logo-CieloNocturno.jpg'} width={90} height={90} alt='' className='imagen-componente'/>
                </Link>
            </div>

            <div className='card-logo  '>
                <Link href="https://www.facebook.com/puritito.co.ra.zo">
                    <Image src={'/logos/Logo-PurititoCora.png'} width={100} height={100} alt='' className='imagen-componente'/>
                </Link>
            </div>

            <div className='card-logo  '>
                <Link href="https://www.facebook.com/EspinaRojaMezcal">
                     <Image src={'/logos/Logo-EspinaRoja.png'} width={100} height={100} alt='' className='imagen-componente'/>
                </Link>
            </div>

            <div className='card-logo  '>
                <Link href="https://www.facebook.com/mezcaltesoromichoacano">
                      <Image src={'/logos/Logo-TesoroMichoacano.png'} width={100} height={100} alt='' className='imagen-componente'/>
                </Link>
            </div>

            <div className='card-logo  '>
                <Link href="https://www.facebook.com/MesonQuesoCotija">
                      <Image src={'/logos/Logo-MesonQueso.png'} width={100} height={100} alt='' className='imagen-componente'/>
                </Link>
            </div>

            <div className='card-logo  '>
                <Link href="https://www.facebook.com/QveelaMezcal">
                  <Image src={'/logos/Logo-Qveela.jpeg'} width={95} height={95} alt='' className='imagen-componente'/>
                </Link>
            </div>

            <div className='card-logo  '>
                <Link href="https://www.facebook.com/Mezcalelviejo1983">
                     <Image src={'/logos/Logo-ElViejo.jpeg'} width={95} height={95} alt='' className='imagen-componente'/>
                </Link>
            </div>

            <div className='card-logo  '>
                <Link href="https://www.facebook.com/Mezcalelviejo1983">
                      <Image src={'/logos/Logo-CoronadePerlas.png'} width={100} height={100} alt='' className='imagen-componente'/>
                </Link>
            </div>







              


            </div>

           





        </div>
        </div>
    )
}

export default NuestrasMarcas