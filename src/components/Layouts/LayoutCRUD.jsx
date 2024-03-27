import Barra_Lateral from "../Administrador/Barra_Lateral"
import Barra_Superior from "../Administrador/Barra_Superior"

const LayoutCRUD = ({ children, title }) => {
    return (
        <div className="h-full w-full">
            <div className="w-full h-5">
                <img className=" w-full h-full" src="/color_banner.png"/>
            </div>
            <div className="w-full h-full flex justify-start">
                <Barra_Lateral/>
                <div className="w-full h-full">
                    <Barra_Superior title={title}/>
                    <div className="h-full">
                        {children}
                    </div>
                </div>
            </div>
            <div className="w-full h-9">
                <img className="h-full w-full" src="/color_banner.png"/>
            </div>
        </div>
    )
}

export default LayoutCRUD