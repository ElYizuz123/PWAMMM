import Historia from "@/components/Historia/Historia";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Main from "@/components/Video/Main";
import Carrusel from "@/components/carrusel/Carrusel";
import Image from "next/image";

export default function Home() {
  return (
    <LayoutPrincipal>
      <main className="w-full h-screen">
        <Main />
      </main>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Carrusel/>
      <Historia/>
    </LayoutPrincipal>

  );
}

