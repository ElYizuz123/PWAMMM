import { League_Gothic } from "next/font/google"
import Link from "next/link"

const league_gothic = League_Gothic({ subsets: ['latin'] })

const LayoutCRUD = ({ children, title }) => {
    return (
        <div>
            <div className="w-full h-5">
                <img className=" w-full h-full" src="/color_banner.png"/>
            </div>
            <div className="flex justify-start">
                <div className="h-screen w-52 bg-[#FF533A] bg-opacity-25 rounded-tl-3xl rounded-br-3xl flex flex-col">
                    <div className={league_gothic.className}>
                        <h1 className="text-center text-black opacity text-xl mt-3">MUJERES MEZCALERAS DE MICHOACÁN</h1>
                    </div>
                    <div className="flex justify-center mt-5">
                        <img src="/mezcaleras_logo.png" className="w-12" />  
                    </div>
                    <div className="w-full flex flex-col justify-end items-end pt-8">
                        <Link href="/administrador/ventas" className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full">
                            <p className="font-bold text-xl pr-3 pt-1 pb-1">VENTAS</p>
                        </Link>
                        <Link href="/administrador/productos" className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5">
                            <p className="font-bold text-xl pr-3 pt-1 pb-1">PRODUCTOS</p>
                        </Link>
                        <Link href="/administrador/asociadas" className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5">
                            <p className="font-bold text-xl  pr-3 pt-1 pb-1">ASOCIADAS</p>
                        </Link>
                        <Link href="/administrador/eventos" className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5">
                            <p className="font-bold text-xl pr-3 pt-1 pb-1">EVENTOS</p>
                        </Link>
                        <Link href="/administrador/galeria" className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5">
                            <p className="font-bold text-xl pr-3 pt-1 pb-1">GALERÍA</p>
                        </Link>
                        <button className="w-11/12 hover:bg-[#F70073] hover:text-white flex justify-end rounded-l-full mt-5">
                            <p className="font-bold text-xl pr-3 pt-1 pb-1">AYUDA</p>
                        </button>
                    </div>
                                            
                </div>
                <div className="w-full">
                    <div className="w-full h-16 bg-[#D9D9D9] flex justify-between items-center p-10">
                        <div>
                            <div className="flex justify-center ml-10">
                                <p className="font-bold text-[#6D5353]">Tu perfil {'>'}</p>
                                <p className="ml-1 text-[#C71E78] font-bold">{title}</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <p className="font-bold">Administrador</p>
                            <div className="bg-black w-[0.2%] opacity-50 ml-4 mr-4"></div>
                            <button>
                                <img src="/notification.png" className="w-7 h-"></img>
                            </button>
                            <div className="bg-black w-[0.2%] opacity-50 ml-4 mr-4"></div>
                            <button>
                                <img src="/logout.png" className="w-7 h-7"></img>
                            </button>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
            <div className="w-full h-9">
                <img className="h-full w-full" src="/color_banner.png"/>
            </div>
        </div>
    )
}

export default LayoutCRUD