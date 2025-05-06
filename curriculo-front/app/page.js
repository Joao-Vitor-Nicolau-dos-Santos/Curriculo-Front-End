import React from "react";
import ChangingText from "./components/ChangindText/ChangingText";
import Layout from "./components/layout";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import SkillsSection from "./components/SkillBar/SkillsSection";
import Reveal from "./components/Reveal/Reveal";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-dark text-white mt-8 ml-10 mr-10">
        <header className="w-full h-screen flex items-center justify-center text-center">
          <Reveal>
            <h1 className="text-8xl font-baskervville text-center mx-auto">
              João Vitor{" "}
              <span className="text-orange-400 font-grotesk">Nicolau</span>
            </h1>
          </Reveal>

        </header>

        <main className="flex-1 flex flex-col px-1 ">
          <div className="justify-center h-screen">
            <Reveal delay={0.2}>
              <h2 className="text-4xl font-regular m-4">
                Olá, sou um Desenvolvedor Front-End
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-2xl text-gray max-w-2xl m-4">
                Construo interfaces <strong><ChangingText /></strong>
              </p>
            </Reveal>

            <div className="flex flex-col md:flex-row items-center justify-around gap-12 w-full mx-auto">
              <Reveal delay={0.4}>
                <div className="md:w-1/2 text-center">
                  <h3 className="text-3xl font-bold">
                    Sobre{" "}
                    <span className="text-orange-400 font-grotesk">mim.</span>
                  </h3>
                  <div className="mt-4 max-w-2xl">
                    <p className="text-xl text-gray-300">
                      Sou um desenvolvedor Front-End apaixonado por criar
                      interfaces modernas e responsivas. Tenho conhecimentos em{" "}
                      <span className="text-orange-400 font-grotesk">
                        <strong> React, Next.js e Tailwind CSS.</strong>
                      </span>
                    </p>
                    <p className="text-xl text-gray-300 mt-4">
                      Estou sempre em busca de novos desafios e oportunidades
                      para aprender e crescer na área de desenvolvimento web.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="md:w-1/4 flex justify-center bg-radial from-black-1000 to-gray-900 rounded-xl shadow-xl p-10 rounded-full transition-transform duration-1000 hover:scale-110">
                <div className="w-60 h-1 bg-orange-400 rounded-xl shadow-[0_0_30px_10px_rgba(255,140,30,0.6)]"></div>
              </div>
            </div>
          </div>


          <Reveal delay={0.5}>
            <div className="h-screen">
              <SkillsSection />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto w-full max-w-6xl px-4 text-center mt-8">
            <Reveal delay={0.6}>
              <ProjectCard
                titulo="Dashboard de Clima"
                descricao="Aplicação para visualização de dados climáticos em tempo real usando APIs públicas."
                link="https://github.com/Joao-Vitor-Nicolau-dos-Santos/Real-time-air-monitoring-system"
              />
            </Reveal>

            <Reveal delay={0.7}>


              <ProjectCard
                titulo="Black Holes"
                descricao="Uma aplicação web que tem como objetivo apresentar informações sobre buracos negros, basenado-se na estética para atrair a curiosidade."
                link="https://github.com/Joao-Vitor-Nicolau-dos-Santos/Black-Holes"
              />

            </Reveal>

            <Reveal delay={0.8}>
              <div className=" items-center justify-center">

                <ProjectCard
                  titulo="Memo Notes"
                  descricao="Uma aplicação web de anotações simples com conexão com um banco de dados SQL."
                  link="https://github.com/Joao-Vitor-Nicolau-dos-Santos/memonotes"
                />
              </div>
            </Reveal>

            <Reveal delay={0.9}>
              <div className=" items-center justify-center">

                <ProjectCard
                  titulo="Spotify Clone"
                  descricao="Um clone da interface do Spotify, foi o ínicio dos meus estudos em Tailwind."
                  link="https://github.com/Joao-Vitor-Nicolau-dos-Santos/Sppotify-Interface-Using-TailWind"
                />
              </div>
            </Reveal>
          </div>
        </main>
      </div>
    </Layout>
  );
}
