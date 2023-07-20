import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#1c2b53] flex flex-col justify-center items-center gap-8">
      <Image src={Logo} alt=" " className="h-32 w-32 aspect-auto my-4" />
      <h1 className="text-white text-7xl font-bold">Under Construction</h1>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white">
          The only St Mary's computer science department website
        </p>
        <p className="text-white">Lorem ipsum</p>
      </div>
    </main>
  );
}
