import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 text-gray-900">
      
      <div className="mb-6 shadow-lg rounded-xl overflow-hidden">
        <Image
          src="/foto-perfil.jpg" 
          alt="Foto de perfil"
          width={400} 
          height={400} 
          className="w-full max-w-sm h-auto object-cover"
        />
      </div>


      <h1 className="mb-2 text-3xl font-bold tracking-tight">
        Bruno Ferreira de Andrade Lyra
      </h1>
      <p className="max-w-md text-center text-gray-600">
        Me chamo Bruno. Tenho 20 anos. Atualmente estou cursando o 5° periodo de Ciencia da Computação na UNICAP.
      </p>

    </main>
  );
}