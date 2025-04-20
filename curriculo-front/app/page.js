import React from "react";
import ChangingText from "./components/ChangindText/ChangingText";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-dark text-white mt-8 ml-10 mr-10 ">
        <header className="w-full max-w-4xl">
          <h1 className="text-8xl font-baskervville ">
            João Vitor <span className="text-orange-400 font-grotesk ">Nicolau</span>
          </h1>
        </header>

        <main className="flex-1 flex flex-col  px-1">
          <h2 className="text-4xl font-regular m-4">Olá, sou um Desenvolvedor Front-End</h2>
          <p className="text-2xl text-gray max-w-2xl m-4">Construo interfaces <strong><ChangingText /></strong> </p>

          <div className="flex flex-col md:flex-row items-center justify-around gap-12  w-full mx-auto">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold">
                Sobre <span className="text-orange-400 font-grotesk">mim.</span>
              </h3>
              <div className="mt-4 max-w-2xl">
                <p className="text-xl text-gray-300">
                  Sou um desenvolvedor Front-End apaixonado por criar interfaces modernas e responsivas. Tenho conhecimentos em <span className="text-orange-400 font-grotesk"> <strong> React, Next.js e Tailwind CSS.</strong></span>
                </p>
                <p className="text-xl text-gray-300 mt-4">
                  Estou sempre em busca de novos desafios e oportunidades para aprender e crescer na área de desenvolvimento web.
                </p>
              </div>
            </div>

            <div className="md:w-1/4 flex justify-center bg-radial from-black-1000 to-gray-900 rounded-xl shadow-xl p-10 rounded-full transition-transform duration-1000 hover:scale-110">
              <div className="w-60 h-1 bg-orange-400 rounded-xl shadow-[0_0_30px_10px_rgba(255,140,30,0.6)]"></div>
            </div>
          </div>

          <div className="flex flex-col m-12 md:flex-row items-center justify-around gap-12 mt-8 w-full mx-auto">
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
              <span className="text-3xl text-center">
                <span className="text-orange-400 font-grotesk font-bold">Soft </span>
                Skills
              </span>

              <span className="text-xl">Comunicação:</span>
              <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
                <div className="w-4/5 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]" />
              </div>


              <span className="text-xl">Trabalho em equipe:</span>
              <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
                <div className="w-3/4 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]" />
              </div>
              <span className="text-xl">Liderança:</span>
              <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
                <div className="w-2/3 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]" />
              </div>
              <span className="text-xl">Criatividade:</span>
              <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
                <div className="w-4/4 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]" />
              </div>
              <span className="text-xl">Proatividade:</span>
              <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
                <div className="w-4/5 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 w-full max-w-md">
              <span className="text-3xl text-center">
                <span className="text-orange-400 font-grotesk font-bold">Hard </span>
                Skills
              </span>

              <span className="text-xl">HTML, CSS e JavaScript:</span>
              <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
                <div className="w-5/6 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]" />
              </div>

              <span className="text-xl">Next/Tailwind CSS:</span>
              <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
                <div className="w-3/4 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]" />
              </div>
              <span className="text-xl">GitHub:</span>
              <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
                <div className="w-9/10 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]" />
              </div>
              <span className="text-xl">Bibliotecas JS:</span>
              <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
                <div className="w-1/3 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]" />
              </div>
              <span className="text-xl">UX-UI:</span>
              <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
                <div className="w-7/8 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]" />
              </div>
            </div>

          </div>


        </main>


      </div>
    </Layout>
  );
}