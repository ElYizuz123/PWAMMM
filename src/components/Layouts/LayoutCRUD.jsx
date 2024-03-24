
const LayoutCRUD = ({ children, title }) => {
    return (
        <div className="flex justify-start">
            <div className="h-screen w-48 bg-[#FF533A] opacity-30 rounded-tl-3xl rounded-br-3xl">

            </div>
            <div className="w-full">
                <div className="w-full h-16 bg-[#D9D9D9]">
                    <div>

                    </div>
                    <h1 className="size-20">{title}</h1>
                </div>
                {children}
            </div>
        </div>
    )
}

export default LayoutCRUD