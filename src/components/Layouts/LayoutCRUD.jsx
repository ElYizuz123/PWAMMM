import { ConfigProvider } from "antd"
import Barra_Lateral from "../Administrador/Barra_Lateral"
import Barra_Superior from "../Administrador/Barra_Superior"
import es_ES from 'antd/locale/es_ES'
import Image from "next/image"

const LayoutCRUD = ({ children, title }) => {
    return (
        <div className="w-full h-auto">
            <ConfigProvider locale={es_ES}>
                <div className="w-full h-5">
                    <Image alt="ImageBannerCrudAdmin" width={1000} height={1000} className="h-full w-full" src="/fondos/color_banner.png" />
                </div>
                <div className="h-auto w-full flex justify-start">
                    <Barra_Lateral />
                    <div className="w-full h-auto">
                        <Barra_Superior title={title} />
                        <div className="">
                            {children}
                        </div>
                    </div>
                </div>
                <div className="w-full h-9">
                    <Image alt="ImageBannerCrudAdminAbajo" width={1000} height={1000} className="h-full w-full" src="/fondos/color_banner.png" />
                </div>
            </ConfigProvider>
        </div>
    )
}

export default LayoutCRUD