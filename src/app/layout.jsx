import "./globals.css";
import { K2D } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { ProductProvider } from "@/context/ProductContext";
// import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: "Mujeres Mezcaleras",
  description: "Asociación de Mujeres Mezcaleras de Michoacán",
};

const k2d = K2D({ subsets: ['latin'], weight: '400' })


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="custom-scrollbarL">
      
      {/* <GoogleTagManager gtmId="GTM-5QHCK3D4" /> */}

      <body className={k2d.className}>

        <ProductProvider>
          <div>{children}</div>
        </ProductProvider>
      </body>
    </html >

  );
}
