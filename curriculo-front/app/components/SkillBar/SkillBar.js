"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function SkillBar({ nome, proporcao = "w-full" }) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-xl">{nome}:</span>
      <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={clsx(
            proporcao,
            "h-2 bg-orange-400 rounded-full origin-left shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]"
          )}
        />
      </div>
    </motion.div>
  );
}
