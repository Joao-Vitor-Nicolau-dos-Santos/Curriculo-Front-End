import React from "react";
import ChangingText from "./components/ChangindText/ChangingText";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-dark text-white mt-8 ml-10 mr-10">
        <header className="w-full max-w-4xl">
          <h1 className="text-8xl font-baskervville">
            João Vitor <span className="text-orange-400 font-grotesk">Nicolau</span>
          </h1>
        </header>

        <main className="flex-1 flex flex-col  px-1">
          <h2 className="text-4xl font-regular m-4">Olá, sou um Desenvolvedor Front-End</h2>
          <p className="text-xl text-gray max-w-2xl m-4">Construo interfaces <strong><ChangingText /></strong> </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12  w-full mx-auto">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold">
                Sobre <span className="text-orange-400 font-grotesk">mim.</span>
              </h3>
              <div className="mt-4 max-w-2xl">
                <p className="text-lg text-gray-300">
                  Sou um desenvolvedor Front-End apaixonado por criar interfaces modernas e responsivas. Tenho conhecimentos em <span className="text-orange-400 font-grotesk"> <strong> React, Next.js e Tailwind CSS.</strong></span>
                </p>
                <p className="text-lg text-gray-300 mt-4">
                  Estou sempre em busca de novos desafios e oportunidades para aprender e crescer na área de desenvolvimento web.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center bg-radial from-gray-700 to-gray-1000 rounded-lg shadow-xl p-7 rounded-full">
              <div className="w-100 h-1 bg-orange-400 rounded-xl shadow-[0_0_30px_10px_rgba(255,140,0,0.5)]"></div>
            </div>
          </div>

        </main>


      </div>
    </Layout>
  );
}