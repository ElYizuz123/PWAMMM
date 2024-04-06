import "./globals.css";
import { K2D } from "next/font/google";
import { ProductProvider } from "@/context/ProductContext";

export const metadata = {
  title: "Mujeres Mezcaleras",
  description: "Asociación de Mujeres Mezcaleras de Michoacán",
};

const k2d = K2D({ subsets: ['latin'], weight: '400'})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={k2d.className}>
      <ProductProvider>
          <div>{children}</div>
        </ProductProvider>
      </body>
    </html>
  
  );
}
