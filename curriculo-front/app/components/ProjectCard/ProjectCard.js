import React from "react";

export default function ProjectCard({ titulo, descricao, link }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-semibold text-orange-400 mb-2">{titulo}</h3>
      <p className="text-gray-300">{descricao}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-400 mt-4 inline-block hover:underline"
      >
        Ver Projeto
      </a>
    </div>
  );
}
