import React from "react";
import ChangingText from "./components/ChangindText/ChangingText";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-white">
      <header className="w-full max-w-4xl p-6 flex justify-between items-center">
      <h1 className="text-9xl font-extrabold">
        João Vitor Nicolau
      </h1>

      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-extrabold mb-4">Olá, sou um Desenvolvedor Front-End</h2>
        <p className="text-lg text-gray-400 max-w-2xl">Construo interfaces <strong><ChangingText/></strong> </p>
      </main>
    </div>
  );
}