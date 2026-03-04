import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 text-gray-900">

      <div className="mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
        <Image
          src="/foto-perfil.jpg" 
          alt="Foto de Perfil"
          width={150}
          height={150}
          className="h-[150px] w-[150px] object-cover"
        />
      </div>

    
      <h1 className="mb-2 text-3xl font-bold tracking-tight">
        Bruno Ferreira de Andrade Lyra
      </h1>

      <p className="max-w-md text-center text-gray-600">
        Me chamo Bruno, tenho 20 anos, moro em Recife, e atualmente estou cursando o 5° periodo de Ciencia da Computação na UNICAP.
      </p>

    </main>
  );
}