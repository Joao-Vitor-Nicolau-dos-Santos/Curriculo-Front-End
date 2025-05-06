import React from "react";
import SkillBar from "./SkillBar";

export default function SkillsSection() {
    return (
        <div className="flex flex-col m-12 md:flex-row items-center justify-around gap-12 mt-8 w-full mx-auto">
            {/* Soft Skills */}
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
                <span className="text-3xl text-center">
                    <span className="text-orange-400 font-grotesk font-bold">Soft </span>
                    Skills
                </span>

                <SkillBar nome="Comunicação" proporcao="w-4/5" />
                <SkillBar nome="Trabalho em equipe" proporcao="w-3/4" />
                <SkillBar nome="Liderança" proporcao="w-2/3" />
                <SkillBar nome="Criatividade" proporcao="w-full" />
                <SkillBar nome="Proatividade" proporcao="w-4/5" />

            </div>

            {/* Hard Skills */}
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
                <span className="text-3xl text-center">
                    <span className="text-orange-400 font-grotesk font-bold">Hard </span>
                    Skills
                </span>

                <SkillBar nome="HTML, CSS e JavaScript" proporcao="w-5/6" />
                <SkillBar nome="Next/Tailwind CSS" proporcao="w-3/4" />
                <SkillBar nome="GitHub" proporcao="w-9/10" />
                <SkillBar nome="Bibliotecas JS" proporcao="w-6/10" />
                <SkillBar nome="UX-UI" proporcao="w-7/8" />
            </div>
        </div>
    );
}
