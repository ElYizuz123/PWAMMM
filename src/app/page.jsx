import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Main from "@/components/Video/Main";
import Carrusel from "@/components/carrusel/Carrusel";
import Image from "next/image";

export default function Home() {
  return (
    <LayoutPrincipal>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Main />
      </main>
    </LayoutPrincipal>

  );
}

