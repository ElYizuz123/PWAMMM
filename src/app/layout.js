import { Inter } from "next/font/google";
import "./globals.css";
import IconoInicio from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mujeres Mezcaleras",
  description: "Asociación de mujeres mezcaleras de Michoacán",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="bg-gray-100 text-gray-800 py-14">
            <h1 className="text-4xl mb-4">logo*</h1>
            <div className="flex justify-end">

            <a href="#" className="flex items-center mx-10 text-3xl">
              INICIO
              <span className="relative inline-block bottom-4">
                {IconoInicio}
              </span>
            </a>
                <a href="#" className="mx-10 text-3xl">Tienda</a>
                <a href="#" className="mx-10 text-3xl">Nosotras</a>
                <a href="#" className="mx-10 text-3xl">Galería</a>
                <a href="#" className="mx-10 text-3xl">Contacto</a>
            </div>
        </div>
        
        {children}</body>
    </html>
  );
}
