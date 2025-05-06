"use client";

import React from "react";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <motion.section
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-6 md:px-20 rounded-4xl shadow-inner shadow-orange-400/10 mx-auto max-w-6xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row items-center justify-around gap-12 w-full">
        {/* Soft Skills */}
        <motion.div
          className="flex flex-col items-center gap-4 w-full max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.span
            className="text-3xl text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-400 font-grotesk font-bold">Soft </span>
            Skills
          </motion.span>

          {[
            { nome: "Comunicação", proporcao: "w-4/5" },
            { nome: "Trabalho em equipe", proporcao: "w-3/4" },
            { nome: "Liderança", proporcao: "w-2/3" },
            { nome: "Criatividade", proporcao: "w-full" },
            { nome: "Proatividade", proporcao: "w-4/5" },
          ].map((skill, index) => (
            <SkillBar key={index} nome={skill.nome} proporcao={skill.proporcao} />
          ))}
        </motion.div>

        {/* Hard Skills */}
        <motion.div
          className="flex flex-col items-center gap-4 w-full max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <motion.span
            className="text-3xl text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-400 font-grotesk font-bold">Hard </span>
            Skills
          </motion.span>

          {[
            { nome: "HTML, CSS e JavaScript", proporcao: "w-5/6" },
            { nome: "Next/Tailwind CSS", proporcao: "w-3/4" },
            { nome: "GitHub", proporcao: "w-9/10" },
            { nome: "Bibliotecas JS", proporcao: "w-6/10" },
            { nome: "UX-UI", proporcao: "w-7/8" },
          ].map((skill, index) => (
            <SkillBar key={index} nome={skill.nome} proporcao={skill.proporcao} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

