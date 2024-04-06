import "./globals.css";
import { K2D } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Mujeres Mezcaleras",
  description: "Asociación de Mujeres Mezcaleras de Michoacán",
};

const k2d = K2D({ subsets: ['latin'], weight: '400' })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={k2d.className}>
      <ProductProvider>
          <div>{children}</div>
        </ProductProvider>
        <footer>
          <Footer />
        </footer>



      </body>
    </html >

  );
}
