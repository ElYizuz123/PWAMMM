
const LayoutCRUD = ({ children, title }) => {
    return (
        <div className="flex justify-start">
            <div className="h-screen w-48 bg-[#FF533A] opacity-30 rounded-tl-3xl rounded-br-3xl">

            </div>
            <div className="w-full">
                <div className="w-full h-16 bg-[#D9D9D9] flex justify-around items-center">
                    <div>
                        <div className="flex justify-center">
                            <p>Tu perfil {'>'}</p>
                            <p className="ml-1 text-[#C71E78] font-bold">Ventas</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold">Administrador</p>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default LayoutCRUD