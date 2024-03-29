import Barra_Lateral from "../Administrador/Barra_Lateral"
import Barra_Superior from "../Administrador/Barra_Superior"

const LayoutCRUD = ({ children, title }) => {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-5">
                <img className="h-full w-full" src="/color_banner.png"/>
            </div>
            <div className="h-auto w-full flex justify-start">
                <Barra_Lateral/>
                <div className="w-full h-auto">
                    <Barra_Superior title={title}/>
                    <div className="">
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