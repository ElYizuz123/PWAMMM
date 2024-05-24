import db from '@/libs/db'
import { NextResponse } from 'next/server'

export const revalidate = 0;
const formatVentas = (ventas, marca, producto) => {
    const formatedVentas = []
    const formatedCountVentas = []
    if (ventas && !marca) {
        
        ventas.map(element => {
            const fVenta = element.fecha_venta.getDate() + "/" +
                (element.fecha_venta.getMonth() + 1) + "/" +
                element.fecha_venta.getFullYear()
            if (!formatedVentas.includes(fVenta)) {
                formatedVentas.push(fVenta)
                let venta = {
                    fecha: fVenta,
                    cantidad: 1
                }
                formatedCountVentas.push(venta)
            }
            else {
                const findedVenta = formatedCountVentas.find(venta => venta.fecha === fVenta)
                findedVenta.cantidad++
            }
        });
    } else if (ventas && marca && !producto) {
        
        ventas.map(element => {
            element.venta_individual.map(venta_ind => {
                if (venta_ind.producto.marca_id_marca == marca) {
                    const fVenta = element.fecha_venta.getDate() + "/" +
                        (element.fecha_venta.getMonth() + 1) + "/" +
                        element.fecha_venta.getFullYear()
                    if (!formatedVentas.includes(fVenta)) {
                        formatedVentas.push(fVenta)
                        let venta = {
                            fecha: fVenta,
                            cantidad: 1
                        }
                        formatedCountVentas.push(venta)
                    }
                    else {
                        const findedVenta = formatedCountVentas.find(venta => venta.fecha === fVenta)
                        findedVenta.cantidad++
                    }
                }
            })
        });
    }
    else if (ventas) {
        console.log(producto)
        ventas.map(element => {
            element.venta_individual.map(venta_ind => {
                if (venta_ind.producto.id_producto == producto) {
                    const fVenta = element.fecha_venta.getDate() + "/" +
                        (element.fecha_venta.getMonth() + 1) + "/" +
                        element.fecha_venta.getFullYear()
                    if (!formatedVentas.includes(fVenta)) {
                        formatedVentas.push(fVenta)
                        let venta = {
                            fecha: fVenta,
                            cantidad: 1
                        }
                        formatedCountVentas.push(venta)
                    }
                    else {
                        const findedVenta = formatedCountVentas.find(venta => venta.fecha === fVenta)
                        findedVenta.cantidad++
                    }
                }
            })

        });
    }

    return formatedCountVentas
}

export async function POST(request) {
    try {
        let data = await request.json()
        const marca = data?.marca
        const producto = data?.producto
        if (!data.fechaIni) {
            data = null
        }
        let ventas = null
        if (data) {
            ventas = await db.venta_total.findMany({
                include: {
                    venta_individual: {
                        include: {
                            producto: true
                        }
                    }
                },
                where: {
                    fecha_venta: {
                        gte: data.fechaIni,
                        lte: data.fechaFin
                    }
                },
                orderBy: {
                    fecha_venta: 'asc'
                }
            })
        }
        else {
            ventas = await db.venta_total.findMany({
                include: {
                    venta_individual: {
                        include: {
                            producto: true
                        }
                    }
                },
                orderBy: {
                    fecha_venta: 'asc'
                }
            })
        }
        const formatedVentas = formatVentas(ventas, marca, producto)
        return NextResponse.json(formatedVentas)
    } catch (error) {
        console.log("Error al leer los datos", error)
        return NextResponse.json("Error al leer los datos", error)
    }
}