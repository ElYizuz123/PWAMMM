import Barra_Lateral from "../Administrador/Barra_Lateral"
import Barra_Superior from "../Administrador/Barra_Superior"

const LayoutCRUD = ({ children, title }) => {
    return (
        <div>
            <div className="w-full h-5">
                <img className=" w-full h-full" src="/color_banner.png"/>
            </div>
            <div className="flex justify-start">
                <Barra_Lateral title={title}/>
                <div className="w-full">
                    <Barra_Superior title={title}/>
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