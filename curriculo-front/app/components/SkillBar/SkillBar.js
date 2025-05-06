import React from "react";
import clsx from "clsx"; 

export default function SkillBar({ nome, proporcao = "w-full" }) {
  return (
    <div className="w-full">
      <span className="text-xl">{nome}:</span>
      <div className="w-full h-2 bg-gray-600 rounded-full relative transition-transform duration-500 hover:scale-105">
        <div
          className={clsx(
            proporcao,
            "h-2 bg-orange-400 rounded-full shadow-[0_0_10px_5px_rgba(251,146,60,0.4)]"
          )}
        />
      </div>
    </div>
  );
}
