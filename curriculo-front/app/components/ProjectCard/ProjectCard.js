"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ titulo, descricao, link }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer"
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: "0px 0px 20px rgba(251,146,60,0.6)",
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold text-orange-400 mb-2">{titulo}</h3>
      <p className="text-gray-300 m-3">{descricao}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow transition-colors duration-300 "
      >
        Ver Projeto
      </a>
    </motion.div>
  );
}
