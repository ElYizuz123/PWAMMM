import "./globals.css";
import { K2D } from "next/font/google";

export const metadata = {
  title: "Mujeres Mezcaleras",
  description: "Asociación de Mujeres Mezcaleras de Michoacán",
};

const k2d = K2D({ subsets: ['latin'], weight: '400'})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-k2d">
        {children}
      </body>
    </html>
  
  );
}
